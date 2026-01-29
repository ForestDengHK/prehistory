import type { APIRoute } from 'astro';
import { getRedis } from '../../../lib/redis';

interface DeleteRequest {
    comments: Array<{
        id: string;
        creatureId: string;
    }>;
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const { comments } = await request.json() as DeleteRequest;
        const redis = getRedis();

        // Process each comment deletion
        for (const { id, creatureId } of comments) {
            // Determine the correct sorted set key
            const commentsKey = creatureId.startsWith('about')
                ? 'about:comments'
                : `creature:${creatureId}:comments`;

            // Remove from sorted set
            await redis.zrem(commentsKey, id);

            // Delete the comment data
            await redis.del(`comment:${id}`);
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
