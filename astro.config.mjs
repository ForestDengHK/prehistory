import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xinhao.eu',
  base: '/',
  output: 'server',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 50000,
    }),
  ],
  build: {
    format: 'directory'
  },
  adapter: vercel({
    analytics: true,
    maxDuration: 60,
    webAnalytics: {
      enabled: true
    }
  }),
  server: {
    port: 4321,
  },
  vite: {
    define: {
      'process.env.BLOB_READ_WRITE_TOKEN': JSON.stringify(process.env.BLOB_READ_WRITE_TOKEN)
    }
  }
});
