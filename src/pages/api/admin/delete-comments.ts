import type { APIRoute } from 'astro';
import { put, list } from '@vercel/blob';

interface Comment {
    id: string;
    name: string;
    comment: string;
    createdAt: string;
    email?: string;
}

interface DeleteRequest {
    comments: Array<{
        id: string;
        creatureId: string;
    }>;
}

// Read comments from Blob
async function readComments(creatureId: string): Promise<Comment[]> {
    try {
        const { blobs } = await list();
        // Find all files for this creature (exact match)
        const creatureBlobs = blobs.filter(blob => 
            blob.pathname === `comments/${creatureId}.json`
        );

        if (creatureBlobs.length === 0) {
            return [];
        }

        // Get the most recent file based on uploadedAt timestamp
        const latestBlob = creatureBlobs.reduce((latest, current) => {
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
async function writeComments(creatureId: string, comments: Comment[]) {
    try {
        // Use exact creature ID for the pathname
        const pathname = `comments/${creatureId}.json`;
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

export const POST: APIRoute = async ({ request }) => {
    try {
        const { comments } = await request.json() as DeleteRequest;
        
        // Group comments by creatureId for efficient processing
        const commentsByCreature = comments.reduce((acc, { id, creatureId }) => {
            if (!acc[creatureId]) {
                acc[creatureId] = [];
            }
            acc[creatureId].push(id);
            return acc;
        }, {} as Record<string, string[]>);

        // Process each creature's comments
        for (const [creatureId, commentIds] of Object.entries(commentsByCreature)) {
            // Read current comments from the latest file
            const existingComments = await readComments(creatureId);
            
            // Filter out deleted comments
            const updatedComments = existingComments.filter(
                comment => !commentIds.includes(comment.id)
            );

            // Write back the filtered comments
            await writeComments(creatureId, updatedComments);
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error deleting comments:', error);
        return new Response(JSON.stringify({ 
            success: false, 
            message: 'Failed to delete comments' 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}; 