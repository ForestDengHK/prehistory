import type { APIRoute } from 'astro';
import { creatures } from '../data/creatures';
import { timelinePeriods } from '../data/timeline';

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

const baseUrl = 'https://www.xinhao.eu';

export const GET: APIRoute = async () => {
  const today = formatDate(new Date());

  // Static pages
  const staticPages = [
    { url: '/', priority: '1.0' },
    { url: '/timeline', priority: '0.8' },
    { url: '/categories', priority: '0.8' },
    { url: '/search', priority: '0.8' },
    { url: '/about', priority: '0.8' },
  ];

  // Dynamic creature pages
  const creatureUrls = creatures.map(creature => ({
    url: `/creature/${creature.id}`,
    priority: '0.7'
  }));

  // Dynamic period pages
  const periodUrls = timelinePeriods.map(period => ({
    url: `/timeline/${period.name.toLowerCase()}`,
    priority: '0.7'
  }));

  // Combine all URLs
  const allUrls = [...staticPages, ...creatureUrls, ...periodUrls];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}; 