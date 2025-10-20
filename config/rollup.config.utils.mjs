// rollup.config.es.mjs
import pkg from "./getPlugins.js";
const { esmPlugins } = pkg;

/**@type {import('rollup').RollupOptions} */
export default {
  input: "./src/index.ts",
  external: [
    'react',
    'react-dom',
    'react-is',
    'lodash-es',
    'hoist-non-react-statics'
  ],
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
