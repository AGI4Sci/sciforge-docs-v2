---
title: 图片审改（Visual Review）
description: 旧图片审改入口的迁移说明与当前图件审查方式。
sidebar_position: 21
---

# 图片审改（Visual Review）

:::info 迁移说明
在[当前源码基线](../reference/version-and-compatibility.md)中，独立 `visual-review` 插件和旧静态域均已移除。本页保留原 URL，供旧链接和历史记录定位；旧版工具栏入口与面板操作不再是当前使用步骤。
:::

历史版本中的框选、箭头、圈画、图钉、审阅包、分割或叠加对比、视觉规范识别及“接受并替换”不能据此视为仍可使用。旧审阅数据的存在也不表示当前实现已提供自动迁移或兼容读取；请保留原文件和记录，单独核对恢复路径。

当前的[科研图件](./scientific-plotting.md)由独立 Scientific Figures 插件管理：用文字提出 Python + Matplotlib 修改要求，实际运行后生成候选，再通过宿主正式审批接受。它保存自己的不可变代码、输入、运行和图片版本，接受更新当前图指针；不提供上述图上批注界面，也不等于旧 Visual Review 的通用源图替换服务。

对具体文字或已注册任务视图留下意见，可使用独立的[锚定批注](./anchored-comments.md)。截图能力依赖宿主授权与捕获服务，不能把批注保存当作图片已经修改、候选已接受或产物版本已注册。跨产物的来源和交付记录见[证据与可复现性](./evidence-and-reproducibility.md)。
