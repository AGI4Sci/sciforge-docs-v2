---
title: Artifact Versions
description: Save independent versions of a single artifact such as a figure or data file, and compare or restore them at any time.
sidebar_position: 40
---

# Artifact Versions

Artifact Versions helps you keep different versions of the same figure, the same dataset, or any other file. Every save leaves an independent version, so you can view, compare, and restore it. After you change a workspace file, you need to save the artifact version again for this result to stay in the history. You can review the research process through [Research Checkpoints](./research-checkpoints.md), and check how a conclusion relates to its sources in [Evidence DAG](./evidence-dag.md).

## Opening it

- Entry: the **Artifacts** area of the workbench research summary lists recent artifacts; after selecting an entry, view its versions in the **Research** panel on the right.
- Target: a single artifact in the current workspace, such as a figure, data, log, or code file.
- Prerequisite: the session is bound to a workspace, and the Agent or the plugin that produced the artifact has already saved an artifact version.

## Save and check versions

1. Produce a figure or data in a task, and confirm the actual file is in the current workspace.
2. Have the Agent save an independent version of this artifact, and associate the inputs and related files used to produce it.
3. Find the artifact in the **Artifacts** list, open it, and check the currently selected version, the content digest, and the related files.
4. After changing the artifact, save again. In the **Versions** area of the research dossier, choose the two versions to compare, and check the differences in content and generation information.
5. When you need an older result, choose the historical version and restore it as a new version. Restoring keeps the existing history; afterwards, check the new version and the actual file state.

## Export and import

Before delivery, explicitly choose the artifact versions to export in the research dossier, then export a Bundle. Exporting writes files, and the interface asks for confirmation first. Check that all the versions and related files the bundle needs are present, and that they are all allowed to be accessed and exported; if any required version is not visible or not allowed to be exported, the whole export fails.

Validate the Bundle before importing it in the target workspace. Importing adds version records; a package with missing dependencies, inconsistent history, or damaged content is rejected. Before sharing, also check the bundle for data that should not be sent out.

## Tips

- Only artifacts that have been saved appear in the version list. [Scientific Figures](./scientific-plotting.md) keeps its own figure history and does not register it here automatically; when you need a link, save an artifact version separately.
- Some versions reference workspace files. After a file is moved, changed, or deleted, viewing it may report a changed or missing source; check the actual file first.
- Viewing, comparing, restoring, and importing are all limited by version access permissions. An entry in the history list may also be impossible to open or export.
- A version record does not replace scientific review of the result; before delivery, still check the inputs, the methods, and the conclusions.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Dossier](./research-dossier.md): view, compare, restore, and export selected versions.
- [Evidence DAG](./evidence-dag.md): use versions as the evidence and sources for claims.
- [Git Checkpoints](./git-checkpoints.md): save the Git state of the whole workspace.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how a workspace limits the scope of artifacts.
