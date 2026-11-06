---
title: Evidence & Reproducibility
description: Use artifact versions, Checkpoints, Evidence DAG, and Research Dossier to fix the research process and results.
sidebar_position: 2
---

# Evidence & Reproducibility

Once a research task is finished, a summary that looks correct is not the same as a reproducible deliverable. SciForge uses several complementary objects to record what happened, what was produced, what it rests on, and where to continue next time.

This group consists of 7 independent plugins, each responsible for one kind of record; this page only explains how they connect:

| Plugin | Record it owns |
| --- | --- |
| [Artifact Versions](./artifact-versions.md) | Immutable versions of a single artifact, comparison, and restore |
| [Git Checkpoints](./git-checkpoints.md) | A Git snapshot of the workspace at a given stage |
| [Research Checkpoints](./research-checkpoints.md) | The context and resume point of one research stage |
| [Change Inspector](./change-inspector.md) | The list of files a session actually changed |
| [Evidence DAG](./evidence-dag.md) | How claims relate to sources, methods, figures, and limitations within a session |
| [Project DAG](./project-dag.md) | Project-level goals, claims, and review status across sessions |
| [Research Dossier](./research-dossier.md) | The final research deliverable for other people |

## Choose the right record object

| Object | Problem it solves | Typical content |
| --- | --- | --- |
| **Session** | How did the task progress? | Messages, tool calls, commands, approvals, and the final answer |
| [**Artifact Version**](./artifact-versions.md) | How did a chart or file evolve? | Artifact paths, versions, inputs, and generation information |
| [**Git Checkpoint**](./git-checkpoints.md) | What stage are the workspace files at? | Git status and stage-level code snapshots |
| [**Research Checkpoint**](./research-checkpoints.md) | How do I continue a research stage? | Research context, key artifacts, and resume point |
| [**Evidence DAG**](./evidence-dag.md) | What supports or refutes a claim? | Claims, sources, methods, artifacts, limitations, and relationships |
| [**Research Dossier**](./research-dossier.md) | How do others read the final deliverable? | Research question, inputs, methods, results, credibility, and limitations |

## Build an auditable chain

Recommended order:

1. Record the workspace, input versions, and goal at the start of the task.
2. After key computations, save the commands, parameters, and artifacts.
3. Create artifact versions for figures or reports.
4. Link key claims to inputs, methods, and figures.
5. Check counterevidence, missing data, and inference boundaries by hand.
6. Save a Checkpoint and generate a Research Dossier.

![SciForge research dossier panel](/img/docs/guides/research-dossier.jpg)
*Figure 1: The research dossier shows the research narrative, the current version, the credibility summary, and the limitations that need attention.*

## Have the agent leave a complete record

You can add this to the task:

> After finishing the analysis, put the research question, input files, methods used, key parameters, results, and limitations into the research dossier. Every key conclusion should trace back to the corresponding source, derived table, or figure; mark anything you cannot confirm as unverified.

Don't just ask for "generate an Evidence DAG". First be clear about which claims are worth reviewing, which data can support them directly, and which interpretations are still candidate hypotheses.

## Manual review checklist

- Can every key number be traced back to an input file and computation step?
- Do the figures come from verified derived tables rather than manually edited intermediate files?
- Do the conclusions conflate correlation, prediction, and causation?
- Are counterevidence, warnings, and missing data still visible?
- Are the code commit, environment, parameters, and random seed needed to re-run all present?
- Does the Checkpoint correspond to a Git state that has been checked?

## Data boundaries

Evidence DAG and Research Dossier show meaningful content only when the current workspace and session already have the corresponding data. An empty panel does not mean the feature is broken; first have the task produce explicit claims, sources, and artifact records.

Case: [ECCITE-seq cross-scale virtual cell evidence map](../cases/virtual-cell-evidence-atlas.md).
