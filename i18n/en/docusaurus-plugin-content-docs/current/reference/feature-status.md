---
title: Feature status and limitations
description: See the conditions for using each feature and its current limits.
sidebar_position: 1
---

# Feature status and limitations

The table below lists the conditions for using each feature and its current limits.

| Capability | Conditions | Current scope and limits |
| --- | --- | --- |
| Workspace, sessions, and workbench layout | Built in | Common tools are on the right, and the account entry is below the left sidebar. |
| Codex / Claude Code | Built in | Choose the executor to use, then connect a model and set file and tool permissions. |
| DSH Runtime | Built in | A task can run for a long time while it keeps reporting progress; when there is no response for a long time, check the connection and continue the original session. |
| Attachments and file references after sending | Built in | Selected, dragged, or pasted files enter the attachment tray; file references are kept after sending. State in the task which file to read and what to check. |
| Preview of text, code, and other files | Built in | Some files can be edited directly; when one cannot be edited, the page shows the reason. |
| Local account, cloud device, and usage | Built in | Deleting a local account does not delete a cloud account or user files; cloud and model-provider identities are managed separately. |
| [Team collaboration](../features/collaboration.md) | Needs the service and project permissions | Entries for Board, Members, Requirements, Shared files, and Project info; shared files come from task deliveries, and there is currently no direct upload. For the full walkthrough, see the [Pasilla case](../cases/pasilla-collaboration.md). |
| [Biology Workbench preview](../features/life-science-preview.md) | Built in | Large files may show only a summary; after changing a molecular selection, reopen to check it. |
| [Scientific Figures](../features/scientific-plotting.md) | Needs the plugin | Saves plotting data, code, run results, and images. Needs Python and Matplotlib; R is not supported yet. |
| [Anchored Comments](../features/anchored-comments.md) | Needs the plugin | Select text to save a comment; screenshots need the matching feature enabled, and deleting and submitting feedback need confirmation. |
| [Change Inspector](../features/change-inspector.md) | Needs the plugin | Have the Agent list this session's file differences, and page through them when too long. |
| Artifact versions, checkpoints, Evidence / Project DAG, and dossier | Configured per feature | Save file versions and research records, and see the basis for conclusions in the evidence graph and the project graph. |
| Scheduled tasks and Create Loop | Needs the app running | Set up repeating tasks or multi-step flows; operations that need confirmation pause and wait. |
| Plugin marketplace, Skills, MCP | Configured by type | Install plugins, add working methods, or connect external tools as the pages direct. |
| Remote SSH management | Internal supplement | The public site does not provide VPN, SSH target registration, or server-side operation steps. |
| Virtual cell models, Slurm/PBS/Kubernetes scheduling | Connect your own | Use the model or cluster environment you configured yourself. |

When reporting a problem, include the system, the client and plugin versions, the steps taken, and a screenshot.
