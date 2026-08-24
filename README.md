# TendaUI React

TendaUI React 是一个用于系统实践 **React 组件设计与组件库工程化** 的项目，重点覆盖 TypeScript、Monorepo、多包构建、组件文档、测试和发布流程。

> 项目中的部分组件实现和测试用例参考或改编自 [TDesign React](https://github.com/Tencent/tdesign-react)。本仓库主要用于组件库源码学习、工程化改造与实践。第三方许可说明见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。

- GitHub: https://github.com/ajiangpz/react-ui
- Demo / Docs: https://ajiangpz.github.io/react-ui/
- npm package: `@tendaui/react`

## 项目重点

- **React + TypeScript**：组件 Props、公共类型、Hooks 与复杂组件状态管理
- **Monorepo**：使用 pnpm Workspace 管理 components、react、icons、utils、docs、site 等子包
- **组件工程化**：Rollup 多入口 ESM 构建、依赖 external、Source Map、组件级样式构建
- **组件设计**：包含 Form、Select、Dialog、Popup、TagInput、ConfigProvider 等通用组件
- **文档与调试**：使用 Storybook 维护组件示例与独立开发环境
- **测试**：使用 Vitest、React Testing Library，并配置 Playwright E2E 基础设施
- **版本与发布**：使用 Lerna 管理多包版本，通过 GitHub Actions 执行发布和文档部署

## 安装

```bash
pnpm add @tendaui/react
```

## 快速开始

```tsx
import React from "react";
import { Button, Input } from "@tendaui/react";

export default function Example() {
  return (
    <div>
      <Input placeholder="请输入内容" />
      <Button theme="primary">提交</Button>
    </div>
  );
}
```

组件样式支持按组件路径引入，例如：

```tsx
import "@tendaui/react/button/style";
import "@tendaui/react/input/style";
```

## 组件

当前仓库包含的代表性组件包括：

- 基础：Button、Badge、Tag、Loading
- 数据录入：Input、InputNumber、Checkbox、Radio、Switch、Select、TagInput、Form
- 反馈：Alert、Dialog、Notification、Drawer
- 基础设施：Popup、ConfigProvider、Hooks、Utils
- 扩展：ColorPicker、Slider、IPInput 等

组件入口以 [`packages/components`](./packages/components) 中的实际导出为准。

## Monorepo 结构

```text
packages/
├── components/       # React 组件源码
├── tendaui-react/    # npm 发布包
├── tendaui-icons/    # 图标包
├── utils/            # 公共工具
├── tendaui-docs/     # Storybook / 组件文档
├── tendaui-site/     # 展示站点
└── theme-generator/  # 主题相关工具
```

更多设计说明见 [ARCHITECTURE.md](./ARCHITECTURE.md)。

## 本地开发

环境要求：

- Node.js >= 18
- pnpm >= 8

```bash
pnpm install

# Storybook
pnpm dev:storybook

# 站点
pnpm dev:site

# 构建所有包含 build script 的 workspace package
pnpm build

# 单元测试
pnpm test

# 测试 watch
pnpm test:watch

# ESLint
pnpm lint
```

E2E 测试基础设施：

```bash
pnpm test:e2e:install
pnpm test:e2e
```

## 构建策略

发布包使用 Rollup 构建：

- 扫描组件目录生成多入口
- 输出 ESM 文件
- React 和运行时依赖作为 external 处理
- 样式单独构建并保留组件目录结构
- 输出 Source Map 便于调试

当前项目以 **ESM + 组件级入口** 实现按需使用。Rollup 内部 Tree Shaking 仍有进一步优化空间，因此 README 不将“完整 Tree Shaking”作为已经完成的能力声明。

## 测试策略

测试不追求单纯提高数量，优先覆盖组件库中风险较高的行为：

1. controlled / uncontrolled 状态切换与回调
2. Form 字段状态与校验
3. Select / Popup 等复杂交互
4. Dialog / Drawer 等 Portal、键盘和副作用行为
5. 基础组件关键 Props 与事件

测试配置位于 [`vitest.config.ts`](./vitest.config.ts)。

## 版本与发布

仓库使用 Lerna 管理版本，并已配置 GitHub Actions 工作流用于站点部署和 npm 发布。

相关文档：

- [Monorepo 说明](./MONOREPO.md)
- [发布说明](./PUBLISH.md)
- [更新日志](./CHANGELOG.md)

## 与 TDesign 的关系

TendaUI 不是为了重新发明一套基础 UI 规范。项目选择 TDesign React 作为重要参考实现，用于学习和验证成熟组件库中的：

- React 组件 API 与状态设计
- Hooks / Context 的使用边界
- Form、Select、Popup 等复杂组件实现
- TypeScript 类型组织
- 组件库构建、测试和发布体系

在此基础上，仓库会逐步补充自己的工程化改造、测试、文档和技术决策记录。涉及 TDesign 的代码应保留对应许可和版权信息。

## License

本项目使用 MIT License。第三方来源与许可信息见 [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)。
