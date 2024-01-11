import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      // This file name is optional, default is remoteEntry.js
      // I set it like this to let other modules get the name of this module more clearly
      filename: 'product-app-entry.js',
      // Module name of remote module
      // This value will be used in the `remotes` section in federation config
      name: 'product-app',
      // Shared modules will be loaded only once to avoid duplications.
      shared: ['react', 'react-dom', 'zustand'],
      // the list of components that you want to expose to public
      exposes: {
        './App': './src/App.tsx',
      },
      remotes: {
        'cart-app': 'http://localhost:3002/dist/assets/cart-app-entry.js',
        'store-app': 'http://localhost:3003/dist/assets/store-app-entry.js',
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
    port: 3001,
  },
  preview: {
    port: 3001,
  },
});
