---
title: Git 检查点（Git Checkpoints）
description: 在任务开始和结束时自动保存 Git 检查点，恢复前留下救援快照。
sidebar_position: 41
---

# Git 检查点（Git Checkpoints）

Git Checkpoints 在每轮任务开始和结束时自动保存工作区的 Git 状态，方便检查这一轮改了什么，并在需要时恢复到之前的状态。研究摘要、来源和继续研究的位置见 [Research Checkpoints](./research-checkpoints.md)。

## 打开方式

- 入口：右侧工具栏（未显示时展开 **更多工具**）的 **Git Checkpoints**；右侧面板标题同为 **Git Checkpoints**。
- 作用对象：当前会话绑定的本地 Git 工作区。
- 前提：工作区是 Git 仓库，且 Git 功能可用；非 Git 工作区不会产生检查点。

## 查看与恢复

1. 在 Git 工作区中开始任务，系统自动保存开始前的检查点，无需手动保存或一直打开面板。
2. 一轮任务完成或结束后，打开面板或点击刷新图标，检查开始前和结束后的记录。
3. 选择检查点，阅读文件差异和改动摘要，确认它对应想要恢复的状态。
4. 需要恢复时点击 **恢复** 并确认。系统会先保存救援检查点；保存失败时，恢复会中止。
5. 恢复完成后检查实际工作区文件和 Git 状态。需要了解当前任务记录的文件改动时，可使用 [Change Inspector](./change-inspector.md)。

## 恢复前确认

恢复会改写工作区文件，请先确认目标检查点，并检查是否有尚需保留的改动。救援检查点保存的是恢复前的状态，便于之后找回这次恢复覆盖的工作。

面板提供列表、差异预览、刷新与恢复，没有手动创建检查点的按钮。差异预览可能只显示部分内容；遇到不完整的预览时，应进一步核对实际文件和 Git 差异后再恢复。

## 保存内容

Git 检查点保存工作区的 Git 状态，适合回顾代码和文件变化。研究问题、来源和下一步计划仍需通过研究检查点记录；单个图表或数据文件的版本可另存为[产物版本](./artifact-versions.md)。

## 相关页面

- [证据与可复现性](./evidence-and-reproducibility.md)：本组总览与推荐记录链。
- [研究检查点](./research-checkpoints.md)：保存研究上下文与恢复位置。
- [产物版本](./artifact-versions.md)：保存单个产物的版本。
- [变更检查](./change-inspector.md)：核对一次会话记录了哪些文件改动。
- [工作区与会话](../workbench/workspaces-and-sessions.md)：工作区、会话与 Git 状态的关系。
