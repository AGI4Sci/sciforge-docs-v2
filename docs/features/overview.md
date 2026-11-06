---
title: 功能与扩展总览
description: 按用户任务选择工作台、科研分析、证据、协作与扩展能力。
sidebar_position: 1
---

# 功能与扩展总览

从下表选择你想完成的任务。内置功能可直接打开，独立插件需要安装；Skill 提供工作方法，MCP 连接外部工具。版本信息见[版本与兼容性](../reference/version-and-compatibility.md)。

## 从你的任务开始

| 想完成什么 | 阅读入口 | 当前形态与条件 |
| --- | --- | --- |
| 打开项目、继续会话、查看或编辑文件 | [工作台](../workbench/workspaces-and-sessions.md) | 本地工作区、会话与适用格式的文件预览；内容过长或文件不支持编辑时，页面会显示原因。 |
| 连接模型与执行者 | [Runtime 与模型](../getting-started/runtime-and-models.md) | Codex、Claude Code、DSH 分别配置；模型接入与工具权限不是同一件事。 |
| 查看序列、结构、组学、影像和光谱 | [生命科学预览](./life-science-preview.md) | 随应用提供，无需单独安装。 |
| 组织生物学对象与实验记录 | [Biology Room](./biology-room.md) | 随应用提供，用于整理相关文件和注释。 |
| 从数据和代码绘图、修改与接受候选 | [Scientific Figures](./scientific-plotting.md) | 需要安装兼容插件，并准备 Python 和所需依赖。 |
| 对文字或资源添加锚定批注 | [Anchored Comments](./anchored-comments.md) | 独立插件；真实捕获与外部反馈分别有权限要求。 |
| 检查 Agent 实际修改 | [Change Inspector](./change-inspector.md) | 需安装插件；让 Agent 列出本次会话的文件差异，超出长度时会提示。 |
| 保存产物与研究依据 | [证据与复现](./evidence-and-reproducibility.md) | 保存文件版本、研究阶段和结论来源；图件记录需另行关联。 |
| 执行重复任务 | [定时任务](./automation.md)、[Create Loop](./create-loop.md) | 需要应用运行及对应执行者；多步流程与单条定时指令分别配置。 |
| 登录、连接设备、加入项目并交付任务 | [账户](./identity-access.md)、[团队协作](./collaboration.md) | 本地账户与云端身份分开，团队操作还需要服务可用和角色授权。 |
| 使用内容空间和笔记 | [内容空间](./content-space.md)、[思源笔记](./siyuan.md) | 用户配置对应服务；不含服务端部署教程。 |
| 添加插件、工作方法或外部工具 | [扩展与市场](./extensions.md) | 兼容签名包、Skill、MCP 各自配置；市场为空不等于内置功能被卸载。 |

## 证据与工具参考

- [产物版本](./artifact-versions.md)、[Git 检查点](./git-checkpoints.md)、[研究检查点](./research-checkpoints.md)：固定文件或阶段状态。
- [Evidence DAG](./evidence-dag.md)、[Project DAG](./project-dag.md)、[科研档案](./research-dossier.md)：组织证据、项目目标和交付。
- [终端](./terminal.md)、[浏览器预览](./browser-preview.md)、[电脑操作](./computer-use.md)：按运行环境和权限使用外部执行能力。
- [插件协议与许可证](../reference/plugin-licenses.md)：查看许可证和安装要求。

Remote SSH 的连接与管理属于内部补充，公开手册不提供 VPN、SSH 目标登记或内部部署步骤。

## 如何判断能否使用

安装要求和当前限制见[功能状态](../reference/feature-status.md)。
