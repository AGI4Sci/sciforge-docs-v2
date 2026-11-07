---
title: Five-minute quickstart
description: Open a local project, analyze it read-only with Codex, and verify the file state before and after the task.
sidebar_position: 1
---

# Five-minute quickstart

Start by having the Agent examine a local project in read-only mode: open a workspace, confirm Codex's permissions, send a task, then compare the file state. When you are done, you should see a project overview and no changes to project files.

## 1. Prepare a project and a model

Start SciForge, prepare a clean Git project or a copy of a project, and configure working model access and Codex. For the first run you can start from a local workspace without signing in to the collaboration cloud.

In the first-run wizard or **Settings → General**, choose **Model API** or **Coding Plan**. Then go to **Settings → AI assistant** and check whether Codex is detected. Settings is at the bottom of the expanded left sidebar; account and cloud status are in the same area.

![Model access onboarding](/img/docs/quickstart/quickstart-model-access.jpg)
*Illustrates the two paths, Model API and Coding Plan.*

## 2. Record the file state and set read-only permissions

Run this in the project directory and save the output:

```bash
git status --short
```

If there are already modifications, record them clearly first; for a non-Git project, use a copy. Go to **Settings → AI assistant → Codex** and set **File access range** to **Can only read files**, keeping an appropriate tool approval policy. Wait for the setting to apply, finish any existing tasks, then reconnect or restart and start a new session.

![File permission settings](/img/docs/guides/ai-assistants.jpg)
*“Can edit workspace” in the figure allows writes; change it to “Can only read files” before starting this tutorial.*

For detailed steps, see [configure a read-only sandbox](./read-only-sandbox.md). Write the no-modification instruction into the prompt as well; if you see a request to widen permissions, stop and check, because this task needs no write access.

## 3. Open a local workspace and start a new session

In the Workspace location menu, choose Local workspace, open the project directory, and check the path and the project name on the left. Start a new session, and confirm in the bottom input area that the execution runtime is **Codex**.

The left side of the current workbench is for project, session, and collaboration navigation; the **vertical toolbar on the far right** opens tools such as files, and panels dock beside it. If there are many tools, open **More tools**.

![New session interface](/img/docs/quickstart/quickstart-new-session.jpg)
*Shows a local project and a new session.*

## 4. Send your first task

Enter:

> Look at the current workspace, list only the top-level files and directories, and describe in one sentence what this project might be. Do not modify files or install dependencies.

You do not need to add attachments for this task. To point at an existing file, use the file panel's reference action or type `@`. Choosing files from outside your machine, dragging them in, or pasting images may import files into the workspace first, which changes the file baseline for the read-only check; save that for a later task. For the difference between the attachment tray and the labels on sent files, see [workspaces and sessions](../workbench/workspaces-and-sessions.md).

![First task prompt](/img/docs/quickstart/quickstart-first-task.jpg)
*Shows the task text and the execution runtime.*

After sending, watch the tool calls, working directory, and execution results in the session. If the Runtime is not connected, check **Settings → AI assistant** and the model configuration first, then send again.

![Read-only task execution](/img/docs/quickstart/quickstart-task-running.jpg)
*Shows the execution state within the same session.*

## 5. Verify the results and files

The answer should list the top-level contents and give a grounded judgment about what the project is. Run again:

```bash
git status --short
```

Compare with the pre-task state and confirm that no project files were added, deleted, or modified. Git does not show ignored caches; when you need a strict check, also compare your copy's file list and content hashes. If you find changes, stop and investigate rather than restoring existing modifications outright.

![Read-only analysis result](/img/docs/quickstart/quickstart-task-result.jpg)
*Viewing the analysis result in the session.*

Once you confirm that the workspace is correct, Codex responds normally, read-only permissions are applied, and the file state matches the pre-task state, you have completed your first task.

Next, you can continue with:

> Continue the read-only analysis. Explain what the main directories are for, the likely entry files, and a recommended way to start or test the project. List anything that cannot be confirmed from the source separately. Do not modify files or install dependencies.

Continue reading: [Runtime and model access](./runtime-and-models.md), [working with the Agent](../workbench/agent-workflows.md).
