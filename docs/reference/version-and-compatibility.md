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
| 插件说明与扩展截图基准 | [公开源码构建 `9daddeb`](https://github.com/AGI4Sci/SciForge/commit/9daddeb)。该构建随附的桌面市场索引当时无可安装条目。 |
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

## 历史案例核验记录

### Pasilla 三人协作

[案例](../cases/pasilla-collaboration.md)的三账号运行和截图来自 **2026-10-27**。分析覆盖数据前 50 行、7 个样本，交付为 Markdown 报告及成员说明。

- B 的第 1 版包含 350 个子集 CPM 数值，逐项复算一致。第 2 版补齐校验，保留了这 350 个数值。
- C 任务目录中的两份输入，与 A 采纳的第 2 版交付清单逐文件核对一致。
- 用同一份摘录复算 C 的报告，前 5 名排序、组均值和差值均与报告一致，数值核对到小数点后 6 位。

### 复杂科研图件

[案例](../cases/scientific-figures-complex.md)运行于 **2026-11-05**。案例一至四的原始运行使用 v8/v9，案例五使用 v10。各案例保留了数据、代码、日志和产物。

- 案例一中，10 个分组与时间点组合的统计值与独立计算一致。案例三重新生成了同样的两张图。
- 案例四的输出清单包含带空格、中文或大写扩展名的文件。
- 案例五的 CSV 与下一次运行的输入副本一致。中断后补存了原运行记录。
- 环境核验截至生成环境记录，记录包括精确包版本和重建说明。使用条件见[科研图件](../features/scientific-plotting.md#当前能力与使用限制)。

## 反馈问题

请提供系统、客户端与插件版本、操作步骤和截图。

用户手册发布在[本网站](https://agi4sci.github.io/sciforge-docs-v2/)，正文维护于[文档仓库](https://github.com/AGI4Sci/sciforge-docs-v2)。
