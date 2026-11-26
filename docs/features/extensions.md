---
title: Skills、MCP 与扩展
description: 在扩展中心查看能力来源，管理扩展和 Skills，并检查 MCP 与桌面操作权限。
sidebar_position: 4
---

# Skills、MCP 与扩展

需要增加工具或专项方法时，先分清要安装的内容，再检查来源与权限。扩展提供应用面板和工具，Skill 提供任务方法，MCP 连接外部工具或数据。

## 打开扩展中心

从左侧边栏打开 **扩展**，查看内置与已安装扩展、市场和 Skills。需要查看完整导航时先展开侧边栏。

扩展详情提供发布者、版本、来源、状态、权限和贡献的功能。安装或启用后，相关入口可能出现在左侧导航、最右侧纵向工具栏或文件预览中。工具栏入口较多时使用 **更多工具**；支持的入口可通过 **自定义工具栏**调整。

![公开源码构建中的扩展中心](/img/docs/guides/extensions-center-public-zh.png)
*公开源码构建的扩展列表。*

![内置扩展的版本和来源](/img/docs/guides/extensions-details-public-zh.png)
*打开条目详情，查看扩展的版本、来源和运行状态。*

## 查看来源、安装与启用

| 你要做什么 | 从哪里进入 |
| --- | --- |
| 查插件或模块的用途和适配状态 | 打开 [SciForge 公开目录](https://agi4sci.github.io/SciForge-market/) |
| 使用客户端随附的模块 | 打开 **扩展**，查看内置条目的详情和功能入口 |
| 安装 DSH 插件 | 打开 **扩展 → 市场**，查看当前索引是否提供可安装条目 |
| 导入本地签名扩展 | 打开 **扩展 → 从文件安装**，选择客户端支持的 `.sciforge-plugin` 扩展包 |

本手册核对的公开源码构建（`9daddeb`）附带的市场索引当前没有可安装条目。Change Inspector 和 Scientific Figures 在 **暂不可安装** 下列出，并附原因。展开这一栏可以查看状态。

![桌面市场展开暂不可安装的条目](/img/docs/guides/extensions-market-public-zh.png)
*桌面市场显示当前安装状态。*

市场出现可安装条目后，先打开详情，核对发布者、版本、工具权限和所需的宿主接口。确认用途后点击 **安装**，检查所需权限并选择 **批准并安装**。安装完成后检查是否显示 **已启用**。使用前再打开对应工具或在会话中尝试一次。

Anchored Comments、Change Inspector 和 Scientific Figures 属于 DSH 插件。`.sciforge-dsh-plugin` 包由桌面市场索引提供，**从文件安装**仅接收 `.sciforge-plugin`。开发构建中的插件需按维护者提供的流程验证。

已安装扩展可按界面提供的操作启用、禁用、卸载或回滚。需要重启或加载失败时，先处理提示，再检查工具入口。支持停靠的扩展页面可放到左侧、右侧、底部或主区域。

### 插件使用教程

- [Anchored Comments](./anchored-comments.md)：选中一段文字，保存批注并回查原文。
- [Change Inspector](./change-inspector.md)：核对当前会话记录的文件变更。
- [Scientific Figures](./scientific-plotting.md)：从数据生成图件，比较候选图并接受选定结果。

## 使用 Skill

Skill 通常包含方法说明和配套脚本、资料。启用前先检查：

- 适合什么任务，什么时候触发。
- 是否运行脚本、访问网络或写入文件。
- 需要哪些软件、数据和凭据。
- 用什么检查证明结果可靠。

![Skills 管理界面](/img/docs/guides/skills-center.png)
*展示项目级与全局 Skill 的管理用途。*

Skill 被发现后，脚本仍需按任务权限执行。第三方 Skill 的依赖安装与外部操作要单独检查，不能用“已启用”代替授权。

## 连接 MCP Server

配置 MCP 时核对服务来源、版本、启动方式或地址、凭据范围，以及工具会读取或发送什么数据。先用低影响操作检查连接，再进行写入型任务。

发送、上传、删除或修改外部系统前，确认操作对象与用户授权。连接成功只说明可以调用服务，任务结果仍需检查。避免把密钥直接写进提示词、项目需求或交付内容。

## 使用 Computer Use

Computer Use 当前支持 Codex 与 Claude Code，可操作浏览器和 Electron 应用的内嵌页面。先在设置中启用并检查运行状态；macOS 上还需检查屏幕录制和辅助功能权限。限定目标页面与任务范围，遇到登录、授权、付款、发送或删除等动作时逐项核对。

![Computer Use 配置](/img/docs/guides/ai-assistants-computer-use.jpg)
*启用电脑操作后，检查运行状态与系统权限。*

## 找不到功能时

1. 查看扩展、Skill 或 MCP 的状态与错误提示。
2. 检查当前工作区、权限及 Runtime 是否支持所需能力。
3. 新建会话重新发现能力；需要重启时按界面提示操作。
4. 工具入口不见时检查 **更多工具**和工具栏自定义设置。
5. 本地扩展安装失败时核对发布者、签名与版本兼容性，不要通过关闭权限检查强行加载。

相关页面：[工作台工具](../workbench/tools.md)、[权限与安全](../operations/security.md)。
