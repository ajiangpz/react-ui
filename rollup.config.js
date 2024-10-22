/**@type {import('rollup').RollupOptions} */

const resolve = require("@rollup/plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const { babel } = require("@rollup/plugin-babel");
module.exports = {
  input: "./src/index.tsx",
  output: {
    dir: "./dist",
    format: "esm",
    sourcemap: true,
    preserveModules:true
  },

  plugins: [
    resolve(),
    commonjs(),
    postcss(),
    typescript(),
    babel({
      presets: ["@babel/preset-react"],
      exclude: "node_modules/**",
    })
  ],
  
  external: ["react", "react-dom"]
};
