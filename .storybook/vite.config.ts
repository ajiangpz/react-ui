import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      '@use-gesture/react',
      'tailwind-variants',
    ],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  resolve: {
    alias: {
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
    watch: {
      usePolling: true,
    },
  },
}); 