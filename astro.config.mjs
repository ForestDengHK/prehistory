import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    analytics: true,
    maxDuration: 60,
    runtime: 'nodejs18.x'
  })
});
