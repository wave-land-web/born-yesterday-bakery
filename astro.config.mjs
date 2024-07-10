import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://bornyesterdaybakery.com',
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://bornyesterdaybakery.com/success/',
      lastmod: new Date(),
    }),
    icon(),
  ],
})
