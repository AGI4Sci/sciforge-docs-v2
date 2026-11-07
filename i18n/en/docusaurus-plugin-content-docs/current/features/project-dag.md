---
title: Project DAG
description: Aggregate project goals, claims, review status, and decisions across sessions.
sidebar_position: 45
---

# Project DAG

Project DAG combines the evidence from several sessions in the same project, to help you see which conclusions the project has so far and which questions still need review. First update and save the evidence graph in each session's [Evidence DAG](./evidence-dag.md), then come back to the project graph and click **Update now**. After a session saves new evidence, the project graph still has to be updated manually.

## Opening it

- Entry: the **Project DAG** panel on the right; you can also open the matching view from a project, goal, or historical snapshot.
- Target: the project that corresponds to the current workspace, and the evidence graphs each session has saved.
- Prerequisite: the project has at least one saved session evidence graph, and the evidence-graph and project-graph features are available.

## Update and review the project graph

1. Finish the analysis in each session, save the sources and results, and update Evidence DAG for each. Wait until each session's evidence graph has finished saving.
2. Open the Project DAG, fill in the title and description under **Project goal**, and click **Save goal**.
3. Click **Update now**, wait for queueing, execution, and saving to all finish, then check this project graph. Only saving session evidence or closing the panel does not generate a new project graph automatically.
4. Review the items that need attention, the audit status, and the materials provided for review. Select important conclusions and check each one: What does it say? Which sources support it? Can it be traced to the original records? Can the analysis be rerun under its original conditions? What evidence is still missing?
5. When you need to check details, open the matching session's Evidence DAG. After adding sources or results, first save the session evidence graph, then update the project graph manually.

## When reviewing

- Confirm you are reviewing the graph from this update. After a new graph is saved, the old graph's audit results are marked stale, and you should recheck against the current graph.
- The audit checks a project graph that is already saved. An audit failure does not undo a graph that was saved, and it does not modify conclusions directly.
- Sources you are not allowed to view have their content hidden, and only limited status and gap hints are shown. When reviewing, note which parts could not be checked.
- The project graph uses the evidence graphs each session has saved; analysis results that are not yet saved need to be organized in the session first.

## Saving and sharing

Saving a goal and updating the project graph adds project records, so you can review them later. Operations in the panel act on the local project records; publishing or sending content out still needs authorization as the app requires. Before sharing, check source permissions, and state the unverified conclusions and the evidence gaps.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Evidence DAG](./evidence-dag.md): save the session evidence the project graph needs.
- [Research Dossier](./research-dossier.md): turn research results into a readable deliverable.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how several sessions share one project scope.
- [Permissions & security](../operations/security.md): access permissions and publication authorization.
