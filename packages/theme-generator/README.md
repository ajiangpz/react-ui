# @tendaui/theme-generator

TendaUI 主题配置生成器 - React 版本

## 功能特性

- 🎨 可视化主题定制
- 🌈 自动生成颜色系（color-1 到 color-10）
- 💾 本地存储配置
- 📥 导出 CSS 文件
- 🔄 实时预览
- 🌓 支持深色/浅色主题

## 安装

```bash
pnpm add @tendaui/theme-generator
```

## 使用

```tsx
import { ThemeGenerator } from "@tendaui/theme-generator";

function App() {
  return (
    <div>
      {/* 你的应用内容 */}
      <ThemeGenerator device="web" />
    </div>
  );
}
```

## API

### ThemeGenerator

| 属性        | 类型                | 默认值  | 说明             |
| ----------- | ------------------- | ------- | ---------------- |
| device      | `'web' \| 'mobile'` | `'web'` | 设备类型         |
| showSetting | `boolean`           | `false` | 是否显示设置按钮 |

## 开发

```bash
# 开发模式
pnpm dev

# 构建
pnpm build

# 类型检查
pnpm type-check
```

## 依赖

- `react` >= 16.13.1
- `react-dom` >= 16.13.1
- `tvision-color` - 颜色处理库
- `cssbeautify` - CSS 格式化
