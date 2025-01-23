import type { APIRoute } from 'astro';
import { creatures } from '../data/creatures';
import { timelinePeriods } from '../data/timeline';

const BASE_URL = 'https://www.xinhao.eu';

// XML escaping function
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

// Clean URL function
function cleanUrl(url: string): string {
  return url.replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

export const GET: APIRoute = async () => {
  try {
    const staticPages = [
      '',
      'timeline',
      'categories',
      'search',
      'about',
    ];

    const dynamicPages = [
      ...creatures.map(creature => `creature/${cleanUrl(creature.id)}`),
      ...timelinePeriods.map(period => `timeline/${period.name.toLowerCase()}`),
    ];

    const allPages = [...staticPages, ...dynamicPages];
    const now = new Date().toISOString();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${escapeXml(`${BASE_URL}${page ? `/${page}` : ''}`)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap.trim(), {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'max-age=3600, public',
        'X-Robots-Tag': 'all',
        'Access-Control-Allow-Origin': '*'
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}; 