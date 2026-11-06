---
title: SciForge 使用文档
description: 从第一次安全任务开始，逐步掌握 SciForge 的科研工作台、证据链、自动化与扩展能力。
sidebar_position: 1
slug: /intro
---

# SciForge 使用文档

SciForge 是面向科研任务的智能工作台。它让 **Codex**、**Claude Code** 或 **DeepSeek Harness (DSH)** 在明确的工作区、工具与权限边界内执行任务，并把文件、命令、图表、证据和人工审查保留在同一条可继续的工作流中。

:::info[内容基线]

本手册按 **2026-11-06 的最新客户端**更新。界面或按钮与教程不同时，请先查看[版本与兼容性](./reference/version-and-compatibility.md)。

:::

## 推荐阅读顺序

| 顺序 | 文档集 | 你将完成什么 |
| ---: | --- | --- |
| 1 | [五分钟快速开始](./getting-started/five-minute-quickstart.md) | 在只读沙箱中完成第一次本地任务 |
| 2 | [端到端案例](./cases/overview.md) | 理解 SciForge 如何连接科研问题、执行、证据与交付 |
| 3 | [功能与扩展](./features/overview.md) | 按任务查找内置模块、独立插件，以及 Skill、MCP 与插件市场 |
| 4 | [权限与安全](./operations/security.md) | 选择合适的沙箱、审批和文件访问范围 |
| 5 | [功能状态](./reference/feature-status.md) | 核对已验证、部分可用和实验性能力 |

## 先理解四个对象

| 对象 | 作用 |
| --- | --- |
| **工作区** | 指向本地或远程项目目录，决定文件、Git 和终端上下文 |
| **会话** | 保存围绕一个目标的消息、执行过程和结果 |
| **Runtime** | 由 Codex、Claude Code 或 DSH 负责规划、调用工具和处理文件 |
| **科研记录** | 用产物版本、Checkpoint、Evidence DAG 和 Research Dossier 固定结果与依据 |

## 文档如何标注能力

- **已验证**：已在注明的版本和平台完成实际操作。
- **部分可用**：主要入口存在，但仍有平台、数据或操作限制。
- **实验性**：适合作为集成或研究路线，不应写成开箱即用功能。
- **未发布**：尚无对应公开发行包，可能已有实现。

第一次使用时，请直接进入 [五分钟快速开始](./getting-started/five-minute-quickstart.md)。
