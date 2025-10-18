// rollup.config.es.mjs
import pkg from "./getPlugins.js";
const { esmPlugins } = pkg;

/**@type {import('rollup').RollupOptions} */
export default {
  input: "./src/index.ts",
  output: [
    {
      dir: "./dist/esm",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src"
    },
    {
      dir: "./dist/cjs",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src"
    }
  ],
  plugins: esmPlugins
};
