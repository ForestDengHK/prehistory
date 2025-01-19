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
        const { name, comment, email } = body;

        if (!name || !comment) {
            return new Response(JSON.stringify({ error: 'Name and comment are required' }), {
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