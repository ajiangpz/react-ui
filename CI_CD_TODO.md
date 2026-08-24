# CI/CD 优化 TODO

## P0：构建与发布可靠性

- [x] 统一本地与 GitHub Actions 使用的 Node.js、pnpm 版本，并更新锁文件
  - 验收：`packageManager`、工作流版本和 `pnpm-lock.yaml` 格式一致，`pnpm install --frozen-lockfile` 成功。
- [x] 新增 Pull Request / push CI 质量门禁
  - 验收：并行执行 ESLint、单元测试、类型检查和构建；同一分支的新提交会取消旧任务。
- [x] 调整手动发布顺序，避免 npm 已发布但 Git 提交或 tag 推送失败
  - 验收：版本提交和 tag 成功推送后才发布 npm；发布失败可以从 tag 工作流恢复。
- [x] 发布前执行质量检查和包内容检查
  - 验收：发布任务执行 lint、单元测试、类型检查、构建，并通过 `npm pack --dry-run` 检查公开包内容。

## P1：部署与供应链安全

- [x] 补全文档站点部署的变更触发范围
  - 验收：组件、图标、工具包、共享配置和锁文件变更都会触发站点部署。
- [x] 优化 Pages 部署并发策略
  - 验收：同一时间只保留最新的站点部署任务。
- [x] 为 npm 发布启用 GitHub Environment 保护
  - 验收：发布 job 使用 `npm` environment，可在仓库设置中配置审批与分支限制。
- [x] 为 npm 发布启用 provenance
  - 验收：发布工作流拥有 `id-token: write` 权限，并通过 npm 配置生成 provenance 声明。
- [x] 迁移到 npm Trusted Publishing
  - 验收：npm 包配置可信发布者后，不再依赖长期 npm token。
- [x] 固定第三方 Action 到完整 commit SHA
  - 验收：关键发布/部署工作流不再直接信任可移动的主版本标签，并由 Dependabot 更新。

## P2：效率与维护性

- [x] 明确 Lerna 与 Changesets 的唯一版本管理方案
  - 验收：发布文档、脚本和自动化只描述并使用一种版本流程。
- [x] 引入受影响包构建与远程缓存
  - 验收：普通 PR 不再无条件构建所有 workspace package，并记录缓存命中情况。
- [x] 增加依赖与 GitHub Actions 自动更新
  - 验收：Dependabot 或 Renovate 定期提交依赖更新 PR。
- [x] 增加定期安全扫描
  - 验收：依赖审查、CodeQL 或等效扫描有明确的定期执行与告警入口。

## 实施记录

- 2026-08-24：建立清单，开始处理 P0 项。
- 2026-08-24：统一 pnpm 8.15.0，增加 CI 门禁、发布检查和 npm environment，完善 Pages 触发条件。
- 2026-08-24：pnpm 11 锁文件迁移因本机获取工具超时，暂不升级，避免提交未验证的锁文件。
- 2026-08-24：启用 npm provenance，并增加 npm 与 GitHub Actions 的每周 Dependabot 更新。
- 2026-08-24：Action 升级并固定到完整 SHA；CI 接入 Nx 缓存及受影响包构建；增加每周依赖审计。
- 2026-08-24：确定 Lerna 为唯一版本管理工具，移除未使用的 Changesets 配置和文档。
- 2026-08-24：为三个公开包绑定 `ajiangpz/react-ui` 的 `publish.yml` 与 `npm` environment，完成 Trusted Publishing 迁移。
