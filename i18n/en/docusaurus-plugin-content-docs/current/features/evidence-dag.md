---
title: Evidence DAG
description: Connect claims in a session to their sources, methods, artifacts, and limitations.
sidebar_position: 44
---

# Evidence DAG

Evidence DAG is the evidence compiler inside a session: it extracts claims, sources, runs, artifacts, and relationships from the visible runtime trace, and compiles them into an immutable evidence snapshot on an explicit update or at a formal boundary. It answers “what supports or refutes this conclusion?” It sits after a single analysis and before project-level aggregation and external delivery; cross-session aggregation is handled by [Project DAG](./project-dag.md).

## How to open it

- Entry: the **Evidence DAG** panel on the right; resource navigation from a Claim, an evidence snapshot, or a similar item opens the corresponding session.
- Target: committed evidence snapshots in the current Runtime and session.
- Prerequisite: the task has produced a compilable trace, and the Evidence service and text-reasoning configuration are available.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Leave a reviewable trace | Run the task normally; tool results declare `evidenceLineage` | Runtime trace increments |
| Generate a new snapshot | Click **Update** and wait for queueing and commit to finish | An immutable Evidence snapshot |
| Inspect claims and evidence | Select a node in the graph to view its sources, runs, artifacts, and relationships | The in-session evidence graph |
| Check provenance breakpoints | Review provenance coverage, breakpoints, and limitation notes | A list of evidence gaps |
| Run a structure audit | Click **Audit** to run a read-only check against the committed snapshot | L0 audit results |
| Download a rerun spec | Select a Conclusion node and click **Download rerun spec** | A `.sciforge-rerun.json` file |

## Typical workflow

1. Complete a round of analysis and make sure tool results carry structured lineage and exact artifact references.
2. Click **Update** and confirm the status moves from queued to running and then to committed.
3. Check the full chain from claim to source, run, code, environment, and artifact version.
4. Manually confirm breakpoints such as a missing source, an unverified version, or a missing approval; do not paper over them with prose explanations.
5. When you need a cross-session, project-level view, move on to the Project DAG.

## Inputs, outputs, and permissions

- Reads: runtime traces visible to the current session, tool receipts, committed snapshots, Artifact versions, and source anchors.
- Writes: evidence delta storage, immutable snapshots, and the audit sidecar; rerun specs are exported from committed snapshots.
- Approval or external effects: updating needs no extra approval, but it writes evidence state and snapshots and calls the configured text-reasoning service; downloading a rerun spec is read-only. Rebuilding is an advanced operation and requires specifying a reason and writing a justification.
- What it does not do: promote chat summaries or raw tool receipts directly to scientific artifacts, infer missing metadata from prose, or rewrite committed snapshots.

## Known limitations

- Feature status is **Partially available**: the entry is registered, but the graph only becomes meaningful once a task actually produces claims, sources, and artifact records; an empty panel is not a failure.
- Only nodes and edges in committed snapshots are audit-eligible; pending failures are shown separately and never make the committed graph unusable.
- Promoting a claim to L4 requires a stable run record, verifiable inputs, exact software, parameters, environment, and logs or artifacts; stochastic runs must also supply a random seed.
- Missing fields become named provenance breakpoints and are never filled in by inference; the built-in audit currently performs deterministic L0 structural checks.
- Rebuilding is only for schema upgrades, corruption recovery, or reinterpretation, not a routine editing entry point; previews of restricted evidence fail according to the access policy.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Project DAG](./project-dag.md): aggregate the committed snapshots of several sessions into a project view.
- [Research Dossier](./research-dossier.md): the reading-oriented delivery surface.
- [Artifact Versions](./artifact-versions.md): the immutable artifact versions that evidence references.
- [Virtual cell evidence atlas case](../cases/virtual-cell-evidence-atlas.md): how evidence is organized in a complete task.

> Implementation basis: `@sciforge/domain-evidence-dag` v1.1.5.
