# 在 npm 上创建 @tendaui Scope 指南

## 📋 概述

在 npm 上使用 `@tendaui` scope 有两种方式：

1. **创建 npm 组织（推荐）** - 适合团队协作
2. **使用个人用户名** - 如果用户名恰好是 `tendaui`

## 🏢 方式一：创建 npm 组织（推荐）

### 步骤 1: 登录 npm

```bash
npm login
```

### 步骤 2: 创建组织

1. 访问 [npm 官网](https://www.npmjs.com/)
2. 登录你的账户
3. 点击右上角头像 → **"Add Organization"** 或访问 https://www.npmjs.com/org/create
4. 输入组织名称：`tendaui`
5. 选择组织类型：
   - **Free** - 公开包免费
   - **Pro** - 需要付费，但可以发布私有包
6. 完成创建

### 步骤 3: 验证组织创建

```bash
# 查看你的组织
npm org ls tendaui

# 查看组织成员
npm team ls tendaui
```

### 步骤 4: 添加团队成员（可选）

```bash
# 添加成员
npm team add tendaui:developers <username>

# 查看团队成员
npm team ls tendaui
```

### 步骤 5: 配置包的发布权限

确保 `package.json` 中配置了正确的 `publishConfig`：

```json
{
  "name": "@tendaui/components",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

**重要说明**：

- `"access": "public"` - 公开包（免费组织可以使用）
- 如果不设置 `access`，scoped 包默认是私有的（需要付费）

## 👤 方式二：使用个人用户名

如果你的 npm 用户名恰好是 `tendaui`，可以直接使用：

```bash
# 检查当前用户名
npm whoami

# 如果用户名是 tendaui，可以直接使用 @tendaui scope
```

## 🔐 发布权限配置

### 检查发布权限

```bash
# 检查当前登录用户
npm whoami

# 检查包的访问权限
npm access ls-packages

# 检查特定 scope 的权限
npm access ls-packages @tendaui
```

### 设置包的访问权限

```bash
# 将包设置为公开（免费）
npm access public @tendaui/components

# 将包设置为私有（需要付费账户）
npm access restricted @tendaui/components
```

## 📦 发布配置示例

### 在 package.json 中配置

```json
{
  "name": "@tendaui/components",
  "version": "1.0.0",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

### 在 .npmrc 中配置（可选）

在项目根目录创建或更新 `.npmrc` 文件：

```ini
# 设置默认的访问权限为公开
@tendaui:registry=https://registry.npmjs.org/
```

或者在全局配置：

```bash
# 设置所有 @tendaui scope 的包为公开
npm config set @tendaui:registry https://registry.npmjs.org/
```

## 🚀 发布包

### 首次发布

```bash
# 1. 确保已登录
npm login

# 2. 构建包
pnpm build:all

# 3. 发布（使用 Lerna）
pnpm release:lerna

# 或手动发布
npm publish --access public
```

### 后续发布

```bash
# 使用 Lerna 自动发布
pnpm release:lerna

# 或发布特定包
npm publish packages/components --access public
```

## ✅ 验证发布

### 检查包是否已发布

```bash
# 查看包信息
npm view @tendaui/components

# 查看包的版本
npm view @tendaui/components versions

# 查看最新版本
npm view @tendaui/components version
```

### 在浏览器中查看

访问：https://www.npmjs.com/package/@tendaui/components

## 🔧 常见问题

### Q1: 发布时提示 "You must verify your email before publishing packages"

**解决方案**：

1. 检查邮箱并验证
2. 访问 https://www.npmjs.com/email-edit
3. 点击验证链接

### Q2: 发布时提示 "You do not have permission to publish"

**解决方案**：

1. 确保你是组织的成员
2. 检查组织权限设置
3. 联系组织管理员添加权限

```bash
# 检查组织成员
npm team ls tendaui

# 添加自己为成员（如果是组织所有者）
npm team add tendaui:developers <your-username>
```

### Q3: Scope 名称已被占用

**解决方案**：

1. 尝试其他名称，如 `@tendaui-ui`、`@tendaui-lib`
2. 联系占用该 scope 的用户
3. 使用个人用户名作为 scope

### Q4: 如何将现有包迁移到新 scope

如果之前使用的是无 scope 的包名（如 `tendaui-react`），想迁移到 `@tendaui/react`：

1. **创建新包**：使用新名称发布
2. **废弃旧包**：在旧包中标记为废弃

```bash
# 废弃旧包，并提示用户使用新包
npm deprecate tendaui-react@* "This package has been renamed to @tendaui/react. Please use @tendaui/react instead."
```

### Q5: 如何设置包的访问权限

```bash
# 设置为公开（免费）
npm access public @tendaui/components

# 设置为私有（需要付费）
npm access restricted @tendaui/components

# 查看当前权限
npm access ls-packages
```

## 📚 相关资源

- [npm 组织文档](https://docs.npmjs.com/organizations)
- [npm scope 文档](https://docs.npmjs.com/cli/v9/using-npm/scope)
- [npm 发布文档](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [npm 访问控制文档](https://docs.npmjs.com/cli/v9/commands/npm-access)

## 🎯 当前项目配置

当前项目中的包已配置为使用 `@tendaui` scope：

- `@tendaui/components` - 组件源代码包
- 其他包可以按需添加 scope

所有包的 `publishConfig` 都已设置为：

```json
{
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

这意味着发布时包将是公开的，任何人都可以安装使用。
