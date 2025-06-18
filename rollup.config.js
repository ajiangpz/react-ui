import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default [
  {
    input: "src/inputCss.ts",
    output: {
      file: "twui-react/style.css.js", // 可以忽略这个 js 文件，只提取 CSS
      format: "es"
    },
    plugins: [
      postcss({
        extract: "style.css",
        minimize: true,
        sourceMap: true,
        plugins: [tailwindcss(), autoprefixer()]
      })
    ]
  },
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

      copy({
        targets: [
          {
            src: "package.json",
            dest: "twui-react",
            transform: content => {
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
