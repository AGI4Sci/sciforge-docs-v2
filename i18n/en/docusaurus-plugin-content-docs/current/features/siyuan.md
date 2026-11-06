---
title: SiYuan Notes
description: Connect your own SiYuan service to the workbench and archive traceable Markdown summaries after tasks finish.
sidebar_position: 63
---

# SiYuan Notes

SiYuan Notes connects a user-provided remote SiYuan service to the workbench as a full-page editor for reading, editing, and archiving research records. It is used in the organization stage after task execution, and you can also consult notes during a task. SciForge does not bundle the kernel or run or manage that service for you.

## How to open it

- Entry: **SiYuan Notes** in the left sidebar opens the full-page editor on the right.
- Target: the SiYuan service you run or subscribe to, along with its notebooks and documents.
- Prerequisite: an accessible HTTP/HTTPS SiYuan address. If the service requires authentication, set the `SIYUAN_API_TOKEN` environment variable. SciForge does not start or distribute the SiYuan kernel with the app.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Connect your own SiYuan | Enter the service address in **Settings** on the page and save it; leave it blank to use the installation default | An editor session that persists across restarts |
| Edit and browse notes | Use the SiYuan interface directly in the full-page editor | Document changes in SiYuan |
| Archive task summaries automatically | For a top-level Agent turn that finishes successfully and produces a final reply, SciForge writes an entry to a notebook automatically | A Markdown document in `SciForge 工作总结`, containing the request, final reply, time, and turn identifier |
| Have the Agent write to a specific document | Ask the Agent to save results to SiYuan and provide the title, notebook, and path | The target document in SiYuan |

## Typical workflow

1. First confirm in the SiYuan service that the target notebook exists and is writable. If authentication is required, prepare an API token and set it in the launch environment.
2. Open SiYuan Notes from the left sidebar and enter the service address in Settings. If the page reports an error, retry or open Settings to correct it.
3. Read or edit in the editor. Do not place sensitive content that should not leave the local machine into a remote service.
4. After an Agent task completes normally, check whether a corresponding record appears under `SciForge 工作总结`. If the service is temporarily unreachable, records queue and retry.

## Inputs, outputs, and permissions

- Reads: the SiYuan service address, notebook list, and document content. The API token is read only from the environment.
- Writes: documents in SiYuan. Automatic archiving writes to a fixed notebook, while Agent writes follow the requested title, notebook, and path.
- Approval or external effects: archiving is an automatic external write after a successful task and does not prompt each time. The service address, token permissions, and note content leave the local machine, so confirm this before use.
- What it does not do: start or bundle the SiYuan kernel, provide a local private mode, save to another location when the service is unreachable, or write the token into the interface configuration.

## Known limitations

- Server mode only: you must provide an accessible SiYuan service, and the address must be HTTP/HTTPS.
- The Content Space Provider currently declares notebook discovery only. You cannot upload or download files or perform native document operations through Content Space.
- Automatic archiving covers only successful top-level Agent turns. Intermediate progress, failures, cancellations, and continuous sub-turns are not archived, and it does not produce a second AI summary or claim that the task is verified.
- Archiving writes to the fixed notebook `SciForge 工作总结` and the `/SciForge` path; the notebook is created if it does not exist. Retries of the same turn use a durable receipt to avoid duplicates.
- Local private mode, which would bundle and host the SiYuan kernel, was rejected because of AGPL redistribution obligations and is not an available feature.
- When the service is unreachable or a write result is uncertain, pending records are kept locally and retried on the next task or at startup. Unconfirmed writes are not repeated blindly.

## Related pages

- [Content Space](./content-space.md): how SiYuan connects as a Provider and its capability boundaries.
- [Collaboration](./collaboration.md): collaborative delivery and post-task local archiving are two different paths.
- [Permissions and security](../operations/security.md): external service addresses, tokens, and data boundaries.
- [Feature status and limitations](../reference/feature-status.md): the capability scope of the first version.

> Implementation basis: `@sciforge/domain-siyuan-content-space-provider` v0.1.0.
