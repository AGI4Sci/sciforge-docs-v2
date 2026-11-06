---
title: Project DAG
description: Aggregate project goals, claims, review status, and decisions across sessions.
sidebar_position: 45
---

# Project DAG

Project DAG combines the evidence from several sessions in the same project, to help you see which conclusions the project has so far and which questions still need review. First save evidence in each session's [Evidence DAG](./evidence-dag.md), then set a goal here, update the project graph, and trace sources.

## How to open it

- Entry: the **Project DAG** panel on the right; resource navigation from a project, Goal, or Snapshot opens the corresponding view.
- Target: the project that corresponds to the current workspace, along with its committed Evidence snapshots.
- Prerequisite: the project has at least one committed Evidence snapshot, and both the Evidence and Project services are available.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| View the project-wide graph | Open the panel and read the latest committed Project snapshot | Project-level claims, findings, and review status |
| Set a project goal | Fill in the title and description under **Project goal** and click **Save goal** | A new Goal version |
| Aggregate new evidence | Click **Update now** and wait for the task to commit | A new Project snapshot and receipt |
| See what needs attention | Review the attention count, audit status, and review package | A to-do list |
| Return to session evidence | Click **Open Evidence DAG for session** | The evidence graph of that session |
| View claim provenance | Select a Claim to see the strongest provenance path, sources, L0–L4, and breakpoints | Cross-layer provenance details and related decisions |

## Typical workflow

1. Complete analyses in several sessions and commit a snapshot in the Evidence DAG for each.
2. Open the Project DAG, fill in the project goal, and save it.
3. Click **Update now** and confirm that the receipt moves through queued and running to committed.
4. Review the attention items and key Claims, jumping back to the source session to verify when needed.
5. For restricted sources, read only the redacted paths and breakpoints; do not try to bypass the access policy.

## Inputs, outputs, and permissions

- Reads: committed Evidence snapshots, project graphs, Claims, audit records, and decision records.
- Writes: project update tasks, Goal versions, and immutable Project snapshots; audits write only to a separate sidecar.
- Approval or external effects: panel operations are limited to local project records; any publication or external delivery still requires Runtime authorization, which project policy cannot replace.
- What it does not do: read raw chat, accept uncommitted source graphs, modify the graph directly from the audit page, or cache the content of Evidence snapshots.

## Known limitations

- The current implementation consumes only committed Evidence snapshots; an upstream commit merely marks the project as needing a refresh and does not compile each item automatically.
- When the Project view is closed, nothing is precompiled; to get a new view, update explicitly and wait for the persistence receipt.
- After a new snapshot is committed, audits that are queued, running, completed, or failed on the old snapshot are marked stale, and old Findings never overwrite the new graph.
- Sources you are not allowed to view have their content hidden, and only limited status and gap hints are shown.
- The audit checks an existing project graph; an audit failure does not undo a graph that was already saved, and it does not modify conclusions directly.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Evidence DAG](./evidence-dag.md): the only evidence source for the project graph.
- [Research Dossier](./research-dossier.md): turn project results into an external deliverable.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how several sessions share one project scope.
- [Permissions and security](../operations/security.md): the boundary between access policy and publication authorization.

> Implementation basis: `@sciforge/domain-project-dag` v1.0.9.
