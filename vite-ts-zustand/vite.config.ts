/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@ui', replacement: '/src/components/ui' },
      { find: '@images', replacement: '/src/images' },
      { find: '@mocks', replacement: '/src/mocks' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@type', replacement: '/src/type' },
      { find: '@store', replacement: '/src/store' },
      { find: '@', replacement: '/src' },
    ],
  },
});
