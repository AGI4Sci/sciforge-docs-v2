---
title: 科研图件案例：数据整理、绘图与结果保存
description: 看纵向数据、缺失值矩阵、多图输出和分析结果接力能实现什么。
sidebar_position: 5
---

# 科研图件案例：数据整理、绘图与结果保存

下面五个案例展示科研图件可以处理的数据和得到的结果。数据均为明确构造的**合成测试数据**，不代表真实实验发现；截图和图片来自实际 SciForge 操作及保存的运行结果。具体操作见 [科研图件使用说明](../features/scientific-plotting.md)。

## 案例一：多文件纵向数据与四面板图

将测量表与独立的样本信息表关联，按分组和时间点展示变化。示例包含 12 个样本、5 个时间点，共 60 条记录；按规则排除 2 条空值/NA 和 1 条 QC fail，保留 57 条，不插补。

一次得到均值±SEM、个体轨迹、48 小时散点和有效样本量热图，以及单独的 QC 图。SEM 使用样本标准差（ddof=1），有效 n 小于 2 时不画误差条；全部 10 个分组/时间点的统计值经过独立计算核对。原始数据、清洗结果和规则均保留，不做显著性检验，也不猜测测量单位。

<details>
<summary>查看应用中的图件与会话</summary>

![真实SciForge应用中的纵向四面板图与会话上下文](/img/docs/scientific-figures/complex/01-longitudinal-app.png)

![科研图件面板细节](/img/docs/scientific-figures/complex/01-longitudinal-panel.png)

</details>

![原始运行输出：均值误差条、个体轨迹、终点分布与有效样本量](/img/docs/scientific-figures/complex/01-longitudinal-figure.png)

![同一次实际运行的QC输出：缺失值和排除计数](/img/docs/scientific-figures/complex/02-longitudinal-qc.png)

## 案例二：缺失值与零方差表达矩阵

输入为 12 基因 × 8 样本的合成表达矩阵和独立分组文件，其中有 1 个缺失单元格，Gene12 全零。逐行用样本标准差计算 z-score，缺失值不插补、显示为灰色；排除零方差的 Gene12 后保留 11 行。

得到热图与 treated−control 描述性均值差的双面板图。日志核对了缺失和排除情况。均值差不代表统计显著性或生物结论，名义相同效应也可能因浮点数差异改变排序，不应据此判断科学优先级。

<details>
<summary>查看应用中的表达矩阵案例</summary>

![真实应用中的表达矩阵案例](/img/docs/scientific-figures/complex/03-expression-app.png)

</details>

![原始运行输出：缺失值遮罩与描述性均值差](/img/docs/scientific-figures/complex/03-expression-figure.png)

## 案例三：运行失败后继续修改

绘图代码出错时，可以查看保留的日志和异常，修改后再次运行。本例修复后生成了与案例一一致的两张图，并作为候选保留；确认接受前，已有图件仍保持原样，失败记录也可继续查看。

<details>
<summary>查看失败记录截图</summary>

![实际应用中的故意失败运行与历史诊断](/img/docs/scientific-figures/complex/04-failure-app.png)

</details>

## 案例四：多张图与文件名支持

一次运行可以保存多张图。本例的三张 PNG 包含不同目录下的同名文件，以及带空格、中文和大写扩展名的文件名，均成功保存。图片数量上限为 16 张，超限会明确提示失败；具体限制见 [分析文件说明](../features/scientific-plotting.md#分析文件历史与恢复)。

<details>
<summary>查看图片超限提示</summary>

![实际应用中的图片输出超限失败](/img/docs/scientific-figures/complex/05-output-limit-app.png)

</details>

## 案例五：保存分析结果，继续绘图

除了图片，还可以保存清洗后的 CSV、统计 JSON 和清洗规则，再将结果用于下一步绘图。本例保存了从 60 条原始记录中保留的 57 条数据，后续绘图直接使用保存的数据副本，无需手工拷贝临时文件。分析文件可供后续处理，只有 PNG 可以发布为图件。

![已保存分析文件和摘要；CSV 不可当作图片发布](/img/docs/scientific-figures/hardening/04-analysis-artifacts.png)

运行已经结束且留下可确认的结果时，可以补齐尚未保存完整的记录，保留原来的日志和结果文件，无需重新运行 Python。本例通过受控中断测试验证了这一点。历史记录支持分页查看，单条损坏不阻断其他页。操作方法见 [分析文件、历史与恢复](../features/scientific-plotting.md#分析文件历史与恢复)。

<details>
<summary>查看恢复前后与历史记录</summary>

![保存中断后，安装版显示可完成的记录](/img/docs/scientific-figures/hardening/01-recovery-before.png)

![完成同一运行的原结果保存后，日志与结果文件保留](/img/docs/scientific-figures/hardening/02-recovery-after.png)

![真实安装版的分页运行历史](/img/docs/scientific-figures/hardening/03-pagination.png)

</details>

## 案例说明

这些案例于 2026-11-05 实际运行，案例一至四使用 v8/v9，案例五使用 v10。数据、代码、日志与产物均有保存，统计结果和文件经过核对。环境记录提供精确包版本及重建说明，但不等于完整环境归档，本轮未执行依赖重装验证；更多范围与限制见 [科研图件使用说明](../features/scientific-plotting.md#当前能力与使用限制)。
