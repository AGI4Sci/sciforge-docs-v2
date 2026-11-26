---
title: "Scientific figures case: data preparation, plotting, and saving results"
description: See what longitudinal data, missing-value matrices, multi-figure output, and handing analysis results on can achieve.
sidebar_position: 5
---

# Scientific Figures cases

Pick the example closest to your data and follow the [Scientific Figures guide](../features/scientific-plotting.md) to run it. The charts and screenshots come from SciForge runs with synthetic input data.

## Case 1: Longitudinal data with a four-panel figure

**Join the measurements to the sample table.** There are 12 samples and 5 time points, with 60 records in total. Remove 2 blank or NA records and 1 QC fail, leaving 57 rows of synthetic data. Leave missing values unimputed.

**Plot the groups and individual samples.** The main figure shows mean ± SEM, individual trajectories, a 48-hour scatter plot, and a heatmap of valid sample counts. Save a separate QC figure showing missing values and exclusions. Keep the raw data, cleaned table, and rules with the run.

**Use the valid sample count for the error bars.** Calculate SEM using the sample standard deviation (`ddof=1`). Omit the error bar when valid `n < 2`. The summaries are descriptive. The time axis uses hours, and the response axis says the source did not provide a unit.

<details>
<summary>Figure and session in the app</summary>

![Longitudinal figure and its session](/img/docs/scientific-figures/complex/01-longitudinal-app.png)

![Full four-panel figure in Scientific Figures](/img/docs/scientific-figures/complex/longitudinal-panel-full.png)
*The original PNG from this run, reopened in Scientific Figures 0.4.0-mvp.13.*

</details>

![Main figure with error bars, individual trajectories, 48-hour observations, and valid sample counts](/img/docs/scientific-figures/complex/01-longitudinal-figure.png)

![QC figure showing missing values and exclusions](/img/docs/scientific-figures/complex/02-longitudinal-qc.png)

## Case 2: Missing values and a zero-variance expression row

Add a synthetic 12-gene × 8-sample expression matrix and its group table. Use the sample standard deviation to calculate row-wise z-scores. The heatmap shows the one missing cell in gray. Removing the all-zero Gene12 leaves 11 rows.

The second panel reports the descriptive treated−control mean difference. Small floating-point differences can change the order of nearly equal values. Read the values alongside the ranking.

<details>
<summary>Expression matrix in the app</summary>

![Expression matrix in the app](/img/docs/scientific-figures/complex/03-expression-app.png)

</details>

![Heatmap with masked missing values and descriptive mean differences](/img/docs/scientific-figures/complex/03-expression-figure.png)

## Case 3: Recover from a failed run

1. Open the failed run in **Code and runs (代码与运行)** and read its log. Fix the script, click **Save and freeze code (保存并冻结代码)**, then click **Run frozen Python (执行已冻结 Python)**.
2. When the run succeeds, find the four-panel figure and the QC figure in **Output files (输出文件)**. For each PNG, select **Publish as a candidate for an existing document (发布为现有文档的候选图)** and choose its **Target document (目标文档)**. Click **Read and select current baseline (读取并选定当前基线)**. When **Explicit baseline (明确基线)** appears, click **Publish as candidate (发布为候选图)**.
3. Return to **Figures (图件)** and click **Refresh (刷新)**. Open the rerun result under **Candidate (候选)** for each figure. To replace the current figure, click **Request acceptance (申请接受)** after comparing the two. Click **Allow (允许)** in the session, then refresh **Figures**. The approved candidate appears as **Current (当前图)**. The failed run’s log remains in **Code and runs**.

<details>
<summary>Failed run and history</summary>

![Failed run and its log](/img/docs/scientific-figures/complex/04-failure-app.png)

</details>

## Case 4: Save multiple images in one run

Write the three PNGs to the output directory. After the run, use the paths in **Output files (输出文件)** to tell apart files with the same name. A run can save up to 16 images. If you exceed the [output limits](../features/scientific-plotting.md#analysis-files-history-and-recovery), adjust the script, click **Save and freeze code**, then click **Run frozen Python**.

<details>
<summary>Image-limit message</summary>

![A run that exceeded the image-output limit](/img/docs/scientific-figures/complex/05-output-limit-app.png)

</details>

## Case 5: Reuse an analysis result in another run

Save the cleaned CSV, statistics JSON, and cleaning rules from the script. Open the run in **Code and runs**, click **Read run (读取运行)**, and find the CSV in **Output files** containing the 57 retained rows from the 60 source records. [Add it to the next code version](../features/scientific-plotting.md#analysis-files-history-and-recovery) and click **Save and freeze code**. Expanding **Version and input snapshot (版本与输入快照)** then shows a copy of the 57-row CSV. Publish the PNG from the plotting run when the figure is ready.

![Saved files and summaries in the run details](/img/docs/scientific-figures/hardening/04-analysis-artifacts.png)

If saving was interrupted after Python finished, open **Code and runs → Unfinished or interrupted runs (尚未结束或中断的运行)**. When **Complete interrupted record (完成中断记录)** appears, click it on that run. After saving completes, open the same run from the history to see its original log and outputs. Use the next page when there are more records. Other entries remain available if one is damaged. See [Analysis files, history, and recovery](../features/scientific-plotting.md#analysis-files-history-and-recovery).

<details>
<summary>Saving an interrupted record and browsing history</summary>

![The interrupted record is ready to complete](/img/docs/scientific-figures/hardening/01-recovery-before.png)

![Original log and outputs saved for the same run](/img/docs/scientific-figures/hardening/02-recovery-after.png)

![Paged run history](/img/docs/scientific-figures/hardening/03-pagination.png)

</details>

## Case notes

See the [run and verification record](../reference/version-and-compatibility.md#complex-scientific-figures) for the original run date, builds, and checks.
