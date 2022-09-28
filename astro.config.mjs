import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.qc-design.com/',
  integrations: [
    sitemap(),
    react(),
    image(),
    tailwind(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push']
      }
    })
  ]
})
