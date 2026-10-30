# 真实发布包消费验证

## 目标与命令

验证实际 tarball 在仓库外的 React + TypeScript 项目中可以安装、编译并在浏览器运行。消费端没有源码 alias，也不依赖仓库里的开发类型声明。

```bash
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
pnpm test:package
```

如果三个发布包已完成构建，可以执行 `pnpm test:package --skip-build`。本流程不会发布到 npm。

## 验证流程

1. 按依赖顺序构建 icons、react、theme-generator，通过 pnpm pack 生成 tarball。
2. 检查 tarball 内的 main、module、types、style 目标和样式加载器；拒绝未转换的 workspace 协议和私有包依赖。
3. 在系统临时目录复制 tests/package-consumer，并安装三个 tarball。消费端覆盖传递依赖中的同名包，确保使用本次构建的 icons 和 react。
4. 分别使用 Bundler 和传统 Node 模块解析执行 TypeScript 严格检查，保留 skipLibCheck: false；通过预期类型错误验证公共 Props 没有退化成 any。
5. 使用 Vite 构建生产产物，再启动本地静态服务器，通过 Playwright 验证点击计数、受控输入、按钮主题颜色、CSS 下载和主题面板。

验证脚本：scripts/test-package-consumer.mjs。临时目录在命令开始时打印，保留 tarball、独立消费项目、consumer.png、exported-theme.css 和通过后的 result.json。

## 本次定位并处理的问题

| 问题 | 原因与处理 |
| --- | --- |
| React 包缺少 es/index.d.ts | 原脚本只转译 JS；新增 tsconfig.package.json，通过 tsc 生成声明，使用已构建图标类型，避免把图标源码混入组件产物 |
| 主题生成器入口不一致 | 明确 ESM / CJS 文件格式与导出条件，ESM 使用 index.esm.js，CJS 使用 index.cjs，补齐类型及样式入口 |
| 公开包依赖私有 components | 主题生成器改为依赖公开 @tendaui/react，源码导入及 external 同步调整；开发环境仍可通过 alias 调试源码 |
| Windows 产物缺少 css.js | glob 的反斜杠路径没有正确匹配；统一匹配与输出路径为正斜杠 |
| 样式 external 相对路径错位 | 相同的相对 external ID 混淆不同组件目录；保留解析后的绝对 ID，让 Rollup 正确计算每个产物的相对导入 |
| 公开样式入口为空 | 样式提取后 JS 入口没有导入行为；为样式入口输出显式 CSS 导入，并在发布包声明样式副作用 |
| Select 公共声明不满足泛型约束 | SelectProps 的泛型约束与 TdSelectProps 保持一致，消费端严格检查可直接验证 |
| 传统 Node 解析无法找到根类型声明 | typesVersions 增加 es/* 路径保留规则，避免把 types 入口重复改写为 es/es/index.d.ts；增加 Node 模式消费测试 |
| 颜色工具声明引用缺少依赖 | 显式声明 tinycolor2 及其类型依赖，避免消费端被仓库依赖提升掩盖 |
| Slider 引用内部 utils 包 | 使用已有的同内容本地工具实现，消除私有路径依赖，函数文件哈希一致 |
| 样式路径大小写不一致 | Dock.scss 导入修正为实际 dock.scss，避免大小写敏感系统构建失败 |

## CI 与发布

- PR / 主分支 CI 新增 package-consumer 检查，安装 Chromium 后执行完整流程。
- 发布流程在构建后执行相同验证，再进入版本 PR 或发布步骤。
- 检查脚本无 npm 发布行为，正式发布仍由已有工作流的独立步骤控制。

## 验证范围

- 消费环境固定为 React / React DOM 18.3.1、TypeScript 5.6.2、Vite 7.1.11，使用 React 18 类型声明。
- 本次针对浏览器 ESM 消费流程，不代表已覆盖所有 React 版本、SSR、Node 直接运行组件或所有构建工具。
- 本机可回退到 Windows Chrome；也可以使用 PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH 指定浏览器。
- 本地验证结果不等于 GitHub 托管工作流已执行通过；CI 配置需在提交后由平台实际运行。
- 保留现有构建期 Tree Shaking 设置，本任务不声明体积降幅或首屏收益。

## 本地验证记录（2026-10-30）

- `pnpm test:package`：通过，包含重新构建三个包、打包、独立安装、严格类型检查、生产构建和浏览器验证。
- 浏览器检查覆盖点击计数、受控输入、主色生效、主题 CSS 下载、抽屉完整进入视口及面板内容可见，无 pageerror。
- `pnpm test:unit`：4 个测试文件、40 个测试通过。
- `pnpm lint`、主题生成器 type-check：通过。
- `pnpm install --lockfile-only --frozen-lockfile --offline --ignore-scripts`：通过。
- 完整运行产物保存在 `C:/Users/Administrator/AppData/Local/Temp/tendaui-consumer-w2FoGF`；加强后的抽屉可见性断言另在 `tendaui-consumer-sIGM1f` 的同版生产产物上通过。
- 构建仍有既有 Sass API 弃用提示，以及包含主题工具的消费示例大 Chunk 提示；不以本次结果宣称完成体积优化。
- 发布准备阶段已使用三个 1.3.6 tarball 另行验证 Bundler / Node 双模式类型检查、生产构建与浏览器流程，通过记录保存在 `C:/Users/Administrator/AppData/Local/Temp/tendaui-consumer-FibQcc`。
