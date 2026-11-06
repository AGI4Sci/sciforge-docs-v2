---
title: Configure the read-only sandbox
description: Configure Codex's read-only execution scope, learn how Claude's Plan mode differs, and compare Git status before and after a task.
sidebar_position: 3
---

# Configure the read-only sandbox

“Do not modify files” in a prompt is a task requirement; you also need to configure execution permissions. This page uses **Codex's read-only sandbox** as the onboarding path; the file scope option of the same name in Claude Code maps to **Plan mode**, and the two isolate work differently.

## Where the setting lives

1. Open **Settings** in the bottom-left corner.
2. Go to **AI assistant**.
3. In the AI assistant configuration card at the top of the page, find **Codex**.
4. Find the **File access range** dropdown under that Runtime and select **Can only read files**.
5. Wait until the setting shows as applied. To avoid reusing a running connection, finish the current task and restart SciForge.
6. Return to the workbench, start a new session, and confirm at the bottom-right of the input box that the executor is `codex`.

The **Permissions** shortcut button at the top of the page points to the Computer Use configuration; the file access range lives in each Runtime's own configuration section.

![File access range in SciForge AI assistant settings](/img/docs/guides/ai-assistants.jpg)
*Figure 1: The screenshot highlights the file access range. The value shown allows changes to the workspace; for read-only tasks, select “Can only read files” in the same control.*

| Executor | What “Can only read files” actually means | When to use it |
| --- | --- | --- |
| **Codex** | Asks Codex for its `readOnly` sandbox and disables command network access inside that sandbox | Suitable for the local file inspection in this tutorial; stop and review any request that widens permissions |
| **Claude Code** | Uses Claude Code's `plan` permission mode | For analysis and planning; do not claim this gives the same filesystem sandbox isolation as Codex |
| **DSH** | Has no file access range option of the same name; its native shell tools are off by default and require individual approval once enabled | Read-only guarantees depend on the capability configuration of the selected ACP session and should not be equated with the Codex sandbox |

This setting is not a unified read-only switch for all of SciForge, remote services, and other desktop apps. Permissions for MCP, remote commands, and Computer Use must be checked separately; the first task uses only the tools needed to read a local project.

## What read-only mode allows

Typically allowed:

- List directories and read text files
- Search source code and configuration
- View Git status and diffs
- Run checks that do not write to the workspace
- Provide analyses, plans, and recommendations

Not allowed:

- Create, overwrite, rename, or delete files
- Install dependencies that write to the project
- Run commands that generate caches, logs, or build artifacts
- Modify the Git index, commits, or branches

Whether a command is truly read-only depends on what it does, not on its name. Some tests and interpreters generate caches automatically; if a write fails in the read-only sandbox, change your inspection method rather than widening permissions just to finish the tutorial.

## Double verification

In a Git project, run this before and after the task:

```bash
git status --short
```

Comparing Git status detects changes; it does not replace execution isolation, and it does not list files ignored by `.gitignore`. To strictly verify every file, use a copy of the project and additionally compare the file list and content hashes before and after the task.

If the output changes:

1. Stop all further tasks immediately.
2. Open the workbench's **Changes** panel and inspect the specific files.
3. Do not automatically delete or revert existing modifications.
4. Determine whether the changes come from the task, from tool caches, or already existed before the task.

![SciForge Changes panel](/img/docs/guides/workspace-changes.jpg)
*Figure 2: The Changes panel shows the file differences involved in the current session; Git status should still serve as an independent baseline.*

## When to switch to workspace write

Switch to **Can edit workspace** only when the task explicitly requires generating scripts, tables, charts, or documents, and you have checked the plan and output paths. Write tasks should use a project copy or a clean branch, and you should review the changes afterward.

Next: [Collaborate with the Agent](../workbench/agent-workflows.md).
