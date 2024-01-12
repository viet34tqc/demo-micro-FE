import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cart-app',
      filename: 'cart-app-entry.js',
      shared: ['react', 'react-dom', 'zustand'],
      exposes: {
        './App': './src/App.tsx',
      },
      remotes: {
        'store-app':
          'http://localhost:3003/store-app/dist/assets/store-app-entry.js',
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
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  // Optional, for clarification
  base: '/cart-app/',
});
