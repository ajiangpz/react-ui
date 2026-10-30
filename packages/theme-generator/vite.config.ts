import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@tendaui/react": resolve(__dirname, "../components"),
      "@tendaui/icons": resolve(__dirname, "../tendaui-icons/src"),
      "@tendaui/icons/": resolve(__dirname, "../tendaui-icons/src/")
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TendaUIThemeGenerator",
      fileName: (format) => (format === "es" ? "index.esm.js" : "index.cjs"),
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: (id) =>
        ["react", "react-dom", "@tendaui/react", "@tendaui/icons", "lodash-es", "react-transition-group"].some(
          (name) => id === name || id.startsWith(`${name}/`)
        ),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
