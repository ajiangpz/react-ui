# @tendaui/components 使用指南

## 快速开始

### 1. 在 package.json 中添加依赖

在需要使用 `@tendaui/components` 的包的 `package.json` 中添加：

```json
{
  "dependencies": {
    "@tendaui/components": "workspace:*"
  }
}
```

然后运行：

```bash
pnpm install
```

### 2. 基本使用示例

#### 示例 1: 导入并使用组件

```tsx
// App.tsx
import React from "react";
import { Button, Input, Form } from "@tendaui/components";
import "@tendaui/components/styles/globals.css";

function App() {
  return (
    <div>
      <Button type="primary">主要按钮</Button>
      <Input placeholder="请输入内容" />
      <Form>
        <Form.Item name="username" label="用户名">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="submit">提交</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
```

#### 示例 2: 按需导入单个组件

```tsx
// 只导入需要的组件
import Button from "@tendaui/components/button";
import "@tendaui/components/button/style";

function MyComponent() {
  return <Button>点击我</Button>;
}
```

#### 示例 3: 使用 Hooks

```tsx
import { useConfig, useControlled } from "@tendaui/components/hooks";

function MyComponent() {
  const config = useConfig();
  const [value, setValue] = useControlled({ default: "" });

  return <div>{config.brandColor}</div>;
}
```

#### 示例 4: 使用工具函数

```tsx
import { composeRefs, parseTNode } from "@tendaui/components/utils";

function MyComponent() {
  const ref1 = useRef();
  const ref2 = useRef();
  const combinedRef = composeRefs(ref1, ref2);

  return <div ref={combinedRef}>内容</div>;
}
```

## 在 monorepo 中的使用场景

### 场景 1: 在 tendaui-react 包中使用

`tendaui-react` 可以依赖 `@tendaui/components` 来重新导出组件：

```json
// packages/tendaui-react/package.json
{
  "dependencies": {
    "@tendaui/components": "workspace:*"
  }
}
```

```tsx
// packages/tendaui-react/src/index.ts
export * from "@tendaui/components";
```

### 场景 2: 在文档中使用

在 Storybook 或其他文档工具中：

```tsx
// packages/tendaui-docs/components/example.tsx
import { Button } from "@tendaui/components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Examples/Button",
  component: Button
} as Meta;

export const Primary: Story = () => <Button type="primary">主要按钮</Button>;
```

### 场景 3: 在测试中使用

```tsx
// test/Button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "@tendaui/components";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
```

## TypeScript 配置

为了获得更好的类型支持，在 `tsconfig.json` 中添加路径映射：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@tendaui/components": ["../../packages/components"],
      "@tendaui/components/*": ["../../packages/components/*"]
    }
  }
}
```

## 注意事项

1. **样式文件**: 记得导入样式文件，否则组件可能没有样式

   ```tsx
   import "@tendaui/components/styles/globals.css";
   // 或者按需导入
   import "@tendaui/components/button/style";
   ```

2. **Peer Dependencies**: 确保安装了 `react` 和 `react-dom`

   ```json
   {
     "peerDependencies": {
       "react": ">=16.13.1",
       "react-dom": ">=16.13.1"
     }
   }
   ```

3. **Workspace 协议**: 在 monorepo 内部必须使用 `workspace:*` 协议

   ```json
   {
     "dependencies": {
       "@tendaui/components": "workspace:*"
     }
   }
   ```

4. **构建工具**: 如果使用构建工具（如 Vite、Webpack），可能需要配置别名：
   ```js
   // vite.config.ts
   export default {
     resolve: {
       alias: {
         "@tendaui/components": path.resolve(__dirname, "../components")
       }
     }
   };
   ```

## 常见问题

### Q: 为什么导入后没有样式？

A: 需要单独导入样式文件：

```tsx
import "@tendaui/components/styles/globals.css";
```

### Q: TypeScript 报错找不到模块？

A: 检查 `tsconfig.json` 中的路径映射配置是否正确。

### Q: 如何只导入特定组件？

A: 使用子路径导入：

```tsx
import Button from "@tendaui/components/button";
```

### Q: 发布时 workspace 协议会被替换吗？

A: 是的，使用 Lerna 或 Changesets 发布时，`workspace:*` 会自动替换为实际版本号。
