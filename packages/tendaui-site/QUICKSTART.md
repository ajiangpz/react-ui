# 快速启动指南

## 1. 安装依赖

在项目根目录执行：

```bash
pnpm install
```

## 2. 启动文档站点

```bash
cd packages/tendaui-site
pnpm dev
```

文档站点将在 `http://localhost:3000` 启动。

## 3. 查看示例

访问 `http://localhost:3000/components/button` 查看 Button 组件文档示例。

## 4. 添加新组件文档

### 步骤 1：创建文档文件

在 `packages/components/[component-name]/` 目录创建 `[component-name].md`：

```markdown
---
title: Input 输入框
description: 输入框用于接收用户输入
isComponent: true
---

## 代码演示

### 基础输入框
{{ base }}

<!-- API_DOC -->

## API
...
```

### 步骤 2：创建示例代码

在 `packages/components/[component-name]/_example/` 目录创建示例：

```tsx
// base.tsx
import React from 'react';
import Input from '../Input';

export default function Base() {
  return <Input placeholder="请输入" />;
}
```

### 步骤 3：配置路由

在 `packages/tendaui-site/site.config.mjs` 添加：

```javascript
{
  title: 'Input 输入框',
  name: 'input',
  path: '/components/input',
  component: () => import('@tendaui/components/input/input.md'),
}
```

## 5. 文档语法参考

### Frontmatter

```yaml
---
title: 文档标题
description: 文档描述
isComponent: true  # 是否显示设计指南标签
---
```

### Demo 引用

```markdown
{{ demoName }}
```

### API 分隔

```markdown
<!-- API_DOC -->
```

### API 占位符

```markdown
:: BASE_DOC ::
```

## 常见问题

### Q: 示例代码不显示？

A: 检查：
1. 示例文件是否在 `_example/` 目录
2. 示例文件是否导出默认组件
3. 文档中 demo 名称是否匹配文件名（不含扩展名）

### Q: 路由不工作？

A: 检查：
1. `site.config.mjs` 配置是否正确
2. 组件路径是否正确
3. 文件是否存在

### Q: 样式不生效？

A: 检查：
1. CSS 文件是否正确导入
2. 类名是否正确
3. 浏览器控制台是否有错误

## 下一步

- 查看 [README.md](./README.md) 了解详细文档
- 查看 [IMPLEMENTATION.md](./IMPLEMENTATION.md) 了解实现细节

