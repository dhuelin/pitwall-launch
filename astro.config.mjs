// astro.config.mjs
// Note: Astro 6 uses @tailwindcss/vite (Tailwind v4). The applyBaseStyles:false
// equivalent is handled by controlling @import in src/styles/global.css directly.
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://pitwall.huelin.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
})
