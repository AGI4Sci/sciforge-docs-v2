---
title: 科研图件：复杂数据与复现压力测试
description: 用多文件纵向测量、缺失值矩阵及失败恢复检查真实绘图流程。
sidebar_position: 5
---

# 科研图件：复杂数据与复现压力测试

这些案例来自 2026-11-05 的实际 SciForge 操作。数据为明确构造的**合成测试数据**，用于暴露软件与分析流程问题，不代表真实实验发现。Python 运行、冻结快照、日志、图片和文档均实际保存；图片不是界面示意稿。

先阅读 [科研图件使用说明](../features/scientific-plotting.md)。本页着重检查“输入是否明确、统计是否正确、历史是否保留、失败是否影响当前图”。

## 案例一：多文件纵向数据、清洗与四面板图

### 输入和规则

- 测量表：12 个样本，每个样本 5 个时间点，共 60 条记录。
- 样本表：样本 ID、control/treated 分组及批次。
- 明确排除：2 条空值/NA、1 条 QC fail，共 3 条；保留 57 条，不插补。
- 按 group/hour 计算均值、样本标准差（ddof=1）和 SEM；有效 n 小于 2 时不画误差条。
- 样本 ID 必须一一对应；重复或未匹配的 ID 要明确报错。

```text
合并测量表与样本信息，冻结两个原文件。
清洗后把数据及清洗规则另存，再纳入绘图版本输入。
画均值±SEM、个体轨迹、48小时散点与有效n热图，另输出QC图。
不做显著性检验，输出完整数值日志，不自动接受候选。
```

### 实际结果

代码 `complex-longitudinal-v1-20261105` 保存了两个原始 CSV、清洗结果与清洗来源记录，共 4 个输入快照。运行 `complex-longitudinal-run1-20261105` 成功，发布首图至 `complex-longitudinal-doc-20261105`。本次输出两张 PNG。

独立计算逐项核对了 10 个 group/hour 的 n、均值和 SEM。例如 control 12 h 的 n=5、均值=12.34；treated 48 h 的 n=5、均值=29.86、SEM≈0.424264。未替数据猜测测量单位。

![真实SciForge应用中的纵向四面板图与会话上下文](/img/docs/scientific-figures/complex/01-longitudinal-app.png)

![科研图件面板细节](/img/docs/scientific-figures/complex/01-longitudinal-panel.png)

![原始运行输出：均值误差条、个体轨迹、终点分布与有效样本量](/img/docs/scientific-figures/complex/01-longitudinal-figure.png)

![同一次实际运行的QC输出：缺失值和排除计数](/img/docs/scientific-figures/complex/02-longitudinal-qc.png)

### 这组案例检查了什么

多文件关联、清洗后数据的再次冻结、缺失数据导致的不同 n、SEM 定义、同次运行多图片输出、图片与具体运行的关联。源文件、清洗快照、代码与日志均保留，后续修改不用覆盖前一步。

## 案例二：缺失值、零方差与表达矩阵

输入为 12 基因 × 8 样本的合成矩阵及独立分组 JSON。矩阵有 1 个缺失单元格，Gene12 全零、方差为零。

要求逐行用样本标准差做 z-score，将缺失值显示为灰色且不插补；明确排除 Gene12，保留 11 行；按 treated−control 描述性均值差稳定排序，生成热图与效应量双面板。这里的“效应量”仅描述均值差，不代表统计显著性或生物结论。

实际运行 `complex-expression-run1-20261105` 退出码 0，日志核实 1 个缺失、Gene12 被排除、保留 11 行。双面板输出摘要为 `5351702b4bc51ac95032d74cc8c0f73c6e8e3e800873c6ff99cbad58ed871f90`。前 4 个基因均值差约为 6；有缺失的 Gene06 为约 0.133333，其余为 0。浮点数微小差异会影响名义相同效应的排序，不应将这种顺序解释为科学优先级。

这组还暴露了一个实际 UI 问题：新建表单保留上次的可选图片路径，将不相关旧图带进新案例。旧图被明确标记 supplied/unverified，运行图成为独立候选，未假称复现。`0.4.0-mvp.9` 已改为进入新建时清空上次文件与要求。

![真实应用中的表达矩阵案例](/img/docs/scientific-figures/complex/03-expression-app.png)

![原始运行输出：缺失值遮罩与描述性均值差](/img/docs/scientific-figures/complex/03-expression-figure.png)

## 案例三：嵌套源码、故意失败与恢复

保存 `analysis/main.py` 和同级 `analysis/helper.py`。入口先普通 `import helper`，打印 `BEFORE_FAILURE 42`，再故意抛出 `DELIBERATE_COMPLEX_CASE_FAILURE`。

真实运行 `complex-failure-run1-20261105` 为 failed，保存了上述输出和异常，输出图数量为 0，未发布图件。随后保存修复子版本 `complex-recovery-v2-20261105`，保留父版本冻结的 4 个输入，改回成功绘图逻辑，同时保留嵌套入口和 helper 导入。运行 `complex-recovery-run2-20261105` 成功，生成两张 PNG，摘要分别与案例一相同。仅发布候选，不接受；当前图指针保持原版本。

![实际应用中的故意失败运行与历史诊断](/img/docs/scientific-figures/complex/04-failure-app.png)

这组测试促成两个修复，已装入 **0.4.0-mvp.9**：嵌套入口优先导入自己目录中的同级模块；重复相同运行请求及列出运行历史时，每张图片也返回正确存储基目录。存储中的相对路径和摘要不改写。

## 案例四：多图片路径与数量上限

真实运行 `complex-output-paths-run1-20261105` 输出三张 PNG：`group A/figure.png`、`group B/figure.png` 和 `中文 图.PNG`。两个不同目录中的同名文件都独立保存；空格、中文及大写扩展名未导致丢图。`readRun` 返回每个输出的存储基目录，摘要和长度逐个校验通过。

随后仅将子版本参数改为输出 17 张图，执行 `complex-output-limit-run2-20261105`。运行记录为 failed，可发布输出为 0，保留数量上限诊断。即使 Python 本身完成，收集阶段超限也不能伪装为成功图件。

![实际应用中的图片输出超限失败](/img/docs/scientific-figures/complex/05-output-limit-app.png)

## 运行与复现检查

每组执行都应核对：输入快照的摘要与长度、代码及父版本、运行状态/退出码、环境清单、日志、每个 PNG 的文件摘要，以及图件是否指向对应的成功运行。

源数据改变后，默认编辑子代码应继承父版本冻结输入；更新数据需要显式创建新输入快照。复跑要创建新的运行 ID，以便同时保留原运行和复跑记录。

当前不会把临时输出目录里的任意 CSV/JSON 自动持久保存。需要后续使用的数据和统计结果必须显式保存并冻结；数值日志也受长度上限约束。环境清单不是完整二进制环境归档。

## 截图与验证边界

界面截图来自实际应用，原图来自保存的 PNG 字节。自动检查覆盖文件摘要、PNG 解码尺寸、DOM 可见性和统计数值。本轮未完成像素级视觉审阅：宿主视觉服务未就绪，不能据此承诺所有文字均无重叠或裁切。
