# TendaUI 文档系统说明

## 📚 文档概览

TendaUI 采用基于 Storybook 的文档系统，提供了完整、专业的组件库文档。

## 🗂️ 文档结构

```
react-ui/
├── packages/
│   └── tendaui-docs/                    # 文档中心
│       ├── README.md                    # 文档编写规范
│       ├── COMPONENT_TEMPLATE.md        # 组件文档模板
│       ├── introduction.mdx             # 组件库介绍
│       ├── getting-started.mdx          # 快速开始
│       ├── design-tokens.mdx            # 设计规范
│       ├── best-practices.mdx           # 最佳实践
│       ├── contributing.mdx             # 贡献指南
│       └── components/                  # 组件文档
│           ├── button.mdx              # Button 组件文档
│           ├── input.mdx               # Input 组件文档
│           ├── form.mdx                # Form 组件文档
│           └── ...                     # 其他组件文档
└── .storybook/                          # Storybook 配置
    ├── main.ts                          # 主配置
    ├── preview.tsx                      # 预览配置
    └── ...
```

## 📖 文档内容

### 1. 入门文档

#### 组件库介绍 (`introduction.mdx`)

- 组件库特性
- 安装指南
- 快速上手
- 组件总览
- 相关链接

#### 快速开始 (`getting-started.mdx`)

- 环境要求
- 安装步骤
- 基础用法
- 主题配置
- 响应式设计
- TypeScript 支持
- 常见问题

### 2. 设计规范 (`design-tokens.mdx`)

- 颜色系统（品牌色、功能色、中性色）
- 字体系统（字体家族、大小、粗细）
- 间距系统（基于 8px 网格）
- 圆角系统
- 阴影系统
- 尺寸系统
- 动画系统
- 使用方式和最佳实践

### 3. 最佳实践 (`best-practices.mdx`)

- 项目结构建议
- 主题定制
- 性能优化
- 表单处理
- TypeScript 最佳实践
- 状态管理
- 数据获取
- 样式管理
- 测试
- 响应式设计
- 国际化
- 性能监控
- 安全最佳实践

### 4. 组件文档

每个组件的文档包含：

- **组件概述**：简短描述和主要用途
- **何时使用**：典型使用场景
- **代码演示**：
  - 基础用法
  - 不同状态
  - 样式变体
  - 进阶用法
  - 最佳实践
- **API 文档**：
  - Props 属性表格
  - Events 事件说明
  - Methods 方法说明
  - CSS Variables 自定义变量
- **设计指南**：
  - 视觉规范
  - 使用建议
  - 无障碍访问
- **常见问题**：FAQ 和解决方案

已完成的组件文档：

- ✅ Button 按钮
- ✅ Input 输入框
- ✅ Form 表单

待完成的组件文档：

- ⏳ Alert 警告提示
- ⏳ Badge 徽标
- ⏳ Checkbox 复选框
- ⏳ Dialog 对话框
- ⏳ Loading 加载
- ⏳ Notification 通知
- ⏳ Popup 弹出层
- ⏳ Select 选择器
- ⏳ Switch 开关
- ⏳ Tag 标签
- ⏳ TagInput 标签输入
- ⏳ 其他组件...

### 5. 开发指南 (`contributing.mdx`)

- 参与方式
- 开发流程
- 代码规范
- 提交规范
- 组件开发指南
- 文档贡献
- Bug 报告
- 功能建议

## 🚀 启动文档

### 开发模式

```bash
# 安装依赖
pnpm install

# 启动 Storybook 文档服务器
pnpm dev:storybook
```

访问 `http://localhost:6006` 查看文档。

### 构建生产版本

```bash
# 构建静态文档站点
pnpm build-storybook
```

构建产物将输出到 `storybook-static` 目录。

## ✍️ 编写文档

### 1. 创建组件文档

使用提供的模板创建新的组件文档：

```bash
# 复制模板
cp packages/tendaui-docs/COMPONENT_TEMPLATE.md packages/tendaui-docs/components/your-component.mdx
```

### 2. 编写 MDX 文档

MDX 支持在 Markdown 中嵌入 JSX：

