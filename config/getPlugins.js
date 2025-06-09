/**@type {import('rollup').RollupOptions} */

const resolve = require("@rollup/plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
const basePlugins = [
  resolve(),
  commonjs(),
  postcss({ extract: "rollup-build.css" }),
  image()
];


