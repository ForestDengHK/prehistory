import { timelinePeriods } from '../data/timeline';
import { creatures } from '../data/creatures';
import { categories } from '../data/categories';

export async function GET() {
  const baseUrl = 'https://www.xinhao.eu';
  
  // Get all category slugs
  const categoryPages = Object.keys(categories).map(category => ({
    url: `${baseUrl}/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
    lastmod: new Date().toISOString()
  }));

  // Get all period pages
  const periodPages = timelinePeriods.map(period => ({
    url: `${baseUrl}/timeline/${period.name.toLowerCase()}`,
    lastmod: new Date().toISOString()
  }));

  // Get all creature pages
  const creaturePages = creatures.map(creature => ({
    url: `${baseUrl}/creature/${creature.id}`,
    lastmod: new Date().toISOString()
  }));

  // Static pages
  const staticPages = [
    '',
    '/timeline',
    '/categories',
    '/search',
    '/about'
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastmod: new Date().toISOString()
  }));

  const pages = [...staticPages, ...categoryPages, ...periodPages, ...creaturePages];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page.url === baseUrl ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
} 