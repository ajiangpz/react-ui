import nodeResolve from "@rollup/plugin-node-resolve";
import ignoreImport from "./packages/plugins/rollup-plugin-ignore-import.js";
import staticImport from "./packages/plugins/rollup-plugin-static-import.js";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';


import multiInput from "rollup-plugin-multi-input";
import styles from "rollup-plugin-styles";
import esbuild from "rollup-plugin-esbuild";
import { resolve } from "path";
import babel from "@rollup/plugin-babel";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import { fileURLToPath } from "url";
import { dirname } from "path";
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy';
import fg from 'fast-glob';
import url from "@rollup/plugin-url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const inputList = [
  "packages/components/**/index.ts",
  "packages/components/**/*.jsx",
  "packages/components/**/*.tsx",
  "!packages/components/**/*.stories.tsx",
];

const styleInputList = fg.sync(['packages/components/**/style/index.js'], { onlyDirectories: false });
const cssInputList = fg.sync(['packages/components/*/style/css.js'], { onlyDirectories: false });

const baseConfig = {
  input: inputList,
  treeshake: false,
  plugins: [
    peerDepsExternal(),
    multiInput.default({ relative: "packages/components/" }),

    nodeResolve({
      extensions: [".mjs", ".js", ".json", ".node", ".ts", ".tsx"],
    }),
    commonjs(),
    // esbuild({
    //   include: /\.[jt]sx?$/,
    //   target: "esnext",
    //   minify: false,
    //   treeShaking:false,
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
    // copy({ targets: [
    //   ...cssInputList.map((file) => ({ src: file, dest: 'packages/tendaui-react/es/' + file.replace('packages/components/', '').replace('/css.js', '')  }))
    // ]}),
    url(),
    staticImport.default({
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
    // multiInput.default({ relative: "packages/components/" }),
    styles({ mode: ["extract", (id) => `${id}.css`] }),
  ],
  output: {
    dir: "packages/tendaui-react/es",
    assetFileNames: "[name][extname]",
    preserveModules: true,
    preserveModulesRoot: "packages/components",
    format: "esm",
    sourcemap: true,
  },
};

export default [cssConfig , baseConfig];
