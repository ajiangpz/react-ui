import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";
import pluginTdoc from "./plugins/plugin-tdoc/index.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react(), pluginTdoc()],
  resolve: {
    alias: {
      "@tendaui/react": resolve(__dirname, "../tendaui-react"),
      "@tendaui/components": resolve(__dirname, "../components"),
      "@tendaui/icons": resolve(__dirname, "../tendaui-icons"),
      "@tendaui/site": resolve(__dirname, "./src"),
      "@tendaui/theme-generator": resolve(__dirname, "../theme-generator/src")
    }
  },
  optimizeDeps: {
    include: ["markdown-it"]
  },
  server: {
    port: 3000,
    open: true
  }
});
