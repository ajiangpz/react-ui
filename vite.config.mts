import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const _dirname = import.meta.dirname;
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
export default defineConfig({
  plugins: [react(), tailwindcss()] as any,
  resolve: {
    alias: {
      'tendaui-react': path.resolve(_dirname, './packages/tendaui-react')
    }
  }
});
