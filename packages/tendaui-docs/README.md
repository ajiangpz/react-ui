# TendaUI 文档系统

本文档系统参考 [TDesign React](https://github.com/Tencent/tdesign-react) 的文档实现方式，使用 Storybook MDX 格式来组织组
件文档。

## 📁 目录结构

```
packages/tendaui-docs/
├── components/          # 组件文档（MDX 格式）
│   ├── button.mdx
│   ├── input.mdx
│   └── ...
├── api/                 # API 文档（Markdown 格式）
│   ├── button.md
│   ├── input.md
│   └── ...
├── design/              # 设计指南（Markdown 格式）
│   ├── button.md
│   ├── input.md
│   └── ...
├── getting-started.mdx  # 快速开始
├── introduction.mdx     # 组件库介绍
└── ...
```

## 🎯 文档组织方式

### 1. 组件文档（components/\*.mdx）

组件文档使用 MDX 格式，可以直接嵌入 React 组件和 Storybook 的 Canvas。

**特点：**

- 使用 `<Canvas>` 展示交互式示例
- 使用 `<ArgTypes>` 自动生成 API 表格
- 支持代码块展示示例代码
- 可以引用 API 文档和设计指南

**示例：**

```mdx
import { Meta, Canvas, ArgTypes } from "@storybook/blocks";
import * as ButtonStories from "../../components/button/Button.stories.tsx";

<Meta of={ButtonStories} />

# Button 按钮

按钮用于触发一个操作...

## 代码演示

<Canvas of={ButtonStories.Default} />

## API

<ArgTypes of={ButtonStories} />
```

### 2. API 文档（api/\*.md）

API 文档使用 Markdown 格式，包含完整的属性说明表格。

**格式：**

```markdown
## API

### Button Props

| 名称  | 类型    | 默认值 | 描述           | 必传 |
| ----- | ------- | ------ | -------------- | ---- |
| block | Boolean | false  | 是否为块级元素 | N    |

...
```

**使用方式：**

在组件文档中可以直接引用 API 文档内容，或者手动维护 API 表格。

### 3. 设计指南（design/\*.md）

设计指南使用 Markdown 格式，包含设计原则、使用建议等。

**内容包含：**

- 设计原则
- 何时使用
- 尺寸说明
- 主题说明
- 使用建议
- 无障碍指南

## 📝 文档编写规范

### 组件文档结构

每个组件文档应包含以下部分：

1. **标题和描述**

   - 组件名称（中英文）
   - 组件用途描述

2. **何时使用**

   - 使用场景列表

3. **代码演示**

   - 基础用法
   - 各种变体和状态
   - 使用 `<Canvas>` 展示交互式示例
   - 使用代码块展示代码

4. **API**

   - 使用 `<ArgTypes>` 自动生成
   - 或手动维护详细属性说明表格

5. **设计指南**

   - 引用或内联设计指南内容

6. **常见问题**（可选）
   - FAQ 部分

### 示例代码规范

1. **使用代码块展示示例**

   ```tsx
   import React from "react";
   import { Button } from "@tendaui/react";

   export default () => <Button>按钮</Button>;
   ```

2. **使用 Canvas 展示交互式示例**

   ```mdx
   <Canvas of={ButtonStories.Default} />
   ```

3. **示例代码应该：**
   - 完整可运行
   - 包含必要的导入
   - 使用清晰的变量名
   - 添加必要的注释

## 🔧 工具和脚本

### 创建新组件文档

1. 在 `components/` 目录创建 `组件名.mdx` 文件
2. 在 `api/` 目录创建 `组件名.md` 文件
3. 在 `design/` 目录创建 `组件名.md` 文件（可选）
4. 在 `.storybook/main.ts` 中确保文档路径已配置

### 更新 API 文档

编辑 `api/组件名.md` 文件，更新属性说明表格。

### 更新设计指南

编辑 `design/组件名.md` 文件，更新设计说明。

## 📚 参考资源

- [Storybook MDX 文档](https://storybook.js.org/docs/react/writing-docs/mdx)
- [TDesign React 文档系统](https://github.com/Tencent/tdesign-react)
- [MDX 语法指南](https://mdxjs.com/docs/)

## 🎨 与 TDesign React 的对比

| 特性     | TDesign React             | TendaUI (当前实现)      |
| -------- | ------------------------- | ----------------------- |
| 文档格式 | Markdown + 自定义转换     | MDX (Storybook)         |
| 示例代码 | `_example/*.tsx`          | 代码块 + Canvas         |
| API 文档 | `common/docs/web/api/`    | `tendaui-docs/api/`     |
| 设计指南 | `common/docs/web/design/` | `tendaui-docs/design/`  |
| 文档转换 | vite-plugin-tdoc          | Storybook 内置          |
| 示例引用 | `{{ demoName }}`          | `<Canvas of={Story} />` |
| 多标签页 | Demo/API/Design           | Documentation (统一)    |

## ✨ 优势

1. **使用 Storybook**：利用 Storybook 的强大功能，无需自定义文档系统
2. **MDX 支持**：可以直接在文档中嵌入 React 组件
3. **类型安全**：TypeScript 支持，自动类型检查
4. **热更新**：开发时支持热更新，实时预览
5. **自动生成**：ArgTypes 自动生成 API 表格

## 🚀 快速开始

1. 运行 Storybook：

   ```bash
   pnpm dev:storybook
   ```

2. 访问文档：

   - 在 Storybook 侧边栏找到组件文档
   - 查看 "Documentation" 标签页

3. 编辑文档：
   - 修改 `components/*.mdx` 文件
   - 保存后自动热更新
