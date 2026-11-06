---
title: Git Checkpoints
description: Pin Git state at task-turn boundaries and automatically leave a rescue snapshot before restoring.
sidebar_position: 41
---

# Git Checkpoints

Git Checkpoints record Git snapshots of the workspace before and after task turns, pinning down "what state the code was in before this turn started and after it finished." It owns only checkpoint metadata and restore policy; actual repository operations run through the generic version control capability. Research context itself is recorded by [Research Checkpoints](./research-checkpoints.md).

## How to open it

- Entry: **Git Checkpoints** in the right toolbar (expand **More tools** if it is not visible); the right panel is also titled **Git Checkpoints**.
- Scope: the local Git workspace bound to the current session.
- Prerequisite: the workspace is a Git repository and a version control provider is available; non-Git workspaces do not produce checkpoints.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| View turn checkpoints | Open the panel and view records before and after turns in chronological order | A checkpoint list and stages |
| Review the scope of changes | Select a checkpoint and view the workspace patch and change summary | A diff preview |
| Restore a known state | Select the target checkpoint, click **Restore**, and confirm | A workspace back at that snapshot |
| Avoid losing state during restore | No extra action is needed; the system captures it automatically before restoring | A rescue checkpoint ID |
| Refresh the current list | Click the refresh icon to reload | The latest checkpoint list |

## Typical workflow

1. Start a task in a Git workspace; the system records a pre-turn checkpoint.
2. After the turn completes or ends, refresh the panel and confirm that a post-turn checkpoint appears.
3. Select the target checkpoint, review the patch preview first, and then decide whether to restore.
4. To restore, click **Restore** and confirm, then wait for the system to create a rescue checkpoint first.
5. After the restore completes, re-check the workspace state and have [Change Inspector](./change-inspector.md) inspect the file changes in the current session.

## Inputs, outputs, and permissions

- Reads: workspace Git state, snapshot metadata, patches, and change summaries.
- Writes: checkpoint metadata is written to the app data directory; restoring rewrites workspace files.
- Approval or external effects: restoring is destructive and requires explicit confirmation; if rescue checkpoint creation fails, the restore is aborted.
- What it does not do: run Git commands directly or bypass version control provider policy, or fabricate checkpoints in non-Git workspaces.

## Known limitations

- The current implementation covers turn-boundary checkpoints in local Git workspaces; the panel provides listing, preview, refresh, and restore.
- The panel has no button for creating checkpoints manually; checkpoints are triggered by the turn lifecycle and do not depend on the panel staying open or on a manual save.
- A version control provider may truncate the patch preview, in which case only part of the diff is visible.
- Restoring is a workspace-level rollback, not a read-only comparison; the rescue checkpoint is a protection point captured automatically before the restore.
- It does not store research questions, sources, or resume locations, so it cannot replace a Research Checkpoint.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Checkpoints](./research-checkpoints.md): save research context and the resume location.
- [Artifact Versions](./artifact-versions.md): pin a single artifact instead of the whole workspace.
- [Change Inspector](./change-inspector.md): check which files a session actually changed.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how workspaces, sessions, and Git state relate.

> Implementation basis: `@sciforge/domain-git-checkpoints` v1.0.3.
