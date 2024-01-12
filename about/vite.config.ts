import federation from '@originjs/vite-plugin-federation';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'about-app',
      filename: 'about-app-entry.js',
      exposes: {
        './App': './src/App.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 4001,
  },
  preview: {
    port: 4001,
  },
  build: {
    minify: false,
    target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
  },
  // Optional, for clarification
  base: '/about-app/',
});
