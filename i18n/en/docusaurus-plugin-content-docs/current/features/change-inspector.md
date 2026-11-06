---
title: Change Inspector
description: Summarize which files the current session actually changed and review the differences line by line.
sidebar_position: 43
---

# Change Inspector

Change Inspector reads the file changes reported by an Agent session, summarizes the change count and status per file, and renders a unified diff. It answers the question “the Agent says it finished — but which files actually changed, and what changed in them?” It only displays session changes read-only; it does not replace project-level Git state and is not responsible for saving checkpoints.

## How to open it

- Entry: **Changes** in the top toolbar; the right panel is titled **Changes** as well.
- Target: file changes reported by the Agent thread in the current session.
- Prerequisite: the session is bound to a workspace, and the task has already produced write operations.

![SciForge Changes panel](/img/docs/guides/workspace-changes.jpg)
*The Changes panel summarizes one session's edits by file and supports line-by-line diff review.*

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| See which files changed | Open **Changes** and read the file list and change counts | A session-level file inventory |
| View one status only | Use the status filter: All statuses, Completed, Running, or Failed | A filtered change list |
| Locate a file by name | Enter a keyword in **Filter changed files** | Matching files |
| Review line-level differences | Select a file to view its diff, and copy the diff if needed | A unified diff view |
| Tell task edits from pre-existing state | Compare the workspace files against the Git state | A manual review conclusion |

## Typical workflow

1. After a write-type task finishes, open **Changes** from the top toolbar.
2. First confirm that the number and scope of changed files match expectations.
3. Filter by status or file name to locate the key files and any failures.
4. Select a file and check additions, deletions, and modifications line by line; copy the diff when you need to discuss it.
5. If you find a problem, go back to the original session, reference the specific file, and fix it, then inspect the project-level Git state separately.

## Inputs, outputs, and permissions

- Reads: change observations, file paths, task status, and diff content for the current session.
- Writes: none; the panel does not modify workspace files.
- Approval or external effects: there is no approval step, and the panel makes no external requests.
- What it does not do: replace Git commit history, restore or undo changes, or stop the host's session recording when the panel is closed.

## Known limitations

- The current implementation covers only changes reported by the session; an empty panel may mean there are no changes or nothing was reported, which does not prove the task wrote no files.
- At most the newest 5,000 changes are shown; earlier changes do not appear in the list.
- A running task may keep producing changes, so refresh or reopen the panel to check again.
- It offers a session view, not a project-level historical diff; use Git Checkpoints or a separate Git inspection for a baseline, since cross-session aggregation is outside this panel.
- When loading fails, the panel shows an error; reload before judging the change results.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Git Checkpoints](./git-checkpoints.md): pin the Git state of the whole workspace at turn boundaries.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): where the Changes panel fits in the session flow.
- [Permissions and security](../operations/security.md): workspace write and approval boundaries.

> Implementation basis: `@sciforge/domain-change-inspector` v1.0.3.
