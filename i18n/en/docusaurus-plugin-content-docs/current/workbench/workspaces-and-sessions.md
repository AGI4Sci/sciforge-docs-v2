---
title: Workspaces and sessions
description: Use a workspace to scope the project and a session to preserve each stretch of continuous work.
sidebar_position: 1
---

# Workspaces and sessions

A workspace determines where the Agent reads files, views Git, and runs commands; a session stores the messages, execution, and results for one goal. A single workspace can have multiple sessions.

## Open a workspace

1. In the workspace location menu, choose **Local workspace** or a remote target that has already been configured.
2. Choose the directory that contains the paper, code, or data.
3. Check the project name on the left and the location status at the top.
4. Use a new session for a new goal; keep the existing session when continuing the same goal.

![SciForge new session screen](/img/docs/quickstart/quickstart-new-session.jpg)
*Figure 1: The left side organizes workspaces and past sessions; the center is where you start a new task.*

## View and reference files

Open the **Files** panel from the top toolbar, expand directories, and preview files. When you want the Agent to focus on a particular file or directory, use the reference action the page provides instead of pasting long content into the prompt.

![SciForge workspace files panel](/img/docs/guides/workspace-files.jpg)
*Figure 2: The Files panel shows the current workspace contents and can add objects to the current task context.*

## Manage sessions

- Click a session name to continue an earlier goal
- Use search to find past sessions
- Archive sessions you do not need right now, and restore them from the archived list
- Before deleting, confirm that important results are saved to the workspace or the research record
- Do not mix unrelated research goals in one very long session

## Check file changes

After a write task finishes, open **Changes**:

1. Confirm which files this session touched.
2. Open the diff and check additions, deletions, and modifications line by line.
3. Distinguish new task changes from workspace state that already existed before the task.
4. When you need a correction, reference the specific file and problem in the original session.

![SciForge Changes panel](/img/docs/guides/workspace-changes.jpg)
*Figure 3: The Changes panel reviews session modifications; project-level Git status should still be checked independently.*

## A clear session opening

> Read the README, dependency configuration, and main entry points in the current workspace. First give the shortest path to run and test; do not install dependencies or modify files. List anything you cannot confirm separately.

Related page: [Collaborate with the Agent](./agent-workflows.md).
