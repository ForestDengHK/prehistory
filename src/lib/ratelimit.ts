import { Ratelimit } from '@upstash/ratelimit';
import { getRedis } from './redis';

// Rate limiter for comments: 5 per minute per IP
let commentRateLimiter: Ratelimit | null = null;

export function getCommentRateLimiter(): Ratelimit {
    if (commentRateLimiter) {
        return commentRateLimiter;
    }

    commentRateLimiter = new Ratelimit({
        redis: getRedis(),
        limiter: Ratelimit.slidingWindow(5, '1 m'),
        prefix: 'ratelimit:comments',
    });

    return commentRateLimiter;
}

// Rate limiter for likes: 20 per minute per IP
let likeRateLimiter: Ratelimit | null = null;

export function getLikeRateLimiter(): Ratelimit {
    if (likeRateLimiter) {
        return likeRateLimiter;
    }

    likeRateLimiter = new Ratelimit({
        redis: getRedis(),
        limiter: Ratelimit.slidingWindow(20, '1 m'),
        prefix: 'ratelimit:likes',
    });

    return likeRateLimiter;
}

// Helper to check rate limit and return appropriate response if exceeded
export async function checkRateLimit(
    limiter: Ratelimit,
    identifier: string
): Promise<{ success: boolean; remaining: number; reset: number }> {
    const { success, remaining, reset } = await limiter.limit(identifier);
    return { success, remaining, reset };
}
