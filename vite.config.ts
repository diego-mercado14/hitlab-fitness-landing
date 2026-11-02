import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/hitlab-fitness-landing/',
  plugins: [
    tailwindcss(),
    {
      name: 'hitlab-social-meta',
      transformIndexHtml(html) {
        const siteUrl = 'https://diego-mercado14.github.io/hitlab-fitness-landing/';
        return html
          .replace('__OG_IMAGE__', `${siteUrl}media/hitlab-social.jpg`)
          .replace('<!-- SITE_META_URL -->', `<link rel="canonical" href="${siteUrl}" /><meta property="og:url" content="${siteUrl}" />`);
      },
    },
  ],
});
