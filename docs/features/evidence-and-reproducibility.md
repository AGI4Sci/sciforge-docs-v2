---
title: 证据与可复现性
description: 使用产物版本、Checkpoint、Evidence DAG 与 Research Dossier 固定科研过程和结果。
sidebar_position: 2
---

# 证据与可复现性

SciForge 通过产物版本、运行记录和来源关联，保存科研任务的输入、过程与结果，方便复查和继续研究。

按需要选择记录方式。产物版本、检查点、证据图和科研档案使用应用内置入口；变更检查需要安装并启用插件。版本要求见[版本与兼容性](../reference/version-and-compatibility.md)。

| 记录功能 | 用途与提供方式 |
| --- | --- |
| [产物版本](./artifact-versions.md) | 保存单个产物的独立版本，比较与恢复历史结果 |
| [Git 检查点](./git-checkpoints.md) | 在任务开始和结束时自动保存 Git 工作区状态 |
| [研究检查点](./research-checkpoints.md) | 自动保存已完成回合的研究摘要、来源与文件引用 |
| [变更检查](./change-inspector.md) | 通过插件检查当前会话已记录的文件改动 |
| [Evidence DAG](./evidence-dag.md) | 保存并检查当前会话的结论与证据关系 |
| [Project DAG](./project-dag.md) | 手动汇总各会话已保存的证据图，检查项目进展 |
| [科研档案](./research-dossier.md) | 阅读选定的研究记录，核对版本与限制并准备交付 |

## 选择正确的记录对象

| 对象 | 解决的问题 | 典型内容 |
| --- | --- | --- |
| **会话** | 任务是如何推进的？ | 消息、工具调用、命令、审批和最终回答 |
| [**Artifact Version**](./artifact-versions.md) | 某个图表或文件如何演变？ | 产物路径、版本、输入与生成信息 |
| [**Git Checkpoint**](./git-checkpoints.md) | 工作区文件处于什么阶段？ | Git 状态与阶段性代码快照 |
| [**Research Checkpoint**](./research-checkpoints.md) | 一次科研阶段如何继续？ | 研究上下文、关键产物和恢复位置 |
| [**Evidence DAG**](./evidence-dag.md) | 主张由什么支持或反驳？ | 主张、来源、方法、产物、限制及关系 |
| [**Research Dossier**](./research-dossier.md) | 最终交付如何被他人阅读？ | 研究问题、输入、方法、结果、可信度和局限 |

## 建立一条可复查链

推荐顺序：

1. 在任务开始时记录工作区、输入版本和目标；Git 工作区会自动保存任务开始前的检查点。
2. 完成分析后，保存实际来源、命令、参数、结果文件和图表，并为需要保留的产物保存独立版本。
3. 等待本轮研究记录保存，打开科研档案核对摘要、引用与选定版本。摘要记录和实际文件应分别确认。
4. 在 Evidence DAG 点击 **更新**，等待证据图保存完成，再逐项检查结论与来源的关系、反证和缺失信息。
5. 需要跨会话汇总时，先确认各会话证据图已保存，再到 Project DAG 点击 **立即更新**；等待完成后审查当前项目图。
6. 在科研档案中检查选定记录和限制，交付前核对相关文件、版本及分享权限。

![SciForge 科研档案面板](/img/docs/guides/research-dossier.jpg)
*图 1：科研档案同时展示研究叙述、选定版本、可信度摘要和需要关注的限制。*

## 让 Agent 留下完整记录

可以在任务中加入：

> 完成分析后，把研究问题、输入文件、使用的方法、关键参数、结果和局限整理到科研档案。每条关键结论应能回到对应来源、派生表或图表；无法确认的内容标记为未验证。

不要只要求“生成 Evidence DAG”。先明确哪些主张值得审查、哪些数据能直接支持它们，以及哪些解释仍是候选假设。

## 人工审查清单

- 每个关键数字能否回到输入文件和计算步骤？
- 图表是否来自已验证派生表，而不是手工改过的中间文件？
- 结论是否混淆关联、预测与因果？
- 反证、warning 和缺失数据是否仍然可见？
- 复跑所需的代码 commit、环境、参数和随机种子是否齐全？
- Checkpoint 是否对应已经核对的 Git 状态？

## 使用前确认

独立插件需要先安装并启用。安装要求见[插件列表](../reference/plugin-licenses.md)。

证据图请使用应用内置入口。可选的独立 Evidence DAG 插件目前尚不能在应用中完整使用；可选插件的可用情况与许可证见[插件列表](../reference/plugin-licenses.md)。

[科研图件](./scientific-plotting.md)独立保存代码、输入、环境、运行与图片历史，不会自动向 Artifact Versions 或 Evidence DAG 登记。将图件纳入交付时，应明确关联实际输入、运行与输出，重新核对后再形成主张。

## 数据边界

Evidence DAG 和 Research Dossier 只有在当前工作区与会话已有相应数据时才会显示有意义的内容。空面板不代表功能故障；先让任务生成明确的主张、来源和产物记录。

案例：[ECCITE-seq 跨尺度虚拟细胞证据图](../cases/virtual-cell-evidence-atlas.md)。
