import type { APIRoute } from 'astro';
import { put, list } from '@vercel/blob';
import 'dotenv/config';

// Verify Blob token is configured
if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('BLOB_READ_WRITE_TOKEN is not configured. Comments will not work locally.');
}

interface Comment {
    id: string;
    name: string;
    comment: string;
    createdAt: string;
    email?: string;
}

// Read comments from Blob
async function readComments(creatureId: string): Promise<Comment[]> {
    try {
        if (!process.env.BLOB_READ_WRITE_TOKEN) {
            console.error('BLOB_READ_WRITE_TOKEN is not configured');
            return [];
        }

        // List all blobs to find our file
        const { blobs } = await list();
        const commentBlob = blobs.find(blob => blob.pathname === `comments/${creatureId}.json`);
        
        if (!commentBlob) {
            console.log(`No comments found for creature: ${creatureId}`);
            return [];
        }
        
        const response = await fetch(commentBlob.url);
        if (!response.ok) {
            console.error(`Failed to fetch comments: ${response.statusText}`);
            return [];
        }
        
        const text = await response.text();
        const comments = JSON.parse(text);
        
        // Ensure each comment has a unique ID and is properly typed
        return comments.map((comment: Partial<Comment>) => ({
            id: comment.id || Date.now().toString(),
            name: comment.name || 'Anonymous',
            comment: comment.comment || '',
            createdAt: comment.createdAt || new Date().toISOString(),
            email: comment.email
        }));
    } catch (error) {
        console.error('Error reading comments:', error);
        return [];
    }
}

// Write comments to Blob
async function writeComments(creatureId: string, comments: Comment[]) {
    const json = JSON.stringify(comments, null, 2);
    await put(`comments/${creatureId}.json`, json, {
        contentType: 'application/json',
        access: 'public'
    });
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

    try {
        const body = await request.json();
        const { name, comment, email, captchaToken, captchaAnswer } = body;

        if (!name || !comment || !captchaToken || !captchaAnswer) {
            return new Response(JSON.stringify({ error: 'Required fields are missing' }), {
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

        const comments = await readComments(creatureId);

        const newComment: Comment = {
            id: Date.now().toString(),
            name,
            comment,
            email,
            createdAt: new Date().toISOString()
        };

        comments.unshift(newComment);
        await writeComments(creatureId, comments);

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