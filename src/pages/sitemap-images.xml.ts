import type { APIRoute } from 'astro';
import { creatures } from '../data/creatures';
import { prehistoricFacts } from '../data/facts';

const baseUrl = 'https://www.xinhao.eu';

export const GET: APIRoute = async () => {
  // Collect all images from creatures and facts
  const creatureImages = creatures.map(creature => ({
    pageUrl: `/creature/${creature.id}`,
    imageUrl: creature.image,
    title: creature.name,
    caption: `${creature.name} (${creature.scientificName})`
  }));

  const factImages = prehistoricFacts.map(fact => ({
    pageUrl: '/',
    imageUrl: fact.image,
    title: fact.title,
    caption: fact.fact
  }));

  const allImages = [...creatureImages, ...factImages];

  // Generate image sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allImages.map(img => `  <url>
    <loc>${baseUrl}${img.pageUrl}</loc>
    <image:image>
      <image:loc>${baseUrl}${img.imageUrl}</image:loc>
      <image:title>${img.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</image:title>
      <image:caption>${img.caption.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}; 