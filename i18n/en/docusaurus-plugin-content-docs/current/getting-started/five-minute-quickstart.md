---
title: Five-minute quickstart
description: Open a local project with SciForge and let the Agent complete its first read-only analysis.
sidebar_position: 1
---

# Five-minute quickstart

This guide walks you through opening a local project and having **Codex** analyze its top-level structure. The task uses Codex's **read-only sandbox** and compares Git status before and after. Claude Code's Plan mode works differently; see [Configure the read-only sandbox](./read-only-sandbox.md).

:::tip[What you'll end up with]

The workspace opens correctly, the Runtime responds, the Agent gives you a project overview, and file state is unchanged before and after the task.

:::

## Before you begin

Prepare the following:

- SciForge is installed and running
- A clean Git workspace; for non-Git projects, make a copy first
- A working model access method is configured
- The Codex Runtime is installed and configured

Cloud collaboration and other team features require additional setup. For your first run, start with a local workspace.

## Step 0: Record a project baseline

If the project uses Git, run this in the project directory first:

```bash
git status --short
```

Save the output. Ideally it is empty; if changes already exist, confirm they are unrelated to your walkthrough. For non-Git projects, work on a copy.

## Step 1: Complete model and Runtime configuration

On first launch, SciForge walks you through choosing a **Model API** or a **Coding Plan**. Model access determines where requests get model capability; the Runtime determines which Agent executes tasks.

![Model access options on SciForge first launch](/img/docs/quickstart/quickstart-model-access.jpg)
*Figure 1: Model access options in the first-launch guide; Coding Plan and Model API are two independent paths.*

Once you reach the workbench, open **Settings** from the bottom-left corner and confirm on the **AI assistant** page that the Codex command is recognized.

## Step 2: Set the read-only sandbox

Go to **Settings → AI assistant** and, in the **Codex** configuration section at the top of the page, change **File access range** to **Can only read files**. If the interface shows “Can edit workspace”, do not start this tutorial. Wait until the setting shows as applied, finish the current task, restart SciForge, and start a new session.

![File access range setting for the SciForge AI assistant](/img/docs/guides/ai-assistants.jpg)
*Figure 2: The file access range lives in the Codex configuration section. The value in the screenshot is “Can edit workspace”; before following this tutorial, change it to “Can only read files” in the same place.*

Writing “do not modify files” in the prompt does not create technical isolation. If a request to widen permissions or call a write tool appears during execution, stop and review the task first; this analysis does not need those operations.

## Step 3: Open a local workspace

In the workspace location menu, select **Local workspace**, then open the project directory you prepared. Confirm that the project area on the left shows the correct directory name.

After you start a new session, the input area appears at the bottom of the workbench.

![New session and local workspace in SciForge](/img/docs/quickstart/quickstart-new-session.jpg)
*Figure 3: The current local workspace on the left and the input area at the bottom where you send your first task.*

## Step 4: Choose the execution Runtime

In the execution settings area at the bottom-right of the input box, confirm that it currently shows `codex`. This setting chooses who executes; the upstream model is still determined by the model access configuration.

If the current Runtime is not connected, go back to **Settings → AI assistant** and check the command and sign-in status.

## Step 5: Send a read-only task

Enter the complete prompt below:

> Look at the current workspace, list only the top-level files and directories, and explain in one sentence what this project might be. Do not modify files.

![Complete read-only prompt ready to send in SciForge](/img/docs/quickstart/quickstart-first-task.jpg)
*Figure 4: The prompt, the current workspace, and the execution Runtime are all visible at once.*

After you send it, the Agent reads the project structure and performs a read-only inspection.

![Read-only task running in SciForge](/img/docs/quickstart/quickstart-task-running.jpg)
*Figure 5: The same session enters the running state, with the original task text and execution status still visible.*

## Step 6: Check the result and file state

When the task finishes, the result should list the project's top-level contents and give one bounded judgment about the project.

![Completed read-only analysis result in SciForge](/img/docs/quickstart/quickstart-task-result.jpg)
*Figure 6: The final answer in the same session; the result stays consistent with the prompt you sent.*

Run it again:

```bash
git status --short
```

Compare the output with the pre-task state. A read-only task should not add, delete, or modify project files. Git status does not list ignored files such as caches; for a complete check, also compare the file list and content hashes in the copy.

## What done looks like

- The workspace opens correctly
- The current Runtime responds
- Codex's file access range is set to “Can only read files”
- The Agent can read and summarize the project's top-level structure
- The interface shows the sent prompt, the execution, and the final result
- Git status is identical before and after the task

## Going further

After your first task, you can send:

> Continue the read-only analysis. Explain what the main directories are for, the likely entry files, and the recommended way to start or test the project; list separately anything you cannot confirm from the source. Do not modify files or install dependencies.

Next, read [Runtime and model access](./runtime-and-models.md) or continue to the [ECCITE-seq virtual cell case](../cases/virtual-cell-evidence-atlas.md).
