import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        '/sitemap.xml': {
          'Content-Type': 'application/xml; charset=utf-8'
        }
      }
    }
  },
  site: 'https://aemiingenieria.cl',
});
