# SciForge 文档站 v2

SciForge 中文使用文档，基于 Docusaurus 3 构建并通过 GitHub Pages 发布。本版本把「功能与扩展」重构为**按内置插件逐页介绍**：23 个内置领域扩展各有一页，覆盖入口、能力、典型流程、权限边界与已知限制。

## 内容结构

```text
docs/
├── getting-started/    # 快速开始
├── cases/              # 端到端案例
├── features/           # 功能与扩展（23 个插件页）
│   ├── overview.md     # 插件总览与选择指南
│   ├── life-science-preview.md
│   ├── dataset-api.md
│   ├── ...
│   ├── evidence-and-reproducibility.md   # 证据组落地页
│   ├── automation.md                     # 自动化落地页
│   └── extensions.md                     # Skills、MCP 与扩展市场
├── workbench/          # 工作台指南
├── operations/         # 配置与运维
└── reference/          # 参考手册
```

功能页按 7 组组织：研究资料与科学对象、分析与审阅、证据与可复现、Agent 与工作台工具、自动化、协作与内容、扩展机制。

## 本地开发

```bash
npm install
npm start
```

默认开发地址为 `http://localhost:3000/sciforge-docs-v2/`。

## 构建检查

```bash
npm run typecheck
npm run build
```

静态文件生成到 `build/`。

使用 `npm run preview` 在 `http://127.0.0.1:3025/sciforge-docs-v2/` 检查静态构建。该预览服务支持视频 Range 请求。

## 页面与视频维护

首页围绕案例、快速开始与按目标分类的功能手册组织；文档页支持本地全文搜索、截图放大、键盘操作和暗色模式。

- 正文保存在 `docs/`。`npm start` 和 `npm run build` 前会自动生成全文搜索索引。
- 功能页的统一模板：定位 → 打开方式 → 能做什么 → 典型流程 → 输入输出与权限 → 已知限制 → 相关页面。
- 视频导览位于 `/guide`，支持章节跳转、中文字幕和文件下载。
- 重录流程见 [制作说明](scripts/RECORDING.md)。录制完成后运行 `npm run video:prepare`，将通过校验的视频、字幕与时间线准备到站点中，再重新构建。
- `recordings/` 是本地制作缓存，不进入版本库。网站仅发布 `static/video/` 中的最终文件。

## 发布

推送到 `main` 后，`.github/workflows/deploy.yml` 会构建并部署 GitHub Pages。

仓库需要在 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。

目标地址：`https://hanhuiyang5-web.github.io/sciforge-docs-v2/`

## 内容原则

- 功能事实以当前 SciForge 源码和真实界面为准。
- 实验性或部分可用能力必须明确标注；功能状态表未登记的能力只写“当前实现范围”。
- 公开仓库只保存审核后的文档与脱敏截图，不包含 `SciForge_private` 源码。
- 操作型页面应说明权限、外部影响、完成标志和已知限制。
- 已退出产品的能力（如 Paper Radar、OpenContent）不再写成可用功能。

## 许可

文档与站点代码以 [MIT License](./LICENSE) 开源，欢迎提交 Issue 或 Pull Request 修正内容。
