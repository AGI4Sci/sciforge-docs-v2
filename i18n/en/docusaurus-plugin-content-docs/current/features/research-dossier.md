---
title: Research Dossier
description: Turn the research question, inputs, methods, results, and limitations into a readable deliverable.
sidebar_position: 46
---

# Research Dossier

The research dossier puts the research summary, sources, key artifacts, versions, and limitations together, for review and delivery. After opening a research record, read the results and the limitations that need attention first, then expand versions and technical details as needed. Process records come from [Research Checkpoints](./research-checkpoints.md), and evidence relationships are in [Evidence DAG](./evidence-dag.md).

## How to open it

- Entry: **Research** in the right toolbar (expand **More tools** if it is not shown); the right panel is titled **Research** as well; **Open research dossier** on a session result card binds to the exact version.
- By default it shows the current research stage. To see history, open a specific artifact version or research record. References to the old Scientific Compute may still appear, but that compute service has been retired.
- Prerequisite: the session is bound to a workspace. Once there are research checkpoints or artifact versions, you can view the detailed records.

![SciForge research dossier panel](/img/docs/guides/research-dossier.jpg)
*The research dossier brings the research narrative, version position, trust summary, and the limitations to consider onto one reading surface.*

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Read a research record | Open it from an exact version or a compute run | Overview, key artifacts, and trust summary |
| Inspect research limitations | Review **Limitations to consider** and **Breakpoints** | An actionable list of limitations |
| Browse historical versions | Load older versions in the **Versions** area | The version list and the current position |
| Compare or restore | Use **Compare exact version** or **Restore as new version** | A diff summary and a new current version |
| Preview or export | Use **Open verified preview** or **Export Bundle V2** | A verified preview and a portable bundle |
| Manage automatic recording | Start or stop automatic recording, or import earlier chats | A policy revision number and legacy records |

## Typical workflow

1. Complete a round of research and click **Open research dossier** on the result card.
2. Check the exact target and version position, expanding technical details when needed to view the Version ID and digest.
3. Read the overview, research sources, declared files, reproduction status, and limitations.
4. To trace back or roll back, compare exact versions or restore as a new version, and check the receipt from the owning domain.
5. Before delivery, export Bundle V2 and confirm that access restrictions and unverified items are clearly accounted for.

## Inputs, outputs, and permissions

- Reads: exact records from owning domains such as artifact versions, research checkpoints, compute runs, evidence, and Git checkpoints.
- Writes: the dossier itself writes no records; restore, import, and the recording switch are all delegated to the owning domain.
- Approval or external effects: restore and legacy-session import follow the confirmation policy of the owning domain; exporting a Bundle writes workspace files and asks for confirmation.
- What it does not do: keep a copy of records, own the current pointer, or fall back to latest when a record is missing or a digest does not match.

## Known limitations

- What you see depends on the checkpoints, artifact versions, and evidence the task has saved. If there are no records yet, finish and save a round of the task first.
- The dossier itself stores no records; when an owning domain is unavailable, only the corresponding block degrades, and the rest of the verified content remains readable.
- If the requested version is missing or fails verification, an error is shown; another version is never opened quietly.
- Imported legacy sessions are permanently marked legacy / incomplete and keep a blocking provenance breakpoint.
- Empty blocks and inapplicable compute, evidence, or review blocks are omitted; return to the Evidence DAG when you need the full relationship graph.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Checkpoints](./research-checkpoints.md): the upstream source of the records and restore actions in the dossier.
- [Artifact Versions](./artifact-versions.md): the exact version source that the dossier opens and compares.
- [Evidence DAG](./evidence-dag.md): the complete in-session evidence relationships behind the dossier.
- [Feature status and limitations](../reference/feature-status.md): how the Partially available status is judged.

> Implementation basis: `@sciforge/domain-research-dossier` v1.6.0.
