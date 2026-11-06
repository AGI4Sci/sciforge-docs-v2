---
title: Workbench tools
description: Learn what the Files, Terminal, Browser, Computer Use, Changes, and research panels do.
sidebar_position: 3
---

# Workbench tools

The entries in the toolbar are scoped to the current workspace and session. Opening a tool does not authorize the Agent to perform the external operations inside it.

| Tool | What it is good for | Key checks |
| --- | --- | --- |
| **Files and preview** | Browse directories and open text, spreadsheets, images, or scientific objects | Path, file version, and whether the file is raw data |
| **Terminal** | Run commands and view logs and long-running task status | Working directory, parameters, return codes, and write and network impact |
| **Browser** | Open local previews or research material | URL, sign-in state, downloads, and external submissions |
| **Computer Use** | Operate desktop apps that need a graphical interface | Target app, system permissions, and confirmation of critical actions |
| **Changes** | Review the file differences in the current session | Changes that existed before the task vs. new changes |
| **Artifacts and Checkpoints** | Pin figures, reports, and phase state | Inputs, versions, and restore points |
| **Evidence DAG / Dossier** | Review claims and sources and produce research deliverables | Counterevidence, limitations, and unverified items |

## Principles for using tools

- Confirm the workspace location shown at the top first.
- Terminal commands must state what they will read and write.
- Browser downloads, account sign-ins, and form submissions count as external effects.
- Actions in Computer Use such as sending, authorizing, deleting, and paying should be confirmed by the user.
- Explain tool results back in the session; do not leave only a raw output snippet that cannot be located.

![SciForge Computer Use settings page](/img/docs/guides/ai-assistants-computer-use.jpg)
*Figure 1: Computer Use is available only when the Runtime, Backend, and macOS permissions all allow it.*

For permissions, see [Permissions and security](../operations/security.md).
