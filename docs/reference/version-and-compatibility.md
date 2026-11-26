---
title: 版本与兼容性
description: 查找客户端、插件的适用版本与安装要求。
---

# 版本与兼容性

找不到教程中的按钮时，先检查客户端和插件版本。

## 版本信息

| 内容 | 版本或查看位置 |
| --- | --- |
| 旧教程截图基准 | 2026-11-06，主线 `3f6b0c3`。 |
| 最新正式安装包 | [v0.2.16](https://github.com/AGI4Sci/SciForge/releases/tag/v0.2.16)。 |
| Apple Silicon 预发行版 | [v0.2.18](https://github.com/AGI4Sci/SciForge/releases/tag/v0.2.18)，2026-11-26 发布。 |
| 插件说明与扩展截图基准 | [公开源码构建 `9daddeb`](https://github.com/AGI4Sci/SciForge/commit/9daddeb)。随附桌面市场索引无可安装条目。 |
| [公开源码](https://github.com/AGI4Sci/SciForge) | 查看实际检出的提交。 |

## 界面入口

- 常用工具位于右侧纵向工具栏；窗口高度不足时，部分工具会进入“更多工具”。
- 左侧栏收窄后通常保留图标；账户和设置位于侧栏下方。窄窗口可能使用浮层。
- 选择、拖拽或粘贴文件后，可在附件托盘检查文件，发送后仍能从消息中打开文件引用。
- 通过 **扩展 → 市场** 检查 DSH 插件是否可安装。
- 协作项目分为“看板、成员、需求、共享文件、项目信息”。

完整步骤见[工作台](../workbench/workspaces-and-sessions.md)、[账户](../features/identity-access.md)和[团队协作](../features/collaboration.md)。

## 功能与安装方式

| 功能 | 使用条件 |
| --- | --- |
| Biology Room、生命科学预览 | 随应用提供，无需单独安装。 |
| Anchored Comments、Change Inspector | 须先通过兼容渠道安装并启用，按各教程核对权限。 |
| Scientific Figures | 须安装并启用兼容插件。桌面绘图执行需要受支持的 macOS、DSH、Python 与 Matplotlib。 |
| 团队协作 | 登录云端、连接设备，并取得项目权限。 |
| 获取数据、运行分析 | 使用自己配置的 Agent 工具、脚本或计算环境。 |

[插件许可证](./plugin-licenses.md)列出了各插件的版本与许可；具体安装步骤见[扩展与市场](../features/extensions.md)。

## 反馈问题

请提供系统、客户端与插件版本、操作步骤和截图。

用户手册发布在[本网站](https://agi4sci.github.io/sciforge-docs-v2/)，正文维护于[文档仓库](https://github.com/AGI4Sci/sciforge-docs-v2)。
