import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  base: '/',
  output: 'server',
  build: {
    format: 'directory'
  },
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: 4321,
  },
});
