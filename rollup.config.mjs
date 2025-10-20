import nodeResolve from "@rollup/plugin-node-resolve";
import ignoreImport from "./plugins/rollup-plugin-ignore-import.js";
import staticImport from "./plugins/rollup-plugin-static-import.js";
import multiInput from "rollup-plugin-multi-input";
import styles from "rollup-plugin-styles";
import esbuild from "rollup-plugin-esbuild";
import babel from "@rollup/plugin-babel";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import json from '@rollup/plugin-json';
import { readFileSync } from "fs";
const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);
import commonjs from '@rollup/plugin-commonjs'
import fg from 'fast-glob';
import url from "@rollup/plugin-url";
const inputList = [
  "packages/components/**/index.ts",
  "packages/components/**/*.jsx",
  "packages/components/**/*.tsx",
  "!packages/components/**/*.stories.tsx",
];
const pkg = JSON.parse(readFileSync(resolve(__dirname, "packages/tendaui-react/package.json"), 'utf-8'));
const externalDeps = Object.keys(pkg.dependencies || {});
const externalPeerDeps = Object.keys(pkg.peerDependencies || {});

const styleInputList = fg.sync(['packages/components/**/style/index.js'], { onlyDirectories: false });

const baseConfig = {
  input: inputList,
  treeshake: false,
  external: externalDeps.concat(externalPeerDeps),
  plugins: [
    multiInput.default({ relative: "packages/components/" }),
    nodeResolve({
      extensions: [".mjs", ".js", ".json", ".node", ".ts", ".tsx"],
    }),
    commonjs(),
    // esbuild({
    //   include: /\.[jt]sx?$/,
    //   target: "esnext",
    //   minify: false,
    //   treeShaking: false,
    //   jsx: "transform",
    //   jsxFactory: "React.createElement",
    //   jsxFragment: "React.Fragment",
    //   tsconfig: resolve(__dirname, "./tsconfig.build.json"),
    // }),
    babel({
      babelHelpers: "runtime",
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      exclude: "node_modules/**",
    }),

    url(),
    json(),
    styles({ 
      sass: {
        silenceDeprecations: ['legacy-js-api', 'import', 'slash-div']
      }
    }),
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
  onwarn(warning, warn) {
    // 忽略空 chunk 警告
    if (warning.code === 'EMPTY_BUNDLE') return;
    // 忽略循环依赖警告（对于 compound components 是正常的）
    if (warning.code === 'CIRCULAR_DEPENDENCY') {
      const message = warning.message || warning.toString();
      if (message.includes('Checkbox.tsx') && message.includes('CheckboxGroup.tsx')) {
        return;
      }
    }
    warn(warning);
  },
};

const cssConfig = {
  input: styleInputList,
  plugins: [
    styles({ 
      sass: {
        silenceDeprecations: ['legacy-js-api', 'import', 'slash-div']
      }
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
    if (warning.code === 'EMPTY_BUNDLE') return;
    warn(warning);
  },
};

export default [cssConfig, baseConfig];
