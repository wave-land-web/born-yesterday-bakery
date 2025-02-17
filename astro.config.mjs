import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://bornyesterdaybakery.com',
  scopedStyleStrategy: 'class',
  prefetch: { prefetchAll: true },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://bornyesterdaybakery.com/success/',
      lastmod: new Date(),
    }),
    icon(),
  ],
})
