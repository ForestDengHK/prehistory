import type { APIRoute } from 'astro';
import { getDB } from '../../../db';

export const GET: APIRoute = async ({ params }) => {
    const db = await getDB();
    const creatureId = params.id;

    try {
        // Get like count for the creature
        const likes = await db.get('SELECT COUNT(*) as count FROM likes WHERE creature_id = ?', [creatureId]);
        
        return new Response(JSON.stringify({
            likes: likes.count || 0,
            hasLiked: false // We'll implement this later if we add user authentication
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
    const db = await getDB();
    const creatureId = params.id;

    try {
        // Check if IP has already liked this creature
        const clientIP = request.headers.get('x-forwarded-for') || 'unknown';
        const existing = await db.get(
            'SELECT * FROM likes WHERE creature_id = ? AND client_ip = ?',
            [creatureId, clientIP]
        );

        if (existing) {
            // Unlike if already liked
            await db.run(
                'DELETE FROM likes WHERE creature_id = ? AND client_ip = ?',
                [creatureId, clientIP]
            );
        } else {
            // Add new like
            await db.run(
                'INSERT INTO likes (creature_id, client_ip, created_at) VALUES (?, ?, ?)',
                [creatureId, clientIP, new Date().toISOString()]
            );
        }

        // Get updated count
        const likes = await db.get('SELECT COUNT(*) as count FROM likes WHERE creature_id = ?', [creatureId]);

        return new Response(JSON.stringify({
            likes: likes.count || 0,
            hasLiked: !existing
        }), {
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