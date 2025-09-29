import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()] as any,
  resolve: {
    alias: {
      "tendaui-react": require("path").resolve(__dirname, "packages/tendaui-react/"),
    },
  },
});
