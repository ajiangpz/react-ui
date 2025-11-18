# TendaUI 文档站点

基于 TDesign 文档系统实现的组件库文档站点。

## 功能特性

- ✅ Markdown 文档自动转换为 React 组件
- ✅ 支持 Demo 示例展示（`{{ demoName }}` 语法）
- ✅ 支持 API 文档（`<!-- API_DOC -->` 分隔符）
- ✅ 支持设计指南标签页
- ✅ 自动路由生成
- ✅ 代码高亮
- ✅ 响应式设计

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

## 文档编写规范

### 1. 创建组件文档

在 `packages/components/[component-name]/` 目录下创建 `[component-name].md` 文件：

```markdown
---
title: Button 按钮
description: 按钮用于触发一个操作
isComponent: true
---

## 何时使用

- 标记操作命令
- 在表单中提交、重置表单

## 代码演示

### 基础按钮

{{ base }}

### 图标按钮

{{ icon }}

<!-- API_DOC -->

## API

### Button Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 按钮变体 | `base` \| `outline` | `base` |
```

### 2. 创建示例代码

在 `packages/components/[component-name]/_example/` 目录下创建示例文件：

```tsx
// base.tsx
import React from 'react';
import Button from '../Button';

export default function Base() {
  return <Button>基础按钮</Button>;
}
```

### 3. 配置路由

在 `site.config.mjs` 中添加路由配置：

```javascript
{
  title: 'Button 按钮',
  name: 'button',
  path: '/components/button',
  component: () => import('@tendaui/components/button/button.md'),
}
```

## 文档语法

### Frontmatter

```yaml
---
title: 文档标题
description: 文档描述
isComponent: true  # 是否为组件文档（决定是否显示设计指南标签）
---
```

### Demo 引用

使用 `{{ demoName }}` 语法引用示例：

```markdown
### 基础按钮
{{ base }}
```

### API 文档分隔

使用 `<!-- API_DOC -->` 分隔 Demo 和 API 内容：

```markdown
## 代码演示
{{ base }}

<!-- API_DOC -->

## API
...
```

### API 文档占位符

使用 `:: BASE_DOC ::` 引用公共 API 文档：

```markdown
:: BASE_DOC ::

## API
...
```

公共 API 文档应放在 `packages/tendaui-docs/api/[component-name].md`

## 项目结构

```
packages/tendaui-site/
├── plugins/
│   └── plugin-tdoc/      # Vite 插件
│       ├── index.js       # 插件入口
│       ├── transforms.js  # 文档转换
│       ├── md-to-react.js # Markdown 转 React
│       └── demo.js        # Demo 处理
├── src/
│   ├── App.jsx            # 主应用
│   ├── components/        # 组件
│   └── main.jsx           # 入口
├── site.config.mjs        # 路由配置
└── vite.config.js        # Vite 配置
```

## 开发指南

### 添加新组件文档

1. 在组件目录创建 `[component-name].md`
2. 创建示例代码在 `_example/` 目录
3. 在 `site.config.mjs` 添加路由配置
4. 可选：创建 API 文档在 `packages/tendaui-docs/api/`

### 自定义样式

- 文档样式：`src/doc.css`
- 组件样式：`src/components/*.css`

## 技术栈

- **Vite** - 构建工具
- **React** - UI 框架
- **React Router** - 路由
- **Markdown-it** - Markdown 解析
- **Gray Matter** - Frontmatter 解析
- **Babel** - JSX 转换

