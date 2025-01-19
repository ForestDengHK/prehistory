import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

interface Comment {
    id: string;
    name: string;
    comment: string;
    createdAt: string;
    email?: string;
}

const COMMENTS_DIR = 'public/comments';

// Ensure comments directory exists
async function ensureCommentsDir() {
    try {
        await fs.access(COMMENTS_DIR);
    } catch {
        await fs.mkdir(COMMENTS_DIR, { recursive: true });
    }
}

// Get comments file path
function getCommentsFilePath(creatureId: string) {
    return path.join(COMMENTS_DIR, `${creatureId}.json`);
}

// Read comments from file
async function readComments(creatureId: string): Promise<Comment[]> {
    try {
        const filePath = getCommentsFilePath(creatureId);
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

// Write comments to file
async function writeComments(creatureId: string, comments: Comment[]) {
    const filePath = getCommentsFilePath(creatureId);
    await fs.writeFile(filePath, JSON.stringify(comments, null, 2));
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

    await ensureCommentsDir();
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

        await ensureCommentsDir();
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