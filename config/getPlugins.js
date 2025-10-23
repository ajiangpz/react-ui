const { nodeResolve } = require("@rollup/plugin-node-resolve");
const styles = require("rollup-plugin-styles");
const commonjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
const url = require("@rollup/plugin-url");
const json = require("@rollup/plugin-json");

const basePlugins = [
  nodeResolve({
    extensions: [".mjs", ".js", ".json", ".node", ".ts", ".tsx"],
  }),
  commonjs(),
  styles({ mode: ["extract"] }),
  url(),
  json(),
];

const esmPlugins = [
  ...basePlugins,
  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**",
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
  }),
];

const cjsPlugins = [
  ...basePlugins,
  babel({
    babelHelpers: "bundled",
    exclude: "node_modules/**",
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
  }),
];

module.exports = {
  esmPlugins,
  cjsPlugins,
  basePlugins,
};
