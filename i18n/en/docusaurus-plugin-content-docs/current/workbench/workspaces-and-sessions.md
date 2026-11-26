---
title: Workspaces and sessions
description: Organize projects and sessions in the sidebar, and check task inputs with the attachment tray and sent-file chips.
sidebar_position: 1
---

# Workspaces and sessions

Open the folder that holds your paper, code, or data. Create a session for the task. The workspace is where the assistant reads files, checks Git, and runs commands. Reopen a session to return to its messages and results.

## Find your way around

- Open the **left sidebar** for workspaces, sessions, and extension pages. Expand it for collaboration projects, **My Work**, and **Inbox**. Account, cloud status, usage, and settings are at the bottom.
- Enter tasks in the **session area** and follow replies and tool calls there.
- Open **Files** and other panels from the **toolbar on the far right**. Look under **More Tools** if an icon is out of view. Available tools depend on which features are installed and enabled.
- Drag a panel edge to resize it. Dockable pages can move to the left, right, bottom, or main area. Some panels support splitting, switching views, or navigating back and forward.

## Open a workspace

1. Open the workspace location menu and select a local workspace or a configured, available target.
2. Select the folder containing your files. The sidebar shows the project name and workspace path.
3. Create a session for a new goal. To resume a task, select its session in the sidebar.

![Creating a session in a SciForge workspace](/img/docs/quickstart/quickstart-new-session.jpg)
*The new session appears under the selected project.*

## Add files by selecting, dropping, pasting, or referencing

### Reference a workspace file

Open **Files** from the far-right toolbar and reference the file. You can also type `@` in the input box to search the workspace. Use `@"folder/file name"` for a path with spaces. The pending attachment appears above the input box with its name and path. This route works for a read-only demo using existing files.

![Files button in the far-right toolbar and the open workspace Files panel](/img/docs/guides/workspace-files-v0218-en.png)
*Click **Files** on the far-right toolbar. The example workspace’s file tree opens beside it.*

### Import a file from outside the workspace

Click **Add File**, drag a supported file into the input area, or paste a file or image from the clipboard. Pasted plain text goes into the message. When an import succeeds, an item appears in the attachment tray and a copy is saved in the workspace's session attachments directory. PDFs, images, scientific data, and web documents have their own format and size requirements. Follow the error if a file needs to be smaller or use a different format.

### Check what you are sending

1. **Before sending**, use the **attachment tray** above the input box to see the type, path, and displayed size. Open an attachment to preview it when available. Remove any unwanted item from the tray. Imported copies stay in the session's attachments directory. Open that directory from **Files** to remove a copy.
2. **After sending**, a **sent file tag** below the message shows that the corresponding file was included. Click it to open a read-only preview. To see whether the assistant used the file, ask it to identify the file and a page, line, or short passage it cited, then compare that reference with the attachment. Use a model with image input when you want to analyze a picture.

![Sample file in the attachment tray above the input box before sending](/img/docs/guides/workspace-attachment-before-v0218-en.png)
*Before sending, `sample-notes.md` appears in the **Attachments** tray above the input box.*

![Sample file tag below the user message after sending](/img/docs/guides/workspace-attachment-after-v0218-en.png)
*After sending, the `sample-notes.md` tag appears below the message. Click it to preview the file.*

## Manage sessions and review changes

Select a session to continue working, or use search to find one. Archive sessions you want to set aside and restore them when needed. Before deleting a session, save important results to the workspace or research record.

Use [Change Inspector](../features/change-inspector.md) in a session with the compatible plugin to see the changes recorded for that session. Run `git status --short` to see Git's view of the workspace. Changes on disk persist after you close the panel or switch sessions.

Here is an example of a first task you can adapt:

> Read the workspace README, dependency configuration, and entry point. Tell me how to run and test the project and what information is missing. Keep this task read-only.

Related pages: [Working with agents](./agent-workflows.md), [Workbench tools](./tools.md), and [Identity and sign-in](../features/identity-access.md).
