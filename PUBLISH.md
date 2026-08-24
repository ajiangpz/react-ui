# 发布指南

项目使用 Lerna 固定版本模式管理 `@tendaui/react`、`@tendaui/icons` 和
`@tendaui/theme-generator`，通过 GitHub Actions 的 `Publish` 工作流发布。

## 发布流程

发布分为两个阶段，避免工作流直接修改受保护的 `main` 分支。

1. 在 GitHub Actions 中运行 `Publish`，选择 `patch`、`minor` 或 `beta`。
2. 工作流更新版本、构建并检查 npm 包，然后创建 `release/v*` Pull Request。
3. 等待 PR 的 lint、单元测试、类型检查和构建全部通过后合并。
4. 再次运行 `Publish`，选择 `publish`。
5. 批准 `npm` Environment 部署；工作流创建 tag 并通过 OIDC Trusted Publishing 发布。

`beta` 版本发布到 npm 的 `beta` dist-tag，正式版本发布到 `latest`。

## 本地验证

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm test
pnpm --filter @tendaui/theme-generator type-check
pnpm build
```

检查公开包内容：

```bash
pnpm --filter @tendaui/icons exec npm pack --dry-run
pnpm --filter @tendaui/react exec npm pack --dry-run
pnpm --filter @tendaui/theme-generator exec npm pack --dry-run
```

## 发布权限

每个公开包都应配置相同的 npm Trusted Publisher：

- Organization or user：`ajiangpz`
- Repository：`react-ui`
- Workflow filename：`publish.yml`
- Environment：`npm`
- Allowed action：`npm publish`

GitHub 的 `npm` Environment 负责发布审批；工作流使用 OIDC，不需要长期 npm 发布 token。

## 故障恢复

- release PR 已存在：修复失败检查后继续使用原 PR，不要重复提升版本。
- tag 推送成功但 npm 发布失败：重新运行 `Publish` 并选择 `publish`。
- npm 已存在当前版本：先确认包是否已成功发布，不要覆盖相同版本。
- OIDC 失败：核对 npm Trusted Publisher 的仓库、工作流文件名和 Environment 是否完全一致。

## 相关文档

- [Lerna Publish](https://lerna.js.org/docs/features/publish)
- [npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers)
