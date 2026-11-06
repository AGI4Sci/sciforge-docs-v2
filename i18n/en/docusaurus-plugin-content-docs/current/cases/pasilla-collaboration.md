---
title: Pasilla RNA-seq three-person collaboration
description: Walk through requirement confirmation, member delivery, revision, adoption, downstream handoff, and project closeout on a real data excerpt.
sidebar_position: 4
---

# Pasilla RNA-seq three-person collaboration

This case uses a reporting task to demonstrate three-person collaboration: A owns requirements and review, B computes count QC and subset CPM, and C uses B's adopted results for a descriptive comparison. The point is to hand work to members, review a specific version of a deliverable, and then pass it downstream.

For first-time use, complete sign-in, device connection, and model preparation in the [Collaboration guide](../features/collaboration.md).

The screenshots on this page come from a real three-account collaboration demo and show requirement confirmation, member delivery, revision, adoption, downstream handoff, and closeout end to end.

## Inputs and division of work

The data comes from the public [Bioconductor pasilla](https://bioconductor.org/packages/release/data/experiment/html/pasilla.html) Drosophila RNA-seq count data. The demo uses the original headers and the first **50 genes × 7 samples**, keeping the order and values unchanged, along with the sample annotation.

These 50 rows are an in-order excerpt of the original table, not a representative sample. The denominator for subset CPM is only the sum of counts for these 50 genes in each sample, not the full sequencing library size, and it is not for transcriptome-wide normalization or significance testing.

| Person | Work | Deliverable this round |
| --- | --- | --- |
| A: Owner | Confirm requirements, invite members, adjust assignments, request revisions, adopt, and close out | Two adoption records and a project summary |
| B: Member | Compute excerpt total counts for 7 samples and subset CPM for 50 genes | Two README versions, plus a separate member-qc-notes.md member note |
| C: Member | Read B's adopted version 2 and compare treated / untreated group means | One descriptive comparison README |

To follow along, first prepare the count data and sample annotation from the public source, then provide the inputs to the project.

## 1. A writes the requirements and confirms two serial modules

A writes the real excerpt, output scope, and dependencies on the requirements page: B first produces the QC and subset CPM report; C uses only B's adopted version. Once it is complete, A checks the modules and confirms the requirements.

You can adapt the following target wording and fill in the actual data and sample annotation in the input area:

```text
Module 1: Using the attached 50-gene × 7-sample counts, report each sample's excerpt total count,
subset CPM, zero-count proportion, and column-sum check. The README includes the methods, reproducible code, and limitations.
Members may attach their own check notes, which the owner previews and reviews.

Module 2: Depends on module 1's adopted result; read its report and the member note, and compare
the mean subset CPM of the treated and untreated groups, listing the 5 genes with the largest absolute mean difference.
Descriptive comparison only; do not report p-values, FDR, or significance conclusions.
```

![The real requirement capture generates QC and downstream descriptive comparison modules, awaiting owner confirmation](/img/docs/collaboration/requirements-ready.png)
*Figure 1: The inputs, output scope, and dependencies are written into the task description for members to read before accepting.*

**What to check**: C's module depends on B's adopted results; "B's AI has finished" is not a start condition for downstream work.

## 2. A invites members and assigns module 1 to B

After confirming the requirements, A invites B and C and checks the task assignments. The system's initial assignment differs from the target division of work, so A reassigns module 1 to B through the UI; B reads the task and accepts.

![B's task is not started, and module 2 shows waiting for upstream adoption](/img/docs/collaboration/task-offer.png)
*Figure 2: Module 1's member is B; module 2 stays in the inbox, waiting for module 1 to be adopted.*

**What to check**: go by the member and status on the task card, not by natural-language descriptions of the division of work.

## 3. B reviews the draft and submits two files

After the local AI generates the README, B previews the report, adds member-qc-notes.md through **Add material → Upload from this computer**, and edits the result note. The version 1 manifest contains two items: the AI README and the member note.

![B's version 1 draft lists the AI report and the member note](/img/docs/collaboration/delivery-draft.png)
*Figure 3: The member reviews and then submits; the attached note is kept as a separate file.*

Before submitting, B checked the 350 subset CPM values and recorded the calculation method, the verification results, and the items that need owner review in the result note.

**Tip**: before submitting, check both the file content and the result note so that the values, the text, and the work completed this round agree.

## 4. A requests revisions and B submits version 2

A previews the sealed version 1 and uses **Request revision** to have B correct the review-status description, keep the separate note, and add per-sample zero-count counts, proportions, and a CPM column-sum check.

B revises, reviews again, and submits version 2; A previews this version and adopts it. Version 1 remains in history.

![The version 2 delivery note records the changes, with version 1 history below](/img/docs/collaboration/delivery-history.png)
*Figure 4: The new version is used for this review; the old version can still be expanded.*

**What to check**: a revision produces a new delivery version; before adopting, be clear about which version you are previewing.

## 5. C accepts the downstream task and reads the adopted results

Only after B's version 2 is adopted does module 2 become assignable. A reassigns it to C before acceptance; C accepts and runs it. The system places B's version 2 README and member note into C's task inputs, so no manual copying is needed.

![C is running module 2, whose task description requires reading the adopted version 2 and the member note](/img/docs/collaboration/upstream-input.png)
*Figure 5: The project has adopted 1/2, and downstream C is running.*

Downstream uses B's adopted version 2 files; C can read these inputs directly in their own task and continue the analysis.

## 6. C previews the report, and A adopts and closes the project

C previews the report, confirms that only adopted inputs were used and that the descriptive-analysis limits are kept, then submits. A previews C's sealed report and adopts it; once all modules are complete, A fills in the summary and confirms closeout.

![C previews the treated vs. untreated subset CPM comparison report in the task session](/img/docs/collaboration/report-preview.png)
*Figure 6: The report scopes the data and does not interpret mean differences as statistical significance.*

![The project finally shows complete and 2/2 adopted](/img/docs/collaboration/project-completed.png)
*Figure 7: Both modules are complete, and the project itself is closed out.*

## Case outcomes

| Stage | Result |
| --- | --- |
| Requirement capture and confirmation | Two real work modules with dependencies |
| Review and adding material | The AI README is sealed together with the member note |
| Revision and version retention | B delivered two versions; A adopted version 2 |
| Downstream handoff | C used B's adopted version 2 report and member note |
| Human adoption and closeout | Both modules adopted; the project is finally complete |

This case shows the full collaboration flow from requirements to delivery. The analysis uses a data excerpt and a descriptive comparison, so read the results together with the relevant data scope and methods.

## Further reading

- [Collaboration guide](../features/collaboration.md): button paths, statuses, failure handling, and data boundaries.
- [Runtime and models](../getting-started/runtime-and-models.md): prepare the execution environment and structured output configuration.
- [Feature status and limitations](../reference/feature-status.md): what the current version supports.
