# Lerna 使用指南

本项目已集成 Lerna 用于 monorepo 管理。Lerna 与 pnpm workspaces 协同工作，提供强大的包管理和版本控制功能。

## 📦 安装依赖

首次安装或更新依赖：

```bash
pnpm install
# 或使用 lerna bootstrap（已配置为使用 pnpm）
pnpm lerna:bootstrap
```

## 🚀 常用命令

### 查看包信息

```bash
# 列出所有包
pnpm lerna:list

# 查看已更改的包
pnpm lerna:changed

# 查看包之间的差异
pnpm lerna:diff

# 查看 lerna 信息
pnpm lerna:info
```

### 构建

```bash
# 构建所有包
pnpm build:all

# 只构建已更改的包（自上次提交以来）
pnpm build:changed

# 使用 lerna 构建
pnpm lerna:build
```

### 运行脚本

```bash
# 在所有包中运行指定脚本
pnpm lerna:run <script-name>

# 例如：在所有包中运行 test
pnpm lerna:run test

# 使用 pnpm 方式（仍然可用）
pnpm -r test
```

### 测试

```bash
# 使用 lerna 运行测试
pnpm test:lerna

# 或使用 pnpm（仍然可用）
pnpm test
```

### 版本管理

```bash
# 创建新版本（基于 conventional commits）
pnpm lerna:version

# 发布包
pnpm lerna:publish
```

### 清理

```bash
# 清理所有包的 node_modules
pnpm lerna:clean

# 清理构建产物（使用现有脚本）
pnpm clean
```

## 🔧 高级用法

### 在特定包中执行命令

```bash
# 在特定包中执行命令
pnpm lerna:exec --scope @tendaui/react -- <command>

# 例如：在 @tendaui/react 包中运行构建
pnpm lerna:exec --scope @tendaui/react -- pnpm build
```

### 并行执行

```bash
# 并行运行脚本（默认行为）
pnpm lerna:run build --parallel

# 串行运行脚本
pnpm lerna:run build --no-parallel
```

### 过滤包

```bash
# 只运行已更改的包
pnpm lerna:run build --since HEAD

# 排除特定包
pnpm lerna:run build --ignore @tendaui/docs

# 只包含特定包
pnpm lerna:run build --scope @tendaui/react
```

## 📝 配置说明

### Lerna 配置

Lerna 配置位于 `lerna.json`：

- **version**: `independent` - 每个包独立版本管理
- **npmClient**: `pnpm` - 使用 pnpm 作为包管理器
- **packages**: `["packages/*"]` - 包的位置

### Nx 配置

Nx 配置位于 `nx.json`，用于配置任务依赖关系和缓存：

- **targetDefaults**: 定义默认任务配置
  - `dependsOn: ["^build"]` - 确保依赖的包先构建
- **namedInputs**: 定义输入文件集，用于缓存优化

### 内部依赖配置

在 monorepo 中，包之间的依赖应使用 `workspace:*` 协议：

```json
{
  "dependencies": {
    "tendaui-react-icons": "workspace:*"
  }
}
```

这样做的好处：

- 自动链接到工作区内的包
- 发布时会自动替换为实际版本号
- 确保使用本地开发版本，而不是从 npm registry 安装

配置完成后，运行 `pnpm install` 会自动链接依赖。

## 🔄 与 pnpm 的集成

Lerna 与 pnpm workspaces 完全兼容：

- 依赖安装：使用 `pnpm install` 或 `lerna bootstrap`
- 包过滤：可以使用 `pnpm --filter` 或 `lerna --scope`
- 脚本运行：可以使用 `pnpm -r` 或 `lerna run`

## 📦 发布包

### 发布配置

两个包都已配置发布设置：

- **@tendaui/react**: 配置为公共包，发布到 npmjs.org
- **tendaui-react-icons**: 配置为公共包，发布到 npmjs.org

### 发布命令

```bash
# 使用 Lerna 发布所有已更改的包
pnpm release:lerna

# 发布 canary 版本（测试）
pnpm release:lerna:canary

# 发布到 next 标签
pnpm release:lerna:next

# 发布特定包
pnpm lerna:publish --scope @tendaui/react
```

### Workspace 依赖处理

发布时，Lerna 会自动：

- 将 `workspace:*` 替换为实际版本号
- 确保依赖的包先发布
- 按依赖顺序发布包

详细发布指南请参考 [PUBLISH.md](./PUBLISH.md)

## 📚 更多信息

- [Lerna 官方文档](https://lerna.js.org/)
- [pnpm workspaces 文档](https://pnpm.io/workspaces)
- [发布指南](./PUBLISH.md)
