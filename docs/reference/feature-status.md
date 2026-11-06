---
title: 功能状态与限制
description: 查看各功能的使用条件和当前限制。
sidebar_position: 1
---

# 功能状态与限制

下表列出各功能的使用条件和当前限制。

| 能力 | 使用条件 | 当前范围与限制 |
| --- | --- | --- |
| 工作区、会话与工作台布局 | 内置功能 | 常用工具位于右侧，账户入口位于左侧栏下方。 |
| Codex / Claude Code | 内置功能 | 显式选择 Runtime；模型、登录、文件和工具权限各自配置，不把不同执行者当成静默回退。 |
| DSH Runtime | 内置功能 | 长任务使用空闲超时，持续同会话进度可续期；连接检查和操作确认分别有时间限制。 |
| 附件与发送后文件引用 | 内置功能 | 选择、拖拽、粘贴进入附件托盘；发送后保留文件引用。文件引用不等于每个 Runtime 都收到嵌入二进制。 |
| 文本、代码与其他文件预览 | 内置功能 | 能否编辑取决于格式、是否截断和写回通道；只读原因应在界面显示。 |
| 本地账户、云端设备与用量 | 内置功能 | 本地账户删除不等于删除云端账户或用户文件；云端与模型供应商的身份分开管理。 |
| [团队协作](../features/collaboration.md) | 需要服务和项目权限 | 看板、成员、需求、共享文件、项目信息入口；共享文件来自任务交付，当前不提供直接上传。完整操作见 [Pasilla 案例](../cases/pasilla-collaboration.md)。 |
| [Biology Workbench 预览](../features/life-science-preview.md) | 内置功能 | 大文件可能只显示摘要；分子选区修改后请重新打开核对。 |
| [Scientific Figures](../features/scientific-plotting.md) | 需要插件 | 冻结数据/代码、真实 Python、分析产物、分页、恢复和环境重建文件；MVP.10 macOS arm64 + DSH 证据保留，未据此声明 MVP.11 全平台或公共市场发布。R 未实现。 |
| [Anchored Comments](../features/anchored-comments.md) | 需要插件 | 捕获和外部反馈需对应宿主能力；删除和提交反馈有明确审批。 |
| [Change Inspector](../features/change-inspector.md) | 需要插件 | 让 Agent 列出本次会话的文件差异，过长时分页查看。 |
| 产物版本、检查点、Evidence / Project DAG、档案 | 按功能配置 | 内置功能可按各页使用；可选 Evidence / Project DAG 插件尚不能替代内置功能。 |
| 定时任务与 Create Loop | 需要应用运行 | 任务触发、审批及重启边界按各页说明。 |
| 插件市场、Skills、MCP | 按类型配置 | 市场读取失败、暂无可安装包和检索为空分别处理；源码、签名包与公开市场上架分开。 |
| Remote SSH 管理 | 内部补充 | 公开站不提供 VPN、SSH 目标登记与服务端操作步骤。 |
| 虚拟细胞模型、Slurm/PBS/Kubernetes 调度 | 需自行接入 | 使用自己配置的模型或集群环境。 |

反馈问题时，请提供系统、客户端与插件版本、操作步骤和截图。
