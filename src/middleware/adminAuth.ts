// List of allowed IP addresses
const ALLOWED_IPS = ['127.0.0.1', 'localhost', '::1']; // Add your IP address here

// Basic auth credentials
const ADMIN_USERNAME = import.meta.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD;

// Debug environment variables
console.log('Environment Variables Debug:', {
    ADMIN_USERNAME,
    ADMIN_PASSWORD,
    envKeys: Object.keys(import.meta.env),
    isDev: import.meta.env.DEV
});

export function isAdmin(request: Request) {
    // Get client IP - handle both production and development
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') ||
                    (import.meta.env.DEV ? '127.0.0.1' : 'unknown'); // Default to localhost in dev
    
    console.log('Auth Check:', {
        clientIP,
        isAllowedIP: ALLOWED_IPS.some(ip => clientIP.includes(ip)),
        hasAuthHeader: !!request.headers.get('authorization'),
        isDev: import.meta.env.DEV
    });

    // In development, always pass IP check
    if (import.meta.env.DEV) {
        console.log('Development mode - bypassing IP check');
    } else {
        // Check if IP is allowed in production
        const isAllowedIP = ALLOWED_IPS.some(ip => clientIP.includes(ip));
        if (!isAllowedIP) {
            console.log('IP Check Failed:', { clientIP, allowedIPs: ALLOWED_IPS });
            return false;
        }
    }

    // Check Basic Auth
    const authorization = request.headers.get('authorization');
    if (!authorization) {
        console.log('No Authorization Header');
        return false;
    }

    try {
        const [scheme, encoded] = authorization.split(' ');
        if (!encoded || scheme !== 'Basic') {
            console.log('Invalid Authorization Scheme:', { scheme });
            return false;
        }

        const decoded = atob(encoded);
        const [username, password] = decoded.split(':');

        // Debug password comparison
        console.log('Password Debug:', {
            providedPasswordLength: password?.length,
            expectedPasswordLength: ADMIN_PASSWORD?.length,
            providedPasswordChars: password?.split('').map(c => c.charCodeAt(0)),
            expectedPasswordChars: ADMIN_PASSWORD?.split('').map(c => c.charCodeAt(0))
        });

        const isValidCredentials = username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
        console.log('Credentials Check:', {
            providedUsername: username,
            expectedUsername: ADMIN_USERNAME,
            isValidUsername: username === ADMIN_USERNAME,
            isValidPassword: password === ADMIN_PASSWORD,
            isValid: isValidCredentials
        });

        return isValidCredentials;
    } catch (error) {
        console.log('Auth Error:', error);
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