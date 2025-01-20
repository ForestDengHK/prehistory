import type { APIRoute } from 'astro';
import { creatures } from '../data/creatures';
import { timelinePeriods } from '../data/timeline';

const BASE_URL = 'https://www.xinhao.eu';

export const GET: APIRoute = async () => {
  const staticPages = [
    '',
    'timeline',
    'categories',
    'search',
    'about',
  ];

  const dynamicPages = [
    ...creatures.map(creature => `creature/${creature.id}`),
    ...timelinePeriods.map(period => `timeline/${period.name.toLowerCase()}`),
  ];

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${BASE_URL}${page ? `/${page}` : ''}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    },
  });
}; 