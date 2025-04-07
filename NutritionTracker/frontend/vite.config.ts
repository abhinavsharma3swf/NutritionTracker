import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    hmr:{
      clientPort: 5173,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "build"
  },
  test: {
    globals: true, // Allows using `describe`, `it`, `expect` without imports
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './src/setupTests.ts', // File for test setup (see below)
    css: true, // Optional: Include CSS in tests if needed
  },
})
