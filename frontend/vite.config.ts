import { defineConfig } from 'vite'
import ViteTS from 'vite-plugin-ts'
import react from '@vitejs/plugin-react'
import { ErrorOverlay } from 'vite-plugin-error-overlay'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ErrorOverlay(), ViteTS()],
  server: {
    proxy: {
      '/api': 'http://backend:8086', // linked in docker-compose
    },
  },
})
