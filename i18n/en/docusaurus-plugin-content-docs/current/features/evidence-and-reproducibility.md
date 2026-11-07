---
title: Evidence & Reproducibility
description: Use artifact versions, checkpoints, Evidence DAG, and Research Dossier to pin down the research process and results.
sidebar_position: 2
---

# Evidence & Reproducibility

SciForge keeps a research task's inputs, process, and results through artifact versions, run records, and source links, so you can recheck them and continue the research.

Choose a recording method as you need. Artifact versions, checkpoints, the evidence graph, and the research dossier use built-in entry points in the app; Change Inspector needs a plugin installed and enabled. For version requirements, see [Version & Compatibility](../reference/version-and-compatibility.md).

| Recording feature | Purpose and how it is provided |
| --- | --- |
| [Artifact Versions](./artifact-versions.md) | Save independent versions of a single artifact; compare and restore earlier results |
| [Git Checkpoints](./git-checkpoints.md) | Automatically save the Git workspace state at the start and end of a task |
| [Research Checkpoints](./research-checkpoints.md) | Automatically save the research summary, sources, and file references of completed turns |
| [Change Inspector](./change-inspector.md) | Use a plugin to check the file changes already recorded in the current session |
| [Evidence DAG](./evidence-dag.md) | Save and check the conclusions and evidence relationships in the current session |
| [Project DAG](./project-dag.md) | Manually combine the evidence graphs each session has saved, to check project progress |
| [Research Dossier](./research-dossier.md) | Read a selected research record, check versions and limitations, and prepare delivery |

## Choose the right record object

| Object | Problem it solves | Typical content |
| --- | --- | --- |
| **Session** | How did the task progress? | Messages, tool calls, commands, approvals, and the final response |
| [**Artifact Version**](./artifact-versions.md) | How did a figure or file evolve? | Artifact path, version, inputs, and generation details |
| [**Git Checkpoint**](./git-checkpoints.md) | What stage are the workspace files at? | Git status and stage-level code snapshots |
| [**Research Checkpoint**](./research-checkpoints.md) | How do I continue a research stage? | Research context, key artifacts, and resume location |
| [**Evidence DAG**](./evidence-dag.md) | What supports or refutes a claim? | Claims, sources, methods, artifacts, limitations, and relationships |
| [**Research Dossier**](./research-dossier.md) | How does someone else read the final deliverable? | Research question, inputs, methods, results, credibility, and limitations |

## Build a checkable chain

Recommended order:

1. At the start of the task, record the workspace, input versions, and objective; a Git workspace automatically saves a checkpoint from before the task started.
2. After the analysis, save the actual sources, commands, parameters, result files, and figures, and save independent versions of the artifacts you want to keep.
3. Wait for this round's research record to be saved, then open the research dossier to check the summary, references, and selected versions. Confirm the summary record and the actual files separately.
4. In Evidence DAG, click **Update**, wait for the evidence graph to finish saving, then check item by item the relationship between conclusions and sources, counter-evidence, and missing information.
5. When you need a cross-session summary, first confirm each session's evidence graph is saved, then click **Update now** in Project DAG; after it finishes, review the current project graph.
6. In the research dossier, check the selected record and its limitations, and before delivery verify the related files, versions, and sharing permissions.

![SciForge research dossier panel](/img/docs/guides/research-dossier.jpg)
*Figure 1: The research dossier shows the research narrative, selected versions, a credibility summary, and the limitations that need attention together.*

## Have the Agent leave a complete record

You can add this to a task:

> After the analysis, organize the research question, input files, methods used, key parameters, results, and limitations into the research dossier. Every key conclusion should trace back to its source, derived table, or figure; mark anything you cannot confirm as unverified.

Do not only ask it to "generate an Evidence DAG". First make clear which claims deserve review, which data can directly support them, and which explanations are still candidate hypotheses.

## Manual review checklist

- Can every key number be traced back to the input files and the computation steps?
- Do the figures come from verified derived tables, not intermediate files edited by hand?
- Does the conclusion confuse correlation, prediction, and causation?
- Are counter-evidence, warnings, and missing data still visible?
- Are the code commit, environment, parameters, and random seed needed for a rerun complete?
- Does each checkpoint correspond to a Git state you have already checked?

## Before you rely on it

A standalone plugin must be installed and enabled first. For installation requirements, see the [plugin list](../reference/plugin-licenses.md).

For the evidence graph, use the built-in entry point in the app. The optional standalone Evidence DAG plugin cannot yet be used fully in the app; for the availability and licenses of optional plugins, see the [plugin list](../reference/plugin-licenses.md).

[Scientific Figures](./scientific-plotting.md) saves its own code, inputs, environment, runs, and image history, and does not register them with Artifact Versions or Evidence DAG automatically. When you include a figure in a deliverable, link the actual inputs, runs, and outputs explicitly, and recheck them before forming a claim.

## Data boundary

Evidence DAG and Research Dossier show meaningful content only when the current workspace and session already have the matching data. An empty panel does not mean the feature is broken; first have the task produce clear claims, sources, and artifact records.

Case: [ECCITE-seq cross-scale virtual cell evidence graph](../cases/virtual-cell-evidence-atlas.md).
