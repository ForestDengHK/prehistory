// List of allowed IP addresses
const ALLOWED_IPS = ['127.0.0.1', 'localhost', '169.155.239.98', '::1']; // Add your IP address here

// Basic auth credentials
const ADMIN_USERNAME = import.meta.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD;

export function isAdmin(request: Request) {
    // Get client IP - handle both production and development
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') ||
                    (import.meta.env.DEV ? '127.0.0.1' : 'unknown');

    // In development, always pass IP check
    if (!import.meta.env.DEV) {
        // Check if IP is allowed in production
        const isAllowedIP = ALLOWED_IPS.some(ip => clientIP.includes(ip));
        if (!isAllowedIP) {
            return false;
        }
    }

    // Check Basic Auth
    const authorization = request.headers.get('authorization');
    if (!authorization) {
        return false;
    }

    try {
        const [scheme, encoded] = authorization.split(' ');
        if (!encoded || scheme !== 'Basic') {
            return false;
        }

        const decoded = atob(encoded);
        const [username, password] = decoded.split(':');

        return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
    } catch {
        return false;
    }
}

export function requireAdminAuth() {
    return new Response('Unauthorized', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Admin Access"',
            'Content-Type': 'text/plain'
        }
    });
} 