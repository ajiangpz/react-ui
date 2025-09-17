import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()] as any,
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      '@': path.resolve(__dirname, './src/components/'),
    },
  },
});
