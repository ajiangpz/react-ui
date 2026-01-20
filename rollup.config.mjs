import nodeResolve from "@rollup/plugin-node-resolve";
import ignoreImport from "./plugins/rollup-plugin-ignore-import.js";
import staticImport from "./plugins/rollup-plugin-static-import.js";
import multiInput from "rollup-plugin-multi-input";
import styles from "rollup-plugin-styles";
import esbuild from "rollup-plugin-esbuild";
import babel from "@rollup/plugin-babel";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import { fileURLToPath } from "url";
import { dirname, resolve, join } from "path";
import json from "@rollup/plugin-json";
import { readFileSync, existsSync, statSync } from "fs";
const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);
import commonjs from "@rollup/plugin-commonjs";
import fg from "fast-glob";
import url from "@rollup/plugin-url";
const inputList = [
  "packages/components/**/index.ts",
  "packages/components/**/*.jsx",
  "packages/components/**/*.tsx",
  "!packages/components/**/*.stories.tsx",
];
const pkg = JSON.parse(readFileSync(resolve(__dirname, "packages/tendaui-react/package.json"), "utf-8"));
const externalDeps = Object.keys(pkg.dependencies || {});
const externalPeerDeps = Object.keys(pkg.peerDependencies || {});

const styleInputList = fg.sync(["packages/components/**/style/index.js"], {
  onlyDirectories: false,
});

// 自定义插件：解析相对路径到目录的 index 文件
// 这在本地开发时由 esbuild/Vite/TypeScript 自动处理，但在某些 CI 环境中可能需要显式处理
// 注意：此插件作为后备方案，只在其他插件无法解析时才介入
const resolveDirectoryImports = () => {
  return {
    name: "resolve-directory-imports",
    async resolveId(source, importer, options) {
      // 只处理相对路径导入
      if (!source.startsWith(".") || !importer) {
        return null; // 让其他插件处理
      }

      // 只处理 components 目录内的文件
      if (!importer.includes("packages/components")) {
        return null;
      }

      const importerDir = dirname(importer);
      let resolvedPath = resolve(importerDir, source);
      const componentsRoot = resolve(__dirname, "packages/components");

      // 确保解析的路径在 components 目录内
      if (!resolvedPath.startsWith(componentsRoot)) {
        return null;
      }

      // 先检查是否是文件（带扩展名）
      if (existsSync(resolvedPath) && !statSync(resolvedPath).isDirectory()) {
        return null; // 让其他插件处理文件导入
      }

      // 如果是目录，查找 index 文件
      if (existsSync(resolvedPath)) {
        const stat = statSync(resolvedPath);
        if (stat.isDirectory()) {
          const indexExtensions = [".ts", ".tsx", ".js", ".jsx"];
          for (const ext of indexExtensions) {
            const indexPath = join(resolvedPath, "index" + ext);
            if (existsSync(indexPath)) {
              return indexPath;
            }
          }
        }
      }

      // 如果路径不存在，尝试添加扩展名（作为最后的后备方案）
      const extensions = [".ts", ".tsx", ".js", ".jsx"];
      for (const ext of extensions) {
        const pathWithExt = resolvedPath + ext;
        if (existsSync(pathWithExt)) {
          return pathWithExt;
        }
      }

      return null; // 无法解析，让其他插件或 Rollup 报错
    },
  };
};

const baseConfig = {
  input: inputList,
  treeshake: false,
  external: externalDeps.concat(externalPeerDeps),
  plugins: [
    multiInput({ relative: "packages/components/" }),
    nodeResolve({
      extensions: [".mjs", ".js", ".json", ".node", ".ts", ".tsx"],
    }),
    commonjs(),
    esbuild({
      include: /\.[jt]sx?$/,
      target: "esnext",
      minify: false,
      treeShaking: false,
      jsx: "transform",
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      tsconfig: resolve(__dirname, "./tsconfig.build.json"),
    }),
    // 作为后备方案：如果 esbuild 和 nodeResolve 无法解析目录导入，则使用此插件
    // 这在某些 CI 环境中可能需要，但本地通常由 esbuild 处理
    resolveDirectoryImports(),
    babel({
      babelHelpers: "runtime",
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      exclude: "node_modules/**",
    }),

    url(),
    json(),
    staticImport({
      baseDir: "packages/components",
      include: ["packages/components/**/style/css.js"],
    }),
    ignoreImport({
      include: ["packages/components/*/style/*"],
      body: 'import "./css.js";',
    }),
  ],
  output: {
    dir: "packages/tendaui-react/es",
    format: "esm",
    sourcemap: true,
    chunkFileNames: "_chunks/dep-[hash].js",
  },
};

const cssConfig = {
  input: styleInputList,
  plugins: [
    styles({
      mode: ["extract"],
      sass: {
        silenceDeprecations: ["legacy-js-api", "import", "slash-div"],
      },
    }),
  ],
  output: {
    dir: "packages/tendaui-react/es",
    assetFileNames: "[name][extname]",
    preserveModules: true,
    preserveModulesRoot: "packages/components",
    format: "esm",
    sourcemap: true,
  },
  onwarn(warning, warn) {
    // 忽略空 chunk 警告
    if (warning.code === "EMPTY_BUNDLE") return;
    warn(warning);
  },
};

export default [cssConfig, baseConfig];
