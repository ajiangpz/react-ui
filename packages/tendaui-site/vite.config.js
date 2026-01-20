import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, normalize } from "path";
import { fileURLToPath } from "url";
import pluginTdoc from "./plugins/plugin-tdoc/index.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// 规范化路径，确保使用绝对路径且没有重复的路径段
function resolvePath(...paths) {
  return normalize(resolve(__dirname, ...paths));
}

// 获取 base 路径，用于 GitHub Pages 部署
// 如果设置了 GITHUB_REPOSITORY 环境变量，则使用仓库名称作为 base 路径
// 格式: owner/repo-name -> /repo-name/
function getBasePath() {
  const repoName = process.env.GITHUB_REPOSITORY;
  if (repoName) {
    const repo = repoName.split("/")[1];
    return `/${repo}/`;
  }
  // 如果设置了 VITE_BASE_PATH，使用该值
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH;
  }
  // 默认使用根路径
  return "/";
}

export default defineConfig({
  base: getBasePath(),
  plugins: [react(), pluginTdoc()],
  resolve: {
    alias: {
      "@tendaui/components": resolvePath("../components"),
      "@tendaui/icons": resolvePath("../tendaui-icons"),
      "@tendaui/utils": resolvePath("../utils"),
      "@tendaui/site": resolvePath("./src"),
      "@tendaui/theme-generator": resolvePath("../theme-generator/src")
    }
  },
  optimizeDeps: {
    include: ["markdown-it"]
  },
  // 确保 .md 文件被正确处理
  assetsInclude: ["**/*.md"],
  server: {
    port: 3000,
    open: true
  }
});
