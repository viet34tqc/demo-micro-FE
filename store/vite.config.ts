import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'store-app',
      filename: 'store-app-entry.js',
      shared: ['react', 'react-dom', 'zustand'],
      exposes: {
        './store': './src/store/useCartStore',
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
  },
});
