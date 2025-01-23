import type { APIRoute } from 'astro';
import { creatures } from '../data/creatures';

export const GET: APIRoute = async () => {
  const now = new Date().toISOString();
  
  // Static pages
  const staticPages = [
    { url: '/', priority: 1.0 },
    { url: '/timeline', priority: 0.9 },
    { url: '/categories', priority: 0.9 },
    { url: '/about', priority: 0.9 },
    { url: '/search', priority: 0.9 }
  ];

  // Generate URLs for all creatures
  const creatureUrls = creatures.map(creature => ({
    url: `/creature/${creature.id}`,
    priority: 0.8
  }));

  // Combine all URLs
  const allUrls = [...staticPages, ...creatureUrls];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(page => `
  <url>
    <loc>https://www.xinhao.eu${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'X-Robots-Tag': 'noarchive'
    },
  });
}; 