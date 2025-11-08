# TendaUI React 组件库

<div align="center">
  <h1>TendaUI React</h1>
  <p>企业级 React UI 组件库</p>
  
  [![npm version](https://img.shields.io/npm/v/tendaui-react.svg)](https://www.npmjs.com/package/tendaui-react)
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
</div>

---

## ✨ 特性

- 🎨 **精美设计**：现代化的 UI 设计，支持主题定制
- 📦 **开箱即用**：高质量的 React 组件，满足企业级应用需求
- 🔧 **TypeScript**：完整的类型定义，提供良好的开发体验
- 🎭 **主题定制**：灵活的主题系统，支持深色模式
- 📱 **响应式**：支持移动端，适配各种屏幕尺寸
- ♿ **无障碍**：遵循 WAI-ARIA 标准，支持键盘导航
- 🌲 **Tree Shaking**：支持按需加载，优化打包体积
- 🔨 **Hooks**：提供丰富的自定义 Hooks

## 📦 安装

```bash
# 使用 npm
npm install tendaui-react

# 使用 pnpm
pnpm add tendaui-react

# 使用 yarn
yarn add tendaui-react
```

## 🔨 快速开始

```tsx
import React from "react";
import { Button, Input, Space } from "tendaui-react";
import "tendaui-react/es/style/index.css";

function App() {
  return (
    <Space direction="vertical">
      <Button type="primary">主要按钮</Button>
      <Input placeholder="请输入内容" />
    </Space>
  );
}

export default App;
```

## 📚 文档

完整的文档请访问：

- **[📖 在线文档](https://your-docs-site.com)** - 完整的组件文档和示例
- **[🚀 快速开始](./DOCUMENTATION.md)** - 快速上手指南
- **[🎨 设计规范](./packages/tendaui-docs/design-tokens.mdx)** - 设计系统说明
- **[💡 最佳实践](./packages/tendaui-docs/best-practices.mdx)** - 开发最佳实践
- **[🤝 贡献指南](./packages/tendaui-docs/contributing.mdx)** - 如何参与贡献

### 本地查看文档

```bash
# 克隆仓库
git clone https://github.com/your-repo/tendaui.git
cd tendaui

# 安装依赖
pnpm install

# 启动文档服务器
pnpm dev:storybook
```

然后访问 `http://localhost:6006` 查看完整文档。

## 📦 组件总览

### 基础组件

- **Button** - 按钮
- **Icon** - 图标

### 数据录入

- **Input** - 输入框
- **Checkbox** - 复选框
- **Switch** - 开关
- **Select** - 选择器
- **Form** - 表单
- **TagInput** - 标签输入

### 数据展示

- **Badge** - 徽标
- **Tag** - 标签
- **Loading** - 加载

### 反馈

- **Alert** - 警告提示
- **Dialog** - 对话框
- **Notification** - 通知

### 其他

- **Popup** - 弹出层
- **Portal** - 传送门
- **ConfigProvider** - 全局配置

## 🎨 主题定制

### 使用 CSS 变量

```css
:root {
  --td-brand-color: #1890ff;
  --td-success-color: #52c41a;
  --td-warning-color: #faad14;
  --td-error-color: #ff4d4f;
}
```

### 使用 ConfigProvider

```tsx
import { ConfigProvider, Button } from "tendaui-react";

function App() {
  return (
    <ConfigProvider
      theme={{
        primaryColor: "#1890ff"
      }}
    >
      <Button type="primary">自定义主题按钮</Button>
    </ConfigProvider>
  );
}
```

## 🔧 开发

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 开发脚本

```bash
# 启动 Storybook 开发服务器
pnpm dev:storybook

# 启动组件开发
pnpm dev

# 构建组件库
pnpm build

# 运行 ESLint
pnpm lint

# 修复 ESLint 问题
pnpm lint:fix

# 运行类型检查
pnpm type-check

# 运行测试
pnpm test
```

## 📁 项目结构

```
tendaui/
├── packages/
│   ├── components/           # 组件源码
│   │   ├── button/
│   │   ├── input/
│   │   └── ...
│   ├── tendaui-react/       # 主包
│   ├── tendaui-icons/       # 图标包
│   └── tendaui-docs/        # 文档
├── .storybook/              # Storybook 配置
├── scripts/                 # 构建脚本
├── package.json
└── README.md
```

## 🤝 贡献

我们欢迎所有的贡献。你可以通过以下方式参与：

1. 🐛 [报告 Bug](https://github.com/your-repo/tendaui/issues)
2. 💡 [提出新功能](https://github.com/your-repo/tendaui/issues)
3. 📝 [改进文档](./packages/tendaui-docs)
4. 💻 [提交代码](https://github.com/your-repo/tendaui/pulls)

请阅读 [贡献指南](./packages/tendaui-docs/contributing.mdx) 了解更多信息。

### 开发流程

1. Fork 项目
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m "feat: add some feature"`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

## 📄 许可证

本项目采用 [MIT](./LICENSE) 许可证。

## 💬 社区

- [GitHub Issues](https://github.com/your-repo/tendaui/issues) - Bug 报告和功能请求
- [GitHub Discussions](https://github.com/your-repo/tendaui/discussions) - 讨论和问答
- [Twitter](https://twitter.com/tendaui) - 最新动态

## 🙏 致谢

感谢所有为 TendaUI 做出贡献的开发者！

## 🔗 相关链接

- [官方网站](https://your-site.com)
- [更新日志](./CHANGELOG.md)
- [问题追踪](https://github.com/your-repo/tendaui/issues)
- [发布说明](https://github.com/your-repo/tendaui/releases)

---

<div align="center">
  Made with ❤️ by TendaUI Team
</div>
