import { createRequire } from "module";
import transforms from "./transforms.js";
import demoPlugin from "./demo.js";
import { highlightCode } from "../../src/utils/codeHighlight.js";

const require = createRequire(import.meta.url);

const pageData = {
  apiFlag: "<!-- API_DOC -->"
};

// 初始化 markdown-it
let mdInstance = null;
function getMarkdownIt() {
  if (!mdInstance) {
    // 使用 createRequire 来加载 markdown-it（兼容 ESM 和 CommonJS）
    const MarkdownIt = require("markdown-it");
    mdInstance = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight(str, lang) {
        return highlightCode(str, lang || "text");
      }
    });

    // 注册 demo 语法（如果需要）
    if (demoPlugin && typeof demoPlugin === "function") {
      mdInstance.use(demoPlugin);
    }
  }
  return mdInstance;
}

export default function pluginTdoc() {
  return {
    name: "vite-plugin-tdoc",
    enforce: "pre",
    async transform(source, id) {
      if (!id.endsWith(".md")) {
        return null;
      }

      // 处理文档转换
      const transformed = await transforms.before({ source, file: id });

      // 获取 markdown-it 实例
      const md = getMarkdownIt();

      // 转换为 React 组件
      const result = await transforms.render({
        source: transformed,
        file: id,
        md: md,
        pageData
      });

      return {
        code: result.code,
        map: null
      };
    }
  };
}
