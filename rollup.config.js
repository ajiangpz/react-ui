import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "twui-react/esm",
        format: "esm",
        sourcemap: true
      },
      {
        dir: "twui-react/cjs",
        format: "cjs",
        sourcemap: true
      },
      {
        dir: "twui-react/dist",
        format: "iife",
        sourcemap: true
      },
      {
        dir: "twui-react/umd",
        format: "umd",
        sourcemap: true,
        name: "twui-react"
      },
      {
        dir: "twui-react/dist",
        format: "iife",
        sourcemap: true,
        name: "twuiReact"
      }

    ],
    external: ["react", "react-dom"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        compilerOptions: {
          declaration: false,
          module: "ESNext"
        }
      }),
      postcss({
        extract: "style.css",
        minimize: true,
        sourceMap: true,
        // 不使用css modules
        modules: false
      }),
      copy({
        targets: [
          {
            src: "package.json",
            dest: "twui-react",
            transform: (content) => {
              const pkg = JSON.parse(content);
              const newPkg = {
                name: pkg.name,
                version: pkg.version,
                description: pkg.description,
                main: pkg.main,
                module: pkg.module,
                types: pkg.types,
                files: pkg.files,
                sideEffects: pkg.sideEffects,
                keywords: pkg.keywords,
                author: pkg.author,
                license: pkg.license,
                peerDependencies: pkg.peerDependencies,
                type: "module"
              };
              console.log(newPkg);
              return JSON.stringify(newPkg, null, 2);
            }
          }
        ]
      })
    ]
  },
  {
    input: "src/index.ts",
    output: { file: "twui-react/cjs/index.d.ts", format: "esm" },
    plugins: [dts()]
  },
  {
    input: "src/index.ts",
    output: { file: "twui-react/esm/index.d.ts", format: "esm" },
    plugins: [dts()]
  }
];
