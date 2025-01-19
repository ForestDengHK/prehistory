import type { APIRoute } from 'astro';
import { put, list, del } from '@vercel/blob';
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

        // Use a consistent filename pattern for each creature
        const pathname = `comments/${creatureId}.json`;
        const { blobs } = await list();
        const commentBlob = blobs.find(blob => blob.pathname === pathname);
        
        if (!commentBlob) {
            return [];
        }
        
        const response = await fetch(commentBlob.url);
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
async function writeComments(creatureId: string, comments: Comment[]) {
    // Use a consistent filename pattern
    const pathname = `comments/${creatureId}.json`;
    const json = JSON.stringify(comments, null, 2);
    await put(pathname, json, {
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

// Cleanup duplicate files and consolidate comments
async function cleanupDuplicateFiles(creatureId: string) {
    try {
        const { blobs } = await list();
        const creatureBlobs = blobs.filter(blob => 
            blob.pathname.startsWith(`comments/`) && 
            blob.pathname.includes(creatureId) &&
            blob.pathname !== `comments/${creatureId}.json`
        );

        // Read all comments from duplicate files
        const allComments: Comment[] = [];
        for (const blob of creatureBlobs) {
            try {
                const response = await fetch(blob.url);
                if (response.ok) {
                    const comments = await response.json();
                    allComments.push(...comments);
                }
                // Delete the duplicate file
                await del(blob.pathname);
            } catch (error) {
                console.error(`Error processing file ${blob.pathname}:`, error);
            }
        }

        // If we found any comments in duplicate files, merge them
        if (allComments.length > 0) {
            const existingComments = await readComments(creatureId);
            const mergedComments = [...existingComments, ...allComments]
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            await writeComments(creatureId, mergedComments);
        }
    } catch (error) {
        console.error('Error during cleanup:', error);
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

    // Run cleanup when fetching comments
    await cleanupDuplicateFiles(creatureId);
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