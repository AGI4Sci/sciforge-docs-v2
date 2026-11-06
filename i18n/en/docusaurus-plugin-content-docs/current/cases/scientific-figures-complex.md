---
title: "Scientific Figures: complex data and reproducibility stress test"
description: Use multi-file longitudinal measurements, a missing-value matrix, and failure recovery to check a real plotting workflow.
sidebar_position: 5
---

# Scientific Figures: complex data and reproducibility stress test

These cases come from actual SciForge operations on 2026-11-05. The data is explicitly constructed **synthetic test data**, used to expose problems in the software and the analysis workflow; it does not represent real experimental findings. The Python runs, frozen snapshots, logs, images, and documents were all actually saved; the images are not UI mockups.

Read the [Scientific Figures guide](../features/scientific-plotting.md) first. This page focuses on checking whether the inputs are explicit, the statistics are correct, the history is retained, and a failure affects the current figure.

## Case 1: multi-file longitudinal data, cleaning, and a four-panel figure

### Inputs and rules

- Measurement table: 12 samples, 5 time points each, 60 records in total.
- Sample table: sample ID, control/treated group, and batch.
- Explicit exclusions: 2 null/NA rows and 1 QC fail row, 3 in total; 57 rows retained, with no imputation.
- Compute the mean, sample standard deviation (ddof=1), and SEM by group/hour; do not draw error bars when the effective n is less than 2.
- Sample IDs must match one-to-one; duplicate or unmatched IDs must raise an explicit error.

```text
Merge the measurement table with the sample information and freeze both source files.
After cleaning, save the data and the cleaning rules separately, then include them as inputs to the plotting version.
Plot mean±SEM, individual trajectories, a 48-hour scatter, and an effective-n heatmap, and output a QC figure as well.
Do not run significance tests; output a complete numeric log and do not auto-accept candidates.
```

### Actual results

Code `complex-longitudinal-v1-20261105` saved the two original CSVs, the cleaned result, and the cleaning-provenance record — 4 input snapshots in total. Run `complex-longitudinal-run1-20261105` succeeded and published the first figure to `complex-longitudinal-doc-20261105`. This run produced two PNGs.

An independent calculation checked n, mean, and SEM item by item for 10 group/hour combinations. For example, control at 12 h has n=5 and mean=12.34; treated at 48 h has n=5, mean=29.86, and SEM≈0.424264. No measurement unit was guessed for the data.

![Longitudinal four-panel figure and session context in the real SciForge app](/img/docs/scientific-figures/complex/01-longitudinal-app.png)

![Scientific Figures panel detail](/img/docs/scientific-figures/complex/01-longitudinal-panel.png)

![Raw run output: mean error bars, individual trajectories, endpoint distribution, and effective sample size](/img/docs/scientific-figures/complex/01-longitudinal-figure.png)

![QC output from the same actual run: missing-value and exclusion counts](/img/docs/scientific-figures/complex/02-longitudinal-qc.png)

### What this case checked

Multi-file joins, re-freezing cleaned data, differing n caused by missing data, the SEM definition, multiple figure outputs from one run, and the link between a figure and a specific run. Source files, cleaning snapshots, code, and logs are all retained, so later edits do not overwrite the previous step.

## Case 2: missing values, zero variance, and an expression matrix

The input is a synthetic 12-gene × 8-sample matrix plus a separate grouping JSON. The matrix has 1 missing cell; Gene12 is all zeros with zero variance.

The requirements: compute a per-row z-score using the sample standard deviation, show missing values in gray without imputation, explicitly exclude Gene12 and retain 11 rows, stably sort by treated−control descriptive mean difference, and produce a two-panel heatmap and effect-size figure. Here "effect size" describes the mean difference only and does not indicate statistical significance or a biological conclusion.

The actual run `complex-expression-run1-20261105` exited with code 0; the log confirmed 1 missing value, Gene12 excluded, and 11 rows retained. The digest of the two-panel output is `5351702b4bc51ac95032d74cc8c0f73c6e8e3e800873c6ff99cbad58ed871f90`. The mean difference is about 6 for the first 4 genes, about 0.133333 for Gene06 (which has the missing value), and 0 for the rest. Tiny floating-point differences affect the ordering of nominally identical effects; do not read that order as scientific priority.

This case also exposed a real UI issue: the create form kept the previous optional image path and carried an unrelated old image into the new case. The old image was explicitly marked supplied/unverified, the run figure became a separate candidate, and nothing claimed it was a reproduction. `0.4.0-mvp.9` now clears the previous files and requirements when you enter the create flow.

![Expression matrix case in the real app](/img/docs/scientific-figures/complex/03-expression-app.png)

![Raw run output: missing-value mask and descriptive mean difference](/img/docs/scientific-figures/complex/03-expression-figure.png)

## Case 3: nested source, deliberate failure, and recovery

