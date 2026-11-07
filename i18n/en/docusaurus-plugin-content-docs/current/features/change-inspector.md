---
title: Change Inspector
description: Check which file changes the current task recorded, and verify the actual content item by item.
sidebar_position: 43
---

# Change Inspector

Change Inspector helps you check which files the current task changed and what changed in each one. After you install and enable the plugin, you can ask the Agent directly to list the changes, then verify them item by item.

## How to use it

Install a compatible package from a trusted source, enable the plugin, and grant the permissions it needs; see [Extension Center](./extensions.md) and [Version & Compatibility](../reference/version-and-compatibility.md). In the current session, where file changes have already occurred, you can ask the Agent:

> Check which files this task changed, and explain each change. If the content is too long, show it in batches and tell me what is not yet shown.

Look at the file list first to confirm the scope of the changes matches the task, then check the specific content of the important files. If anything is still missing, have the Agent keep showing it in batches; when you need to verify the full content, read the actual files in batches directly.

## Tips

- The results contain only file changes already recorded in the current session, not the records of other sessions in the same workspace.
- Changes made by manual edits or other tools may not appear in the records. When you need to confirm those changes, check the actual files and, if needed, compare with the Git status. An empty list does not mean the workspace was never modified.
- When there are many files or changes, what is shown may be incomplete. First confirm what has not yet been shown, then keep checking in batches; do not rebuild a whole file from partial diffs alone.
- If more edits happen during the review, refresh the file change list and re-check the affected files.
- After you disable the plugin or revoke its permissions, you must enable it again or re-authorize it to continue checking.

## After checking

Change Inspector only reads records; it does not modify files, roll back, save checkpoints, or make network requests. When you find a problem, have the Agent change the file in question and then check again. To restore the workspace state, see [Git Checkpoints](./git-checkpoints.md).

Related: [Evidence & Reproducibility](./evidence-and-reproducibility.md), [Permissions & security](../operations/security.md), [Plugin license terms](../reference/plugin-licenses.md).
