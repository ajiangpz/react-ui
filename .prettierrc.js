module.exports = {
  // 基础配置
  printWidth: 120, // 每行最大字符数
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 使用空格而非制表符
  semi: true, // 语句末尾添加分号
  singleQuote: false, // 使用双引号
  quoteProps: "as-needed", // 仅在需要时给对象属性加引号

  // JSX 相关
  jsxSingleQuote: false, // JSX 中使用双引号

  // 尾随逗号
  trailingComma: "es5", // 在 ES5 中有效的位置添加尾随逗号

  // 括号空格
  bracketSpacing: true, // 对象字面量的括号之间打印空格
  bracketSameLine: false, // 多行 JSX 元素的 > 放在最后一行的末尾

  // 箭头函数参数括号
  arrowParens: "always", // 箭头函数参数始终使用括号

  // 换行符
  endOfLine: "lf", // 使用 LF 换行符

  // Markdown 相关
  proseWrap: "preserve", // 保留 markdown 文本的换行

  // HTML 空格敏感度
  htmlWhitespaceSensitivity: "css",

  // 插件配置
  plugins: ["prettier-plugin-tailwindcss"],

  // 文件覆盖配置
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 80,
      },
    },
    {
      files: "*.md",
      options: {
        proseWrap: "always",
      },
    },
  ],
};
