# GitHub Pages 部署说明

## 自动部署

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

### 触发条件

- 当代码推送到 `main` 或 `master` 分支时
- 当 `packages/tendaui-site/` 目录下的文件发生变化时
- 手动触发（在 GitHub Actions 页面点击 "Run workflow"）

### 启用 GitHub Pages

1. 进入 GitHub 仓库的 Settings
2. 找到 "Pages" 选项
3. 在 "Source" 中选择 "GitHub Actions"
4. 保存设置

### 访问地址

部署完成后，你的网站将可以通过以下地址访问：

- 如果仓库名称为 `react-ui`：`https://<username>.github.io/react-ui/`
- 如果使用自定义域名：根据你的域名配置

### Base 路径配置

`vite.config.js` 已自动配置 base 路径：
- 在 GitHub Actions 中，会自动从 `GITHUB_REPOSITORY` 环境变量获取仓库名称
- 如果需要在本地测试，可以设置环境变量 `VITE_BASE_PATH`：
  ```bash
  VITE_BASE_PATH=/your-repo-name/ pnpm run build
  ```

### 手动部署（可选）

如果需要手动部署：

```bash
# 在项目根目录
pnpm install
pnpm run build:components

# 在 tendaui-site 目录
cd packages/tendaui-site
pnpm run build

# 然后将 dist 目录的内容推送到 gh-pages 分支
```

### 注意事项

- 确保 GitHub Actions 有足够的权限（在仓库 Settings > Actions > General 中启用）
- 首次部署可能需要几分钟时间
- 如果使用自定义域名，需要在仓库根目录添加 `CNAME` 文件
