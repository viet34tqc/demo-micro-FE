import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'root-app',
      // This file name is optional, default is remoteEntry.js
      // I set it like this to let other modules get the name of this module more clearly
      filename: 'root-app-entry.js',
      // Shared modules will be loaded only once to avoid duplications.
      // Zustand is also used in product app
      shared: ['react', 'react-dom', 'react-router-dom', 'zustand'],
      // Use product from product module
      remotes: {
        'product-app':
          'http://localhost:3001/product-app/dist/assets/product-app-entry.js',
        'cart-app':
          'http://localhost:3002/cart-app/dist/assets/cart-app-entry.js',
        'store-app':
          'http://localhost:3003/store-app/dist/assets/store-app-entry.js',
        'about-app':
          'http://localhost:4001/about-app/dist/assets/about-app-entry.js',
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
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
