---
title: 插件许可证
description: 当前七个独立插件的许可证、历史目录范围与分发注意事项。
---

# 插件许可证

下表列出当前 7 个插件包的版本和许可证。安装要求见各功能页，版本关系见[版本与兼容性](./version-and-compatibility.md)。

| 插件 / 源码目录 | 源码版本 | 声明许可证 | npm `private` 字段 |
| --- | --- | --- | --- |
| Anchored Comments / `plugins/anchored-comments` | 0.2.1 | MIT | `true` |
| Change Inspector / `plugins/change-inspector` | 0.1.2 | MIT | `true` |
| Evidence DAG / `plugins/evidence-dag` | 1.0.0 | Apache-2.0 | `true` |
| Git Checkpoints / `plugins/git-checkpoints` | 0.1.0 | MIT | `true` |
| Project DAG / `plugins/project-dag` | 1.0.0 | Apache-2.0 | 未设置 |
| Research Checkpoints / `plugins/research-checkpoints` | 0.1.0 | MIT | `true` |
| Scientific Figures / `plugins/scientific-plotting` | 0.4.0-mvp.11 | MIT；另保留下述 NOTICE 与第三方许可 | `true` |

## 源码、安装包与 npm 发布

- **源码许可**：以上是各包的许可证声明；具体使用与再分发还需保留适用的 LICENSE、版权和 NOTICE。仓库根许可证不能用来覆盖具有单独许可声明的插件或第三方组件。
- **安装包内容**：实际制品包含哪些代码、原生组件及许可文件，需检查该版本的包内容。源码目录存在文件不等于打包时一定携带；本文不认证某个未检查的安装包。
- **npm `private: true`**：用于阻止普通 npm 发布，不代表源码保密、商业专有或禁止按既有许可证使用，也不等于不能通过签名安装包分发。未设置该字段也不证明已经发布。
- **发布状态**：版本、许可、安装授权和市场可用性是不同事项；以具体发布记录与可信安装来源为准。

## Scientific Figures 的保留声明

该包声明 MIT，仍须保留其 `NOTICE`：`src/worker/` 来自原先按 Apache-2.0 发布的绘图 worker（历史提交 `02e7abb2`）；移动或合并目录不会消除其 Apache-2.0 条款。单独再分发这些 worker 源码时也应携带原 Apache-2.0 条款与适用声明。历史域和适配代码的 MIT 声明同样保留。

当前构建包含 `@napi-rs/canvas` **0.1.100** 的 JavaScript 和实际加载的平台原生包，放在制品的 `dist/node_modules` 下。包内第三方组件保留各自许可；分发时应检查实际安装包内的许可文件、原生包身份与 `dist/native-runtime.json`，不能只复制本表的 MIT 一行。换平台、架构或 Linux libc 需要对应构建。

## 历史目录与适用范围

公开仓库中的旧插件带有各自的 LICENSE。更新或迁移代码时，应保留相应的许可和署名。

| 历史目录 | 历史许可 / 当前去向 |
| --- | --- |
| `plugins/biology-room` | 历史插件 MIT；当前独立目录已退役，房间功能由内置 Biology Workbench 1.1.3 提供 |
| `plugins/life-science-preview` | 历史插件 MIT；当前独立目录已退役，预览由同一内置 Biology Workbench 提供 |
| `plugins/visual-review` | 历史插件 MIT；当前独立插件及旧静态域均已移除，见[迁移说明](../features/visual-review.md) |
| 旧 `scientific-compute`、`dataset-api` 域 | 当前已退役，见[科学计算](../features/scientific-compute.md)与[数据集 API](../features/dataset-api.md)迁移页；不计入七个插件 |

历史目录的许可证继续适用于其当时发布的代码；目录删除、功能内置或页面迁移均不构成重新许可。内置 Biology Workbench 属于应用源码范围，不应直接套用旧插件的 MIT 声明。复用历史代码时，应回到对应版本的 LICENSE、NOTICE 与文件头确认适用条款。
