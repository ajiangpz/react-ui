import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

const rootDir = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@tendaui/components": path.resolve(rootDir, "./packages/components"),
      "@tendaui/components/*": path.resolve(rootDir, "./packages/components"),
      "@tendaui/icons": path.resolve(rootDir, "./packages/tendaui-icons"),
      "@tendaui/icons/*": path.resolve(rootDir, "./packages/tendaui-icons"),
      "@tendaui/utils": path.resolve(rootDir, "./packages/utils"),
      "@tendaui/utils/*": path.resolve(rootDir, "./packages/utils/*")
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["packages/components/**/__tests__/**/*.{test,spec}.{ts,tsx}"]
  }
});
