---
title: Workspaces and sessions
description: Organize projects and sessions in the sidebar, and check task inputs with the attachment tray and sent-file chips.
sidebar_position: 1
---

# Workspaces and sessions

A workspace determines where the Agent reads files, inspects Git, and runs commands; a session stores the messages, executions, and results around one goal. The same workspace can have multiple sessions.

This page reflects the current implementation as of 2026-11-06; for differences between installed versions and the public source, see [Version and compatibility](/docs/reference/version-and-compatibility).

## Get to know the current layout

- **Left sidebar**: Organizes workspaces, sessions, and navigation contributed by extensions. Expand it to view collaborative projects, My Work, and the Inbox; local account, cloud status, usage summary, and Settings sit at the bottom.
- **Center session area**: View tasks, tool calls, and answers, and enter tasks at the bottom.
- **Far-right vertical toolbar**: Opens panels such as Files; when space is tight, find entries under "More tools." Which tools appear depends on what is installed and available.
- **Docked panels**: Pages that support docking can be placed on the left, right, bottom, or in the main area; the session's right panel can also be split, resized, switched, and navigated forward and back where supported. The two layouts are not the same toggle.

When the sidebar is collapsed, the full account summary and project tree are hidden; expand it first when you need those entries.

## Open a workspace

1. In the workspace location selector, choose a local workspace or a configured, available target.
2. Select the directory containing your paper, code, or data.
3. Verify the workspace path and the project name in the sidebar, then create a session.
4. Use a new session for a new goal; continue the existing session for the same goal.

![SciForge new-session history interface](/img/docs/quickstart/quickstart-new-session.jpg)
*Legacy interface: illustrates the relationship between projects and sessions; for toolbar and account entry locations, use the current layout described on this page.*

## Add files: choose, drag, paste, or reference

**Attach file** in the input area opens the file picker; you can also drag supported files into the input area or paste files and images from the clipboard. Pasting ordinary text is still handled as text. PDFs, images, scientific data, and web documents are checked against type- and size-specific rules; unsupported files or failed imports show an error.

Open the **Files** panel from the far-right toolbar to browse, preview, and reference workspace objects. You can also type `@` to find workspace files; references containing spaces use the `@"directory/filename"` form.

Before sending, the **attachment tray** above the input box lists the objects to send with their type, path, and known size. You can preview references that support preview or remove entries you do not need to send this time. After sending, the **sent file chips** below your message keep the file name and known size; click one to preview the corresponding workspace file. It is not a pending list you can keep editing.

| Input form | Current handling | Boundary to understand |
| --- | --- | --- |
| Files already in the workspace | Keeps a workspace-relative path reference | File contents are not fully embedded in the model prompt just because an attachment chip appears; the Agent calls tools to read them as needed |
| Supported files selected or pasted from outside the workspace | Imports them into the workspace's session attachment directory, then treats them as path references | Importing writes to the workspace; removing a pending entry does not delete the imported file |
| Supported model image attachment paths | Handles images through the Runtime's attachment capability; the exact input depends on the Runtime, model, and image-processing configuration | Unlike workspace path references, this may involve embedded images or image conversion; a file chip does not prove that the model read the original image directly |

The current workbench prefers to save images as workspace references when a workspace exists. Do not read "Attach file" as syncing an entire directory to the cloud or guaranteeing that the model has understood the file's contents. A read-only demo should reference existing files directly to avoid file changes caused by extra imports.

![SciForge workspace file history panel](/img/docs/guides/workspace-files.jpg)
*Legacy interface: shows the purpose of directory browsing and preview; the current entry point is in the far-right vertical toolbar.*

## Manage sessions and review changes

Click a session to continue its goal, use search to find history, archive sessions you are not using for now, and restore them as needed. Save important results to the workspace or a research record before deleting. Do not mix unrelated research goals in one session.

After modifying files, ask the Agent to use the [Change Inspector](../features/change-inspector.md) to review this session's changes, then run `git status --short` to inspect the entire workspace. Closing a panel or switching sessions does not undo file modifications.

![SciForge change history panel](/img/docs/guides/workspace-changes.jpg)
*Legacy interface: the old panel has been removed; this image is kept only as a diff-reading example.*

A clear session opening:

> Read the README, dependency configuration, and main entry points in the current workspace. First give the shortest path to run and test, without installing dependencies or modifying files; list anything you cannot confirm separately.

Related pages: [Working with the Agent](./agent-workflows.md), [Workbench tools](./tools.md), [Identity & Access](../features/identity-access.md).
