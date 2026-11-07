---
title: ECCITE-seq cross-scale virtual cell evidence atlas
description: Review CRISPR perturbations, multimodal responses, figures, and evidence boundaries in SciForge.
sidebar_position: 2
---

# ECCITE-seq cross-scale virtual cell evidence atlas

This case organizes CRISPR perturbation, target annotation, pathways, transcriptional response, protein response, and cell fitness into an inspectable cross-scale evidence chain. SciForge manages the workspace, execution process, figures, evidence, and human review; it is not described as a built-in virtual cell predictor.

:::info[Current verification status]

The five screenshots below come from the current SciForge development build and open real artifacts in a separate `cross-scale-data-demo` workspace. They verify the artifact browsing path, but they do not claim that the current version has already completed every rerun from the same session.

:::

## Research question

> After a designated target gene is CRISPR-perturbed in a specific cell background, what changes in transcription, protein, pathways, and cell fitness? Which data and methods support each conclusion?

The case must answer both "what did we get" and "what can we still not say." Differential expression, protein response, or phenotypic association cannot automatically be promoted to a causal mechanism; cross-layer missingness must also be preserved as a result.

## Final delivery package

The following are the acceptance targets for one complete case run. The current screenshots already show data, figure, and report browsing; same-session generation and review of the Evidence DAG, Research Checkpoint, and Research Dossier still need to be confirmed in an actual run.

- Data sources, Git commit, file hashes, and environment baseline
- A cross-scale perturbation review table that preserves controls and missing states
- A set of versioned figures generated from verified derived tables
- A quality audit report, run manifest, and artifact inventory
- An Evidence DAG linking claims, data, scripts, figures, and limitations
- A human-reviewed Research Checkpoint and Research Dossier

## Verified data snapshot

The following is the static baseline of the public demo copy `cross-scale-data-demo@0696755`. A real run must recompute these values instead of hard-coding the numbers into scripts.

| Item | Snapshot | Runtime check |
| --- | ---: | --- |
| Total rows in the review table | 35 | Recomputed from the final TSV |
| Unique target genes | 15 | Deduplicated after excluding non-targeting controls |
| Perturbation guides / non-targeting controls | 27 / 8 | Check perturbation type explicitly |
| L1 target and L2 pathway annotation | 27/35 | Output unmatched identifiers |
| L3 transcriptional response | 27/35 measured | Separate unmeasured from no significant response |
| L4 protein response | 35/35 measured | State that the ADT panel has only 4 markers |
| L5 fitness endpoint | 27/35 | The 8 missing entries must not be zero-filled |
| Quality checks | 42 pass, 1 warning | The warning points to the L5 missing rate |
| Delivered artifacts | 22 | Count data, results, figures, scripts, reports, and manifests by category |

## Workspace and artifact contract

```text
cross-scale-data-demo/
├── data/final/case45_cross_scale_integrated_dataset.tsv
├── data/processed/case45_l0_l5/case45_p0_20260708T1015Z/
└── run-output/
    ├── scripts/
    │   ├── stage01_source_inventory.py
    │   ├── stage02_reconstruct_dataset.py
    │   ├── stage03_quality_audit.py
    │   ├── stage04_context_expansion.py
    │   ├── stage05_generate_figures.py
    │   └── stage06_write_report.py
    ├── datasets/
    ├── results/
    ├── figures/
    └── reports/case45_local_demo_report.md
```

Every Stage should record its inputs, outputs, return code, and stop conditions. If the quality audit fails, do not continue to conclusion figures; figures must come from verified derived tables; and the final report must not hide warnings or unverified items.

![ECCITE-seq case artifact tree in SciForge](/img/docs/cases/virtual-cell-evidence-atlas/03-artifact-tree.jpg)
*Figure 1: SciForge keeps the case workspace and task on the left, while the Files panel on the right expands the `run-output/figures` artifact tree.*

## Permissions and baseline before you start

This case creates scripts, tables, figures, and research records, so it requires "Can modify working directory"; the read-only sandbox from Getting started does not apply.

Before you start, you must:

1. Use a case copy that can be published and redistributed.
2. Check `git status --short` and record the baseline commit.
3. Inventory the input files and record hashes, sources, and license boundaries.
4. Review the agent plan, output paths, and dependency requirements.
5. Do not install dependencies or access unlisted external services without confirmation.

## Full task prompt

```text
Please complete one reviewable ECCITE-seq cross-scale perturbation analysis in the current workspace.

Research question: compare the designated target genes against non-targeting controls and inspect
the evidence relationships among target annotation, pathways, transcriptional response, protein response, and cell fitness.

Execution requirements:
1. Check Git status first, inventory the data, scripts, and existing artifacts, and do not overwrite the original files.
2. Present the plan, output paths, and data quality checks before you start writing.
3. Preserve non-targeting controls and missing data; do not automatically fill missing values with zeros.
4. Produce a traceable perturbation review table that lists the source and transformation for each row.
5. Generate cross-layer coverage figures and key response figures from the review table, and save the figure versions.
6. Link claims, data, methods, figures, and limitations into the Evidence DAG.
7. Generate a Research Checkpoint and a Research Dossier, and list the causal conclusions that are not yet supported.

Unless I explicitly allow it, do not install dependencies, do not access unlisted external services,
and do not modify the raw data. Mark any data or conclusion you cannot verify as "unverified".
```

