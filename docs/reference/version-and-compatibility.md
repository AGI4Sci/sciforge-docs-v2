---
title: 版本与兼容性
description: 查找客户端、插件和案例的适用版本。
---

# 版本与兼容性

本手册介绍最新客户端的使用方法。本轮按 **2026-11-06 的主线版本 `3f6b0c3`** 更新。找不到教程中的按钮时，先检查客户端和插件版本。

## 版本从哪里看

| 内容 | 本轮版本 | 说明 |
| --- | --- | --- |
| 客户端 | 主线 `3f6b0c3` | 本轮教程的界面与功能依据。 |
| [公开源码](https://github.com/AGI4Sci/SciForge) | 本轮观察到 `57ac3d0`，公开同步 #141 | 开发主线和公开代码的更新时间可能不同；以实际下载的提交为准。 |
| Scientific Figures 插件 | `0.4.0-mvp.11` | 历史教程中的 MVP.10 截图和运行结果保留原版本。 |
| 安装包和其他插件 | 查看下载说明、扩展列表及发布记录 | 有源码或使用说明，不代表市场已经上架对应安装包。 |

## 旧截图与新界面

教程中的部分截图和视频来自较早版本。查找入口时，请按当前说明操作：

- 常用工具移到右侧纵向工具栏；窗口高度不足时，部分工具会进入“更多工具”。
- 左侧栏收窄后通常保留图标；账户和设置位于侧栏下方。窄窗口可能改用浮层。
- 选择、拖拽或粘贴文件后，可在附件托盘检查文件，发送后仍能从消息中打开文件引用。
- 安装插件请进入“扩展与市场”。
- 协作项目分为“看板、成员、需求、共享文件、项目信息”。

完整步骤见[工作台](../workbench/workspaces-and-sessions.md)、[账户](../features/identity-access.md)和[团队协作](../features/collaboration.md)。案例会保留自己的日期、版本和系统；没有重做的操作，不更改其验证版本。

## 功能迁移

| 旧功能 | 现在如何使用 |
| --- | --- |
| Biology Room、Life Science Preview 独立插件 | 已整合进 Biology Workbench，无需分别安装；分别负责生物学对象与科学文件预览。 |
| Dataset API、Scientific Compute | 已退役。获取数据或运行计算时，使用你配置的 Agent 工具、脚本和环境。 |
| 旧内置 Anchored Comments、Change Inspector | 使用对应独立插件，安装条件见各自教程。 |
| 旧 Scientific Plotting／Visual Review | 绘图使用 Scientific Figures；旧 Visual Review 不再作为独立插件提供。 |

[插件协议与许可证](./plugin-licenses.md)列出了各插件的版本、许可和安装要求。

## 文档和发行说明

[本网站](https://agi4sci.github.io/sciforge-docs-v2/)是统一的用户手册，[文档仓库](https://github.com/AGI4Sci/sciforge-docs-v2)维护正文。客户端仓库里的 Wiki 页面保留为入口，内部文档另存部署、远程管理和开发记录。

反馈问题时，请提供系统、客户端与插件版本、操作步骤和截图。
