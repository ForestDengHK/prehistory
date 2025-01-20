import { defineMiddleware } from 'astro:middleware';
import { isAdmin, requireAdminAuth } from './middleware/adminAuth';

export const onRequest = defineMiddleware(async (context, next) => {
    console.log('Middleware Request:', {
        path: context.url.pathname,
        isAdminRoute: context.url.pathname.startsWith('/admin')
    });

    // Check if this is an admin route
    if (context.url.pathname.startsWith('/admin')) {
        // Skip auth for static assets
        if (context.url.pathname.includes('.')) {
            console.log('Skipping auth for static asset');
            return next();
        }

        const isAuthorized = isAdmin(context.request);
        console.log('Auth Result:', { isAuthorized });

        if (!isAuthorized) {
            return requireAdminAuth();
        }
    }

    return next();
}); 