## Phase 1: Freeze sources and inspect the data

The agent first inventories the data, scripts, and existing artifacts, then checks perturbation labels, controls, cell backgrounds, measured modalities, and missing values. The completion signal here is not a one-line "checks passed," but an inventory, a hash manifest, and a quality audit report you can open.

Check specifically:

- Non-targeting controls are not lost in a join or filter
- `missing` is not conflated with the numeric value `0`
- "Not measured" and "measured with no significant response" are expressed separately
- Every external annotation records the provider, query conditions, and access date

![Previewing six-layer data coverage in SciForge](/img/docs/cases/virtual-cell-evidence-atlas/06-layer-coverage-preview.jpg)
*Figure 2: Viewing L0–L5 coverage and measurement status in SciForge; the workspace and task context remain in frame.*

## Phase 2: Assemble the perturbation review table

Connect perturbations, target annotation, pathways, and multimodal responses into one row-by-row traceable table. Recompute the row count, unique target gene count, control count, and per-layer coverage, and output the list of unmatched identifiers.

If you only have a ready-made derived table without the complete raw counts, you must downgrade the task to "a traceable review of the existing derived results," and you must not claim that the full differential expression analysis was redone.

## Phase 3: Generate and inspect versioned figures

All figures are generated from derived tables that passed the audit, and each records its input hash, script, parameters, and figure version. The same inputs and recipe should rebuild the same result.

![L3 and L4 cross-layer evidence figures open in SciForge](/img/docs/cases/virtual-cell-evidence-atlas/04-cross-scale-evidence-preview.jpg)
*Figure 3: The file preview shows both the figure and the actual artifact path, so you can trace a result back to its input.*

When reading L3 and L4, do not give priority to the layer that "matches expectations better." A direction mismatch may come from time scale, measurement noise, or the coverage limits of the 4-marker ADT panel, and it should be preserved as a cross-layer separation result.

![Causal readiness figure open in SciForge](/img/docs/cases/virtual-cell-evidence-atlas/07-causal-readiness-preview.jpg)
*Figure 4: Causal readiness, L3/L4 overlap, and the L5 effect distribution are inspected together in SciForge; this figure cannot support a causal claim on its own.*

## Phase 4: Review the evidence and lock down delivery

Connect each key claim to the original records, derived table, method script, and figure. Counter-evidence, missingness, and limitations should also become evidence nodes rather than being deleted from the final narrative.

After the review passes:

1. Open **Changes** to verify the write scope.
2. Save an Artifact Version for the figures and key files.
3. Create a Research Checkpoint.
4. Record the research question, inputs, methods, results, limitations, and rerun procedure in the Research Dossier.

![Case final report in the SciForge file preview](/img/docs/cases/virtual-cell-evidence-atlas/05-final-report-preview.jpg)
*Figure 5: The first screen of the final report shows stage status, the data baseline, the quality audit, and the artifact count.*

## Conclusion writing template

```text
Supported claims:
- Which perturbation affected which layer of measurement, in which cell background?
- Which original records, derived tables, methods, and figures directly support it?

Candidate explanations:
- Which pathway or mechanism could explain the result?
- What assumptions does it depend on, and what validation is still missing?

Claims that cannot be supported:
- Why is the current data insufficient to support causal, generalized, or clinical conclusions?
- What data, experiments, or independent reproduction is needed next?
```

## Failure paths and recovery

| Problem | Wrong approach | Correct handling |
| --- | --- | --- |
| L5 missing | Fill with 0 and include in the average | Keep the missing flag and report total N and evaluable N separately |
| L3/L4 direction mismatch | Keep only the layer that matches expectations better | Keep the separated result and check the time scale and marker coverage |
| Audit raises an error | Keep plotting and write the Dossier | Stop at the quality stage and rerun from the affected Stage after fixing |
| External annotation unavailable | Silently switch provider | Use a frozen snapshot or stop, and flag freshness |
| Raw counts incomplete | Claim the full analysis was redone | Downgrade to a traceable review of the existing derived table |

## Completion criteria

Use the following to accept your own run; they do not mean this page has already completed all continuous verification.

- Baseline commit, input hashes, and environment records are available
- The 35-row review table, 15 target genes, and 8 controls can be recomputed
- Missing states and warnings are not hidden
- Figures trace back to verified derived tables and generation scripts
- Key claims have an evidence, counter-evidence, or unresolved status
- Checkpoint, Dossier, and Git changes are reviewed together

Related feature: [Evidence & Reproducibility](../features/evidence-and-reproducibility.md).
