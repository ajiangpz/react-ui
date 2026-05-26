# Lerna 脚本说明

## `pnpm lerna:changed`

查看自上一次 release tag 以来，Lerna 认为哪些包发生了需要发布的变更。

这个命令只做检查，不会修改文件。发布前可以先运行它，确认 Lerna 会把哪些包纳入版本升级或发布流程。

## `pnpm lerna:version`

根据 Lerna 配置为发生变更的包升级版本号，并生成 release commit 和 git tag。

本地手动发版或排查版本问题时可以使用这个脚本。自动化发布 workflow 会直接调用 `pnpm lerna version ...`，并显式传入 release type、dist tag 等发布参数。
