# @tendaui Scope 迁移完成

## ✅ 已完成的更改

### 1. 包名更新

所有包已更新为使用 `@tendaui` scope：

- ✅ `tendaui-react` → `@tendaui/react`
- ✅ `tendaui-react-icons` → `@tendaui/icons`
- ✅ `@tendaui/components` (已存在)

### 2. 依赖关系更新

- ✅ `@tendaui/react` 的依赖已更新为 `@tendaui/icons`
- ✅ 根目录 `package.json` 中的 devDependencies 已更新

### 3. 源代码更新

所有源代码文件中的 import 语句已更新：

- ✅ `packages/components/**/*.tsx` - 所有组件文件
- ✅ `packages/components/**/*.stories.tsx` - 所有 Storybook 文件
- ✅ `packages/utils/**/*.tsx` - 工具文件

### 4. 验证

通过 `lerna list` 验证，所有包已正确识别：

```
@tendaui/components
@tendaui/icons
@tendaui/react
```

## 📝 待处理事项

### 1. 构建产物

`packages/tendaui-react/es/` 目录下的构建产物仍包含旧的包名引用。这些文件会在下次构建时自动更新：

```bash
pnpm build
```

### 2. 文档更新

部分文档文件仍包含旧包名引用，建议更新：

- `packages/tendaui-docs/**/*.mdx` - 文档文件
- `README.md` - 主 README
- `PUBLISH.md` - 发布指南

### 3. 发布到 npm

在发布前，确保：

1. 所有包都已正确配置 `publishConfig`：

   ```json
   {
     "publishConfig": {
       "access": "public",
       "registry": "https://registry.npmjs.org/"
     }
   }
   ```

2. 已登录 npm 并加入 `@tendaui` 组织：

   ```bash
   npm login
   npm org ls @tendaui
   ```

3. 构建所有包：

   ```bash
   pnpm build:all
   ```

4. 发布：
   ```bash
   pnpm release:lerna
   ```

## 🔄 迁移后的包结构

```
@tendaui/
├── components/    # 组件源代码包
├── icons/         # 图标包
└── react/         # React 主包
```

## 📦 使用新包名

### 安装

```bash
# 使用新包名安装
npm install @tendaui/react @tendaui/icons

# 或使用 pnpm
pnpm add @tendaui/react @tendaui/icons

# 或使用 yarn
yarn add @tendaui/react @tendaui/icons
```

### 导入

```tsx
// 导入组件
import { Button, Input, Form } from "@tendaui/react";

// 导入图标
import { IconSearch, IconClose } from "@tendaui/icons";

// 导入组件源代码（开发时）
import { Button } from "@tendaui/components";
```

## ⚠️ 注意事项

1. **向后兼容性**：旧的包名 `tendaui-react` 和 `tendaui-react-icons` 将不再使用
2. **文档更新**：需要更新所有文档中的包名引用
3. **CI/CD**：如果使用 CI/CD，需要更新构建脚本中的包名引用
4. **依赖项目**：使用这些包的项目需要更新 `package.json` 中的依赖

## 🎯 下一步

1. 更新文档中的包名引用
2. 运行 `pnpm build:all` 重新构建所有包
3. 测试所有功能是否正常
4. 发布新版本到 npm
