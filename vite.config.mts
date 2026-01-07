import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const _dirname = import.meta.dirname;
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
export default defineConfig({
  plugins: [react(), tailwindcss()] as any,
  resolve: {
    alias: {
      "@tendaui/components": path.resolve(_dirname, "./packages/components"),
      "@tendaui/components/*": path.resolve(_dirname, "./packages/components"),
      "@tendaui/icons": path.resolve(_dirname, "./packages/tendaui-icons"),
      "@tendaui/icons/*": path.resolve(_dirname, "./packages/tendaui-icons"),

      "@tendaui/utils": path.resolve(_dirname, "./packages/utils"),
      "@tendaui/utils/*": path.resolve(_dirname, "./packages/utils/*")
    }
  }
});
