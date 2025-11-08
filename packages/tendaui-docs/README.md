# TendaUI 文档编写规范

## 文档结构

每个组件的文档应包含以下核心部分：

### 1. 组件概述（Overview）

- 组件的简短描述（1-2句话）
- 组件的主要用途和使用场景
- 组件的设计理念

### 2. 何时使用（When to Use）

- 列出3-5个典型使用场景
- 说明适用场景和不适用场景

### 3. 代码演示（Examples）

使用Storybook Stories展示：

- **基础用法**：最简单的使用方式
- **不同状态**：各种状态变化（禁用、加载中等）
- **样式变体**：主题、尺寸、形状等变化
- **进阶用法**：复杂场景和组合使用
- **最佳实践**：推荐的使用方式

### 4. API文档（API Reference）

使用结构化表格展示：

#### 组件属性（Props）

| 属性名 | 类型 | 默认值  | 说明        | 版本 |
| ------ | ---- | ------- | ----------- | ---- |
| prop1  | type | default | description | v1.0 |

#### 事件（Events）

| 事件名  | 参数                    | 说明       |
| ------- | ----------------------- | ---------- |
| onClick | (e: MouseEvent) => void | 点击时触发 |

#### 方法（Methods）

如果组件通过ref暴露方法：| 方法名 | 参数 | 返回值 | 说明 | |--------|------|--------|------| | focus | - | void | 聚焦到
组件 |

#### CSS变量（CSS Variables）

| 变量名             | 默认值 | 说明     |
| ------------------ | ------ | -------- |
| --td-button-height | 32px   | 按钮高度 |

### 5. 设计指南（Design Guidelines）

- 组件的视觉规范
- 间距、颜色、动画等设计token
- 无障碍访问（A11y）支持

### 6. 常见问题（FAQ）

- 列出常见使用问题和解决方案

## 文件组织

```
packages/
  ├── tendaui-docs/               # 文档中心
  │   ├── README.md              # 文档编写规范（本文件）
  │   ├── introduction.mdx       # 组件库介绍
  │   ├── getting-started.mdx    # 快速开始
  │   ├── design-tokens.mdx      # 设计token文档
  │   ├── contributing.mdx       # 贡献指南
  │   └── components/            # 组件文档
  │       ├── button.mdx
  │       ├── form.mdx
  │       └── ...
  └── components/
      └── button/
          ├── Button.tsx         # 组件实现
          ├── Button.stories.tsx # Storybook故事
          ├── type.ts           # 类型定义
          ├── defaultProps.ts   # 默认属性
          └── README.md         # 组件开发文档（可选）
```

## 编写最佳实践

### 1. 保持一致性

- 使用统一的术语和命名
- 遵循相同的文档结构
- 保持代码示例的风格一致

### 2. 代码示例

- 示例代码要简洁、完整、可运行
- 每个示例都应该是独立的
- 使用TypeScript编写示例
- 添加必要的注释

### 3. 用户视角

- 从用户的角度编写文档
- 使用清晰、简单的语言
- 提供足够的上下文信息

### 4. 及时更新

- 代码变更时同步更新文档
- 保持API文档和类型定义同步
- 记录版本变更信息

## MDX编写技巧

### 导入组件

```jsx
import { Button } from "tendaui-react";
import { IconPlay } from "tendaui-react-icons";
```

### 嵌入示例

```jsx
<Canvas>
  <Button type="primary">主要按钮</Button>
</Canvas>
```

### 使用ArgTypes自动生成API表格

在Stories中配置argTypes，Storybook会自动生成Props表格

### 添加提示框

```jsx
<Callout type="info">这是一个提示信息</Callout>
```

## 文档审查清单

提交文档前，请确保：

- [ ] 组件概述清晰准确
- [ ] 包含完整的使用场景说明
- [ ] 提供了基础和进阶示例
- [ ] API文档完整（包括所有props、events、methods）
- [ ] 代码示例可运行且格式正确
- [ ] 包含TypeScript类型定义
- [ ] 无拼写和语法错误
- [ ] 图片和资源链接有效
- [ ] 移动端和响应式示例（如适用）
- [ ] 无障碍访问说明（如适用）
