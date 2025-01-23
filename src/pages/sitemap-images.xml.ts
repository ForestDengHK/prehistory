import type { APIRoute } from 'astro';
import { creatures } from '../data/creatures';
import { prehistoricFacts } from '../data/facts';

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

export const GET: APIRoute = async () => {
  try {
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
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allImages.map(img => `  <url>
    <loc>${escapeXml(`${BASE_URL}${img.pageUrl}`)}</loc>
    <image:image>
      <image:loc>${escapeXml(`${BASE_URL}${img.imageUrl}`)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating image sitemap:', error);
    return new Response('Error generating sitemap', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}; 