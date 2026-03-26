// astro.config.mjs
// Note: Astro 6 uses @tailwindcss/vite (Tailwind v4). The applyBaseStyles:false
// equivalent is handled by controlling @import in src/styles/global.css directly.
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import { config } from './src/config.ts'

// Validate config at build time
if (!config.isBetaLive && !config.formspreeId) {
  throw new Error(
    '[pitwall] formspreeId is required when isBetaLive is false.\n' +
    'Set config.formspreeId in src/config.ts before building for production.'
  )
}
if (config.isBetaLive && !config.appStoreUrl) {
  throw new Error('[pitwall] appStoreUrl is required when isBetaLive is true.')
}
if (config.isBetaLive && !config.playStoreUrl) {
  throw new Error('[pitwall] playStoreUrl is required when isBetaLive is true.')
}

export default defineConfig({
  site: 'https://pitwall.huelin.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
})
