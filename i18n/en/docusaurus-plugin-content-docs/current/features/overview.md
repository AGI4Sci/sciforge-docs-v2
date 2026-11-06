---
title: Features & Extensions overview
description: Browse SciForge bundled domain extensions plugin by plugin — from sources and analysis to evidence and collaboration, one page each.
sidebar_position: 1
---

# Features & Extensions overview

SciForge ships **22 bundled domain extensions** with the installer. Each one owns its capabilities, UI entry points, and permission boundaries as an independent plugin, and all of them are listed together in the Extension Center. This chapter devotes one page to each plugin, describing its entry points, what it can do, what it produces, and its current limitations.

:::info[What "plugin" means on this page]
It refers to bundled domain extensions compiled with the app that need no separate download (trusted compile-time). Locally installed packages, Agent Skills, and MCP Servers in the Extension Center are three other kinds of object; see [Skills, MCP, and Extensions](./extensions.md).
:::

![SciForge Extension Center](/img/docs/guides/extensions-center.png)
*The Extension Center shows bundled domain extensions, locally installed packages, and Skills separately, and labels each with its source, version, and status.*

## Find plugins by research stage

### Research sources and scientific objects

| Plugin | What it solves | Main entry point |
| --- | --- | --- |
| [Life Science Preview](./life-science-preview.md) | View sequence, structure, omics, spectral, and imaging files directly in the workspace, without converting them to text first | File preview |
| [Dataset API](./dataset-api.md) | Register public biological databases and object storage, pull and organize data on a plan, and retain provenance | Session result card, Create Loop resource panel |
| [Biology Room](./biology-room.md) | Organize biological experiments, samples, and run records into workspace objects you can keep working with | Workspace file preview, capability invocation |
| [Scientific Compute](./scientific-compute.md) | Run governed compute steps through a deterministic local Provider | Capability invocation |

### Analysis and review

| Plugin | What it solves | Main entry point |
| --- | --- | --- |
| [Scientific Figures](./scientific-plotting.md) | Select files, plot through chat, link Python code and runs, and compare and formally accept candidates | "Scientific Figures" in the right sidebar (local MVP) |
| [Visual Review](./visual-review.md) | Review images and charts by hand and route feedback explicitly back to the Agent | Right panel |
| [Anchored Comments](./anchored-comments.md) | Anchor comments to files, text positions, or selections so people and the Agent share them | Top toolbar, global overlay |

### Evidence & Reproducibility

| Plugin | What it solves | Main entry point |
| --- | --- | --- |
| [Artifact Versions](./artifact-versions.md) | Save immutable versions of a single artifact, compare differences, and restore as a new version | Research dossier panel (research summary) |
| [Git Checkpoints](./git-checkpoints.md) | Pin the Git state of a workspace at a given stage so you can return to a known baseline | Right panel, top toolbar |
| [Research Checkpoints](./research-checkpoints.md) | Save the context and resume point of a research stage so the next session has a footing | Session result card |
| [Change Inspector](./change-inspector.md) | Summarize which files a session actually changed, instead of going by the Agent's summary alone | Right panel, top toolbar |
| [Evidence DAG](./evidence-dag.md) | Connect claims from a session to sources, methods, figures, and limitations | Right panel |
| [Project DAG](./project-dag.md) | Aggregate project-level goals, claims, review status, and decisions across sessions | Right panel |
| [Research Dossier](./research-dossier.md) | Turn research questions, inputs, methods, results, and limitations into an external-facing deliverable | Right panel |

### Agent and workbench tools

| Plugin | What it solves | Main entry point |
| --- | --- | --- |
| [Terminal](./terminal.md) | Run commands in a controlled workspace and keep the commands and output | Bottom panel, top toolbar |
| [Browser Preview](./browser-preview.md) | Open web pages inside the app and let the Agent operate them under explicit approval | Right panel |
| [Computer Use](./computer-use.md) | Let supported Runtimes operate desktop apps through a local Backend | MCP, system permissions |

### Automation

| Plugin | What it solves | Main entry point |
| --- | --- | --- |
| [Create Loop](./create-loop.md) | Chain AI tasks, conditions, HTTP, approvals, and subflows in a multi-node flow | Top toolbar, right panel |

### Collaboration and content

| Plugin | What it solves | Main entry point |
| --- | --- | --- |
| [Identity & Access](./identity-access.md) | Manage local accounts, OIDC sign-in, device registration, and credential boundaries | Top account entry point |
| [Collaboration](./collaboration.md) | Let several people divide work in a project, claim tasks, review, and deliver results | Main workspace |
| [Content Space](./content-space.md) | Upload, download, and open native documents in a Provider content space | Right panel |
| [SiYuan Notes](./siyuan.md) | Connect your own remote SiYuan service as a full-page editor and archive task summaries automatically | Main workspace |

## How to choose

- **Start with sources**: if a file will not open or you cannot read its format, start with [Life Science Preview](./life-science-preview.md).
- **Get data first**: if you need a public database or object storage, register the source with [Dataset API](./dataset-api.md), then have the Agent work from that source.
- **Plot something**: use [Scientific Figures](./scientific-plotting.md) to generate, modify, and accept candidates through chat, with code and run records linked and saved inside the plugin. [Visual Review](./visual-review.md) and [Artifact Versions](./artifact-versions.md) are separate capabilities; check each one's scope before use.
- **Deliver**: solidify the work in the order "Change Inspector → checkpoints → Evidence DAG → research dossier"; see [Evidence & Reproducibility](./evidence-and-reproducibility.md).
- **Repeat a run**: use [Scheduled tasks](./automation.md) for a single instruction and [Create Loop](./create-loop.md) for multiple steps.
- **Work as a team**: confirm [Identity & Access](./identity-access.md) first, then go to [Collaboration](./collaboration.md).
- **Extend model capabilities**: Skills, MCP, and locally installed packages do not change the plugin list; see [Skills, MCP, and Extensions](./extensions.md).

## Maturity and boundaries

- Each plugin's maturity follows [Feature status and limitations](../reference/feature-status.md); page text describes only the current implementation scope and does not present source registration as verified completion.
- **Paper Radar** and **OpenContent** have left the current product line; related entry points in older docs and screenshots no longer represent available features.
- The **Remote SSH** connection manager (registering labs, VPNs, and SSH targets) is not included in the open-source client; the open-source workspace location picker only switches between local workspaces and attached remote sessions.
- Content Space currently uses a user-supplied **SiYuan** service as its main Provider; the local mock Provider is for testing only and is not a user feature.
- Whether something can be installed from the Extension Marketplace depends on the app's current index; entries that are not listed or are blocked state the reason, which does not affect bundled plugins.

## Relation to other chapters

- How the workbench organizes workspaces, sessions, and approvals: see [Workbench guides](../workbench/workspaces-and-sessions.md).
- Runtimes, models, and security boundaries: see [Runtime and models](../getting-started/runtime-and-models.md) and [Permissions and security](../operations/security.md).
- How these plugins fit together in a complete research task: see [End-to-end cases](../cases/virtual-cell-evidence-atlas.md).
