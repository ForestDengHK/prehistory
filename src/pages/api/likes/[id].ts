import type { APIRoute } from 'astro';
import { getLikes, hasLiked, toggleLike } from '../../../db';
import { getLikeRateLimiter } from '../../../lib/ratelimit';

export const GET: APIRoute = async ({ params, request }) => {
    const creatureId = params.id!;
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown';

    try {
        const [likeCount, userHasLiked] = await Promise.all([
            getLikes(creatureId),
            hasLiked(creatureId, clientIP)
        ]);
        
        return new Response(JSON.stringify({
            likes: likeCount,
            hasLiked: userHasLiked
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error fetching likes:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch likes' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};

export const POST: APIRoute = async ({ params, request }) => {
    const creatureId = params.id!;
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown';

    try {
        // Check rate limit
        const rateLimiter = getLikeRateLimiter();
        const { success, remaining } = await rateLimiter.limit(clientIP);

        if (!success) {
            return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
                status: 429,
                headers: {
                    'Content-Type': 'application/json',
                    'X-RateLimit-Remaining': remaining.toString()
                }
            });
        }

        const result = await toggleLike(creatureId, clientIP);
        
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error updating likes:', error);
        return new Response(JSON.stringify({ error: 'Failed to update likes' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}; 