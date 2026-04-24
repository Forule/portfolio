import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        // Hier definierst du alle HTML-Seiten deines Projekts
        main: resolve(__dirname, 'index.html'),
        legal: resolve(__dirname, 'legal.html'),
      },
    },
  },
})