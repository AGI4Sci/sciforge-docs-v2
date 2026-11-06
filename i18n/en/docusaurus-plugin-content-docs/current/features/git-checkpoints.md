---
title: Git Checkpoints
description: Pin Git state at task-turn boundaries and capture a rescue snapshot automatically before any restore.
sidebar_position: 41
---

# Git Checkpoints

Git Checkpoints record a Git snapshot of the workspace before and after a task turn, pinning down “what state the code was in when this round started and when it finished.” It owns only checkpoint metadata and restore policy; actual repository operations run through the generic version-control capability. Research context itself is recorded by [Research Checkpoints](./research-checkpoints.md).

## How to open it

- Entry: **Git Checkpoints** in the top toolbar; the right panel is titled **Git Checkpoints** as well.
- Target: the local Git workspace bound to the current session.
- Prerequisite: the workspace is a Git repository and a version-control provider is available; a non-Git workspace never produces checkpoints.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Review turn checkpoints | Open the panel and read the records before and after each turn by time | A checkpoint list with phases |
| Check the scope of changes | Select a checkpoint to view the workspace patch and change summary | A diff preview |
| Restore a known state | Select the target checkpoint, click **Restore**, and confirm | A workspace back at that snapshot |
| Avoid losing state on restore | No extra step; the system captures it automatically before restoring | A rescue checkpoint ID |
| Refresh the current list | Click the refresh icon to reload | The latest checkpoint list |

## Typical workflow

1. Start a task in a Git workspace; the system records a checkpoint before the turn.
2. After the turn completes or ends, refresh the panel and confirm the after-turn checkpoint appears.
3. Select the target checkpoint, review the patch preview first, and then decide whether to restore.
4. When you need to restore, click **Restore** and confirm, and wait while the system creates a rescue checkpoint first.
5. After the restore finishes, recheck the workspace state and the [Changes](./change-inspector.md) panel.

## Inputs, outputs, and permissions

- Reads: workspace Git state, snapshot metadata, patches, and change summaries.
- Writes: checkpoint metadata is written to the application data directory; restoring rewrites workspace files.
- Approval or external effects: restoring is destructive and requires explicit confirmation; if the rescue checkpoint cannot be created, the restore is aborted.
- What it does not do: run Git commands directly or bypass version-control provider policy, or fabricate checkpoints in a non-Git workspace.

## Known limitations

- The current implementation covers turn-boundary checkpoints for local Git workspaces; the panel provides listing, preview, refresh, and restore.
- The panel has no button for creating checkpoints by hand; checkpoints are triggered by the turn lifecycle and do not depend on the panel staying open or on manual saves.
- A patch preview may be truncated by the version-control provider, in which case only part of the diff is visible.
- Restoring is a workspace-level rollback, not a read-only comparison; the rescue checkpoint is a protection point captured automatically before the restore.
- It does not store the research question, sources, or restore position, so it cannot replace a Research Checkpoint.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Checkpoints](./research-checkpoints.md): save research context and the restore position.
- [Artifact Versions](./artifact-versions.md): pin a single artifact instead of the whole workspace.
- [Change Inspector](./change-inspector.md): check which files one session actually changed.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how workspaces, sessions, and Git state relate.

> Implementation basis: `@sciforge/domain-git-checkpoints` v1.0.3.