```mdx
import { Meta } from "@storybook/blocks";

<Meta title="组件/YourComponent" />

# YourComponent 组件名

组件描述...

## 代码演示

### 基础用法

\`\`\`tsx import { YourComponent } from 'tendaui-react';

export default () => (
  <YourComponent>内容</YourComponent>
);
\`\`\

`
```

### 3. 创建 Stories 文件

在组件目录创建 `.stories.tsx` 文件：

```tsx
import { Meta, StoryObj } from "@storybook/react-vite";
import YourComponent from "./YourComponent";

const meta: Meta<typeof YourComponent> = {
  title: "Components/YourComponent",
  component: YourComponent,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    children: "默认内容"
  }
};
```

### 4. 文档规范

遵循 `packages/tendaui-docs/README.md` 中的文档编写规范：

- 保持一致的结构
- 提供完整的代码示例
- 使用清晰的语言
- 包含 API 文档表格
- 添加设计指南
- 回答常见问题

## 📝 文档维护

### 更新文档

1. **代码变更时同步更新文档**

   - 修改组件 API 后，更新对应的文档
   - 添加新功能时，添加相应的示例

2. **定期审查文档**

   - 检查文档是否准确
   - 更新过时的信息
   - 改进不清晰的说明

3. **收集用户反馈**
   - 关注 Issue 中的文档问题
   - 根据用户反馈优化文档

### 文档检查清单

提交文档前确保：

- [ ] 组件概述清晰准确
- [ ] 包含使用场景说明
- [ ] 提供基础和进阶示例
- [ ] API 文档完整
- [ ] 代码示例可运行
- [ ] 无拼写和语法错误
- [ ] Stories 配置正确

## 🎨 Storybook 配置

### 主配置 (`.storybook/main.ts`)

```typescript
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../packages/tendaui-docs/introduction.mdx",
    "../packages/tendaui-docs/getting-started.mdx",
    "../packages/tendaui-docs/design-tokens.mdx",
    "../packages/tendaui-docs/contributing.mdx",
    "../packages/tendaui-docs/components/**/*.mdx",
    "../packages/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../packages/**/*.mdx"
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation"
  }
};
export default config;
```

### 预览配置 (`.storybook/preview.tsx`)

配置了：

- 主题切换（light/dark）
- 文档目录显示
- 视口预设（mobile/tablet/desktop）
- 文档排序

## 🔧 自定义扩展

### 添加自定义插件

在 `.storybook/main.ts` 中添加 addons：

```typescript
addons: [
  '@storybook/addon-docs',
  '@storybook/addon-essentials',
  '@storybook/addon-a11y', // 无障碍检查
  // 其他插件...
],
```

### 自定义文档主题

在 `.storybook/preview.tsx` 中配置主题：

```typescript
import { themes } from "@storybook/theming";

export const parameters = {
  docs: {
    theme: themes.light // 或 themes.dark
  }
};
```

## 📊 文档分析

### 查看文档覆盖率

确保所有组件都有文档：

```bash
# 列出所有组件
ls packages/components/

# 列出已有文档的组件
ls packages/tendaui-docs/components/
```

### 文档质量检查

- 所有公开组件都有文档
- 文档包含完整的 API 说明
- 提供足够的使用示例
- 常见问题得到解答

## 🌐 部署文档

### 部署到 GitHub Pages

```bash
# 构建文档
pnpm build-storybook

# 部署到 gh-pages 分支
npx gh-pages -d storybook-static
```

### 部署到 Vercel

1. 在 Vercel 中导入项目
2. 设置构建命令：`pnpm build-storybook`
3. 设置输出目录：`storybook-static`
4. 部署

### 部署到自定义服务器

将 `storybook-static` 目录部署到任何静态网站托管服务。

## 🤝 贡献文档

欢迎贡献文档！请参考 `packages/tendaui-docs/contributing.mdx`。

### 快速开始贡献

1. Fork 项目
2. 创建文档分支：`git checkout -b docs/your-doc-name`
3. 编写文档（参考模板）
4. 提交代码：`git commit -m "docs: 添加 XXX 组件文档"`
5. 推送分支：`git push origin docs/your-doc-name`
6. 创建 Pull Request

## 📞 获取帮助

如果在编写或使用文档时遇到问题：

- 查看 [文档编写规范](./packages/tendaui-docs/README.md)
- 参考 [组件文档模板](./packages/tendaui-docs/COMPONENT_TEMPLATE.md)
- 查看已有的组件文档示例
- 在 GitHub 提 Issue
- 加入社区讨论

---

**Last Updated**: 2025-10-27
