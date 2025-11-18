import { transformSync } from "@babel/core";
import presetReact from "@babel/preset-react";
import matter from "gray-matter";
import { readFileSync } from "fs";
import { dirname, resolve } from "path";

const pageData = {
  apiFlag: "<!-- API_DOC -->"
};

export default async function mdToReact({ source, file, md, pageData: pd = pageData }) {
  // 1. 解析 frontmatter
  const { content, data } = matter(source);

  // 2. 分离 Demo 和 API 内容
  let [demoMd = "", apiMd = ""] = content.split(pd.apiFlag);

  // 3. 提取 demo 引用
  const demoMatches = [];
  const demoPlaceholder = "<!-- DEMO_PLACEHOLDER_";

  // 替换 {{ demo }} 语法为占位符
  demoMd = demoMd.replace(/\{\{\s+(.+?)\s+\}\}/g, (match, demoName) => {
    const placeholder = `${demoPlaceholder}${demoMatches.length} -->`;
    demoMatches.push({ demoName: demoName.trim() });
    return placeholder;
  });

  // 渲染 Markdown 为 HTML
  let demoHtml = md.render(demoMd);
  const apiHtml = md.render(apiMd);

  // 提取组件名称
  const componentMatch = file.match(/components\/([^/]+)\//);
  const componentName = componentMatch ? componentMatch[1] : "";

  // 读取设计指南内容
  let designHtml = "";
  if (data.isComponent && componentName) {
    try {
      // 尝试从 tendaui-docs/design 目录读取设计指南
      const designPath = resolve(dirname(file), `../../tendaui-docs/design/${componentName}.md`);
      const designContent = readFileSync(designPath, "utf-8");
      designHtml = md.render(designContent);
    } catch {
      // 如果文件不存在，尝试从组件目录读取
      try {
        const designPath2 = resolve(dirname(file), `design/${componentName}.md`);
        const designContent2 = readFileSync(designPath2, "utf-8");
        designHtml = md.render(designContent2);
      } catch (e2) {
        console.warn(`Design guide not found for ${componentName}:`, e2.message);
        designHtml = "<p>设计指南内容暂未提供</p>";
      }
    }
  }

  // 读取示例代码内容
  const demoCodes = [];
  for (const demo of demoMatches) {
    try {
      const demoPath = resolve(dirname(file), `_example/${demo.demoName}.tsx`);
      const demoCode = readFileSync(demoPath, "utf-8");
      demoCodes.push(demoCode);
    } catch (e) {
      console.warn(`Failed to read demo code: ${demo.demoName}`, e);
      demoCodes.push("// 源代码加载失败");
    }
  }

  // 生成 demo 导入语句
  const demoImports = demoMatches
    .map((demo, idx) => {
      const varName = `Demo${idx}`;
      return `const ${varName} = lazy(() => import('@tendaui/components/${componentName}/_example/${demo.demoName}'));`;
    })
    .join("\n  ");

  // 注意：demoComponents 数组在生成的代码中定义，这里不需要

  // 替换占位符为组件引用标记
  demoHtml = demoHtml.replace(new RegExp(`${demoPlaceholder}(\\d+) -->`, "g"), (match, idx) => {
    return `<div data-demo-index="${idx}"></div>`;
  });

  // 转义 HTML 字符串中的特殊字符
  const escapedDemoHtml = demoHtml.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");

  // 4. 生成 React 组件代码
  const reactSource = `
import React, { useState, Suspense, lazy } from 'react';
import '@tendaui/site/doc.css';
import DemoWrapper from '@tendaui/site/components/Demo';

${demoImports ? `${demoImports}\n` : ""}
const demoComponents = [${demoMatches.map((_, idx) => `Demo${idx}`).join(", ")}];
const demoInfo = ${JSON.stringify(
    demoMatches.map((demo) => ({
      demoName: demo.demoName,
      componentName: componentName
    }))
  )};
const demoCodes = ${JSON.stringify(demoCodes)};

// Demo HTML 内容
const demoHtml = \`${escapedDemoHtml}\`;

// 设计指南 HTML 内容
const designHtml = \`${designHtml.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$")}\`;

export default function TdDoc() {
  const [tab, setTab] = useState('demo');

  const isShow = (name) => ({
    display: tab === name ? 'block' : 'none'
  });

  // 处理 demo HTML，插入 React 组件
  const renderDemoContent = () => {
    const parts = [];
    let lastIndex = 0;
    const regex = /<div data-demo-index="(\\d+)"><\\/div>/g;
    let match;
    let demoIndex = 0;

    while ((match = regex.exec(demoHtml)) !== null) {
      // 添加之前的 HTML
      if (match.index > lastIndex) {
        parts.push(
          <div
            key={\`html-\${lastIndex}\`}
            dangerouslySetInnerHTML={{ __html: demoHtml.substring(lastIndex, match.index) }}
          />
        );
      }

      // 添加 Demo 组件
      const idx = parseInt(match[1]);
      const DemoComponent = demoComponents[idx];
      const demo = demoInfo[idx];
      const demoCode = demoCodes[idx];
      parts.push(
        <DemoWrapper
          key={\`demo-\${idx}\`}
          componentName={demo.componentName}
          demoName={demo.demoName}
          code={demoCode}
        >
          <DemoComponent />
        </DemoWrapper>
      );

      lastIndex = match.index + match[0].length;
      demoIndex++;
    }

    // 添加剩余的 HTML
    if (lastIndex < demoHtml.length) {
      parts.push(
        <div
          key={\`html-\${lastIndex}\`}
          dangerouslySetInnerHTML={{ __html: demoHtml.substring(lastIndex) }}
        />
      );
    }

    return parts.length > 0 ? parts : <div dangerouslySetInnerHTML={{ __html: demoHtml }} />;
  };

  return (
    <div className="tdesign-doc">
      <div className="tdesign-doc-header">
        <h1>${(data.title || "").replace(/`/g, "\\`")}</h1>
        ${data.description ? `<p className="tdesign-doc-description">${data.description.replace(/`/g, "\\`")}</p>` : ""}
      </div>

      <div className="tdesign-doc-tabs">
        <button
          className={\`tdesign-doc-tab \${tab === 'demo' ? 'active' : ''}\`}
          onClick={() => setTab('demo')}
        >
          代码演示
        </button>
        <button
          className={\`tdesign-doc-tab \${tab === 'api' ? 'active' : ''}\`}
          onClick={() => setTab('api')}
        >
          API
        </button>
        ${
          data.isComponent
            ? `
        <button
          className={\`tdesign-doc-tab \${tab === 'design' ? 'active' : ''}\`}
          onClick={() => setTab('design')}
        >
          设计指南
        </button>
        `
            : ""
        }
      </div>

      <div className="tdesign-doc-content">
        <div style={isShow('demo')} className="tdesign-doc-demo">
          {renderDemoContent()}
        </div>

        <div style={isShow('api')} className="tdesign-doc-api">
          <div dangerouslySetInnerHTML={{ __html: \`${apiHtml.replace(/`/g, "\\`").replace(/\$/g, "\\$").replace(/\\/g, "\\\\")}\` }} />
        </div>

        ${
          data.isComponent
            ? `
        <div style={isShow('design')} className="tdesign-doc-design">
          <div dangerouslySetInnerHTML={{ __html: designHtml }} />
        </div>
        `
            : ""
        }
      </div>
    </div>
  );
}
`;

  // 5. 使用 Babel 转换 JSX
  const result = transformSync(reactSource, {
    presets: [[presetReact, { runtime: "automatic" }]],
    filename: file
  });

  return {
    code: result.code,
    map: result.map
  };
}
