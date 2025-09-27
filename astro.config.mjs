import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://aemiingenieria.cl',
  integrations: [
    sitemap({
      customPages: [
        'https://aemiingenieria.cl/',
        'https://aemiingenieria.cl/#services',
        'https://aemiingenieria.cl/#gallery', 
        'https://aemiingenieria.cl/#about',
        'https://aemiingenieria.cl/#contact',
        'https://aemiingenieria.cl/#ofertas'
      ],
      serialize(item) {
        if (item.url === 'https://aemiingenieria.cl/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ]
});