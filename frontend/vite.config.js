import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // ⬅️ FIXED this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    historyApiFallback: true, // ⬅️ Add this for dev server fallback
  },
  build: {
    outDir: 'dist',
  },
})
