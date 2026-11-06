---
title: Research Checkpoints
description: Automatically turn each round of research conversation into a restorable, immutable checkpoint.
sidebar_position: 42
---

# Research Checkpoints

Research Checkpoints automatically record accepted and completed chat turns as immutable research checkpoints, preserving that round's research narrative, change reason, sources, declared files, compute runs, Git references, and any operations that remain untracked. It answers “where do I continue from next time, and what was the basis then?”; it stores research context and a restore position rather than the workspace snapshot recorded by [Git Checkpoints](./git-checkpoints.md). Artifact bytes and version identity are stored by [Artifact Versions](./artifact-versions.md).

## How to open it

- Entry: **Research record for this turn** in the session result card; the card also offers **Open research dossier**.
- Target: completed chat turns in the current Runtime and session.
- Prerequisite: automatic recording is on by default, the session is bound to a workspace, and v1 is created once the first turn completes.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Record each research turn automatically | Complete a research chat normally and wait for the record to be saved | An immutable checkpoint version |
| Read this turn's record | View the title, change reason, inputs, and outputs on the result card | This turn's research summary |
| Open an exact output | Select an output under **Exact output artifacts** and click **Open** | The corresponding artifact version |
| Go to the full dossier | Click **Open research dossier** | The exact record in the research dossier |
| Handle a version conflict | Save again from the current version, or discard this turn's record | A conflict-handling receipt |
| Start or stop recording | Use **Start automatic recording** / **Stop automatic recording** in the research dossier | A new policy revision number |

## Typical workflow

1. Open a session with a workspace and confirm that research recording is on automatically.
2. Complete a round of research and wait for the result card to show that the record is saved.
3. Check the status of inputs, outputs, reproduction, provenance, control, and evidence.
4. Stay alert to operations shown as untracked; do not treat ordinary terminal activity as controlled execution.
5. To continue, select a historical record in the research dossier and restore it as a new version.

## Inputs, outputs, and permissions

- Reads: turn content, tool receipts, workspace file changes, Artifacts, compute runs, and Git references.
- Writes: the checkpoint manifest and record bindings are committed as a new version; artifact bytes are still stored by Artifact Versions.
- Approval or external effects: importing an old session, handling a conflict, and restoring as a new version all require confirmation; starting or stopping recording returns a new policy revision number.
- What it does not do: silently backfill conversations from a stopped-recording period, promote Terminal, IDE, or PTY activity to controlled execution, or rewrite existing versions.

## Known limitations

- The current implementation covers only accepted, completed chat turns; turns during a stopped-recording period are not backfilled.
- Ordinary Terminal, `exec_command`, IDE, file watchers, Git diffs, and after-the-fact hashes count only as observations, and the related output stays untracked or incomplete.
- Importing an old session keeps only the chat content; the record is permanently marked legacy / incomplete and carries a blocking provenance breakpoint.
- New checkpoints are visible only within the workspace and cannot be exported by default; query parameters that look like narrative, URLs, or credentials are redacted, but this is not a general content-leak prevention system.
- When a provider's delivery result is ambiguous, the record stays pending and fails closed; it is never assigned to a turn automatically.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Dossier](./research-dossier.md): read records, control automatic recording, and restore historical versions.
- [Git Checkpoints](./git-checkpoints.md): save a workspace Git snapshot rather than research context.
- [Artifact Versions](./artifact-versions.md): store the artifact bytes and versions that a checkpoint references.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how a session scopes recording.

> Implementation basis: `@sciforge/domain-research-checkpoints` v1.0.4.
