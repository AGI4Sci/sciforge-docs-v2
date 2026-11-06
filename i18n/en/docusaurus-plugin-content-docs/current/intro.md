---
title: SciForge documentation
description: Start with your first safe task and work up to the research workbench, evidence chain, automation, and extension capabilities of SciForge.
sidebar_position: 1
slug: /intro
---

# SciForge documentation

SciForge is an intelligent workbench for research tasks. It lets **Codex**, **Claude Code**, or **DeepSeek Harness (DSH)** execute tasks within explicit workspace, tool, and permission boundaries, while keeping files, commands, figures, evidence, and human review in a single workflow you can pick up again.

:::info[Content baseline]

This site is based on the public source code, generated capability catalog, and real interface of [AGI4Sci/SciForge](https://github.com/AGI4Sci/SciForge). Historical wikis, design drafts, or a single Agent answer are not treated as released features on their own.

:::

## Recommended reading order

| Order | Documentation set | What you will accomplish |
| ---: | --- | --- |
| 1 | [Five-minute quickstart](./getting-started/five-minute-quickstart.md) | Complete your first local task in a read-only sandbox |
| 2 | [End-to-end cases](./cases/overview.md) | Understand how SciForge connects research questions, execution, evidence, and delivery |
| 3 | [Features & Extensions](./features/overview.md) | Browse the 22 bundled domain extensions plugin by plugin, and learn about Skills, MCP, and the Extension Marketplace |
| 4 | [Permissions and security](./operations/security.md) | Choose the right sandbox, approvals, and file access scope |
| 5 | [Feature status](./reference/feature-status.md) | Check which capabilities are verified, partially available, or experimental |

## Four objects to understand first

| Object | Role |
| --- | --- |
| **Workspace** | Points to a local or remote project directory and determines the file, Git, and terminal context |
| **Session** | Stores the messages, execution process, and results for a single goal |
| **Runtime** | Codex, Claude Code, or DSH handles planning, tool calls, and file operations |
| **Research record** | Pins results and their basis with artifact versions, Checkpoints, the Evidence DAG, and the Research Dossier |

## How the documentation labels capabilities

- **Verified**: The corresponding path has been completed against the current source code and real interface.
- **Partially available**: The main entry point exists, but platform, data, or operational limits remain.
- **Experimental**: Suitable as an integration or research direction; do not present it as a ready-to-use feature.
- **Not released**: Exists only in designs, research drafts, or plans not yet implemented.

For your first session, go straight to the [Five-minute quickstart](./getting-started/five-minute-quickstart.md).
