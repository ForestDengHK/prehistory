import { put, list } from '@vercel/blob';
import { nanoid } from 'nanoid';

interface Like {
    id: string;
    creatureId: string;
    clientIp: string;
    createdAt: string;
}

export async function getLikes(creatureId: string): Promise<number> {
    try {
        const { blobs } = await list();
        // Find all like files for this creature
        const likeBlobs = blobs.filter(blob => 
            blob.pathname.startsWith(`likes/${creatureId}`) &&
            blob.pathname.endsWith('.json')
        );
        
        if (likeBlobs.length === 0) return 0;
        
        // Get the most recent file based on uploadedAt timestamp
        const latestBlob = likeBlobs.reduce((latest, current) => {
            return !latest || current.uploadedAt > latest.uploadedAt ? current : latest;
        });
        
        const response = await fetch(latestBlob.url);
        if (!response.ok) return 0;
        
        const text = await response.text();
        const likes: Like[] = JSON.parse(text);

        // If this isn't the standard filename, migrate the likes
        if (latestBlob.pathname !== `likes/${creatureId}.json`) {
            await writeLikes(creatureId, likes);
        }

        return likes.length;
    } catch (error) {
        console.error('Error fetching likes:', error);
        return 0;
    }
}

export async function hasLiked(creatureId: string, clientIp: string): Promise<boolean> {
    try {
        const { blobs } = await list();
        // Find all like files for this creature
        const likeBlobs = blobs.filter(blob => 
            blob.pathname.startsWith(`likes/${creatureId}`) &&
            blob.pathname.endsWith('.json')
        );
        
        if (likeBlobs.length === 0) return false;
        
        // Get the most recent file based on uploadedAt timestamp
        const latestBlob = likeBlobs.reduce((latest, current) => {
            return !latest || current.uploadedAt > latest.uploadedAt ? current : latest;
        });
        
        const response = await fetch(latestBlob.url);
        if (!response.ok) return false;
        
        const text = await response.text();
        const likes: Like[] = JSON.parse(text);
        return likes.some(like => like.clientIp === clientIp);
    } catch (error) {
        console.error('Error checking like status:', error);
        return false;
    }
}

async function writeLikes(creatureId: string, likes: Like[]) {
    try {
        // Use timestamp in filename to maintain history
        const timestamp = new Date().toISOString().split('T')[0];
        const pathname = `likes/${creatureId}-${timestamp}.json`;
        const json = JSON.stringify(likes, null, 2);
        await put(pathname, json, {
            contentType: 'application/json',
            access: 'public'
        });
    } catch (error) {
        console.error('Error writing likes:', error);
        throw error;
    }
}

export async function toggleLike(creatureId: string, clientIp: string): Promise<{ likes: number; hasLiked: boolean }> {
    try {
        let likes: Like[] = [];
        const { blobs } = await list();
        // Find all like files for this creature
        const likeBlobs = blobs.filter(blob => 
            blob.pathname.startsWith(`likes/${creatureId}`) &&
            blob.pathname.endsWith('.json')
        );
        
        if (likeBlobs.length > 0) {
            // Get the most recent file based on uploadedAt timestamp
            const latestBlob = likeBlobs.reduce((latest, current) => {
                return !latest || current.uploadedAt > latest.uploadedAt ? current : latest;
            });
            
            const response = await fetch(latestBlob.url);
            if (response.ok) {
                const text = await response.text();
                likes = JSON.parse(text);
            }
        }

        const existingLikeIndex = likes.findIndex(like => like.clientIp === clientIp);
        
        if (existingLikeIndex !== -1) {
            // Remove like
            likes.splice(existingLikeIndex, 1);
        } else {
            // Add like
            likes.push({
                id: nanoid(),
                creatureId,
                clientIp,
                createdAt: new Date().toISOString()
            });
        }

        // Save to Vercel Blob with timestamp
        await writeLikes(creatureId, likes);

        return {
            likes: likes.length,
            hasLiked: existingLikeIndex === -1
        };
    } catch (error) {
        console.error('Error updating likes:', error);
        throw error;
    }
} 