import { Redis } from '@upstash/redis';

let redis: Redis | null = null;

export function getRedis(): Redis {
    if (redis) {
        return redis;
    }

    const url = import.meta.env.UPSTASH_REDIS_REST_URL || process.env.UPSTASH_REDIS_REST_URL;
    const token = import.meta.env.UPSTASH_REDIS_REST_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
        throw new Error('Redis credentials not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN environment variables.');
    }

    redis = new Redis({
        url,
        token,
    });

    return redis;
}

export { redis };
