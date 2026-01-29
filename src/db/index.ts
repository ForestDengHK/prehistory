import { getRedis } from '../lib/redis';

// Redis key patterns:
// creature:{id}:likes:count  → Integer (atomic counter)
// creature:{id}:likes:ips    → Set (IP deduplication)

export async function getLikes(creatureId: string): Promise<number> {
    try {
        const redis = getRedis();
        const count = await redis.get<number>(`creature:${creatureId}:likes:count`);
        return count || 0;
    } catch (error) {
        console.error('Error fetching likes:', error);
        return 0;
    }
}

export async function hasLiked(creatureId: string, clientIp: string): Promise<boolean> {
    try {
        const redis = getRedis();
        const isMember = await redis.sismember(`creature:${creatureId}:likes:ips`, clientIp);
        return isMember === 1;
    } catch (error) {
        console.error('Error checking like status:', error);
        return false;
    }
}

export async function toggleLike(creatureId: string, clientIp: string): Promise<{ likes: number; hasLiked: boolean }> {
    try {
        const redis = getRedis();
        const ipsKey = `creature:${creatureId}:likes:ips`;
        const countKey = `creature:${creatureId}:likes:count`;

        // Check if already liked
        const alreadyLiked = await redis.sismember(ipsKey, clientIp) === 1;

        if (alreadyLiked) {
            // Remove like
            await redis.srem(ipsKey, clientIp);
            await redis.decr(countKey);
        } else {
            // Add like
            await redis.sadd(ipsKey, clientIp);
            await redis.incr(countKey);
        }

        const newCount = await redis.get<number>(countKey) || 0;

        return {
            likes: Math.max(0, newCount), // Ensure non-negative
            hasLiked: !alreadyLiked
        };
    } catch (error) {
        console.error('Error updating likes:', error);
        throw error;
    }
}

// For admin dashboard - get all creatures with likes
export async function getAllCreaturesWithLikes(): Promise<Array<{
    creatureId: string;
    totalLikes: number;
    ips: string[];
}>> {
    try {
        const redis = getRedis();

        // Scan for all like count keys - with safeguard against infinite loops
        const results: Array<{ creatureId: string; totalLikes: number; ips: string[] }> = [];
        let cursor: number = 0;
        let iterations = 0;
        const MAX_ITERATIONS = 10; // Safeguard

        do {
            const scanResult = await redis.scan(cursor, {
                match: 'creature:*:likes:count',
                count: 100
            });
            cursor = Number(scanResult[0]); // Ensure it's a number
            const keys = scanResult[1];

            for (const key of keys) {
                // Extract creature ID from key
                const match = key.match(/^creature:(.+):likes:count$/);
                if (match) {
                    const creatureId = match[1];
                    const count = await redis.get<number>(key) || 0;
                    const ips = await redis.smembers(`creature:${creatureId}:likes:ips`) || [];

                    if (count > 0) {
                        results.push({
                            creatureId,
                            totalLikes: count,
                            ips: ips as string[]
                        });
                    }
                }
            }
            iterations++;
            if (iterations >= MAX_ITERATIONS) {
                console.warn('Likes scan loop hit max iterations, breaking');
                break;
            }
        } while (cursor !== 0);

        // Sort by likes descending
        results.sort((a, b) => b.totalLikes - a.totalLikes);

        return results;
    } catch (error) {
        console.error('Error fetching all likes:', error);
        return [];
    }
}
