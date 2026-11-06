---
title: 变更检查（Change Inspector）
description: 用独立只读插件检查当前真实 Agent 会话的文件差异。
sidebar_position: 43
---

# 变更检查（Change Inspector）

Change Inspector 的唯一生产实现是独立 DSH 插件 `@sciforge/plugin-change-inspector` **0.1.2**。它读取宿主授权的当前真实 Agent 会话，将 `file_change` 记录投影为有界 diff 快照与分页摘要，结果返回发起调用的会话。旧顶部 **变更** 面板、静态域与 fallback 已移除。

## 使用方式

从可信来源安装兼容包、启用并授予该精确版本的工具与 `agent-threads.read` 权限，参见[扩展中心](./extensions.md)及[版本与兼容性](../reference/version-and-compatibility.md)。在已产生文件改动的当前会话中，让 Agent：

> 使用 Change Inspector 打开当前会话快照，列出文件变更和截断状态；分页核对关键 diff，再与工作区文件及 Git 状态交叉检查。

插件声明两个只读工具：

| 工具 | 返回内容 |
| --- | --- |
| `open_session` | 当前会话身份、结果标识与有界完整快照 |
| `list_changes` | 变更摘要、下一页 cursor、revision 与截断原因；默认每页 100 条，最多 500 条 |

宿主可以另外派生会话资源 opener；它不是第三个插件声明工具。省略选择参数时使用宿主当前会话；显式 session/runtime 必须匹配当前调用者。同工作区其他会话、其他 runtime 或任意会话发现均不在授权范围。停用或撤权后失败，不切回旧实现。

## 如何判断记录是否完整

- 只提取工具记录中的 `file_change` unified diff；面板截图或 Agent 总结不能代替该记录。空结果不证明工作区从未被写入。
- 快照最多 5,000 条变更、序列化后 256 KiB；超限保留连续的最新后缀。单条完整 patch 上限 64 KiB，分页中的单条 patch 摘要上限 1 KiB。
- 检查 `patchBytes`、`patchTruncated`、`truncated` 与 `truncationReasons`。尾部空格、LF/CRLF 保留在未截断的原始 patch 中；被截断的输出不能用于完整文件重建。
- cursor 绑定会话与 revision。发生后续编辑或 cursor 被拒绝时，从不带 cursor 的第一页重新读取；只读分页本身不应改变 revision。

## 权限与验证边界

插件不写文件、不回滚、不保存检查点，也不发起网络请求；数据唯一来自宿主认证的真实 Agent thread aggregate。工具入参不能注入录制会话或 fixture。

0.1.2 的既有本地应用验收覆盖真实两回合尾空格差异、稳定分页及部分拒绝与故障恢复；其他权限时序和边界由定向自动化覆盖。源码测试、真实子进程夹具、本地应用验收、签名制品与公共市场发布是不同证据，不能互相替代；本页不宣称所有平台或全部故障场景已通过。

![历史 SciForge 变更面板](/img/docs/guides/workspace-changes.jpg)
*保留的历史界面截图：展示旧面板，不是 0.1.2 当前插件入口或验收证据。*

相关：[证据与可复现性](./evidence-and-reproducibility.md)、[Git 检查点](./git-checkpoints.md)、[权限与安全](../operations/security.md)、[插件许可证](../reference/plugin-licenses.md)。
