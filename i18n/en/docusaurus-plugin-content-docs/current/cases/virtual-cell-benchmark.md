---
title: Virtual cell perturbation prediction benchmark
description: Use SciForge to organize the data contract, runs, scoring, failure analysis, and reruns for an external perturbation prediction model.
sidebar_position: 3
---

# Virtual cell perturbation prediction benchmark

This case is for researchers who already have a perturbation prediction model and a compute environment. SciForge organizes the data, code, run records, results, evidence, and human review; the prediction capability comes from the external model you connect.

:::warning[Experimental case]

The offline fixture, model adapter, and full continuous screenshots are not yet fully verified in the current version. This page publishes an implementable evaluation contract and operating boundaries; it does not present them as an "out-of-the-box built-in virtual cell model."

:::

## Evaluation task

The 2026 Virtual Cell Challenge task is zero-shot cross-cell-background prediction: the model receives unperturbed baseline cells and CRISPRi knockdown target genes, and predicts post-perturbation expression profiles in cell backgrounds it has not seen before. For the official description, see [Arc Institute's task overview](https://arcinstitute.org/news/virtual-cell-challenge-2026).

This tutorial focuses on four common risks:

- The model sees the sealed ground truth before prediction, causing data leakage
- Data, weight, or environment drift makes results impossible to rerun
- The output shape is valid but gene order, value type, or labels are wrong
- Only the overall score is reported, hiding consistent failures on specific backgrounds or perturbations

## Choose a path first

| Path | Purpose | Ground truth and scoring | External effects |
| --- | --- | --- | --- |
| **A. Offline reproduction demo** | After preparing offline data, walk through prediction, sealing, local scoring, and rerun | Requires independently sealed validation data prepared in advance; this site does not yet provide a verified fixture, and it is not the official held-out ground truth | No upload by default; a small local CPU slice works |
| **B. VCC 2026 online path** | Assemble the official inputs and run pre-submission checks | Run the official CLI preflight locally; final scoring happens on the official server | Downloads, sign-ins, uploads, and submissions each require separate confirmation |

The two paths can share the prediction artifact contract, but they must not mix ground truth or scoring claims. When you cannot determine the path, stop.

## Workspace boundaries in SciForge

Start by inspecting the protocol, data, model, and existing runs in the SciForge Files panel; do not launch a full prediction right away.

![SciForge workspace Files panel](/img/docs/guides/workspace-files.jpg)
*Figure 1: The Files panel is used to check the current workspace and key inputs; this feature screenshot is not a completed benchmark run.*

Suggested layout:

```text
virtual-cell-benchmark/
├── protocol/
│   ├── evaluation-plan.md
│   ├── data-contract.yaml
│   └── split-manifest.json
├── data/
│   ├── inputs/
│   └── sealed-reference/       # 仅路径 A
├── models/
│   ├── baseline/
│   └── external-adapter/
├── scripts/
│   ├── validate_inputs.py
│   ├── run_prediction.py
│   ├── validate_prediction.py
│   ├── evaluate_offline.py     # 仅路径 A
│   └── analyze_failures.py
└── runs/<run-id>/
    ├── run-manifest.json
    ├── environment-lock.*
    ├── logs/
    ├── predictions/
    ├── validation/
    ├── metrics/
    ├── figures/
    └── dossier/
```

`run-manifest.json` is the core index. At minimum it records the path type, input hashes, code commit, model and weight hashes, environment, device, random seed, prediction hash, command, return code, and timestamp.

## Official output contract snapshot

As of 2026-09-04, the full submission contract given by the official VCC CLI documentation includes:

| Contract item | Official requirement | Local check |
| --- | ---: | --- |
| Perturbations × cells per condition × backgrounds | 300 × 400 × 3 | Exact counts per background and per perturbation |
| Total predicted cells | 360,000 | Check `obs` row count and duplicate keys |
| Gene dimension | 18,533 | Gene set, order, and uniqueness |
| Values | Raw, non-negative integer counts | Reject log-normalized, scaled, or negative values |
| Control cells | Should not be included | Scan for non-targeting control labels |
| Local preflight | `vcc prep --dry-run` | Save the CLI version, command, return code, and full output |

The official bundle downloaded at run time and the [VCC CLI documentation](https://vcc-cli-wiki.virtualcellchallenge.org/) are the final authority; if the CLI disagrees with this page, stop and update the protocol.

## Full task prompt

```text
Please organize a reproducible virtual cell perturbation prediction evaluation in the current workspace.

Goal: use unperturbed baseline cells and the given knockdown target genes to generate post-perturbation expression predictions,
and pin the data, model, environment, runs, and results into a reviewable evidence chain.

First determine the path from the workspace:
- Path A: offline reproduction fixture, where local scoring can run after predictions are sealed.
- Path B: official VCC 2026, where locally you only run contract checks and vcc prep --dry-run.
- If you cannot determine the path, stop. Do not guess or mix the two paths.

Execution requirements:
1. Inspect Git, data, model code, weights, environment, and evaluation scripts in read-only mode.
2. Generate an input inventory and hash manifest, separating what the model can see from what it cannot.
3. Before the first prediction, fix the metrics, aggregation rules, and failure conditions.
4. Run a small-sample dry run first, and check shape, gene order, labels, value types, device, and random seed.
5. Once that passes, generate predictions and record the command, arguments, environment, resources, return code, and prediction hash.
6. For path A, only read the sealed fixture after predictions are sealed.
7. For path B, run only vcc prep --dry-run; stop and confirm before any download, sign-in, upload, or submission.
8. Break down error by background, target gene, expression range, and metric component; do not report only the overall score.
9. Add the protocol, inputs, runs, predictions, validation, metrics, failures, and limitations to the Evidence DAG.
10. Rerun from a clean environment and generate a Research Dossier.

Without my confirmation, do not download weights, install dependencies, sign in to external services, submit compute jobs, or upload data.
If the input contract, gene space, scoring path, or evaluation script cannot be verified, stop immediately.
```

## Execution phases

### 1. Pre-register the protocol

Create `evaluation-plan.md` before the first prediction, and freeze the data split, primary metrics, auxiliary metrics, aggregation rules, model-visible content, and stop conditions. The file time and Git record must predate the prediction output.

### 2. Pin the model and environment

Record the code commit, weight hashes, license, environment lockfile, device, and random seed. Do not silently download new weights, swap models, or change data preprocessing.

When you need an external GPU or a lab cluster, you can submit the job to your own remote environment through the Terminal; the remote side still uses the same output contract.

### 3. Small-sample dry run

Check on the smallest slice:

- Input and output shape
- Gene ID set and order
- Perturbation and background labels
- Cells per condition
- Non-negative integer counts
- Sparse storage and peak memory
- Device, random seed, and return code

If any hard contract check fails, do not proceed to the full prediction.

### 4. Run and seal predictions

As soon as the full prediction finishes, compute its hash, write it into the run manifest, and put the logs, return code, and resource information under the same `run-id`. An original run must not be overwritten by a later rerun.

### 5A. Offline scoring

Only after predictions are sealed may you open the sealed fixture and score with the frozen evaluation script. If the reference was read by the model or an analysis script before sealing, mark that run as invalid and start over in a new workspace.

### 5B. Official preflight

Run `vcc prep --dry-run` with the current official CLI. Passing the preflight does not mean you have submitted. Any sign-in, packaged upload, or formal submission is an external operation: show the target, files, size, and purpose, and get user confirmation.

## Stratified analysis and evidence review

Divide the results into at least four layers:

1. **Contract layer**: whether files, shape, gene order, count type, and labels are correct.
2. **Metric layer**: report every component, the overall score, and the aggregation rules.
3. **Stratified layer**: check performance by background, perturbation, expression strength, and gene abundance.
4. **Biology layer**: label pathway or cell-state interpretations as hypotheses, and do not write scores directly as mechanistic conclusions.

Recommended figures include component metrics, a dot plot stratified by background, perturbation-level error ranking, a differential expression comparison of observed versus predicted values, and an in-depth profile of at least one failure condition.

Finally, in SciForge, organize the protocol, inputs, runs, predictions, metrics, failure cases, and limitations into the research dossier.

![SciForge research dossier page](/img/docs/guides/research-dossier.jpg)
*Figure 3: The Research Dossier aggregates the research narrative, versions, confidence, and limitations; continuous screenshots from the same benchmark session still need to be captured before the case is officially published.*

## When you must stop

| Problem | Risk | Handling |
| --- | --- | --- |
| Background labels unknown or swapped | Predictions that look valid on the wrong background | Check against a fixed mapping and stop immediately |
| Same gene set but a different order | Distorted metrics | Check both the set and the order before prediction and scoring |
| Output is normalized or scaled values | Violates the raw count contract | Verify non-negativity, integer values, and provenance; stop on failure |
| Wrong cell count per perturbation | Condition weights shift | Verify exact counts per background and per perturbation |
| Environment or weight drift | Reruns are not comparable | Create a new run-id and produce a difference report |
| Path B preparing an upload | Data leaves the local machine | Show the target and files, and wait for user confirmation |

## Completion criteria

These items are the acceptance criteria for a later integration run; this page does not provide proof of a completed prediction, scoring, and rerun.

- Path A/B is clear and the two are not mixed
- The protocol predates the first prediction
- Input, code, weight, environment, and prediction hashes are all present
- All hard contracts pass in the dry run
- The overall score and stratified failures are reported together
- Rerun differences are recorded and explained
- No external upload or submission happened without confirmation

Next: [Remote resources and collaboration](../operations/remote-and-collaboration.md).
