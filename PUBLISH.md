# 发布指南

本文档说明如何发布 `@tendaui/react` 和 `tendaui-react-icons` 包到 npm。

## 📦 发布配置

### 包配置

两个包都已配置了发布相关设置：

#### `@tendaui/react`

- **publishConfig**: 配置为公共访问，发布到 npmjs.org
- **files**: 发布时包含 `es`、`lib`、`index.js` 和 `README.md`
- **repository**: Git 仓库信息
- **homepage**: 项目主页

#### `tendaui-react-icons`

- **publishConfig**: 配置为公共访问，发布到 npmjs.org
- **files**: 发布时包含 `lib`、`src` 和 `dist`
- **repository**: Git 仓库信息
- **homepage**: 项目主页

### Workspace 依赖处理

当使用 `workspace:*` 协议时，Lerna 在发布时会自动：

- 将 `workspace:*` 替换为实际的版本号
- 确保依赖的包先发布
- 保持版本号的一致性

## 🚀 发布流程

### 方式一：使用 Changesets（推荐）

Changesets 提供了更好的版本管理和变更日志：

```bash
# 1. 创建 changeset（描述变更）
pnpm changeset

# 2. 构建所有包
pnpm build:all

# 3. 更新版本号（根据 changeset）
pnpm version-packages

# 4. 发布到 npm
pnpm release
```

### 方式二：使用 Lerna 发布

#### 发布所有已更改的包

```bash
# 1. 构建所有包
pnpm build:all

# 2. 发布（会自动检测需要发布的包）
pnpm release:lerna
```

#### Canary 发布（测试版本）

```bash
# 发布 canary 版本（用于测试）
pnpm release:lerna:canary
```

#### 发布到 next 标签

```bash
# 发布到 next 标签（用于预发布版本）
pnpm release:lerna:next
```

### 方式三：手动发布单个包

```bash
# 发布特定包
pnpm lerna:publish --scope @tendaui/react
pnpm lerna:publish --scope tendaui-react-icons
```

## 📋 发布前检查清单

在发布前，请确保：

- [ ] 所有测试通过：`pnpm test`
- [ ] 代码已构建：`pnpm build:all`
- [ ] 版本号已更新（如果使用 changesets）
- [ ] CHANGELOG 已更新
- [ ] 已登录 npm：`npm login`
- [ ] 有发布权限

## 🔐 发布权限

确保你有 npm 发布权限：

```bash
# 检查当前登录用户
npm whoami

# 登录 npm
npm login

# 检查包的访问权限
npm access ls-packages
```

## 📝 版本管理

### 版本策略

- **独立版本管理**：每个包使用独立版本号（`version: independent`）
- **语义化版本**：遵循 [SemVer](https://semver.org/) 规范
  - `MAJOR.MINOR.PATCH`
  - `1.0.0` → `1.0.1` (补丁版本)
  - `1.0.0` → `1.1.0` (次要版本)
  - `1.0.0` → `2.0.0` (主要版本)

### 版本更新

使用 Lerna 更新版本：

```bash
# 交互式更新版本
pnpm lerna:version

# 自动更新版本（基于 conventional commits）
pnpm lerna:version --conventional-commits
```

## 🔄 Workspace 依赖发布

当 `@tendaui/react` 依赖 `tendaui-react-icons` 时：

1. **发布顺序**：Lerna 会自动先发布 `tendaui-react-icons`
2. **版本替换**：`workspace:*` 会自动替换为实际版本号
3. **依赖更新**：`@tendaui/react` 的依赖会自动更新为已发布的版本

示例：

发布前：

```json
{
  "dependencies": {
    "tendaui-react-icons": "workspace:*"
  }
}
```

发布后：

```json
{
  "dependencies": {
    "tendaui-react-icons": "^1.1.3"
  }
}
```

## 🐛 故障排除

### 发布失败：未登录

```bash
npm login
```

### 发布失败：无权限

检查包的访问权限，或联系包的所有者。

### 发布失败：版本冲突

如果版本已存在，需要更新版本号：

```bash
# 更新版本
pnpm lerna:version
```

### Workspace 依赖未替换

确保在发布前运行了构建：

```bash
pnpm build:all
```

## 📚 相关文档

- [Lerna 发布文档](https://lerna.js.org/docs/features/publish)
- [Changesets 文档](https://github.com/changesets/changesets)
- [npm 发布文档](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
