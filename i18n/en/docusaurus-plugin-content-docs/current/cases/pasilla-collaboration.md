---
title: Pasilla RNA-seq three-person collaboration
description: Walk through requirement confirmation, member delivery, revision, deliverable acceptance, downstream handoff, and project closeout on a real data excerpt.
sidebar_position: 4
---

# Pasilla RNA-seq collaboration

Use three accounts to follow a delivery through review and handoff. A owns the project. B submits a count QC and subset CPM report. C compares the groups using B's accepted version 2. Complete the sign-in, device, and model steps in the [Collaboration guide](../features/collaboration.md) first.

## Inputs and roles

Get the fruit-fly RNA-seq counts and sample annotations from [Bioconductor pasilla](https://bioconductor.org/packages/release/data/experiment/html/pasilla.html). Use the original header and the first **50 genes × 7 samples**, keeping their order and values. Compute each sample's subset CPM using the sum of that sample's counts across the 50 genes as the denominator. Interpret the results as a descriptive comparison of this excerpt.

| Role | Where to work | Deliverables |
| --- | --- | --- |
| A, owner | Define two dependent modules in **Requirements**, then assign, review, and close the project from the **Board** | Two decisions to accept and a project summary |
| B, assigned member | Open module 1 and calculate the excerpt totals for 7 samples and subset CPM for 50 genes | Two versions of `README.md`, each with a separate `member-qc-notes.md` |
| C, downstream member | Open module 2, read B's accepted version 2, and compare the treated and untreated group means | One descriptive comparison in `README.md` |

## 1. A defines two dependent modules

In the project's **Requirements → Inputs and boundaries**, A pastes the original count-table header, the first 50 rows as TSV, and the group annotations for all 7 samples. A lists the two tasks and their deliverables under **Goals and deliverables**. B can read the excerpt in **Requirements** before accepting and find it in the module description under task details once assigned.

Click **Save requirements**. When **Work modules** shows two entries and module 2 depends on module 1, click **Confirm requirements**. Adapt these example requirements to your task:

```text
Module 1: Use the 50 genes × 7 samples in Inputs and boundaries. Report each sample's total count,
subset CPM, fraction of zero counts, and column-sum check. Include the method, code to reproduce it,
and scope in README.md. The member may attach a separate review note.

Module 2: Use the accepted version of README.md and the member note from module 1.
Compare the treated and untreated mean subset CPM. List the 5 genes with the largest
absolute mean differences. Keep the comparison descriptive, without p-values, FDR, or significance claims.
```

![Two modules awaiting owner confirmation](/img/docs/collaboration/requirements-ready.png)
*Figure 1. Requirements show the inputs, deliverables, and dependency.*

## 2. A invites members and assigns module 1 to B

A invites B and C from **Members**. After they join, A opens module 1 from the **Board** and uses **Reassign** to give it to B. The card shows B under **Ready**. B opens the request, clicks **Accept task**, and starts from the task session.

![B's assignment and the downstream module waiting on its dependency](/img/docs/collaboration/task-offer.png)
*Figure 2. B has module 1. Module 2 stays in the backlog until module 1 is accepted.*

## 3. B reviews the draft and submits two files

B opens the draft and previews `README.md`. Use **Add materials → Upload from this device** to include `member-qc-notes.md`. Record the method and results in **Result summary**, then click **Submit** and confirm. Version 1 appears in the delivery section with both files, ready for A to review.

![B's version 1 draft shows the report and separate member note](/img/docs/collaboration/delivery-draft.png)
*Figure 3. The submission contains both the report and the separate note.*

## 4. A requests changes and B submits version 2

A opens the version 1 submission and clicks **Request revision**. After entering the changes, A clicks **Send revision request**. In this run, A asked B to correct the report's review status, keep the separate note, and add the count and proportion of zeros plus the CPM column-sum check for each sample.

B updates `README.md`, keeps `member-qc-notes.md` separate, and submits version 2. A opens the version 2 submission at the top of the delivery section. It says it is awaiting owner review, shows the three additions, and still includes the member note. A clicks **Adopt delivery (采纳交付)**. The project shows **Adopted 1/2** and makes version 2 available downstream. Version 1 stays under **Version history**.

![Version 2 with version 1 retained in Delivery History](/img/docs/collaboration/delivery-history.png)
*Figure 4. A opens version 2 for review.*

## 5. C accepts the downstream task and opens the accepted files

After adopting version 2, A opens module 2 on the **Board** and assigns it to C. C clicks **Accept task**, opens the task session, and uses the **Files** panel on the right to open the task's working directory. SciForge places the accepted delivery there. C opens the two inputs whose names end in `README.md` and `member-qc-notes.md` and uses them for the group comparison.

![C runs module 2 with the accepted version 2 as input](/img/docs/collaboration/upstream-input.png)
*Figure 5. The project shows Adopted 1/2 while C runs the downstream task.*

## 6. C submits the report and A closes the project

C opens the draft and previews `README.md`. The report identifies B's accepted version 2 and lists the 5 genes with the largest absolute mean differences. C clicks **Submit**. The task moves to **Awaiting review**.

A opens C's delivery and clicks **Adopt delivery (采纳交付)**. When the project shows **Adopted 2/2**, A writes the summary and clicks **Complete project**. Once the project shows **Completed**, both deliveries are still available.

![C previews the descriptive subset CPM comparison](/img/docs/collaboration/report-preview.png)
*Figure 6. The group means and differences cover the 50-gene excerpt.*

![Project complete with 2/2 deliveries accepted](/img/docs/collaboration/project-completed.png)
*Figure 7. A accepted both deliveries and closed the project.*

## Case results

This three-account run took place on **2026-10-27**. The screenshots are from that run. The example covers the first 50 rows from 7 samples and delivers Markdown reports and the member note. Full-dataset import, separate matrices, and PNG output are outside the scope of this example.

<details>
<summary>Recalculation and file records for this run</summary>

- Independent recalculation matched all 350 subset CPM values in B's version 1. Version 2 kept those 350 values and added the requested checks.
- Both inputs in C's task directory matched the files listed in A's accepted version 2 delivery.
- Recalculation from the same excerpt matched C's top 5 ranking and the reported group means and differences to 6 decimal places.

</details>

## Continue reading

- [Collaboration guide](../features/collaboration.md)
- [Runtime and models](../getting-started/runtime-and-models.md)
- [Feature status and limits](../reference/feature-status.md)
