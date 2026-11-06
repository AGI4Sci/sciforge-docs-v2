---
title: Artifact Versions
description: Save immutable versions of individual artifacts such as charts and data, and compare or restore them at any time.
sidebar_position: 40
---

# Artifact Versions

Artifact Versions gives each artifact in a workspace a stable identity and records every save as an immutable version. It answers the question "which revision of this chart or dataset am I on, and can I return to a specific one?" It sits after analysis produces output and before evidence organization and delivery; research context is still recorded by [Research Checkpoints](./research-checkpoints.md), and claim-to-source relationships are handled by [Evidence DAG](./evidence-dag.md).

## How to open it

- Entry: the **Artifacts** area of the workbench research summary lists recent artifacts; select a specific item, then view versions in the **Research** panel on the right.
- Scope: a single artifact in the current workspace, such as a chart, dataset, log, or code file.
- Prerequisite: an agent or production plugin has already committed the artifact as a version, and the session is bound to a workspace.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Pin a produced output | Have the agent or a tool integrated with the artifact versioning service commit a new version | An immutable version and a current pointer |
| Ingest large files | Submit bytes through staged upload (begin → append → seal, abort on failure) | A content-addressed snapshot |
| Compare two versions | Select exact versions in the **Versions** area of the research dossier and compare them | Differences in content, metadata, and dependencies |
| Return to an older version | Select a historical version and restore it as a new version | A new current version; the old version is retained |
| Package for exchange | Select an exact version in the research dossier and export a Bundle; verify it before importing | A portable bundle and verification result |

## Typical workflow

1. Generate a chart or dataset in a task and confirm that the file is in the current workspace.
2. Have the agent commit the artifact; add dependencies and access policy if needed.
3. Open the exact version in the **Research** panel and check the content digest and dependencies.
4. After changes, commit again and compare the old and new versions; restore as a new version if needed.
5. Before delivery, select the exact version in the research dossier and export a Bundle, then verify and import it in the target workspace.

## Inputs, outputs, and permissions

- Reads: artifact metadata, version history, and snapshot bytes in the current workspace; restricted versions are filtered by access policy.
- Writes: the version index, content-addressed objects, and lifecycle events; restoring only adds a version and never rewrites history.
- Approval or external effects: Bundle export writes a bundle file, and import installs version records; when export is triggered from the research dossier, the UI asks for confirmation first.
- What it does not do: judge scientific conclusions, generate claim-to-source relationships, or fall back to "latest" when no exact version is specified.

## Known limitations

- Content appears only if a task has actually committed artifacts. Scientific Figures maintains its own figure history and does not automatically commit it here; register an artifact version separately when you need to connect the two.
- Snapshot bytes are stored by content address; reference-based versions re-verify workspace files on read, so moves, content changes, or missing files surface as source status.
- Bundle export requires explicitly selecting a non-empty artifact or version; if any version in the closure is invisible or export-prohibited, the entire export fails; import rejects incomplete dependencies, non-linear history, duplicate sequence numbers, circular references, or corrupted objects.
- Staged upload transfers data in chunks with a 4 MiB limit per chunk; an incomplete, expired stage cannot accept further appends.
- Each version carries an immutable access policy; reads, comparisons, restores, and imports all enforce the same policy, and restricted versions are not loosened by the history UI.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Dossier](./research-dossier.md): view, compare, restore, and export exact versions from the dossier.
- [Evidence DAG](./evidence-dag.md): use versions as the evidence and sources behind a claim.
- [Git Checkpoints](./git-checkpoints.md): pin the Git state of the whole workspace rather than a single artifact.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how a workspace scopes artifacts.

> Implementation basis: `@sciforge/domain-artifact-versions` v1.4.0.
