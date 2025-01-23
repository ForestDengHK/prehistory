import type { APIRoute } from 'astro';

const BASE_URL = 'https://www.xinhao.eu';

export const GET: APIRoute = async () => {
  try {
    const now = new Date().toISOString();
    
    const sitemaps = [
      { path: '/sitemap.xml', name: 'Main Sitemap' },
      { path: '/sitemap-images.xml', name: 'Image Sitemap' }
    ];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(({ path }) => `  <sitemap>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

    return new Response(sitemap.trim(), {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      },
    });
  } catch (error) {
    console.error('Error generating sitemap index:', error);
    return new Response('Error generating sitemap', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}; 