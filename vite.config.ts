import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  clearScreen: false,
  resolve: {
    alias: {
      'v3-mhooks': path.resolve(__dirname, './src/index.ts'),
    },
  },
  plugins: [vue(), vueJsx()],
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
});
