---
title: Git Checkpoints
description: Automatically save Git checkpoints at the start and end of a task, and leave a rescue snapshot before restoring.
sidebar_position: 41
---

# Git Checkpoints

Git Checkpoints automatically saves the workspace's Git state at the start and end of a task turn, so you can check what this turn changed and, when needed, restore an earlier state. For the research summary, sources, and where to continue the research, see [Research Checkpoints](./research-checkpoints.md).

## Opening it

- Entry: **Git Checkpoints** in the right toolbar (expand **More tools** if it is not shown); the right panel is titled **Git Checkpoints** as well.
- Target: the local Git workspace bound to the current session.
- Prerequisite: the workspace is a Git repository and Git features are available; a non-Git workspace produces no checkpoints.

## View and restore

1. Start a task in a Git workspace, and the system automatically saves a checkpoint from before the start; you do not need to save one by hand or keep the panel open.
2. After the task turn finishes or ends, open the panel or click the refresh icon, and check the records from before the start and after the end.
3. Select a checkpoint, read the file differences and the change summary, and confirm it matches the state you want to restore.
4. When you need to restore, click **Restore** and confirm. The system first saves a rescue checkpoint; if saving fails, the restore is aborted.
5. After restoring, check the actual workspace files and the Git status. To see the file changes the current task recorded, you can use [Change Inspector](./change-inspector.md).

## Confirm before restoring

Restoring rewrites workspace files, so first confirm the target checkpoint, and check whether there are changes you still need to keep. The rescue checkpoint saves the state from before the restore, so you can get back the work that this restore overwrote.

The panel offers a list, a diff preview, refresh, and restore, with no button to create a checkpoint by hand. The diff preview may show only part of the content; when a preview is incomplete, check the actual files and the Git diff further before restoring.

## What is saved

A Git checkpoint saves the workspace's Git state, which suits reviewing code and file changes. The research question, sources, and next-step plan still need to be recorded through research checkpoints; versions of a single figure or data file can be saved separately as [Artifact Versions](./artifact-versions.md).

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Checkpoints](./research-checkpoints.md): save research context and the resume location.
- [Artifact Versions](./artifact-versions.md): save versions of a single artifact.
- [Change Inspector](./change-inspector.md): check which file changes a session recorded.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how the workspace, sessions, and Git state relate.
