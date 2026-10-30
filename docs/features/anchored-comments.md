---
title: 锚定批注（Anchored Comments）
description: 把批注锚定到具体内容，并作为明确上下文交给 Agent。
sidebar_position: 22
---

# 锚定批注（Anchored Comments）

锚定批注解决“我说的到底是哪一处”的问题。它把意见绑定到具体文件、文本选区或界面区域，保存当时的截图证据，并让人和 Agent 共用同一批注线程；适合在阅读、检查图表或试用界面时留下可追踪的反馈。

## 打开方式

- 入口：顶部工具栏 **Comment on anything**；进入批注模式后指向已注册的科研内容或界面元素，保存后打开 **Comments** 浮层。
- 作用对象：已由宿主（Host）注册、且未被标记为敏感的可视目标；可以是文件中的科研内容、文本选区或界面区域。
- 前提：能正常打开工作台与目标内容；提交产品反馈需要配置 HTTPS 反馈网关。

## 能做什么

| 你要完成的事 | 怎么做 | 产出 |
| --- | --- | --- |
| 对具体内容提意见 | 打开 **Comment on anything**，点选目标，填写后 **Save comment** | 带锚点与截图的批注 |
| 区分用途 | 在编辑器选择 **Research content** 或 **SciForge feedback** | 科研批注或产品反馈 |
| 管好待办 | 在 **Comments** 中标记已解决、重新打开或删除 | 批注状态 |
| 让 Agent 看到上下文 | 勾选批注，点 **Attach N comments to the next message** | 下一条消息的显式上下文 |
| 提交产品问题 | 对产品反馈批注点 **Submit feedback**，确认公开内容 | GitHub Issue |

## 典型流程

1. 打开要讨论的页面或科研内容，在顶部工具栏开启 **Comment on anything**。
2. 指向目标区域并点击；编辑器会显示批注对象。选择 **Research content**，写清期望 Agent 理解或修改什么。
3. 点击 **Save comment**。插件保存锚点、目标描述和截图证据，并在 **Comments** 中生成线程。
4. 勾选需要让 Agent 看到的批注，点击 **Attach N comments to the next message**；只有被勾选的批注会进入下一条消息。
5. 在 **Comments** 中跟进状态；问题解决后标记为已解决，误建或过期的批注可以删除（需确认）。

## 输入、输出与权限

- 读取：已注册目标的标签、位置与可访问名称，宿主提供的截图，已有批注线程。
- 写入：批注线程、锚点、截图证据与状态；删除批注会写回本地存储并要求确认。
- 审批或外部影响：**Submit feedback** 属于外部写入并需确认；它会把批注、勾选的截图、环境或日志公开上传到 GitHub Issue，未勾选的内容不应包含。
- 不会做什么：不遍历应用 DOM，不自行选择脱敏区域；不把未勾选的批注自动发给 Agent；不自动提交产品反馈。

## 已知限制

- 只能批注宿主注册的可视目标；未注册或标记为敏感的区域会被拒绝，并提示该区域不可批注。
- 截图捕获与脱敏由宿主负责；插件只保存宿主返回的不可变证据。
- 产品反馈依赖已配置的 HTTPS 反馈网关；未配置时无法创建 Issue。
- 一次最多附加 8 条批注；每条线程只带最近 6 条消息，超出部分不会进入上下文。

## 相关页面

- [图片审改](./visual-review.md)：对图片的逐区域审阅与候选确认。
- [Agent 工作流](../workbench/agent-workflows.md)：附加批注如何进入下一条消息。
- [权限与安全](../operations/security.md)：外部写入、公开上传与确认边界。
- [功能状态与限制](../reference/feature-status.md)：查看当前能力状态口径。

> 实现依据：`@sciforge/domain-anchored-comments` v1.0.2。