Save `analysis/main.py` and a sibling `analysis/helper.py`. The entry point first does a plain `import helper`, prints `BEFORE_FAILURE 42`, then deliberately raises `DELIBERATE_COMPLEX_CASE_FAILURE`.

The actual run `complex-failure-run1-20261105` failed; it saved that output and exception, produced 0 output figures, and published no figure. A fixed child version `complex-recovery-v2-20261105` was then saved, retaining the 4 inputs frozen by the parent and restoring the successful plotting logic while keeping the nested entry point and the helper import. Run `complex-recovery-run2-20261105` succeeded and produced two PNGs whose digests matched case 1. It was published as a candidate only, not accepted; the current figure pointer stayed on the original version.

![The deliberate failure run and history diagnostics in the actual app](/img/docs/scientific-figures/complex/04-failure-app.png)

This test drove two fixes, shipped in **0.4.0-mvp.9**: a nested entry point imports sibling modules from its own directory first; and when the same run request is repeated or run history is listed, each image also returns the correct storage base directory. Relative paths and digests in storage are not rewritten.

## Case 4: multiple image paths and the count limit

The actual run `complex-output-paths-run1-20261105` produced three PNGs: `group A/figure.png`, `group B/figure.png`, and `中文 图.PNG`. Files with the same name in two different directories were saved independently; spaces, Chinese characters, and an uppercase extension did not cause any figure to be lost. `readRun` returned the storage base directory for each output, and the digest and length of each output passed verification.

Then only the child version parameters were changed to output 17 figures, and `complex-output-limit-run2-20261105` was executed. The run was recorded as failed, with 0 publishable outputs and the count-limit diagnostic retained. Even if Python itself completes, exceeding the limit during collection cannot be passed off as a successful figure.

![Image output limit failure in the actual app](/img/docs/scientific-figures/complex/05-output-limit-app.png)

## Run and reproduction checks

For every run, verify: the digest and length of each input snapshot, the code and parent version, the run status/exit code, the environment manifest, the logs, each PNG's file digest, and whether the figure points to the corresponding successful run.

After the source data changes, editing the child code should inherit the parent's frozen inputs by default; updating data requires explicitly creating a new input snapshot. A re-run should create a new run ID so that both the original run and the re-run record are retained.

The four cases above originally used v8/v9, when CSVs/JSON had to be saved explicitly. **v10 closes this gap** with first-class artifact saving for PNG and CSV/TSV/JSON/TXT, so analysis files can be frozen directly as inputs for the next step; older records are not rewritten. Numeric logs are still subject to a length limit, and the environment manifest is not a complete binary environment archive.

## Case 5: analysis artifact handoff, pagination, and submission recovery

An actual v10 run, `hardening-root-run-v10-20261105`, saved 7 files directly: `figure.png`, a 1200-byte `cleaned.csv`, an 81-byte `summary.json`, `rules.txt`, and three environment-rebuild files under `_environment`. An independent read confirmed that the cleaned table really has 57 data rows, with statistics raw=60, retained=57, excluded=3; every digest and length was verified.

The follow-up run `hardening-child-run-v10-20261105` froze inputs again from the saved cleaned CSV, kept an independent copy of the data, and plotted without manual copying of temporary files. The parent output and child input paths differ, yet both SHA-256 digests are `3e9a9c0b722f9bae558f9fbbe1796721e3a365519e8ac67d4cc821d8bf20d85b`; the actual log confirms `FROZEN_ROWS 57`.

![Saved analysis files and digests; a CSV cannot be published as an image](/img/docs/scientific-figures/hardening/04-analysis-artifacts.png)

The environment file contains the exact versions of 12 installed packages and the steps to rebuild the virtual environment; no installation or network download was performed, and it does not claim to be a hash-pinned dependency lock.

The recovery test first actually ran Python to generate JSON, then injected a single write failure when committing `run.json` in the source scheduling test. The process log and results were saved, and the staging directory remained. Then, in the installed plugin, clicking **Complete interrupted record** committed the original JSON and logs successfully, and only then cleaned up the staging area. Fault injection is a controlled test, not a random incident or a faked successful process.

![After an interrupted submission, the installed build shows a completable record](/img/docs/scientific-figures/hardening/01-recovery-before.png)

![After completing the original result submission for the same run, logs and artifacts are retained](/img/docs/scientific-figures/hardening/02-recovery-after.png)

Pagination in the history list was also actually clicked through: the first page scans at most 20 records, and clicking **Load more runs** loads the next page. Directories that are reserved but not committed are not disguised as terminal records, so a single page may show fewer than 20; one corrupt record does not block the other pages.

![Paginated run history in the actual installed build](/img/docs/scientific-figures/hardening/03-pagination.png)

## Screenshot and verification boundaries

The UI screenshots come from the actual app, and the original images come from saved PNG bytes. Automated checks cover file digests, decoded PNG dimensions, DOM visibility, and statistical values. This round did not complete a pixel-level visual review: the host visual service was not ready, so we cannot promise that all text is free of overlap or clipping.
