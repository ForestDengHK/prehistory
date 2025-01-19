import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xinhao.eu',
  base: '/',
  output: 'server',
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
});
