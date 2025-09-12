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
import multiInput from 'rollup-plugin-multi-input';
import nodeResolve from '@rollup/plugin-node-resolve';
import staticImport from 'rollup-plugin-static-import';

import ignoreImport from 'rollup-plugin-ignore-import';
import { resolve, join } from 'path';
import { copy as fileCopy } from 'fs-extra';

import pkg from './package.json' assert { type: 'json' };
const name = 'twui-react';
const externalDeps = Object.keys(pkg.dependencies || {});
const externalPeerDeps = Object.keys(pkg.peerDependencies || {});

const banner = `/**
 * ${name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */
`;
const input = 'src/components/index.ts';
const inputList = [
  'src/components/**/*.ts',
  'src/components/**/*.jsx',
  'src/components/**/*.tsx',
  '!src/components/**/*.d.ts',
];

const getPlugins = ({
  env,
  isProd = false,
  ignoreScss = true,
  extractOneCss = false,
  extractMultiCss = false,
} = {}) => {
  const plugins = [
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx'],
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
        sourceMap: true,
        extensions: ['.sass', '.scss', '.css', '.less'],
      }),
    );
  } else if (extractMultiCss) {
    plugins.push(
      staticImport.default({
        baseDir: 'src/components',
        include: ['src/components/**/style/css.js'],
      }),
      ignoreImport({
        include: ['src/components/*/style/*'],
        body: 'import "./css.js";',
      }),
    );
  } else if (ignoreScss) {
    plugins.push(ignoreImport({ extensions: ['*.scss'] }));
  } else {
    plugins.push(
      staticImport.default({
        baseDir: 'src/components',
        include: ['src/components/**/style/index.js'],
      }),
      staticImport.default({
        baseDir: 'src/styles',
        include: ['src/styles/web/**/*.scss'],
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

const cssConfig = {
  input: ['src/components/**/style/index.js'],
  plugins: [
    multiInput({ relative: 'src/components/' }),
    styles({ mode: 'extract' }),
  ],
  output: {
    banner,
    dir: 'twui-react/es',
    sourcemap: true,
    assetFileNames: '[name].css',
  },
};

// 按需加载组件 带 css 样式
const esConfig = {
  input: inputList.concat('!src/components/index-lib.ts'),
  // 为了保留 style/css.js
  treeshake: false,
  external: externalDeps.concat(externalPeerDeps),
  plugins: [multiInput({ relative: 'src/components/' })].concat(
    getPlugins({ extractMultiCss: true }),
  ),
  output: {
    banner,
    dir: 'twui-react/es/',
    format: 'esm',
    sourcemap: true,
    chunkFileNames: '_chunks/dep-[hash].js',
  },
};

const cjsExternalException = ['lodash-es'];

const cjsExternal = externalDeps
  .concat(externalPeerDeps)
  .filter((value) => !cjsExternalException.includes(value));

// commonjs 导出规范，不带 css 样式
const cjsConfig = {
  input: inputList,
  external: cjsExternal,
  plugins: [multiInput({ relative: 'src/components/' })].concat(getPlugins()),
  output: {
    banner,
    dir: 'twui-react/cjs/',
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
    chunkFileNames: '_chunks/dep-[hash].js',
  },
};

const umdConfig = {
  input,
  external: externalPeerDeps,
  plugins: getPlugins({
    env: 'development',
    extractOneCss: true,
  }).concat(analyzer({ limit: 5, summaryOnly: true })),
  output: {
    name: 'twui-react',
    banner,
    format: 'umd',
    exports: 'named',
    globals: { react: 'React' },
    sourcemap: true,
    file: `twui-react/dist/${name}.js`,
  },
};

const umdMinConfig = {
  input,
  external: externalPeerDeps,
  plugins: getPlugins({
    isProd: true,
    extractOneCss: true,
    env: 'production',
  }),
  output: {
    name: 'twui-react',
    banner,
    format: 'umd',
    exports: 'named',
    globals: { react: 'React' },
    sourcemap: true,
    file: `twui-react/dist/${name}.min.js`,
  },
};

export default [cssConfig, cjsConfig, esConfig, umdConfig, umdMinConfig];
