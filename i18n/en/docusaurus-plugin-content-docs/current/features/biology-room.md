---
title: Biology Room
description: Pin sequences, structures, genome tracks, and annotations into a traceable workspace room.
sidebar_position: 12
---

# Biology Room

Biology Room ships with SciForge and needs no separate plugin. It organizes the sequences, structures, genome tracks, and annotations from biological samples or experimental material into one traceable room, for viewing, annotating, and handoff.

In a session, have the Agent create or open a room, then view the files in it through file preview. A room stores asset references, selections, view state, and history, and has no separate panel today.

## Opening it

- Entry point: an Agent invokes a Biology Room capability in a session to create or open a room; files inside the room are viewed through file preview.
- Applies to: biological files and room manifests in the current workspace; paths must be workspace-relative.
- Prerequisite: the workspace is writable; asset extensions are supported; when an index is referenced, the index lives in the same workspace as the source file.

## What it can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Create a room | Give a title and optionally attach a first batch of assets | Initial room manifest and revision 1 |
| Open or create from a file | Pass in one workspace file; reuse an existing room that already contains that file | A new room, or the manifest of an existing room |
| Add and manage assets | Add or remove assets, or switch the current asset, against the current revision | A new revision; asset fingerprint, format, modality, and readiness status |
| Record selections and annotations | Save sequence, structure, or genome selections and view state, and bind annotation anchors | Structured selections, view state, and annotations stored by anchor |
| Refresh and roll back | Refresh asset fingerprints; view history and restore a revision | Updated revision, orphaned annotation markers, and history events |

## Typical workflow

1. List existing rooms first and check whether a room already contains the target file, to avoid creating duplicates.
2. Open or create a room from the file; verify the returned path, format, SHA-256, and index fingerprint.
3. Commit a set of changes against the current revision, using dry-run mode first to see whether there are changes and warnings.
4. After applying the changes, read the room again and verify the revision, asset readiness, and annotation anchors.
5. Refresh the room after source files change; to roll back, view history first, then restore the older revision to produce a new revision number.

## Inputs, outputs, and permissions

- Read: FASTA/GenBank, PDB/mmCIF, and GFF3/BED/VCF files in the workspace, optionally with `.fai`, `.gzi`, `.tbi`, and `.csi` indexes; up to 4 indexes per asset.
- Write: room manifests, revision snapshots, and event logs, stored in the room directory under `.sciforge/biology/rooms/` in the workspace; source files are referenced read-only.
- Approval or external effects: room writes touch workspace metadata only and do not trigger approval; put human confirmation before dry-run review, cascading asset removal, and restoring an old revision.
- What it will not do: modify or delete source files, perform alignment, variant calling, or structural computation, or provide real-time multi-user collaboration; removing an asset removes only the room reference.

## Known limitations

- Narrower support than Life Science Preview: no FASTQ, GTF, omics matrices, imaging, or spectra; gzip covers only FASTA, GFF, BED, and VCF.
- A room holds at most 128 assets, 2,000 annotations, and 100 MiB of assets in total; a single unindexed asset is capped at 25 MiB.
- Rooms have no standalone interface; creation, changes, and restoration all happen through the Agent in a session.
- After a refresh, missing or unreadable assets are marked explicitly, and annotations that lost their anchor are marked orphaned and need human confirmation before you handle them.
- Applying changes validates the revision number and rejects stale ones; history is stored by revision and may be truncated.
- The collaboration boundary is sharing one room manifest and version history, not cloud-based real-time multi-user collaboration.

## Related pages

- [Life Science Preview](./life-science-preview.md): dedicated views for sequences, structures, and genome files in a room.
- [Acquiring and organizing data](./dataset-api.md): download data and record its source, date, version, license, and verification results.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): workspace location, file paths, and recovery boundaries.
- [Evidence & Reproducibility](./evidence-and-reproducibility.md): fold room changes into the larger research record chain.

> Current version: built-in Biology Workbench 1.1.3. For what selection saving covers in the molecular preview, see [Life Science Preview](./life-science-preview.md).
