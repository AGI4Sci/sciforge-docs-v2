---
title: Workbench tools
description: Open tools from the right-side vertical toolbar and understand docked pages, session panels, and execution permissions.
sidebar_position: 3
---

# Workbench tools

The current tool entry point is the workbench's **far-right vertical toolbar**, with panels expanding to its left. Entries appear according to installed extensions, the current session, and available capabilities; when space is tight, open **More tools**, or use **Customize toolbar** to adjust which supported entries appear and their order.

This page reflects the current implementation as of 2026-11-06. What older text or images call the "top bar" is now on the right; for installed-version differences, see [Version and compatibility](/docs/reference/version-and-compatibility).

| Tool | Best for | Key checks |
| --- | --- | --- |
| **Files & Preview** | Browsing directories, previewing text, spreadsheets, images, or scientific objects, and referencing task inputs | Workspace path, file version, and the difference between a reference and actually reading the contents |
| **Terminal** | Running commands and checking logs and long-running task status | Working directory, parameters, return codes, and write and network impact |
| **Browser** | Viewing local previews or research material | URL, sign-in state, downloads, and external submissions |
| **Computer Use** | Operating desktop apps on supported backends | Runtime capability, backend, system permissions, and authorization for each action |
| **[Change Inspector](../features/change-inspector.md)** | Having the Agent review this session's file changes | Requires the plugin to be installed; check overall workspace state separately with `git status --short` |
| **Artifacts, Checkpoints & research panels** | Viewing phase results, evidence, and deliverables | Actual installation state, input sources, versions, and unverified items |

An entry being present does not mean the backend is ready, nor that the Agent is authorized to perform external operations. The available scope of each extension is governed by its actual status and error messages.

## Docking and session panels

Dockable extension pages can be moved to the left, right, bottom, or main area with the position control; multiple pages on the same edge switch via tabs. Moving a page organizes your workspace; it does not change project files or execution permissions.

A session's right panel has its own layout: you can resize it, switch the bound content, split it where the panel supports it, and move forward and back through panel history. Clicking the toolbar acts on the currently focused panel; not all panels allow splitting. Confirm the current session and focused object before reviewing results.

## Check the actual impact of tools

- Verify the workspace path, especially after switching between multiple sessions or projects.
- For terminal commands, check the input, output paths, network targets, and return codes.
- Browser downloads, account sign-ins, and form submissions can have external effects.
- Actions in Computer Use such as sending, authorizing, deleting, and paying should be authorized individually.
- A panel preview is not task acceptance; explain tool results in the session and flag failures or incomplete parts.

![SciForge Computer Use history settings page](/img/docs/guides/ai-assistants-computer-use.jpg)
*Legacy interface: shows that the Runtime, Backend, and macOS permissions must each be satisfied; see this page for the current entry point.*

For file inputs, see [Workspaces and sessions](./workspaces-and-sessions.md); for permissions, see [Configuring a read-only sandbox](../getting-started/read-only-sandbox.md) and [Permissions and security](../operations/security.md).
