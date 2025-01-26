import type { APIRoute } from 'astro';
import { list } from '@vercel/blob';

export const GET: APIRoute = async ({ params }) => {
    try {
        const { creatureId } = params;
        if (!creatureId) {
            return new Response(JSON.stringify({ error: 'Creature ID is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { blobs } = await list();
        const creatureBlobs = blobs.filter(blob => 
            blob.pathname.startsWith(`likes/${creatureId}`) &&
            blob.pathname.endsWith('.json')
        );

        if (creatureBlobs.length === 0) {
            return new Response(JSON.stringify({ error: 'No likes found for this creature' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Get the latest blob
        const latestBlob = creatureBlobs.reduce((latest, current) => {
            return !latest || current.uploadedAt > latest.uploadedAt ? current : latest;
        });

        const response = await fetch(latestBlob.url);
        if (!response.ok) {
            throw new Error('Failed to fetch like details');
        }

        const likes = await response.json();
        
        // Sort likes by date (newest first)
        likes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        return new Response(JSON.stringify(likes), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error fetching like details:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch like details' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}; 