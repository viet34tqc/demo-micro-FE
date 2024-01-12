import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
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
        // Using env variable when we deploy to server
        remotes: {
          'product-app': env.VITE_PRODUCT_APP,
          'cart-app': env.VITE_CART_APP,
          'store-app': env.VITE_STORE_APP,
          'about-app': env.VITE_ABOUT_APP,
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
  };
});
