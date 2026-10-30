---
title: 功能与扩展总览
description: 按插件浏览 SciForge 内置领域扩展：从资料、分析、证据到协作，每个插件一页。
sidebar_position: 1
---

# 功能与扩展总览

SciForge 随安装包提供 **23 个内置领域扩展（bundled domain extension）**。它们以插件为单位独立拥有能力、界面入口与权限边界，并在扩展中心统一列出。本章一节一页，逐个说明每个插件的入口、能做什么、产出什么，以及当前限制。

:::info[本页所说的“插件”]
指随应用编译、无需单独下载的内置领域扩展（trusted compile-time）。扩展中心里的本地安装包、Agent Skill 与 MCP Server 属于另外三类对象，见 [Skills、MCP 与扩展](./extensions.md)。
:::

![SciForge 扩展中心](/img/docs/guides/extensions-center.png)
*扩展中心把内置领域扩展、本地安装包与 Skills 分开展示，并标注来源、版本与状态。*

## 按科研阶段找插件

### 研究资料与科学对象

| 插件 | 解决什么问题 | 主要入口 |
| --- | --- | --- |
| [生命科学预览](./life-science-preview.md) | 在工作区里直接查看序列、结构、组学、光谱和影像文件，不必先转成文本 | 文件预览 |
| [数据集 API](./dataset-api.md) | 登记公共生物数据库与对象存储，按计划拉取、整理数据并留下来源 | 会话结果卡片、Create Loop 资源面板 |
| [Biology Room](./biology-room.md) | 把生物学实验、样本与运行记录组织成可继续的工作区对象 | 工作区文件预览、能力调用 |
| [科学计算](./scientific-compute.md) | 以确定性的本地 Provider 执行受治理的计算步骤 | 能力调用 |

### 分析与审阅

| 插件 | 解决什么问题 | 主要入口 |
| --- | --- | --- |
| [科学绘图](./scientific-plotting.md) | 从已验证的派生表生成可复跑、可溯源的科研图 | 右侧面板 |
| [图片审改](./visual-review.md) | 对图片和图表做人工审阅，把意见明确回传给 Agent | 右侧面板 |
| [锚定批注](./anchored-comments.md) | 把批注锚定到文件、文本位置或选区，供人和 Agent 共用 | 顶部工具栏、全局浮层 |

### 证据与可复现

| 插件 | 解决什么问题 | 主要入口 |
| --- | --- | --- |
| [产物版本](./artifact-versions.md) | 为单个产物保存不可变版本、比较差异并恢复为新版本 | 科研档案面板（研究摘要） |
| [Git 检查点](./git-checkpoints.md) | 固定工作区某一阶段的 Git 状态，便于回到已知基线 | 右侧面板、顶部工具栏 |
| [研究检查点](./research-checkpoints.md) | 保存一次科研阶段的上下文与恢复位置，让下一次继续有据可依 | 会话结果卡片 |
| [变更检查](./change-inspector.md) | 汇总一次会话真正改了哪些文件，避免只看 Agent 总结 | 右侧面板、顶部工具栏 |
| [Evidence DAG](./evidence-dag.md) | 把会话中的主张连接到来源、方法、图表与限制 | 右侧面板 |
| [Project DAG](./project-dag.md) | 跨会话汇总项目级目标、主张、审查状态与决策 | 右侧面板 |
| [科研档案](./research-dossier.md) | 把研究问题、输入、方法、结果与限制整理成对外可读的交付 | 右侧面板 |

### Agent 与工作台工具

| 插件 | 解决什么问题 | 主要入口 |
| --- | --- | --- |
| [终端](./terminal.md) | 在受控工作区里执行命令，并保留命令与输出 | 底部面板、顶部工具栏 |
| [浏览器预览](./browser-preview.md) | 在应用内打开网页，并让 Agent 在明确审批下操作页面 | 右侧面板 |
| [电脑操作](./computer-use.md) | 让支持的 Runtime 通过本地 Backend 操作桌面应用 | MCP、系统权限 |
| [远程 SSH](./remote-ssh.md) | 连接实验室服务器，把远程目录当工作区使用 | 右侧面板、工作区 |

### 自动化

| 插件 | 解决什么问题 | 主要入口 |
| --- | --- | --- |
| [Create Loop](./create-loop.md) | 用多节点流程串起 AI 任务、条件、HTTP、审批与子流程 | 顶部工具栏、右侧面板 |

### 协作与内容

| 插件 | 解决什么问题 | 主要入口 |
| --- | --- | --- |
| [身份与登录](./identity-access.md) | 管理本地账户、OIDC 登录、设备注册与凭据边界 | 顶部账户入口 |
| [协作](./collaboration.md) | 让多人在项目中分工、领取任务、审阅与交付结果 | 主工作区 |
| [内容空间](./content-space.md) | 在 Provider 内容空间中上传、下载并打开原生文档 | 右侧面板 |
| [思源笔记](./siyuan.md) | 把自备的远程思源服务接成整页编辑器，并自动归档任务摘要 | 主工作区 |

## 怎么选

- **先看资料**：文件打不开或看不懂格式，从 [生命科学预览](./life-science-preview.md) 开始。
- **先取数据**：需要公共数据库或对象存储，用 [数据集 API](./dataset-api.md) 登记来源，再让 Agent 基于来源工作。
- **要出图**：图表用 [科学绘图](./scientific-plotting.md)，审改走 [图片审改](./visual-review.md)，版本用 [产物版本](./artifact-versions.md) 固定。
- **要交付**：按“变更检查 → 检查点 → Evidence DAG → 科研档案”的顺序固化，见 [证据与可复现](./evidence-and-reproducibility.md)。
- **要重复执行**：单条指令用 [定时任务](./automation.md)，多步骤用 [Create Loop](./create-loop.md)。
- **要团队协作**：先确认 [身份与登录](./identity-access.md)，再进入 [协作](./collaboration.md)。
- **要扩展模型能力**：Skill、MCP 与本地安装包不改变插件清单，见 [Skills、MCP 与扩展](./extensions.md)。

## 成熟度与边界

- 每个插件的成熟度以 [功能状态与限制](../reference/feature-status.md) 为准；页面正文只描述当前实现范围，不把源码注册写成已完成验证。
- **Paper Radar** 与 **OpenContent** 已退出当前产品线，旧文档和旧截图中的相关入口不再代表可用功能。
- 内容空间当前以用户自备的 **思源** 服务为主要 Provider；本地 mock Provider 只用于测试，不作为用户功能。
- 扩展市场是否可安装以应用内当前索引为准；未上架或被阻止（blocked）的条目会写明原因，这不影响内置插件使用。

## 与其他章节的关系

- 工作台如何组织工作区、会话和审批：见 [工作台指南](../workbench/workspaces-and-sessions.md)。
- Runtime、模型与安全边界：见 [Runtime 与模型](../getting-started/runtime-and-models.md) 和 [权限与安全](../operations/security.md)。
- 从完整科研任务理解这些插件如何配合：见 [端到端案例](../cases/virtual-cell-evidence-atlas.md)。
