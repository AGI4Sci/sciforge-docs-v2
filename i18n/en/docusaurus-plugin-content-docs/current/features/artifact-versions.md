---
title: Artifact Versions
description: Save immutable versions of individual artifacts such as figures and data, and compare or restore them at any time.
sidebar_position: 40
---

# Artifact Versions

Artifact Versions gives each individual artifact in a workspace a stable identity and records every save as an immutable version. It answers the question “which revision of the same figure or dataset am I on, and can I get back to a specific version?” It sits after analysis output and before evidence assembly and delivery; research context is still recorded by [Research Checkpoints](./research-checkpoints.md), and claims and their source relationships are owned by [Evidence DAG](./evidence-dag.md).

## How to open it

- Entry: the **Artifacts** area of the workbench research summary lists recent artifacts; select an item and view its versions in the **Research** panel on the right.
- Target: a single artifact in the current workspace, such as a figure, dataset, log, or code file.
- Prerequisite: an Agent or a production plugin has already committed the artifact as a version, and the session is bound to a workspace.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Pin one output | Have the Agent or a production plugin such as the plotting extension commit a new version | An immutable version and the current pointer |
| Ingest large files | Submit bytes through staged upload (begin → append → seal, with abort on failure) | Content-addressed snapshots |
| Compare two versions | Select exact versions in the **Versions** area of the research dossier and compare them | Differences in content, metadata, and dependencies |
| Return to an old version | Select a historical version and restore it as a new version | A new current version, with the old version kept |
| Package for exchange | Select an exact version in the research dossier and export a Bundle; verify it before importing | A portable bundle and the verification result |

## Typical workflow

1. Generate a figure or dataset in a task and confirm the file is in the current workspace.
2. Have the Agent commit the artifact, adding dependencies and access policy as needed.
3. Open the exact version in the **Research** panel and check the content digest and dependencies.
4. After editing, commit again and compare the old and new versions; restore as a new version if needed.
5. Before delivery, select the exact version in the research dossier and export a Bundle, then verify and import it in the target workspace.

## Inputs, outputs, and permissions

- Reads: artifact metadata, version history, and snapshot bytes for the current workspace; restricted versions are filtered by access policy.
- Writes: the version index, content-addressed objects, and lifecycle events; restoring only adds a version and never rewrites history.
- Approval or external effects: Bundle export writes a bundle file, and import installs version records; when export is triggered from the research dossier, the interface asks for confirmation first.
- What it does not do: judge scientific conclusions, generate claims or source relationships, or fall back to “latest” when no exact version is given.

## Known limitations

- Feature status is **Partially available**: the entry is registered, but content appears only after a task has actually committed artifacts; an empty panel does not mean the feature is broken.
- Snapshot bytes are stored content-addressed; reference-style versions revalidate the workspace file on read, and moves, content changes, or absence surface as source status.
- Exporting a Bundle requires explicitly selecting a non-empty artifact or version; if any version in the closure is invisible or not exportable, the whole export fails; import rejects incomplete dependencies, non-linear history, duplicate sequence numbers, cyclic references, or corrupted objects.
- Staged upload transfers in chunks with a 4 MiB limit per chunk; an unfinished, expired stage cannot be appended to further.
- Each version carries an immutable access policy; read, compare, restore, and import all enforce the same policy, and a historical view never loosens access to a restricted version.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Dossier](./research-dossier.md): view, compare, restore, and export exact versions from the dossier.
- [Evidence DAG](./evidence-dag.md): use versions as the evidence and sources behind a claim.
- [Git Checkpoints](./git-checkpoints.md): pin the Git state of the whole workspace rather than a single artifact.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how a workspace scopes artifacts.

> Implementation basis: `@sciforge/domain-artifact-versions` v1.1.2.
