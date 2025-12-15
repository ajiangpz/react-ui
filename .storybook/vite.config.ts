import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "@use-gesture/react", "tailwind-variants"],
    esbuildOptions: {
      define: {
        global: "globalThis"
      }
    }
  },
  resolve: {
    alias: {
      "@tendaui/components": path.resolve(__dirname, "../packages/components"),
      "@tendaui/components/*": path.resolve(__dirname, "../packages/components"),
      "@tendaui/icons": path.resolve(__dirname, "../packages/tendaui-icons"),
      "@tendaui/icons/*": path.resolve(__dirname, "../packages/tendaui-icons"),
      "@tendaui/react": path.resolve(__dirname, "../packages/tendaui-react"),
      "@tendaui/react/*": path.resolve(__dirname, "../packages/tendaui-react"),
      "@tendaui/utils": path.resolve(__dirname, "../packages/utils"),
      "@tendaui/utils/*": path.resolve(__dirname, "../packages/utils/*")
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {}
  },
  server: {
    fs: {
      allow: [".."]
    },
    watch: {
      usePolling: true
    }
  }
});
