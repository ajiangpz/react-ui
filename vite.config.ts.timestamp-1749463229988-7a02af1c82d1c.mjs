// vite.config.ts
import { defineConfig } from "file:///E:/react-ui/node_modules/vite/dist/node/index.js";
import react from "file:///E:/react-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///E:/react-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///E:/react-ui/node_modules/vite-plugin-lib-inject-css/dist/index.js";
var __vite_injected_original_dirname = "E:\\react-ui";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      // 为每个文件生成 .d.ts 文件
      rollupTypes: true
    }),
    libInjectCss()
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "ReactMobileUI",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom"
      ],
      output: {
        dir: "dist/es",
        entryFileNames: "[name]/index.js",
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
    cssCodeSplit: true
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxyZWFjdC11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxccmVhY3QtdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3JlYWN0LXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgZHRzKHsgXHJcbiAgICAgIGluY2x1ZGU6IFtcInNyY1wiXSxcclxuICAgICAgLy8gXHU0RTNBXHU2QkNGXHU0RTJBXHU2NTg3XHU0RUY2XHU3NTFGXHU2MjEwIC5kLnRzIFx1NjU4N1x1NEVGNlxyXG4gICAgICByb2xsdXBUeXBlczogdHJ1ZVxyXG4gICAgfSksXHJcbiAgICBsaWJJbmplY3RDc3MoKSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcclxuICAgICAgbmFtZTogXCJSZWFjdE1vYmlsZVVJXCIsXHJcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxyXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgIFwicmVhY3RcIiwgXHJcbiAgICAgICAgXCJyZWFjdC1kb21cIlxyXG4gICAgICBdLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuXHJcbiAgICAgICAgZGlyOiAnZGlzdC9lcycsXHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0vaW5kZXguanMnLFxyXG4gICAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxyXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxyXG4gICAgICAgICAgXCJyZWFjdC9qc3gtcnVudGltZVwiOiBcImpzeFJ1bnRpbWVcIixcclxuICAgICAgICAgIFwiZnJhbWVyLW1vdGlvblwiOiBcImZyYW1lck1vdGlvblwiLFxyXG4gICAgICAgICAgXCJAdXNlLWdlc3R1cmUvcmVhY3RcIjogXCJ1c2VHZXN0dXJlXCIsXHJcbiAgICAgICAgICBcInRhaWx3aW5kLXZhcmlhbnRzXCI6IFwidGFpbHdpbmRWYXJpYW50c1wiLFxyXG4gICAgICAgICAgXCJjbHN4XCI6IFwiY2xzeFwiLFxyXG4gICAgICAgICAgXCJ0YWlsd2luZC1tZXJnZVwiOiBcInRhaWx3aW5kTWVyZ2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tuYW1lXVtleHRuYW1lXVwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJylcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVOLFNBQVMsb0JBQW9CO0FBQ3BQLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBSjdCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxLQUFLO0FBQUE7QUFBQSxNQUVmLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxVQUFVLENBQUMsV0FBVyxTQUFTLE1BQU07QUFBQSxJQUN2QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBRU4sS0FBSztBQUFBLFFBQ0wsZ0JBQWdCO0FBQUEsUUFDaEIsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IscUJBQXFCO0FBQUEsVUFDckIsaUJBQWlCO0FBQUEsVUFDakIsc0JBQXNCO0FBQUEsVUFDdEIscUJBQXFCO0FBQUEsVUFDckIsUUFBUTtBQUFBLFVBQ1Isa0JBQWtCO0FBQUEsUUFDcEI7QUFBQSxRQUNBLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQy9CO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
