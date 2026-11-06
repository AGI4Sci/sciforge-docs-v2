---
title: Evidence DAG
description: Connect claims in a session to their sources, methods, artifacts, and limitations.
sidebar_position: 44
---

# Evidence DAG

Evidence DAG helps you check what a conclusion rests on: in the graph, see the sources, computation steps, figures, and limitations that support or refute it. After you finish an analysis, click Update to save the evidence relationships as they stand at that point. To combine several sessions, use [Project DAG](./project-dag.md).

## How to open it

- Entry: in the Research panel, click **View evidence graph**. When the standalone evidence panel is open, switch from the default **Research record** to **Evidence graph**.
- Target: committed evidence snapshots in the current Runtime and session.
- Prerequisite: the task has produced a compilable trace, and the Evidence service and text-reasoning configuration are available.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Leave a reviewable trace | Keep sources, computation records, and artifact references during analysis | Runtime trace increments |
| Generate a new snapshot | Click **Update** and wait for queueing and commit to finish | An immutable Evidence snapshot |
| Inspect claims and evidence | Select a node in the graph to view its sources, runs, artifacts, and relationships | The in-session evidence graph |
| Check provenance breakpoints | Review provenance coverage, breakpoints, and limitation notes | A list of evidence gaps |
| Run a structure audit | Click **Audit** to run a read-only check against the committed snapshot | L0 audit results |
| Download a rerun spec | Select a Conclusion node and click **Download rerun spec** | A `.sciforge-rerun.json` file |

## Typical workflow

1. Complete a round of analysis and confirm that key conclusions have sources, computation records, and matching artifacts.
2. Click **Update** and confirm the status moves from queued to running and then to committed.
3. Check the full chain from claim to source, run, code, environment, and artifact version.
4. Go through the prompts about a missing source, an unverified version, or a missing approval one by one; add the real records, then update.
5. When you need a cross-session, project-level view, move on to the Project DAG.

## Inputs, outputs, and permissions

- Reads: runtime traces visible to the current session, tool receipts, committed snapshots, Artifact versions, and source anchors.
- Writes: evidence delta storage, immutable snapshots, and the audit sidecar; rerun specs are exported from committed snapshots.
- Approval or external effects: updating needs no extra approval, but it writes evidence state and snapshots and calls the configured text-reasoning service; downloading a rerun spec is read-only. Rebuilding is an advanced operation and requires specifying a reason and writing a justification.
- What it does not do: promote chat summaries or raw tool receipts directly to scientific artifacts, infer missing metadata from prose, or rewrite committed snapshots.

## Known limitations

- The graph may be empty if the task has not yet saved claims, sources, or artifact records; check the records first, then update.
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

> Implementation basis: `@sciforge/domain-evidence-dag` v2.13.0.
