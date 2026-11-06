---
title: 数据集 API（Dataset API）
description: 已退役数据集 API 的迁移说明与数据来源记录建议。
sidebar_position: 11
---

# 数据集 API（Dataset API）

:::info 迁移说明
在[当前源码基线](../reference/version-and-compatibility.md)中，旧 `dataset-api` 域已退役，不再提供本页历史版本中的内置 API。本页保留原 URL，供旧链接和历史记录定位。
:::

旧版的数据源目录、界面登记端点、S3 对象浏览、准备计划、检查点恢复、校验与发布流程不再是当前可用操作。旧 `.sciforge/datasets` 记录不能据此推断已被自动迁移或能继续执行；需要保留原文件与来源材料后逐项核对。

获取数据时，使用数据提供方支持的客户端或你自己的脚本与环境，记录来源 URL、访问时间、数据版本、许可证、下载参数、文件大小与 SHA-256。认证信息按[权限与安全](../operations/security.md)管理。旧页面限定“只能通过 Dataset API 重试”的操作要求不适用于已退役能力。

下载后的受支持文件可以在[生命科学预览](./life-science-preview.md)中查看；[Biology Room](./biology-room.md)可组织其支持的序列、结构和基因组资产。数据获取、清洗与科学结论仍需各自保留真实执行和来源记录，见[证据与可复现性](./evidence-and-reproducibility.md)。这两项内置生物功能不替代旧 Dataset API 的数据接入与发布服务。
