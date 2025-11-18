# 文档系统实现总结

根据 TDesign React 组件库文档系统的实现分析，已在 `react-ui` 项目中完成了文档系统的搭建。

## 已实现的功能

### 1. 核心架构 ✅

- **文档站点包** (`packages/tendaui-site`)
  - 独立的文档站点包，使用 Vite 构建
  - 支持开发和生产环境

### 2. Vite 插件系统 ✅

- **plugin-tdoc** (`plugins/plugin-tdoc/`)
  - 拦截 `.md` 文件请求
  - 集成 markdown-it 解析器
  - 支持自定义转换逻辑

### 3. Markdown 转 React ✅

- **md-to-react.js**
  - 解析 YAML frontmatter
  - 分离 Demo 和 API 内容
  - 将 Markdown HTML 嵌入 React 组件
  - 支持多标签页（Demo/API/Design）

### 4. Demo 系统 ✅

- **Demo 引用语法**：`{{ demoName }}`
- **自动导入示例代码**
- **懒加载支持**
- **示例文件位置**：`packages/components/[component]/_example/`

### 5. API 文档系统 ✅

- **API 分隔符**：`<!-- API_DOC -->`
- **BASE_DOC 占位符**：`:: BASE_DOC ::`
- **集中管理**：`packages/tendaui-docs/api/`

### 6. 路由系统 ✅

- **配置驱动**：`site.config.mjs`
- **React Router 集成**
- **懒加载文档组件**
- **自动生成侧边栏导航**

### 7. UI 组件 ✅

- **Layout**：侧边栏导航 + 主内容区
- **Demo**：示例展示组件
- **Loading**：加载状态组件
- **样式系统**：完整的 CSS 样式

## 文件结构

```
packages/tendaui-site/
├── plugins/
│   └── plugin-tdoc/
│       ├── index.js          # 插件入口
│       ├── transforms.js     # 文档转换逻辑
│       ├── md-to-react.js    # Markdown 转 React
│       ├── demo.js           # Demo 处理（预留）
│       └── DemoRenderer.jsx  # Demo 渲染组件（预留）
├── src/
│   ├── App.jsx               # 主应用组件
│   ├── main.jsx              # 入口文件
│   ├── index.css             # 全局样式
│   ├── doc.css               # 文档样式
│   └── components/
│       ├── Layout.jsx        # 布局组件
│       ├── Layout.css
│       ├── Demo.jsx          # Demo 组件
│       ├── Demo.css
│       ├── Loading.jsx       # 加载组件
│       └── Loading.css
├── site.config.mjs           # 路由配置
├── vite.config.js            # Vite 配置
├── package.json
├── index.html
└── README.md                 # 使用文档
```

## 使用示例

### 1. 创建组件文档

```markdown
---
title: Button 按钮
description: 按钮用于触发一个操作
isComponent: true
---

## 代码演示

### 基础按钮
{{ base }}

<!-- API_DOC -->

## API
...
```

### 2. 创建示例代码

```tsx
// packages/components/button/_example/base.tsx
import React from 'react';
import Button from '../Button';

export default function Base() {
  return <Button>基础按钮</Button>;
}
```

### 3. 配置路由

```javascript
// site.config.mjs
{
  title: 'Button 按钮',
  name: 'button',
  path: '/components/button',
  component: () => import('@tendaui/components/button/button.md'),
}
```

## 与 TDesign 实现的对比

| 功能 | TDesign | 本实现 | 状态 |
| --- | --- | --- | --- |
| Markdown 转 React | ✅ | ✅ | 完成 |
| Demo 系统 | ✅ | ✅ | 完成 |
| API 文档系统 | ✅ | ✅ | 完成 |
| 路由配置 | ✅ | ✅ | 完成 |
| 多标签页 | ✅ | ✅ | 完成 |
| 代码高亮 | ✅ | ⚠️ | 基础支持 |
| 在线编辑 | ✅ | ❌ | 未实现 |
| 多语言 | ✅ | ⚠️ | 配置支持，未完全实现 |

## 下一步优化建议

1. **代码高亮增强**
   - 集成 Prism.js 或 highlight.js
   - 支持更多语言

2. **Demo 功能增强**
   - 代码显示/隐藏
   - 代码复制功能
   - 在线编辑（CodeSandbox/StackBlitz）

3. **多语言支持**
   - 完善中英文切换
   - 路由多语言支持

4. **设计指南集成**
   - 自动加载设计文档
   - 设计指南标签页内容

5. **搜索功能**
   - 文档搜索
   - 组件搜索

6. **性能优化**
   - 代码分割优化
   - 图片懒加载

## 启动方式

```bash
# 进入文档站点目录
cd packages/tendaui-site

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## 注意事项

1. **路径别名**：确保 `vite.config.js` 中的路径别名配置正确
2. **依赖安装**：需要安装 `markdown-it-container` 等依赖
3. **示例代码**：示例文件必须导出默认组件
4. **文档格式**：遵循 Markdown 和 Frontmatter 规范

## 参考文档

- [TDesign React 组件库文档系统实现分析](../tdesign-react/# TDesign React 组件库文档系统实现分析.md)
- [README.md](./README.md) - 详细使用文档

