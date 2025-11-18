import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import mdToReact from "./md-to-react.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "../../../..");

export default {
  async before({ source, file }) {
    // 提取组件名称
    const componentMatch = file.match(/components\/([^/]+)\//);
    const componentName = componentMatch ? componentMatch[1] : "";

    // 1. 替换 BASE_DOC 占位符
    if (source.includes(":: BASE_DOC ::")) {
      const apiDocPath = resolve(rootDir, `packages/tendaui-docs/api/${componentName}.md`);
      try {
        const baseDoc = readFileSync(apiDocPath, "utf-8");
        source = source.replace(":: BASE_DOC ::", baseDoc);
      } catch (e) {
        console.warn(`API doc not found: ${apiDocPath}`);
      }
    }

    // 2. {{ demo }} 语法会在 md-to-react.js 中处理，这里不需要转换

    return source;
  },

  async render({ source, file, md, pageData }) {
    return await mdToReact({ source, file, md, pageData });
  }
};
