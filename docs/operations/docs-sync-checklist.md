---
title: 文档同步检查清单
description: 新公开快照发布后，核对域清单、版本号、已退出功能与公开边界，并更新文档站与 wiki。
---

# 文档同步检查清单

> 维护清单，不进入站点侧边栏。适用对象：文档站维护者、导出工具维护者。

每次 `AGI4Sci/SciForge` 发布新的公开快照后，按顺序执行。目标不是"改完文档"，而是让文档站、wiki 与当前快照的源码、界面、域清单保持一致，并且不把非公开能力写回公开页面。

## 0. 记录基线

```bash
git -C <public-snapshot> rev-parse HEAD
git -C <public-snapshot> log --oneline -3
```

- 把 commit 记入本仓 `README.md` 的"功能基线"，以及 wiki 各页页脚（`_最后核对：YYYY-MM-DD · 公开快照 <sha>_`）。
- 若新快照只改了 README、链接或非功能文件，在 PR 描述里说明"功能代码未变"，不要顺手改功能页。

## 1. 核对域清单与版本号

```bash
for f in packages/domains/*/package.json; do
  node -p "const p=require('./$f'); p.name + ' ' + p.version"
done
```

- 与 `docs/features/*.md` 末尾的"实现依据：`@sciforge/domain-... vX.Y.Z`"逐页对照；版本号必须完全一致。
- 新增域：补功能页、`sidebars.ts`、`docs/features/overview.md` 分组表与数量。
- 删除域：删除页面、侧栏条目、总览表和所有内链。
- 计数规则：`content-space-mock-provider` 是 development-only，不计入"内置领域扩展"数量。当前公开快照为 **22**。
- 页面数量以 `docs/features/` 中的插件页为准，不含 `overview`、`extensions`、`automation`、`evidence-and-reproducibility` 四个落地页。

## 2. 检查已退出功能

```bash
git grep -n "<功能名或包名>" -- src packages/domains packages/workers | grep -v '\.test\.'
```

- 只剩 `*.test.ts`、worker 包或历史文档引用，说明界面入口已退出：从文档站、`src/data/tour.json`、`README` 和 wiki 中删除对应章节、截图与入口描述。
- 在 `docs/features/overview.md` 的"成熟度与边界"保留一句"已退出当前产品线"，不要留操作步骤。
- 同步检查 `src/data/search-index.json`：它由构建脚本生成，改完正文后重新构建即可，不要手改。

## 3. 复核公开边界

```bash
git grep -n "remote-ssh\|Remote SSH\|远程资源向导\|VPN\|Zulip" -- docs README.md
```

- 允许：一句"该能力未包含在开源版本"的边界说明。
- 不允许：连接向导、SSH 目标登记、VPN 网关、服务端部署、Zulip 服务端适配的操作步骤或截图。
- 检查导出工具的排除规则 `sciforge-open-source-tooling/scripts/public-source-export.mjs`：被排除的 wiki 页面和死链清理规则要与当前页面集合一致。
- 不修改任何仓库可见性，不发 Release，不动 `SciForge-cloud` 与 `SciForge-Zulip`。

## 4. 更新文档站与 wiki

- 文档站：在 `AGI4Sci/sciforge-docs-v2` 开 PR，一页一主题，合并到 `main` 后自动部署。
- wiki：修改落在 `SciForge_client` 的 `docs/wiki/`，再由导出工具同步到公开仓；不要直接改公开仓的 `docs/wiki/`（下次导出会覆盖）。
- 功能页统一模板：定位 → 打开方式 → 能做什么 → 典型流程 → 输入输出与权限 → 已知限制 → 相关页面。
- 入口名称必须取自快照的 `src/renderer/src/locales/zh/*.json` 与 `packages/domains/*/src/renderer/*messages.ts`，不要沿用旧截图里的文案。

## 5. 构建验证

```bash
npm ci
npm run typecheck
npm run build
```

- `onBrokenLinks` 为 `throw`：任何内链失效都会让构建失败，构建通过即代表站内链接可达。
- 构建前会自动生成搜索索引；确认 `src/data/search-index.json` 有变更再提交。
- 若改动了视频章节或旁白脚本，另跑 `node scripts/check-tour.cjs`；成片未重录时，不要只改 `tour-plan.cjs` 就宣称视频已更新。

## 6. 部署与线上抽查

```bash
gh run watch
curl -sI https://agi4sci.github.io/sciforge-docs-v2/ | head -1
curl -s https://agi4sci.github.io/sciforge-docs-v2/docs/features/overview | grep -o "<title>[^<]*"
curl -s https://agi4sci.github.io/sciforge-docs-v2/docs/reference/feature-status | grep -o "<title>[^<]*"
```

- 抽查 3 页：首页、功能总览、功能状态（或本次改动页）。
- 确认部署 workflow 成功，且线上标题与最新内容一致；只看本地 `build/` 不算发布验证。

## 7. 收尾

- PR 描述写清：快照 commit、变更页面、验证命令与退出码、未完成项。
- 受影响的录屏旁白或画面列入"需重录"清单，不在文档 PR 中自行合成视频。
- 若发现非文档文件（如 `INSTALL.md`、`DEVELOPMENT`）与快照不一致，单独开 issue 或后续 PR，不要混进文档同步 PR。