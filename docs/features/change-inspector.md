---
title: 变更检查（Change Inspector）
description: 用独立只读插件检查当前真实 Agent 会话的文件差异。
sidebar_position: 43
---

# 变更检查（Change Inspector）

Change Inspector 用于查看当前会话修改了哪些文件。安装插件后，让 Agent 列出改动并检查差异。

## 使用方式

从可信来源安装兼容包、启用并授予该精确版本的工具与 `agent-threads.read` 权限，参见[扩展中心](./extensions.md)及[版本与兼容性](../reference/version-and-compatibility.md)。在已产生文件改动的当前会话中，让 Agent：

> 使用 Change Inspector 打开当前会话快照，列出文件变更和截断状态；分页核对关键 diff，再与工作区文件及 Git 状态交叉检查。

插件声明两个只读工具：

| 工具 | 返回内容 |
| --- | --- |
| `open_session` | 当前会话身份、结果标识与有界完整快照 |
| `list_changes` | 变更摘要、下一页 cursor、revision 与截断原因；默认每页 100 条，最多 500 条 |

插件只检查发起调用的当前会话，不能读取同工作区的其他会话或其他 Runtime 的记录。停用插件或撤销权限后，需要重新启用或授权才能继续使用。

## 如何判断记录是否完整

- 只提取工具记录中的 `file_change` unified diff；面板截图或 Agent 总结不能代替该记录。空结果不证明工作区从未被写入。
- 快照最多 5,000 条变更、序列化后 256 KiB；超限保留连续的最新后缀。单条完整 patch 上限 64 KiB，分页中的单条 patch 摘要上限 1 KiB。
- 检查 `patchBytes`、`patchTruncated`、`truncated` 与 `truncationReasons`。尾部空格、LF/CRLF 保留在未截断的原始 patch 中；被截断的输出不能用于完整文件重建。
- cursor 绑定会话与 revision。发生后续编辑或 cursor 被拒绝时，从不带 cursor 的第一页重新读取；只读分页本身不应改变 revision。

## 权限与数据

插件只读取当前会话的文件变更记录，不写文件、不回滚、不保存检查点，也不发起网络请求。

相关：[证据与可复现性](./evidence-and-reproducibility.md)、[Git 检查点](./git-checkpoints.md)、[权限与安全](../operations/security.md)、[插件许可证](../reference/plugin-licenses.md)。
