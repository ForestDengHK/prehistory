import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://prehistory.vercel.app',
  base: '/',
  output: 'server',
  build: {
    format: 'directory'
  },
  adapter: vercel(),
  server: {
    port: 4321,
  },
});
