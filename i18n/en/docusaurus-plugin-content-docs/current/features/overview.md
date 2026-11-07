---
title: Features & Extensions overview
description: Choose workbench, research analysis, evidence, collaboration, and extension capabilities by the task you want to do.
sidebar_position: 1
---

# Features & Extensions overview

Pick the task you want to do from the table below. Built-in features open directly; standalone plugins must be installed; Skills provide working methods; MCP connects external tools. For version information, see [Version & Compatibility](../reference/version-and-compatibility.md).

## Start from your task

| What you want to do | Where to read | Current form and conditions |
| --- | --- | --- |
| Open a project, continue a session, view or edit files | [Workbench](../workbench/workspaces-and-sessions.md) | Local workspace, sessions, and file preview for supported formats. When content is too long or a file does not support editing, the page shows the reason. |
| Connect models and executors | [Runtime & models](../getting-started/runtime-and-models.md) | Codex, Claude Code, and DSH are configured separately. Model access and tool permissions are not the same thing. |
| View sequences, structures, omics, imaging, and spectra | [Life Science Preview](./life-science-preview.md) | Ships with the app; no separate install needed. |
| Organize biological objects and experiment records | [Biology Room](./biology-room.md) | Ships with the app; used to organize related files and annotations. |
| Plot from data and code, revise, and accept candidates | [Scientific Figures](./scientific-plotting.md) | Needs a compatible plugin installed, plus Python and the required dependencies. |
| Add anchored comments to text or resources | [Anchored Comments](./anchored-comments.md) | Standalone plugin. Real capture and external feedback each have their own permission requirements. |
| Check what the agent actually changed | [Change Inspector](./change-inspector.md) | Plugin you must install. Lets the agent list this session's file differences, and tells you when output is too long. |
| Save artifacts and research evidence | [Evidence & reproducibility](./evidence-and-reproducibility.md) | Saves file versions, research stages, and the source of conclusions. Figure records must be linked separately. |
| Run repeated tasks | [Automation](./automation.md), [Create Loop](./create-loop.md) | Needs the app running and the matching executor. Multi-step flows and single scheduled instructions are configured separately. |
| Sign in, connect a device, join a project, and deliver tasks | [Account](./identity-access.md), [Collaboration](./collaboration.md) | Local accounts and cloud identity are separate. Team actions also need an available service and role authorization. |
| Use Content Space and notes | [Content Space](./content-space.md), [SiYuan Notes](./siyuan.md) | You configure the matching service. Server deployment tutorials are not included. |
| Add plugins, working methods, or external tools | [Extensions & marketplace](./extensions.md) | Compatible signed packages, Skills, and MCP are each configured separately. An empty marketplace does not mean built-in features were uninstalled. |

## Evidence and tool reference

- [Artifact Versions](./artifact-versions.md), [Git Checkpoints](./git-checkpoints.md), [Research Checkpoints](./research-checkpoints.md): fix the state of files or research stages.
- [Evidence DAG](./evidence-dag.md), [Project DAG](./project-dag.md), [Research Dossier](./research-dossier.md): organize evidence, project goals, and deliverables.
- [Terminal](./terminal.md), [Browser Preview](./browser-preview.md), [Computer Use](./computer-use.md): use external execution capabilities according to the runtime environment and permissions.
- [Plugin license terms](../reference/plugin-licenses.md): check licenses and installation requirements.

Remote SSH connection and management belong to internal supplements, and the public manual does not provide VPN, SSH target registration, or internal deployment steps.

## How to tell whether you can use something

For installation requirements and current limits, see [Feature status](../reference/feature-status.md).
