import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@tendaui/components": resolve(__dirname, "../components"),
      "@tendaui/components/": resolve(__dirname, "../components/"),
      "@tendaui/icons": resolve(__dirname, "../tendaui-icons/src"),
      "@tendaui/icons/": resolve(__dirname, "../tendaui-icons/src/")
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TendaUIThemeGenerator",
      fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "@tendaui/components", "@tendaui/icons"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
