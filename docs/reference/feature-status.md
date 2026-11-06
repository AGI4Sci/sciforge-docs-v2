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
| Codex / Claude Code | 内置功能 | 选择要使用的执行者，再连接模型并设置文件和工具权限。 |
| DSH Runtime | 内置功能 | 任务持续报告进度时可以长时间运行；长时间没有响应时，请检查连接并继续原会话。 |
| 附件与发送后文件引用 | 内置功能 | 选择、拖拽、粘贴进入附件托盘；发送后保留文件引用。在任务中说明要读取哪份文件、检查什么。 |
| 文本、代码与其他文件预览 | 内置功能 | 部分文件可直接编辑；无法编辑时，页面会显示原因。 |
| 本地账户、云端设备与用量 | 内置功能 | 本地账户删除不等于删除云端账户或用户文件；云端与模型供应商的身份分开管理。 |
| [团队协作](../features/collaboration.md) | 需要服务和项目权限 | 看板、成员、需求、共享文件、项目信息入口；共享文件来自任务交付，当前不提供直接上传。完整操作见 [Pasilla 案例](../cases/pasilla-collaboration.md)。 |
| [Biology Workbench 预览](../features/life-science-preview.md) | 内置功能 | 大文件可能只显示摘要；分子选区修改后请重新打开核对。 |
| [Scientific Figures](../features/scientific-plotting.md) | 需要插件 | 保存绘图数据、代码、运行结果和图片。需要 Python 和 Matplotlib，暂不支持 R。 |
| [Anchored Comments](../features/anchored-comments.md) | 需要插件 | 选中文字后保存批注；截图需启用对应功能，删除和提交反馈时需要确认。 |
| [Change Inspector](../features/change-inspector.md) | 需要插件 | 让 Agent 列出本次会话的文件差异，过长时分页查看。 |
| 产物版本、检查点、Evidence / Project DAG、档案 | 按功能配置 | 保存文件版本和研究记录，在证据图与项目图中查看结论依据。 |
| 定时任务与 Create Loop | 需要应用运行 | 设置重复任务或多步骤流程；需要确认的操作会暂停等待处理。 |
| 插件市场、Skills、MCP | 按类型配置 | 按页面提示安装插件、添加工作方法或连接外部工具。 |
| Remote SSH 管理 | 内部补充 | 公开站不提供 VPN、SSH 目标登记与服务端操作步骤。 |
| 虚拟细胞模型、Slurm/PBS/Kubernetes 调度 | 需自行接入 | 使用自己配置的模型或集群环境。 |

反馈问题时，请提供系统、客户端与插件版本、操作步骤和截图。
