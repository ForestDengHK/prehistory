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
    emoji?: string;
}

// Read comments from Blob
async function readComments(): Promise<Comment[]> {
    try {
        if (!process.env.BLOB_READ_WRITE_TOKEN) {
            console.error('BLOB_READ_WRITE_TOKEN is not configured');
            return [];
        }

        const { blobs } = await list();
        // Find all about comment files
        const aboutBlobs = blobs.filter(blob => 
            blob.pathname.startsWith('comments/about-') &&
            blob.pathname.endsWith('.json')
        );

        if (aboutBlobs.length === 0) {
            return [];
        }
        
        // Get the most recent file based on uploadedAt timestamp
        const latestBlob = aboutBlobs.reduce((latest, current) => {
            return !latest || current.uploadedAt > latest.uploadedAt ? current : latest;
        });

        const response = await fetch(latestBlob.url);
        if (!response.ok) {
            console.error(`Failed to fetch comments: ${response.statusText}`);
            return [];
        }
        
        const text = await response.text();
        return JSON.parse(text);
    } catch (error) {
        console.error('Error reading comments:', error);
        return [];
    }
}

// Write comments to Blob
async function writeComments(comments: Comment[]) {
    try {
        // Use timestamp in filename to maintain history
        const timestamp = new Date().toISOString().split('T')[0];
        const pathname = `comments/about-${timestamp}.json`;
        const json = JSON.stringify(comments, null, 2);
        await put(pathname, json, {
            contentType: 'application/json',
            access: 'public'
        });
    } catch (error) {
        console.error('Error writing comments:', error);
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

export const GET: APIRoute = async () => {
    const comments = await readComments();
    return new Response(JSON.stringify(comments), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
};

export const POST: APIRoute = async ({ request }) => {
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

        const comments = await readComments();

        const newComment: Comment = {
            id: Date.now().toString(),
            name,
            comment,
            email,
            emoji: emoji || '👤',
            createdAt: new Date().toISOString()
        };

        comments.unshift(newComment);
        await writeComments(comments);

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
} 