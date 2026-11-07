---
title: "Scientific figures case: data preparation, plotting, and saving results"
description: See what longitudinal data, missing-value matrices, multi-figure output, and handing analysis results on can achieve.
sidebar_position: 5
---

# Scientific figures case: data preparation, plotting, and saving results

The five cases below show the data Scientific Figures can handle and the results it gives. All data is explicitly constructed **synthetic test data** and does not represent real experimental findings; the screenshots and images come from actual SciForge operation and saved run results. For the operating steps, see the [Scientific Figures guide](../features/scientific-plotting.md).

## Case 1: multi-file longitudinal data and a four-panel figure

A measurement table is linked to a separate sample-information table, and the change is shown by group and time point. The example has 12 samples and 5 time points, 60 records in all; by rule, 2 empty/NA values and 1 QC-fail record are excluded, leaving 57, with no imputation.

One run produces mean ± SEM, individual trajectories, a 48-hour scatter and an effective-sample-size heatmap, plus a separate QC figure. SEM uses the sample standard deviation (ddof=1), and no error bar is drawn when the effective n is below 2; the statistics for all 10 group/time-point combinations were checked by independent calculation. The raw data, cleaned results, and rules are all kept; no significance test is run and no measurement unit is guessed.

<details>
<summary>View the figure and session in the app</summary>

![Longitudinal four-panel figure and session context in the real SciForge app](/img/docs/scientific-figures/complex/01-longitudinal-app.png)

![Scientific Figures panel detail](/img/docs/scientific-figures/complex/01-longitudinal-panel.png)

</details>

![Raw run output: mean error bars, individual trajectories, endpoint distribution, and effective sample size](/img/docs/scientific-figures/complex/01-longitudinal-figure.png)

![QC output from the same actual run: missing-value and exclusion counts](/img/docs/scientific-figures/complex/02-longitudinal-qc.png)

## Case 2: an expression matrix with missing values and zero variance

The input is a synthetic 12-gene × 8-sample expression matrix and a separate grouping file; it has 1 missing cell, and Gene12 is all zeros. A per-row z-score is computed with the sample standard deviation, missing values are not imputed and are shown in gray; after excluding the zero-variance Gene12, 11 rows are kept.

The result is a two-panel figure: a heatmap and the treated−control descriptive mean difference. The log checks the missing and excluded values. A mean difference does not indicate statistical significance or a biological conclusion, and nominally equal effects may also change order because of floating-point differences, so the order should not be used to judge scientific priority.

<details>
<summary>View the expression-matrix case in the app</summary>

![Expression-matrix case in the real application](/img/docs/scientific-figures/complex/03-expression-app.png)

</details>

![Raw run output: missing-value mask and descriptive mean difference](/img/docs/scientific-figures/complex/03-expression-figure.png)

## Case 3: keep revising after a failed run

When the plotting code fails, you can look at the retained log and exception, fix it, and run again. In this example, after the fix, two figures identical to Case 1 were generated and kept as candidates; until you confirm acceptance, the existing figure stays as it was, and the failure record can still be viewed.

<details>
<summary>View the failure-record screenshot</summary>

![A deliberately failed run and the history diagnostics in the real app](/img/docs/scientific-figures/complex/04-failure-app.png)

</details>

## Case 4: multiple figures and file-name support

One run can save several figures. The three PNGs in this example include files with the same name in different directories, and file names with spaces, Chinese characters, and an uppercase extension; all were saved successfully. The limit is 16 images, and exceeding it clearly reports a failure; for the specific limits, see [Analysis files, history, and recovery](../features/scientific-plotting.md#analysis-files-history-and-recovery).

<details>
<summary>View the image-limit message</summary>

![An image-output limit failure in the real app](/img/docs/scientific-figures/complex/05-output-limit-app.png)

</details>

## Case 5: save analysis results and keep plotting

Besides images, you can also save a cleaned CSV, statistics JSON, and cleaning rules, then use the results for the next plot. This example saved the 57 records kept from the 60 raw records, and the later plot used the saved copy of the data directly, with no need to copy temporary files by hand. Analysis files can be used for later processing; only PNGs can be published as figures.

![Saved analysis files and summaries; a CSV cannot be published as an image](/img/docs/scientific-figures/hardening/04-analysis-artifacts.png)

When a run has ended and left results you can confirm, a record that was not fully saved can be completed, keeping the original logs and result files, without rerunning Python. This example verified that with a controlled interruption test. History supports paged viewing, and one damaged entry does not block the other pages. For how to do it, see [Analysis files, history, and recovery](../features/scientific-plotting.md#analysis-files-history-and-recovery).

<details>
<summary>View before and after recovery, and the history</summary>

![After a save was interrupted, the installed build shows a record that can be completed](/img/docs/scientific-figures/hardening/01-recovery-before.png)

![After the same run's original results were saved, the log and result files remain](/img/docs/scientific-figures/hardening/02-recovery-after.png)

![Paged run history in the real installed build](/img/docs/scientific-figures/hardening/03-pagination.png)

</details>

## Notes on the cases

These cases were actually run on 2026-11-05; Cases 1–4 used v8/v9 and Case 5 used v10. The data, code, logs, and outputs were all saved, and the statistical results and files were checked. The environment record gives exact package versions and rebuild notes, but that is not a complete environment archive, and this round did not verify a dependency reinstall; for more scope and limits, see [Current scope and limits](../features/scientific-plotting.md#current-scope-and-limits) in the Scientific Figures guide.
