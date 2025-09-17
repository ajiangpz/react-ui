import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import styles from 'rollup-plugin-styles';
import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import analyzer from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import multiInput from './plugins/rollup-plugin-multi-import.mjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import staticImport from 'rollup-plugin-static-import';
import alias from '@rollup/plugin-alias';
import fg from 'fast-glob';
import ignoreImport from 'rollup-plugin-ignore-import';
import replaceScssImport from './plugins/rollup-plugin-ignore-import.mjs';
import { copy as fileCopy } from 'fs-extra';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';
const customResolver = nodeResolve({
  extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx'],
});
import pkg from './package.json' assert { type: 'json' };
const name = 'twui-react';
const externalDeps = Object.keys(pkg.dependencies || {});
const externalPeerDeps = Object.keys(pkg.peerDependencies || {});

const banner = `/**
 * ${name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author.name}
 * @license ${pkg.license}
 */
`;
const input = 'src/components/index.ts';
const inputList = [
  'src/components/**/*.ts',
  'src/components/**/*.jsx',
  'src/components/**/*.tsx',
  '!src/components/**/*.d.ts',
  '!src/components/**/*.stories.tsx',
];
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);
const getPlugins = ({
  env,
  isProd = false,
  ignoreScss = true,
  extractOneCss = false,
  extractMultiCss = false,
} = {}) => {
  const plugins = [
    alias({
      entries: [{ find: '@', replacement: __dirname + '/src/components' }],
      customResolver,
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx', 'scss'],
    }),
    commonjs(),

    babel({
      babelHelpers: 'runtime',
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
    }),
    json(),
    url(),
    replace({
      preventAssignment: true,
      values: {
        __VERSION__: JSON.stringify(pkg.version),
      },
    }),
  ];

  if (extractOneCss) {
    plugins.push(
      postcss({
        extract: `${isProd ? `${name}.min` : name}.css`,
        minimize: isProd,
        sourcemap: false,
        extensions: ['.scss'],
      }),
    );
  } else if (extractMultiCss) {
    plugins.push(
      staticImport.default({
        baseDir: 'src/components/alert/',
        include: ['src/components/alert/**/style/css.js'],
      }),
      ignoreImport({
        include: ['src/components/*/style/index.js'],
        body: 'import "./css.js";',
      }),
    );
  } else if (ignoreScss) {
    plugins.push(ignoreImport({ extensions: ['*.scss'] }));
  } else {
    plugins.push(
      staticImport.default({
        baseDir: 'src/components/',
        include: ['src/components/**/style/index.js'],
      }),
      staticImport.default({
        baseDir: 'src/styles',
        include: ['src/styles/**/*.scss'],
      }),
      ignoreImport.default({
        include: ['src/components/*/style/*'],
        body: 'import "./style/index.js";',
      }),
    );
  }
  if (env) {
    plugins.push(
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify(env),
        },
      }),
    );
  }

  if (isProd) {
    plugins.push(
      terser({
        output: {
          /* eslint-disable */
          ascii_only: true,
          /* eslint-enable */
        },
      }),
    );
  }

  return plugins;
};
const cssInput = fg.sync('src/components/**/style/index.js');
const cssConfig = {
  input: ['src/components/alert/style/index.js'],
  plugins: [
    styles({ mode: 'extract' }),
    alias({
      entries: [{ find: '@', replacement: __dirname + '/src/components' }],
      customResolver,
    }),
  ],
  treeshake: false,
  output: {
    dir: './twui-react/es/alert',
    format: 'esm',
    sourcemap: true,

    // 关键：开启模块保留模式
    preserveModules: true,
    preserveModulesRoot: 'src/components/alert', // 去掉 src 前缀，目录更干净

    entryFileNames: '[name].js',
    assetFileNames: '[name].css', // 每个入口的 CSS 会按入口名命名
  },
};
const esInputList = [
  'src/components/alert/**/*.ts',
  'src/components/alert/**/*.jsx',
  'src/components/alert/**/*.tsx',
  '!src/components/alert/**/*.d.ts',
  '!src/components/alert/**/*.stories.tsx',
  '!src/components/index-lib.ts',
];
// 按需加载组件 带 css 样式
const esConfig = {
  input: esInputList,
  external: externalDeps.concat(externalPeerDeps),
  treeshake: false,
  plugins: [multiInput({ relative: 'src/components/alert/' })].concat([
    getPlugins({ extractMultiCss: true }),
  ]),
  output: {
    banner,
    dir: 'twui-react/es/alert',
    format: 'esm',
    sourcemap: false,
    chunkFileNames: '_chunks/dep-[hash].js',
    preserveModules: true, // 添加以兼容 multiInput
    preserveModulesRoot: 'src/components/alert', // 移除 src 前缀
  },
};

// const cjsExternalException = ['lodash-es'];

// const cjsExternal = externalDeps
//   .concat(externalPeerDeps)
//   .filter((value) => !cjsExternalException.includes(value));

// commonjs 导出规范，不带 css 样式
// const cjsConfig = {
//   input: inputList,
//   external: cjsExternal,
//   plugins: [multiInput({ relative: 'src/components/' })].concat(getPlugins()),
//   output: {
//     banner,
//     dir: 'twui-react/cjs/',
//     format: 'cjs',
//     sourcemap: false,
//     exports: 'named',
//     chunkFileNames: '_chunks/dep-[hash].js',
//   },
// };

// const umdConfig = {
//   input,
//   external: externalPeerDeps,
//   plugins: getPlugins({
//     env: 'development',
//     extractOneCss: true,
//   }).concat(analyzer({ limit: 5, summaryOnly: true })),
//   output: {
//     name: 'twui-react',
//     banner,
//     format: 'umd',
//     exports: 'named',
//     globals: { react: 'React' },
//     sourcemap: false,
//     file: `twui-react/dist/${name}.js`,
//   },
// };

// const umdMinConfig = {
//   input,
//   external: externalPeerDeps,
//   plugins: getPlugins({
//     isProd: true,
//     extractOneCss: true,
//     env: 'production',
//   }),
//   output: {
//     name: 'twui-react',
//     banner,
//     format: 'umd',
//     exports: 'named',
//     globals: { react: 'React' },
//     sourcemap: false,
//     file: `twui-react/dist/${name}.min.js`,
//   },
// };

// export default [cssConfig, cjsConfig, esConfig, umdConfig, umdMinConfig];
export default [cssConfig, esConfig];
