---
title: Configure a read-only sandbox
description: Configure Codex's read-only execution scope, understand how Claude Plan mode differs, and compare Git status before and after a task.
sidebar_position: 3
---

# Configure a read-only sandbox

“Do not modify files” in a prompt is a task requirement; you also need to configure execution permissions. This page uses the **Codex read-only sandbox** as the getting-started path; the file-scope option of the same name in Claude Code corresponds to **Plan mode**, and the two isolate work differently.

This article reflects the current implementation as of 2026-11-06; for install-version differences, see [versions and compatibility](/docs/reference/version-and-compatibility).

## Where the setting lives

1. Expand the left sidebar and open **Settings** from the bottom.
2. Go to **AI assistant**.
3. In the AI assistant configuration cards at the top of the page, find **Codex**.
4. Find the **File access range** dropdown under that Runtime and select **Can only read files**.
5. Wait for the setting to apply, then reconnect or restart SciForge after finishing the current task; do not keep using a running task whose permissions are not yet confirmed.
6. Return to the workbench, start a new session, and confirm in the bottom-right of the input box that the execution runtime is `codex`.

The **Access** shortcut at the top of the page jumps to the Computer Use configuration; the file access range is in each Runtime's own configuration section.

![File access range in the SciForge AI assistant settings](/img/docs/guides/ai-assistants.jpg)
*Old interface: the value shown allows workspace changes; select “Can only read files” for read-only tasks.*

| Runtime | What “Can only read files” actually means | Boundaries |
| --- | --- | --- |
| **Codex** | Requests Codex's `readOnly` sandbox and disables command network access within that sandbox | Suitable for the local file inspection in this tutorial; stop and check any request that widens permissions |
| **Claude Code** | Uses Claude Code's `plan` permission mode | For analysis and planning; do not claim it provides the same filesystem sandbox isolation as Codex |
| **DSH** | Has no file access range option of the same name; the native shell is off by default and, once enabled for a DSH you installed, approved command by command | This tutorial uses Codex; do not treat DSH's shell switch as a filesystem read-only sandbox |

MCP, remote commands, and Computer Use permissions must each be checked separately; for your first task, use only the tools needed to read the local project.

Adding files from outside the workspace, dragging files in, or pasting images may import files into the workspace first. For a read-only check, reference existing files and record the baseline again once the import completes. Removing an attachment above the input box only cancels this send; it does not delete files that have already been imported.

## What read-only mode allows

You can usually:

- List directories and read text files
- Search source and configuration
- View Git status and diffs
- Run checks that do not write to the workspace
- Provide analyses, plans, and recommendations

You should not allow:

- Creating, overwriting, renaming, or deleting files
- Installing dependencies that write to the project
- Running commands that generate caches, logs, or build artifacts
- Modifying the Git index, commits, or branches

Whether a command is truly read-only depends on what it does, not what it is called. Some tests and interpreters generate caches automatically; if you hit a write failure in the read-only sandbox, change your checking approach rather than widening permissions just to finish the tutorial.

## Double verification

In a Git project, run this before and after the task:

```bash
git status --short
```

Comparing Git status detects changes but does not replace execution isolation; it also does not list files ignored by `.gitignore`. When you need a strict check of every file, use a copy of the project and additionally compare the file list and content hashes before and after the task.

If the output changes:

1. Stop any further tasks immediately.
2. Open the **Changes** panel from the vertical toolbar on the far right of the workbench or from **More tools** to check the files.
3. Do not automatically delete or restore existing modifications.
4. Determine whether the changes come from the task, from tool caches, or already existed before the task.

![SciForge Changes panel](/img/docs/guides/workspace-changes.jpg)
*Old interface: the Changes panel helps review diffs, but Git status still needs an independent check.*

## When to switch to workspace write

Switch to **Can edit workspace** only when a task explicitly needs to generate scripts, tables, figures, or documents and you have checked the plan and output paths. Write tasks should use a project copy or a clean branch, and you should review the changes when finished.

Next: [working with the Agent](../workbench/agent-workflows.md).
