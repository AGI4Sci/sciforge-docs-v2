---
title: Runtime 与模型接入
description: 配置模型接入，选择 Codex、Claude Code 或 DeepSeek Harness，并完成连接检查。
sidebar_position: 2
---

# Runtime 与模型接入

先配置模型服务，再选择执行任务的 AI 助手。前者决定模型请求发到哪里，后者负责规划和调用工具。

| 配置 | 入口 | 要确认的内容 |
| --- | --- | --- |
| 模型接入 | 首次引导或 **设置 → 通用** | 模型 API 的地址、密钥和模型，或 Coding Plan 的官方登录 |
| AI 助手 | **设置 → AI 助手** | Codex、Claude Code 或 DeepSeek Harness（DSH）的安装、连接与权限 |
| 当前会话 | 底部输入区的执行设置 | 本次使用的 Runtime、模型和可用档位 |

设置在展开的左侧边栏底部。本地账户与 SciForge 云端登录另行管理，见[身份与登录](../features/identity-access.md)。

## 选择模型接入

使用 **模型 API** 时，填写服务商提供的 Base URL、API Key 与模型名称；协议不确定时使用自动探测。已有密钥只说明字段已配置，上游是否接受要通过实际请求确认。

![模型 API 设置](/img/docs/quickstart/quickstart-model-api.jpg)
*仅用于认识字段，请填写自己的服务配置。*

使用 **Coding Plan** 时，按界面完成官方登录或设备码授权。当前支持 Codex 的 Coding Plan 路径；Claude Code 使用模型 API。登录或连接失败时，根据提示修复当前接入，再重试。

## 选择并连接 Runtime

在 **设置 → AI 助手** 选择执行者，检查检测结果；自动检测失败时使用 **选择本地程序**或填写可执行文件绝对路径，再重新检测。

- **Codex**：使用已安装的 Codex app-server，检查模型与权限后开始任务。
- **Claude Code**：配置模型 API，并检查其权限模式。
- **DSH**：通过本地 ACP 程序连接，模型与推理档位在连接后的会话中生效。先检查用户指定程序、系统路径和常见安装位置，均不可用时才尝试随应用提供的组件。

DSH 的 **Shell 命令执行**默认关闭；仅对用户安装的 DSH 开启，且每次执行仍需批准。不要为了消除报错直接改成完整权限。

![AI 助手设置](/img/docs/guides/ai-assistants.jpg)
*展示执行者配置、工具确认和文件范围。*

Codex 与 Claude Code 默认可修改工作目录。第一次分析请先按[配置只读沙箱](./read-only-sandbox.md)调整权限。切换执行者后重新核对连接、登录与权限，已有会话的映射和配置不会自动迁移。

需要操作桌面应用时，再检查 **Computer Use** 的 Runtime 支持、后端与系统权限。

![Computer Use 设置](/img/docs/guides/ai-assistants-computer-use.jpg)
*用于说明需要分别检查的配置项。*

## 做一次最小连接检查

新建会话，确认输入区选中了预期 Runtime，发送：

> 只回答“连接成功”，不要读取或修改文件，也不要调用外部服务。

收到响应后再进入[五分钟快速开始](./five-minute-quickstart.md)。选中的 Runtime 不可用时，按错误提示修复或主动切换；应用不会自动替你改选其他 Runtime。

## 排查 DSH 超时

DSH 区分单次连接请求超时和任务长时间没有进展：

| 情况 | 含义与处理 |
| --- | --- |
| 初始化、创建或恢复会话等请求超时 | 默认单次等待 15 秒。检查本地程序、连接与明确错误，不能靠延长它解决长任务 |
| 任务长时间没有任何会话更新 | 默认连续静默 10 分钟后停止本轮；持续收到当前会话更新的长任务可以超过 10 分钟。查看已有结果，再决定是否继续原会话 |

技术排查时，前者配置名为 `requestTimeoutMs`；后者虽然名为 `promptTimeoutMs`，含义是静默时限，错误码为 `runtime_prompt_idle_timeout`。超时后原会话标识可恢复，但仍应先核对已有文件和外部操作，再继续任务。
