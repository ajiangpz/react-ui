import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ["src"],
      // 为每个文件生成 .d.ts 文件
      rollupTypes: true
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactMobileUI",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react", 
        "react-dom", 
        "react/jsx-runtime",
        "framer-motion",
        "@use-gesture/react",
        "tailwind-variants",
        "clsx",
        "tailwind-merge",
        "antd"
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: 'dist/es',
        entryFileNames: '[name]/index.js',
        sourcemap: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "framer-motion": "framerMotion",
          "@use-gesture/react": "useGesture",
          "tailwind-variants": "tailwindVariants",
          "clsx": "clsx",
          "tailwind-merge": "tailwindMerge"
        },
        assetFileNames: "assets/[name][extname]"
      }
    },
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
