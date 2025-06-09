/**@type {import('rollup').RollupOptions} */


import { DEFAULT_EXTENSIONS } from "@babel/core";
import esbuild from "rollup-plugin-esbuild";
import nodeExternals from "rollup-plugin-node-externals";
export const esmPlugins = [...basePlugins, nodeExternals(), esbuild()];
export const umdPlugins = [
  ...basePlugins,
  nodeExternals(),
  esbuild({
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react"
      }
    }
  })
];
export const iifePlugins = [
  ...basePlugins,
  esbuild({
    tsconfigRaw: {
      compilerOptions: {
        jsx: "react"
      }
    }
  }),
  // 处理低版本浏览器的polyfill
  babel({
    presets: [
      [
        "@babel/preset-env",
        {
          targets: "> 0.25%, not dead, IE 10"
        }
      ]
    ],
    exclude: /node_modules/,
    extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
    babelHelpers: "inline" //将所有的polyfill代码打包进bundle中
  })
];
