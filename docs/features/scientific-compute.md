---
title: 科学计算（Scientific Compute）
description: 已退役能力的迁移说明与真实计算记录建议。
sidebar_position: 13
---

# 科学计算（Scientific Compute）

:::info 迁移说明
在[当前源码基线](../reference/version-and-compatibility.md)中，旧 `scientific-compute` 域已退役，不再提供可调用的内置能力或独立插件。本页保留原 URL，供旧链接和历史记录定位。
:::

旧版页面介绍的是本地确定性 fixture 作业循环，用于测试提交、监控、阻塞与恢复的事件轨迹；它从未代表真实集群调度或科学计算结果。请勿继续按旧页面查找状态查询、四场景基线运行或作业监控入口。

需要真实计算时，使用[工作台终端](../workbench/tools.md)及你自己的计算环境；远程文件与执行位置见[远程与协作](../operations/remote-and-collaboration.md)。保留实际命令、输入摘要、软件版本、参数、退出状态与输出文件，并按[证据与可复现性](./evidence-and-reproducibility.md)整理记录。

Python + Matplotlib 图件可以使用独立的[科研图件插件](./scientific-plotting.md)，其代码与输入快照、运行回执不等于通用作业调度器。当前基线不应被理解为内置 Slurm、PBS 或 Kubernetes 自动调度承诺。
