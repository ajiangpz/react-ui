export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 设计稿的视口宽度
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [], // 需要忽略的选择器
      minPixelValue: 1,
      mediaQuery: false,
    },
  },
} 