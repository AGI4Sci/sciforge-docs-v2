---
title: Evidence & Reproducibility
description: Use artifact versions, Checkpoints, Evidence DAG, and Research Dossier to pin down the research process and its results.
sidebar_position: 2
---

# Evidence & Reproducibility

After a research task is complete, a summary that looks correct is not the same as a reproducible deliverable. SciForge uses several complementary objects to record "what happened, what was produced, what it was based on, and where to continue next time."

These records come from built-in features and optional plugins together, so not all seven pages in this group describe standalone plugins. The current breakdown is below; for versions, see [Version & Compatibility](../reference/version-and-compatibility.md):

| Recording feature | Purpose and availability |
| --- | --- |
| [Artifact Versions](./artifact-versions.md) | Built in; records immutable versions of a single artifact, comparison, and restore |
| [Git Checkpoints](./git-checkpoints.md) | Built-in feature; a separate plugin still awaiting full integration pins the Git state at a given stage |
| [Research Checkpoints](./research-checkpoints.md) | Built-in feature; a separate plugin still awaiting full integration saves research-stage context and the resume location |
| [Change Inspector](./change-inspector.md) | Standalone production plugin; reads file changes in the current session |
| [Evidence DAG](./evidence-dag.md) | Built-in claim and evidence relationships; an optional backend plugin is not yet integrated into the app |
| [Project DAG](./project-dag.md) | Built-in project-level goals and review records; a backend plugin artifact is still awaiting app integration |
| [Research Dossier](./research-dossier.md) | Built in; organizes research deliverables for other people |

## Choose the right record object

| Object | Problem it solves | Typical content |
| --- | --- | --- |
| **Session** | How did the task progress? | Messages, tool calls, commands, approvals, and the final response |
| [**Artifact Version**](./artifact-versions.md) | How did a chart or file change over time? | Artifact path, version, inputs, and generation details |
| [**Git Checkpoint**](./git-checkpoints.md) | What stage are the workspace files at? | Git status and stage-level code snapshots |
| [**Research Checkpoint**](./research-checkpoints.md) | How do I resume a research stage? | Research context, key artifacts, and resume location |
| [**Evidence DAG**](./evidence-dag.md) | What supports or refutes a claim? | Claims, sources, methods, artifacts, limitations, and relationships |
| [**Research Dossier**](./research-dossier.md) | How does someone else read the final deliverable? | Research question, inputs, methods, results, credibility, and limitations |

## Build an auditable chain

Recommended order:

1. At the start of the task, record the workspace, input versions, and objective.
2. After key computations, save the commands, parameters, and artifacts.
3. Create artifact versions for charts or reports.
4. Connect key claims to inputs, methods, and charts.
5. Manually check counterevidence, missing data, and inference boundaries.
6. Save a Checkpoint and generate a Research Dossier.

![SciForge research dossier panel](/img/docs/guides/research-dossier.jpg)
*Figure 1: The research dossier shows the research narrative, current version, credibility summary, and limitations that need attention.*

## Have the agent leave a complete record

You can add the following to a task:

> After completing the analysis, put the research question, input files, methods used, key parameters, results, and limitations into the research dossier. Every key conclusion should trace back to its source, derived table, or figure; mark anything you cannot confirm as unverified.

Do not just ask for "generate an Evidence DAG." First clarify which claims are worth reviewing, which data can directly support them, and which interpretations are still candidate hypotheses.

## Manual review checklist

- Can every key number be traced back to an input file and a computation step?
- Do the charts come from verified derived tables rather than hand-edited intermediate files?
- Does the conclusion confuse correlation, prediction, and causation?
- Are counterevidence, warnings, and missing data still visible?
- Are the code commit, environment, parameters, and random seed needed to rerun all present?
- Does the Checkpoint correspond to a Git state that has been verified?

## Before you use these features

First confirm that the feature is available in the current app; optional plugins also require installation, activation, and a license for the corresponding version. A package in the source, passing tests, or a generated installer does not mean it has been published in the public marketplace. The current seven standalone plugins and their licenses are listed in [Plugin licenses](../reference/plugin-licenses.md).

Optional Evidence DAG 1.0.0 currently verifies the backend slice only; host cross-process integration has not been delivered, so it cannot be used as a complete app plugin. Built-in Evidence still handles evidence recording for current figure acceptance; do not let the built-in feature and the optional plugin write to the same evidence directory at the same time. Synthetic data in tests and local samples do not represent real research conclusions or marketplace release acceptance.

[Scientific Figures](./scientific-plotting.md) independently saves code, inputs, environment, runs, and figure history, and does not automatically register with Artifact Versions or Evidence DAG. When including figures in a deliverable, explicitly link the actual inputs, runs, and outputs, and re-verify them before forming claims.

## Data boundaries

Evidence DAG and Research Dossier show meaningful content only when the current workspace and session already contain the corresponding data. An empty panel does not indicate a malfunction; first have the task generate explicit claims, sources, and artifact records.

Case: [ECCITE-seq cross-scale virtual cell evidence atlas](../cases/virtual-cell-evidence-atlas.md).
