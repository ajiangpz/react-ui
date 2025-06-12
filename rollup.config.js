import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";

import path from "path";
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true
      },
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true
      }
    ],
    external: ["react", "react-dom"],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      postcss({
        extract: path.resolve("dist/style.css"),
        minimize: true,
        sourceMap: true
      }),
      copy({
        targets: [
          { 
            src: "package.json", 
            dest: "dist",
            rename: (name) => name+".json"
          }
        ]
      })
    ]
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()]
  }
];
