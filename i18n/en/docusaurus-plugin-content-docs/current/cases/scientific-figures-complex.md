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

![Scientific Figures panel](/img/docs/scientific-figures/complex/01-longitudinal-panel.png)

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

Open the failed run in **Code and runs**, read its log, fix the script, and run it again. After it succeeds, go to **Figures**. The four-panel figure and the QC figure appear as candidates. Compare them before accepting. The failed run's log remains in **Code and runs**.

<details>
<summary>Failed run and history</summary>

![Failed run and its log](/img/docs/scientific-figures/complex/04-failure-app.png)

</details>

## Case 4: Multiple images and file names

Write the three PNGs to the output directory. In **Output files**, use their paths to tell apart files with the same name. Names with spaces, Chinese characters, or an uppercase extension appear in the list. A run can save up to 16 images. If you exceed the [output limits](../features/scientific-plotting.md#analysis-files-history-and-recovery), adjust the script, save the new version, and select **Run frozen Python**.

<details>
<summary>Image-limit message</summary>

![A run that exceeded the image-output limit](/img/docs/scientific-figures/complex/05-output-limit-app.png)

</details>

## Case 5: Reuse an analysis result in another run

Save the cleaned CSV, statistics JSON, and cleaning rules from the script. Open the run in **Code and runs** and find the CSV containing the 57 retained rows from the 60 source records. Add it to the next code version. **Version and input snapshot** then includes a copy of the CSV. Publish the PNG from the plotting run when the figure is ready.

![Saved files and summaries in the run details](/img/docs/scientific-figures/hardening/04-analysis-artifacts.png)

If saving was interrupted after Python finished, open **Code and runs → Unfinished or interrupted runs**. When **Complete interrupted record** appears, use it on that run. After saving, open the same run from the history to see its original log and outputs. Use the next page when there are more records. Other entries remain available if one is damaged. See [Analysis files, history, and recovery](../features/scientific-plotting.md#analysis-files-history-and-recovery).

<details>
<summary>Saving an interrupted record and browsing history</summary>

![The interrupted record is ready to complete](/img/docs/scientific-figures/hardening/01-recovery-before.png)

![Original log and outputs saved for the same run](/img/docs/scientific-figures/hardening/02-recovery-after.png)

![Paged run history](/img/docs/scientific-figures/hardening/03-pagination.png)

</details>

## Case notes

<details>
<summary>Run date, builds, and recorded checks</summary>

These cases ran on **2026-11-05**. Cases 1–4 used v8/v9 and case 5 used v10. The runs retain the data, code, logs, and outputs. In case 1, independent calculations matched all 10 group and time-point combinations. Case 3 regenerated the two figures from case 1. Case 5 retained an identical copy of the CSV for the next run and saved the original record after an interruption. The recorded scope covers generation of the environment record, including exact package versions and rebuild instructions. See [Current scope and limits](../features/scientific-plotting.md#current-scope-and-limits).

</details>
