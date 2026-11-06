---
title: Research Checkpoints
description: Automatically turn each round of research conversation into a recoverable, immutable checkpoint.
sidebar_position: 42
---

# Research Checkpoints

Research Checkpoints automatically records accepted and completed chat turns as immutable research checkpoints. It saves the research summary, reason for changes, sources, files, and Git references for that round, and flags operations that are not yet tracked. It answers "where do I continue next time, and what was the basis at the time?" It stores research context and a resume location, not the workspace snapshots recorded by [Git Checkpoints](./git-checkpoints.md); artifact bytes and version identity are stored by [Artifact Versions](./artifact-versions.md).

## How to open it

- Entry: **Research record for this turn** on the session result card; the card offers **Open research dossier**.
- Scope: completed chat turns in the current Runtime and session.
- Prerequisite: automatic recording is on by default, the session is bound to a workspace, and v1 is generated after the first turn completes.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Record each research turn automatically | Complete a research chat as usual and wait for the record to be saved | An immutable checkpoint version |
| View this turn's record | View the title, reason for changes, inputs, and outputs on the result card | A research summary for this turn |
| Open an exact output | Select an output under **Exact artifact versions** and click **Open** | The corresponding artifact version |
| Go to the full dossier | Click **Open research dossier** | The exact record in the research dossier |
| Handle a version conflict | Save again based on the current version, or discard this turn's record | A conflict-resolution receipt |
| Start or stop recording | Use **Start automatic recording** / **Stop automatic recording** in the research dossier | A new policy revision number |

## Typical workflow

1. Open a session with a workspace and confirm that research recording is on automatically.
2. Complete a research turn and wait for the result card to show that the record has been saved.
3. Check the status of inputs, outputs, reproducibility, provenance, controls, and evidence.
4. Review untracked operations and add the actual commands, environment, and outputs for later review.
5. To continue, select a historical record in the research dossier and restore it as a new version.

## Inputs, outputs, and permissions

- Reads: turn content, tool receipts, workspace file changes, artifacts, compute runs, and Git references.
- Writes: checkpoint manifests and record bindings are committed as new versions; artifact bytes are still stored by Artifact Versions.
- Approval or external effects: importing an old session, resolving a conflict, and restoring as a new version require confirmation; starting or stopping recording returns a new policy revision number.
- What it does not do: silently backfill conversations from periods when recording was stopped, promote Terminal, IDE, or PTY activity to controlled execution, or rewrite existing versions.

## Known limitations

- The current implementation covers only accepted and completed chat turns; turns during periods when recording is stopped are not backfilled.
- Ordinary Terminal, `exec_command`, IDE, file watchers, Git diff, and post-hoc hashes count only as observations; the related output remains untracked or incomplete.
- Importing an old session preserves chat content only; the record is permanently marked legacy / incomplete and carries blocking provenance breakpoints.
- New checkpoints are visible only within the workspace and cannot be exported by default; query parameters that resemble narrative, URLs, or credentials are redacted, but this is not a general content-leak prevention system.
- When record ownership cannot be confirmed temporarily, the record is shown as pending and is not automatically assigned to a turn.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Dossier](./research-dossier.md): view records, control automatic recording, and restore historical versions.
- [Git Checkpoints](./git-checkpoints.md): save a workspace Git snapshot rather than research context.
- [Artifact Versions](./artifact-versions.md): store the artifact bytes and versions that a checkpoint references.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how a session scopes recording.

> Implementation basis: `@sciforge/domain-research-checkpoints` v1.0.5.
