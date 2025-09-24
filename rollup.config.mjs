import nodeResolve from "@rollup/plugin-node-resolve";
import ignoreImport from "rollup-plugin-ignore-import";
import staticImport from "rollup-plugin-static-import";
import multiInput from "rollup-plugin-multi-input";
import styles from "rollup-plugin-styles";
import esbuild from "rollup-plugin-esbuild";
import { resolve } from "path";
import babel from "@rollup/plugin-babel";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import { fileURLToPath } from "url";
import { dirname } from "path";
import commonjs from '@rollup/plugin-commonjs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const inputList = [
  "packages/components/**/index.ts",
  "packages/components/**/*.jsx",
  "packages/components/**/*.tsx",
];
const baseConfig = {
  input: inputList,
  treeshake: false,
  plugins: [
    nodeResolve({
      extensions: [".mjs", ".js", ".json", ".node", ".ts", ".tsx"],
    }),
    commonjs(),
    esbuild({
      include: /\.[jt]sx?$/,
      target: "esnext",
      minify: false,
      jsx: "transform",
      jsxFactory: "React.createElement",
      jsxFragment: "React.Fragment",
      tsconfig: resolve(__dirname, "./tsconfig.build.json"),
    }),
    babel({
      babelHelpers: "runtime",
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
    }),
    multiInput({ relative: "packages/components/" }),
    staticImport.default({
      baseDir: "packages/components",
      include: ["packages/components/**/style/css.js"],
    }),
    ignoreImport({
      include: ["packages/components/*/style/*"],
      body: 'import "./style/css.js";',
    }),
  ],
  output: {
    dir: "packages/tdesign-react/es",
    format: "esm",
    sourcemap: true,
    chunkFileNames: "_chunks/dep-[hash].js",
  },
};

const cssConfig = {
  input: ["packages/components/**/style/index.js"],
  plugins: [
    multiInput({ relative: "packages/components/" }),
    styles({ mode: "extract" }),
  ],
  output: {
    dir: "./packages/tdesign-react/es",
    sourcemap: true,
    assetFileNames: "[name].css",
  },
};

export default [cssConfig, baseConfig];
