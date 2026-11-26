---
title: 科研图件案例：数据整理、绘图与结果保存
description: 看纵向数据、缺失值矩阵、多图输出和分析结果接力能实现什么。
sidebar_position: 5
---

# 科研图件案例：数据整理、绘图与结果保存

先选一个与手头数据接近的案例，再打开 [科研图件使用说明](../features/scientific-plotting.md) 按步骤操作。以下图片和截图来自 SciForge 的实际运行，输入均为合成测试数据，适合用来核对处理方法和图件布局。

## 案例一：多文件纵向数据与四面板图

**先把测量表和样本信息表关联起来。** 示例有 12 个样本、5 个时间点，共 60 条记录。清洗时排除 2 条空值或 NA 和 1 条 QC fail，保留 57 条合成数据记录，缺失值不插补。

**用四个面板呈现数据分布。** 主图画出均值 ± SEM、个体轨迹、48 小时散点和有效样本量热图。另存一张 QC 图，列出缺失与排除计数。保留原始数据、清洗表和处理规则，可在 **代码与运行** 对照每个面板的输入。

**按有效样本数计算误差条。** SEM 使用样本标准差（`ddof=1`）。有效 `n < 2` 时省略该点的误差条。图中的统计为描述性汇总。时间轴以小时为单位，响应轴注明源数据未提供单位。

<details>
<summary>查看应用中的图件与会话</summary>

![SciForge 应用中的纵向四面板图和会话](/img/docs/scientific-figures/complex/01-longitudinal-app.png)

![科研图件面板完整预览四面板主图](/img/docs/scientific-figures/complex/longitudinal-panel-full.png)
*在科研图件 0.4.0-mvp.13 中重新打开本次运行保存的原图。*

</details>

![同次运行的主图：均值误差条、个体轨迹、48 小时分布和有效样本量](/img/docs/scientific-figures/complex/01-longitudinal-figure.png)

![同次运行的 QC 图：缺失值和排除计数](/img/docs/scientific-figures/complex/02-longitudinal-qc.png)

## 案例二：缺失值与零方差表达矩阵

把 12 基因 × 8 样本的合成表达矩阵和分组表一同加入。逐行用样本标准差计算 z-score。唯一的缺失单元格在热图中显示为灰色，排除全零的 Gene12 后剩 11 行，统计结果和运行日志会列出缺失及排除的基因。

第二个面板显示 treated−control 描述性均值差。阅读时以实际差值为准。非常接近的值可能因浮点精度而换序，图中的排序适合浏览数据。

<details>
<summary>查看应用中的表达矩阵案例</summary>

![应用中的表达矩阵案例](/img/docs/scientific-figures/complex/03-expression-app.png)

</details>

![双面板结果：缺失值遮罩和描述性均值差](/img/docs/scientific-figures/complex/03-expression-figure.png)

## 案例三：运行失败后继续修改

1. 在 **代码与运行** 打开失败记录，读日志。改好脚本后，点 **保存并冻结代码**，再点 **执行已冻结 Python**。
2. 运行成功后，在 **输出文件** 找到四面板主图和 QC 图的两张 PNG。为每张图勾选 **发布为现有文档的候选图**，选择对应的 **目标文档**。先点 **读取并选定当前基线**，看到 **明确基线** 后，点 **发布为候选图**。
3. 回到 **图件** 页点 **刷新**。在各自的图件里用 **候选** 打开重跑结果。对照当前图后，如需替换，点 **申请接受**。在会话中点 **允许**，再刷新 **图件** 页，获准的候选就会显示为 **当前图**。失败日志仍可从 **代码与运行** 的历史打开。

<details>
<summary>查看失败记录截图</summary>

![失败运行及其历史日志](/img/docs/scientific-figures/complex/04-failure-app.png)

</details>

## 案例四：在一次运行中输出多张图

把脚本生成的三张 PNG 写到输出目录。运行结束后，在 **输出文件** 按路径区分同名文件。每次最多 16 张。超出时按 [输出上限](../features/scientific-plotting.md#分析文件历史与恢复) 调整脚本，再点 **保存并冻结代码** 和 **执行已冻结 Python**。

<details>
<summary>查看图片超限提示</summary>

![一次输出超过图片上限时的运行结果](/img/docs/scientific-figures/complex/05-output-limit-app.png)

</details>

## 案例五：保存分析结果，继续绘图

先在脚本中保存清洗后的 CSV、统计 JSON 和清洗规则。到 **代码与运行** 找到这次运行并点 **读取运行**，**输出文件** 会列出从 60 条原始记录中保留 57 条的 CSV，再把这份文件[加入下一版输入](../features/scientific-plotting.md#分析文件历史与恢复)。点 **保存并冻结代码** 后，展开 **版本与输入快照** 能看到这份 57 行的数据副本。需要发布图件时，在绘图运行的 **输出文件** 选中 PNG 并发布。

![运行详情中已保存的分析文件和摘要](/img/docs/scientific-figures/hardening/04-analysis-artifacts.png)

如果 Python 已结束，但保存中断，请到 **代码与运行 → 尚未结束或中断的运行**。出现 **完成中断记录** 时，选中对应运行并点击。补存完成后，从历史中打开同一条运行，原日志和结果文件会列在详情里。历史超过一页可继续翻页，单条记录损坏时仍可打开其他记录。操作见 [分析文件、历史与恢复](../features/scientific-plotting.md#分析文件历史与恢复)。

<details>
<summary>查看恢复前后与历史记录</summary>

![安装版显示可以补齐保存的中断记录](/img/docs/scientific-figures/hardening/01-recovery-before.png)

![同一次运行的原日志和输出已保存](/img/docs/scientific-figures/hardening/02-recovery-after.png)

![安装版的分页运行历史](/img/docs/scientific-figures/hardening/03-pagination.png)

</details>

## 案例说明

原始运行的日期、构建号和核验范围见[案例运行与核验记录](../reference/version-and-compatibility.md#复杂科研图件)。
