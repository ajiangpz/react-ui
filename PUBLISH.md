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

发布工具链固定使用 Node.js `22.20.0` 和 npm `11.6.2`。该 npm 版本兼容当前
Node.js，并满足 Trusted Publishing 的版本要求。发布模式会在构建和推送 tag 前
安装并打印工具版本；不要使用 `npm@latest`，以免 npm 的引擎要求变化导致发布失败。

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

GitHub 环境审批与 npm Trusted Publisher 是两套独立配置；仅通过 GitHub 审批并不授予
npm 上传权限。需要在以下三个包的 Settings → Trusted publishing 分别添加上述配置：

- [@tendaui/icons](https://www.npmjs.com/package/@tendaui/icons/access)
- [@tendaui/react](https://www.npmjs.com/package/@tendaui/react/access)
- [@tendaui/theme-generator](https://www.npmjs.com/package/@tendaui/theme-generator/access)

字段区分大小写；Workflow filename 只填 `publish.yml`，不要填写完整路径。
配置完成后重新运行发布模式。npm 的配置保存时不会验证匹配关系，需通过实际发布验证。

## 故障恢复

- release PR 已存在：修复失败检查后继续使用原 PR，不要重复提升版本。
- tag 推送成功但 npm 发布失败：重新运行 `Publish` 并选择 `publish`。
- 如果修复了工作流配置，需在最新 `main` 上重新触发 `Publish` 并选择 `publish`；
  旧 run 的 Re-run 仍使用旧工作流定义。保留已有版本和 tag，无需再次提升版本。
- npm 已存在当前版本：先确认包是否已成功发布，不要覆盖相同版本。
- OIDC 失败：核对 npm Trusted Publisher 的仓库、工作流文件名和 Environment 是否完全一致。
- `E404 Not found` 出现在发布阶段：公开包存在也可能因为 Trusted Publisher 未配置或
  身份不匹配而返回 404。日志中 GitHub id-token 请求的 HTTP 200 只代表拿到了 GitHub
  身份令牌；检查后续 `oidc` 日志，确认 npm token exchange 是否成功，再核对上述 npm 侧设置。
- 每个公开包的 `repository.url` 必须指向当前 GitHub 仓库；消费验证会检查真实 tarball
  的该字段，避免上传时因 provenance 仓库声明不匹配而被拒绝。

### Rekor 签名记录冲突

`TLOG_CREATE_ENTRY_ERROR ... (409) an equivalent entry already exists` 表示签名记录已
写入 Rekor，但不代表 npm 包已发布。当前 Lerna 使用的 `sigstore@3.1.0` 默认不读取
冲突记录；项目通过 pnpm 的 `patchedDependencies` 启用其已有的 `fetchOnConflict`
能力，读取原记录继续生成 provenance。补丁不会关闭签名，读取失败仍会中止发布。

补丁位于 `patches/sigstore@3.1.0.patch`，由 lockfile 固定；升级 Lerna / sigstore 时
应检查上游是否已包含修复，并运行 `node --test scripts/__tests__/provenance.test.mjs`。
该测试从 Lerna 的实际依赖解析签名库，通过本地 HTTP 服务验证 409 恢复和失败路径。
发布时串行上传包，减少并发请求。若发布部分成功，保留原版本，再次选择 `publish`，
Lerna 的 `from-package` 会检查 registry，只补发尚未存在的版本。

上游问题：[npm/cli#10078](https://github.com/npm/cli/issues/10078)、
[sigstore-js#1708](https://github.com/sigstore/sigstore-js/issues/1708)。

## 相关文档

- [Lerna Publish](https://lerna.js.org/docs/features/publish)
- [npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers)
