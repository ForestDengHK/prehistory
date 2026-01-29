import type { APIRoute } from 'astro';
import { getRedis } from '../../../lib/redis';
import { getCommentRateLimiter } from '../../../lib/ratelimit';

interface Comment {
    id: string;
    name: string;
    comment: string;
    createdAt: string;
    email?: string;
    emoji?: string;
}

// Redis key patterns:
// comment:{id}               → JSON string (full comment)
// creature:{id}:comments     → Sorted Set (comment IDs by timestamp)

async function readComments(creatureId: string): Promise<Comment[]> {
    try {
        const redis = getRedis();
        const commentsKey = `creature:${creatureId}:comments`;

        // Get all comment IDs, sorted by timestamp (newest first)
        const commentIds = await redis.zrange(commentsKey, 0, -1, { rev: true });

        if (!commentIds || commentIds.length === 0) {
            return [];
        }

        // Fetch all comments in parallel
        const comments = await Promise.all(
            commentIds.map(async (id) => {
                const comment = await redis.get<Comment>(`comment:${id}`);
                return comment;
            })
        );

        return comments.filter((c): c is Comment => c !== null);
    } catch (error) {
        console.error('Error reading comments:', error);
        return [];
    }
}

async function writeComment(creatureId: string, comment: Comment): Promise<void> {
    try {
        const redis = getRedis();
        const commentKey = `comment:${comment.id}`;
        const commentsKey = `creature:${creatureId}:comments`;

        // Store the comment
        await redis.set(commentKey, comment);

        // Add to sorted set with timestamp as score
        const timestamp = new Date(comment.createdAt).getTime();
        await redis.zadd(commentsKey, { score: timestamp, member: comment.id });
    } catch (error) {
        console.error('Error writing comment:', error);
        throw error;
    }
}

// Validate CAPTCHA token
function validateCaptcha(token: string, answer: number): boolean {
    try {
        const decoded = atob(token);
        const [timestamp, correctAnswer] = decoded.split('-');
        const timeElapsed = Date.now() - parseInt(timestamp);

        // Token expires after 5 minutes
        if (timeElapsed > 5 * 60 * 1000) {
            return false;
        }

        return parseInt(correctAnswer) === answer;
    } catch {
        return false;
    }
}

export const GET: APIRoute = async ({ params }) => {
    const { creatureId } = params;
    if (!creatureId) {
        return new Response(JSON.stringify({ error: 'Creature ID is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const comments = await readComments(creatureId);
    return new Response(JSON.stringify(comments), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};

export const POST: APIRoute = async ({ request, params }) => {
    const { creatureId } = params;
    if (!creatureId) {
        return new Response(JSON.stringify({ error: 'Creature ID is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Check rate limit
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown';
    try {
        const rateLimiter = getCommentRateLimiter();
        const { success, remaining } = await rateLimiter.limit(clientIP);

        if (!success) {
            return new Response(JSON.stringify({ error: 'Too many comments. Please try again later.' }), {
                status: 429,
                headers: {
                    'Content-Type': 'application/json',
                    'X-RateLimit-Remaining': remaining.toString()
                }
            });
        }
    } catch (error) {
        console.error('Rate limit check failed:', error);
        // Continue without rate limiting if it fails
    }

    try {
        const body = await request.json();
        const { name, comment, email, emoji, captchaToken, captchaAnswer } = body;

        if (!name || !comment || !captchaToken || !captchaAnswer) {
            return new Response(JSON.stringify({ error: 'Required fields are missing' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Validate email if provided
        if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            return new Response(JSON.stringify({ error: 'Invalid email format' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Validate CAPTCHA
        if (!validateCaptcha(captchaToken, captchaAnswer)) {
            return new Response(JSON.stringify({ error: 'Invalid or expired CAPTCHA' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const newComment: Comment = {
            id: Date.now().toString(),
            name,
            comment,
            email,
            emoji: emoji || '',
            createdAt: new Date().toISOString()
        };

        await writeComment(creatureId, newComment);

        return new Response(JSON.stringify(newComment), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid request body' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
