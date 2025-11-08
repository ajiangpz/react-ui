# 组件文档模板

此文件提供了编写组件文档的标准模板。复制此模板创建新的组件文档。

## MDX 文件模板

````mdx
import { Meta } from "@storybook/blocks";

<Meta title="组件/ComponentName 组件中文名" />

# ComponentName 组件中文名

一句话简介，描述组件的主要功能。

## 何时使用

- 使用场景 1
- 使用场景 2
- 使用场景 3
- 使用场景 4（可选）

## 代码演示

### 基础用法

最简单的使用方式。

\`\`\`tsx import React from 'react'; import { ComponentName } from 'tendaui-react';

export default () => (
  <ComponentName>基础示例</ComponentName>
);
\`\`\`

### 不同尺寸

提供三种尺寸的组件。

\`\`\`tsx import React from 'react'; import { ComponentName, Space } from 'tendaui-react';

export default () => (
  <Space>
    <ComponentName size="small">小尺寸</ComponentName>
    <ComponentName size="medium">中等尺寸</ComponentName>
    <ComponentName size="large">大尺寸</ComponentName>
  </Space>
);
\`\`\`

### 禁用状态

通过 `disabled` 属性禁用组件。

\`\`\`tsx import React from 'react'; import { ComponentName } from 'tendaui-react';

export default () => (
  <ComponentName disabled>禁用状态</ComponentName>
);
\`\`\`

### 进阶用法

更复杂的使用场景。

\`\`\`tsx import React, { useState } from 'react'; import { ComponentName } from 'tendaui-react';

export default () => {
  const [value, setValue] = useState('');

const handleChange = (newValue: string) => { setValue(newValue); console.log('Changed:', newValue); };

return ( <ComponentName
      value={value}
      onChange={handleChange}
    /> ); }; \`\`\`

## API

### ComponentName Props

| 属性         | 说明                   | 类型                           | 默认值   | 版本 |
| ------------ | ---------------------- | ------------------------------ | -------- | ---- |
| children     | 子元素                 | ReactNode                      | -        | -    |
| className    | 自定义类名             | string                         | -        | -    |
| style        | 自定义样式             | CSSProperties                  | -        | -    |
| size         | 组件尺寸               | `small` \| `medium` \| `large` | `medium` | -    |
| disabled     | 是否禁用               | boolean                        | false    | -    |
| value        | 组件的值（受控）       | any                            | -        | -    |
| defaultValue | 组件的默认值（非受控） | any                            | -        | -    |
| onChange     | 值变化时的回调         | (value: any) => void           | -        | -    |
| onClick      | 点击时的回调           | (e: MouseEvent) => void        | -        | -    |

### ComponentName Methods（如果有）

通过 ref 可以调用的方法：

| 方法名 | 说明       | 参数 | 返回值 |
| ------ | ---------- | ---- | ------ |
| focus  | 聚焦到组件 | -    | void   |
| blur   | 失去焦点   | -    | void   |

### CSS 变量（如果支持自定义）

| 变量名                | 默认值 | 说明     |
| --------------------- | ------ | -------- |
| --td-component-height | 32px   | 组件高度 |
| --td-component-bg     | #fff   | 背景色   |

## 设计指南

### 尺寸规范

- **小尺寸（small）**：高度 28px，适用于紧凑型布局
- **中等尺寸（medium）**：高度 32px，最常用的尺寸
- **大尺寸（large）**：高度 40px，适用于需要强调的场景

### 使用建议

1. **建议 1**：描述最佳实践
2. **建议 2**：描述注意事项
3. **建议 3**：描述常见错误

### 无障碍

- 支持键盘导航（Tab 键聚焦，Enter 键触发）
- 支持 ARIA 属性
- 提供语义化的 HTML 标签

\`\`\`tsx

<ComponentName aria-label="描述性文本" role="button" tabIndex={0} />
\`\`\`

## 常见问题

### 如何实现某个功能？

解答和代码示例。

\`\`\`tsx // 示例代码 \`\`\`

### 组件在某个场景下不工作？

解释原因和解决方案。

### 如何自定义样式？

通过 className 或 CSS 变量自定义。

\`\`\`tsx

<ComponentName className="my-custom-class" style={{ customProperty: "value" }} />
\`\`\`

\`\`\`css .my-custom-class { --td-component-height: 40px; border-radius: 8px; } \`\`\` \`\`\`

## Stories 文件模板

```tsx
// ComponentName.stories.tsx
import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { ComponentName } from "tendaui-react/es/index";

const meta: Meta<typeof ComponentName> = {
  title: "Components/ComponentName",
  component: ComponentName,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "组件尺寸",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" }
      }
    },
    disabled: {
      control: "boolean",
      description: "是否禁用",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" }
      }
    }
    // 添加更多 argTypes...
  }
};

export default meta;

type Story = StoryObj<typeof ComponentName>;

// 基础示例
export const Default: Story = {
  args: {
    children: "默认内容"
  }
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ComponentName size="small">小尺寸</ComponentName>
      <ComponentName size="medium">中等尺寸</ComponentName>
      <ComponentName size="large">大尺寸</ComponentName>
    </div>
  )
};

// 禁用状态
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "禁用状态"
  }
};

// 交互式示例
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <div>
        <ComponentName value={value} onChange={(newValue) => setValue(newValue)} />
        <div style={{ marginTop: "12px" }}>当前值: {value}</div>
      </div>
    );
  }
};

// 主题变体
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <ComponentName variant="default">默认</ComponentName>
      <ComponentName variant="primary">主要</ComponentName>
      <ComponentName variant="success">成功</ComponentName>
      <ComponentName variant="warning">警告</ComponentName>
      <ComponentName variant="danger">危险</ComponentName>
    </div>
  )
};
```
````

## 类型定义模板

```typescript
// type.ts
import { TNode } from "../common";
import { MouseEvent, ChangeEvent } from "react";

export interface TdComponentNameProps {
  /**
   * 子元素
   */
  children?: TNode;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 组件尺寸
   * @default medium
   */
  size?: "small" | "medium" | "large";

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 组件的值（受控）
   */
  value?: any;

  /**
   * 组件的默认值（非受控）
   */
  defaultValue?: any;

  /**
   * 值变化时的回调
   */
  onChange?: (value: any) => void;

  /**
   * 点击时的回调
   */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
```

## 文档检查清单

在提交文档前，请确保：

- [ ] 包含清晰的组件概述
- [ ] 列出了何时使用的场景
- [ ] 提供了基础用法示例
- [ ] 提供了常见场景的示例（尺寸、状态、主题等）
- [ ] 提供了进阶用法示例
- [ ] API 表格完整且准确
- [ ] 包含设计指南
- [ ] 包含无障碍说明
- [ ] 解答了常见问题
- [ ] 代码示例可运行
- [ ] 没有拼写和语法错误
- [ ] 图片和链接有效
- [ ] Stories 文件包含 autodocs 标签
- [ ] ArgTypes 配置完整

## 文档编写技巧

### 1. 使用清晰的标题层级

```
# 一级标题 - 组件名称
## 二级标题 - 主要部分（何时使用、API等）
### 三级标题 - 子部分（具体示例）
```

### 2. 代码示例要完整

每个示例都应该是可以直接复制运行的。

### 3. 表格格式要规范

使用 Markdown 表格，保持列对齐。

### 4. 添加有用的注释

在复杂示例中添加注释说明关键代码。

### 5. 使用可视化元素

适当使用颜色块、间距示例等可视化元素。

### 6. 保持一致的术语

整个文档使用统一的术语（如"组件"vs"控件"）。
