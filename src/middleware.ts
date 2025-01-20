import { defineMiddleware } from 'astro:middleware';
import { isAdmin, requireAdminAuth } from './middleware/adminAuth';

export const onRequest = defineMiddleware(async (context, next) => {
    // Check if this is an admin route
    if (context.url.pathname.startsWith('/admin')) {
        // Skip auth for static assets
        if (context.url.pathname.includes('.')) {
            return next();
        }

        if (!isAdmin(context.request)) {
            return requireAdminAuth();
        }
    }

    return next();
}); 