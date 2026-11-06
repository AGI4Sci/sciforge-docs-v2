---
title: End-to-end cases
description: Understand SciForge through a complete research case first, then go deeper feature by feature.
sidebar_position: 1
---

# End-to-end cases

Each case organizes inputs, agent execution, human review, evidence, and deliverables around a research question. The ECCITE-seq case shows browsing of existing artifacts, the perturbation prediction benchmark case is at an experimental integration stage, and the Pasilla case presents the main three-account collaboration flow that has been tested in practice. Check the status in the table below first, then choose the learning path that fits you.

| Case | Positioning | Current status | Key deliverables |
| --- | --- | --- | --- |
| [ECCITE-seq cross-scale virtual cell evidence atlas](./virtual-cell-evidence-atlas.md) | Launch primary case | Artifact browsing verified; a full agent rerun still needs continuous evidence capture | Perturbation review table, versioned figures, evidence relationships, research dossier |
| [Virtual cell perturbation prediction benchmark](./virtual-cell-benchmark.md) | Advanced integration case | Experimental | Prediction files, contract checks, stratified metrics, failure analysis, rerun records |
| [Pasilla RNA-seq three-person collaboration](./pasilla-collaboration.md) | Team collaboration primer | Learn requirements, delivery, rework, adoption, and closure through real screenshots | Two versions of the upstream report, member notes, downstream report, and adoption record |
| [Scientific figures complex case](./scientific-figures-complex.md) | Plotting and reproducibility stress test | Synthetic research data runs in the real application, with numbers and snapshots checked independently | Multi-file cleaning, four-panel figure, matrix heatmap, failure recovery, and history |

## How the cases divide the work

The first case answers: "How do you organize an existing cross-scale single-cell analysis into a reviewable evidence chain?" The focus is data quality, missing states, figure provenance, and the boundaries of conclusions.

The second case answers: "How do you connect a user's existing perturbation prediction model to a reproducible evaluation?" The focus is preventing data leakage, fixing the protocol and environment, sealing predictions, and separating offline demos from official online submissions.

The Pasilla case answers: "How do several members complete tasks in dependency order, with a human reviewing, adopting, and closing each version?" The focus is the operating flow, delivered versions, and downstream use of adopted results.

## Screenshot principles

A case hero image must keep the SciForge application shell visible, including the workspace, task context, and current tool panel. Heatmaps, tables, or terminal output detached from SciForge can only serve as detail insets and cannot be used to prove that a product flow has been completed.

## Permission principles

- Browsing existing artifacts can use the read-only sandbox.
- Generating scripts, tables, figures, or dossiers requires workspace write.
- Downloads, sign-ins, remote submissions, and uploads are external effects and must be confirmed separately before they run.
- Official cases should run in a clean Git working tree or a copy of the project.
