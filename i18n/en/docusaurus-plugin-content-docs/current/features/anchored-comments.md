---
title: Anchored Comments
description: Select a piece of text, leave a comment, and come back to discuss and check it in place.
sidebar_position: 22
---

# Anchored Comments

Select a piece of text in a research record to leave a question, a suggested change, or review feedback on it. The comment keeps the selected text and the research-record entry it belongs to, so you can check back later.

## Add a comment

This guide refers to public source version **0.2.3**. The Market index bundled with the current public source build has no installable entries. These steps apply once a compatible plugin is installed, enabled, and authorized to save comments in the workspace. See [Extension Center](./extensions.md) for installation sources.

1. Open the workspace and select the session containing the text.
2. Open **Research record**, and drag to select text within a single entry.
3. Click **Add comment**, and check the selected text shown in the panel and the research-record entry it belongs to.
4. Write your feedback and click **Save**.

**Discuss selection** opens a chat draft that carries the selected text. To save it as a comment, use **Add comment**. If the panel already holds unsaved content, a new selection asks whether to keep or replace the draft.

For example, select “Missing values were set to zero”, choose **Add comment**, and write “Check whether missing means not measured”. Save it, then ask the Agent to list the workspace comments and check that the quotation matches your note.

## View, edit, and delete

You can ask the Agent to list, view, or update the comments that already exist in the current workspace. The panel is mainly for creating new comments; to change an existing one, say in the session which comment to update and what to change.

Deleting a comment requires confirmation. Comments are stored in the workspace and do not change the commented source file. After you switch projects, select the content you want to comment on again.

## Screenshots and feedback

A screenshot needs a separate action; saving text does not take one automatically. The current app view can be saved only when the app supports screenshots and screenshot permission has been granted. Before capturing, check the screen for accounts, tokens, or other sensitive information.

Submitting feedback to an external service also needs separate confirmation. If no feedback service is configured, comments can only be saved and discussed locally.

## Tips

- After the original text changes, re-check the quotation and its position.
- Comments belong to the current workspace. Before sharing a project, check the comments and screenshots for content you do not want to share.
- If **Add comment** is missing, check that the plugin is enabled, then select text within a single Research record entry in the current session.

Related: [Agent workflows](../workbench/agent-workflows.md), [Plugin license terms](../reference/plugin-licenses.md).
