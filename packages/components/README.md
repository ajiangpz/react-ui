# @tendaui/components

TendaUI React 组件库的源代码包，包含所有 UI 组件的实现。

## 📦 安装

在 monorepo 的其他包中使用 `workspace` 协议安装：

```bash
pnpm add @tendaui/components@workspace:*
```

## 🔗 在其他包中使用

### 1. 在 package.json 中添加依赖

```json
{
  "dependencies": {
    "@tendaui/components": "workspace:*"
  }
}
```

### 2. 在代码中导入使用

#### 导入单个组件

```tsx
import { Button } from "@tendaui/components";
import "@tendaui/components/button/style";

function App() {
  return <Button type="primary">点击我</Button>;
}
```

#### 导入多个组件

```tsx
import { Button, Input, Form } from "@tendaui/components";
import "@tendaui/components/styles/globals.css";

function App() {
  return (
    <Form>
      <Input placeholder="请输入" />
      <Button type="primary">提交</Button>
    </Form>
  );
}
```

#### 按需导入组件

```tsx
// 导入单个组件的所有导出
import Button from "@tendaui/components/button";
import "@tendaui/components/button/style";

// 或者导入特定文件
import { Button } from "@tendaui/components/button";
```

#### 导入 Hooks

```tsx
import { useConfig, useControlled } from "@tendaui/components/hooks";
```

#### 导入工具函数

```tsx
import { composeRefs, parseTNode } from "@tendaui/components/utils";
```

## 📝 TypeScript 支持

如果需要在 TypeScript 项目中使用，可以在 `tsconfig.json` 中添加路径映射：

```json
{
  "compilerOptions": {
    "paths": {
      "@tendaui/components": ["../../packages/components"],
      "@tendaui/components/*": ["../../packages/components/*"]
    }
  }
}
```

## 🎯 使用场景

### 场景 1: 在 `tendaui-react` 包中使用

`tendaui-react` 包可以依赖 `@tendaui/components` 来构建最终发布的包：

```json
{
  "name": "tendaui-react",
  "dependencies": {
    "@tendaui/components": "workspace:*"
  }
}
```

### 场景 2: 在文档包中使用

在 Storybook 或其他文档工具中直接使用组件：

```tsx
import { Button } from "@tendaui/components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button
} as Meta;
```

### 场景 3: 在测试中使用

在测试文件中导入组件进行测试：

```tsx
import { render, screen } from "@testing-library/react";
import { Button } from "@tendaui/components";

test("renders button", () => {
  render(<Button>Test</Button>);
  expect(screen.getByText("Test")).toBeInTheDocument();
});
```

## 📋 可用组件

- `Alert` - 警告提示
- `Badge` - 徽标
- `Button` - 按钮
- `Checkbox` - 复选框
- `ConfigProvider` - 全局配置
- `Dialog` - 对话框
- `Form` - 表单
- `Input` - 输入框
- `Loading` - 加载中
- `Notification` - 通知
- `Popup` - 弹出层
- `Select` - 选择器
- `SelectInput` - 选择输入框
- `Switch` - 开关
- `Tag` - 标签
- `TagInput` - 标签输入框

## 🔧 开发

### 本地开发

由于这是一个源代码包，修改组件代码后，使用它的包会自动看到更改（如果配置了正确的构建工具）。

### 构建

如果需要构建这个包，可以添加构建脚本：

```json
{
  "scripts": {
    "build": "tsc --build"
  }
}
```

## 📚 相关文档

- [Monorepo 最佳实践](../../MONOREPO.md)
- [发布指南](../../PUBLISH.md)
- [Lerna 使用指南](../../LERNA.md)
