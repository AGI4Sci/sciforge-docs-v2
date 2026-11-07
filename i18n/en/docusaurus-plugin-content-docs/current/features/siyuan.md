---
title: SiYuan Notes
description: Connect your own SiYuan service to the workbench and archive traceable Markdown summaries after tasks finish.
sidebar_position: 63
---

# SiYuan Notes

SiYuan Notes connects a user-provided remote SiYuan service to the workbench as a full-page editor for reading, editing, and archiving research records. It is used in the organization stage after task execution, and you can also consult notes during a task. SciForge does not bundle the kernel or run or manage that service for you.

## How to open it

- Entry: **SiYuan Notes** in the left sidebar opens the editor to the right of the session by default. From the page header you can move it to the left, bottom, or main area and resize it. Position and size are saved on this machine.
- Target: the SiYuan service you run or subscribe to, along with its notebooks and documents.
- Prerequisite: an accessible HTTP/HTTPS SiYuan address. If the service requires authentication, enter an API token in the page's settings, or use the `SIYUAN_API_TOKEN` environment variable. SciForge does not start or distribute the SiYuan kernel with the app.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Connect your own SiYuan | Enter the service address in **Settings** on the page and save it; leave it blank to use the installation default | An editor session that persists across restarts |
| Edit and browse notes | Use the SiYuan interface directly in the full-page editor | Document changes in SiYuan |
| Search and read existing notes | Ask the Agent to search by path fragment, then read by document ID or path | The note location and Markdown body; long notes are marked as truncated |
| Archive task summaries automatically | For a top-level Agent turn that finishes successfully and produces a final reply, SciForge writes an entry to a notebook automatically | A Markdown document in `SciForge 工作总结`, containing the request, final reply, time, and turn identifier |
| Have the Agent write to a specific document | Ask the Agent to save results to SiYuan and provide the title, notebook, and path | The target document in SiYuan |

## Typical workflow

1. First confirm in the SiYuan service that the target notebook exists and is writable. If authentication is required, prepare an API token and save it in the page's settings or set it in the launch environment.
2. Open SiYuan Notes from the left sidebar and enter the service address in Settings. If the page reports an error, retry or open Settings to correct it.
3. Read or edit in the editor. Do not place sensitive content that should not leave the local machine into a remote service.
4. After an Agent task completes normally, check whether a corresponding record appears under `SciForge 工作总结`. If the service is temporarily unreachable, records queue and retry.

## Where things are saved, and what actions affect

- Content you read and edit comes from the connected SiYuan service. The API token saved in the page's settings is used first; otherwise the environment variable is used. A token entered on the page is kept in the app's encrypted storage.
- Automatic archiving saves to a fixed notebook in SiYuan; when you ask the Agent to write a document, state the title, notebook, and path.
- Archiving after a successful task is sent to the configured SiYuan service automatically, without asking each time. Before use, confirm the service address, the range of notes it can access, and which content is suitable to send to that service.
- When the service is unreachable, pending archives stay on this machine waiting to be retried; the official notes still need to be written to the SiYuan service successfully.

## Known limitations

- Server mode only: you must provide an accessible SiYuan service, and the address must be HTTP/HTTPS.
- Content Space currently lists only the notebooks that are open in SiYuan; to read, edit, and search documents, use the SiYuan page or the Agent's tools. Content Space cannot upload or download files.
- Automatic archiving covers only successful top-level Agent turns. Intermediate progress, failures, cancellations, and continuous sub-turns are not archived, and it does not produce a second AI summary or claim that the task is verified.
- Archiving writes to the fixed notebook `SciForge 工作总结` and the `/SciForge` path; the notebook is created if it does not exist. Before retrying the same task turn, it checks whether the matching task note already exists, to avoid creating duplicates.
- SciForge does not ship the SiYuan kernel; using it on this machine also means deploying the service yourself.
- When the service is unreachable or a write result is uncertain, pending records are kept locally and retried on the next task or at startup. Unconfirmed writes are not repeated blindly.

## Related pages

- [Content Space](./content-space.md): choose a SiYuan notebook from the connected service.
- [Collaboration](./collaboration.md): collaborative delivery and post-task local archiving are two different paths.
- [Permissions and security](../operations/security.md): external service addresses, tokens, and data boundaries.
- [Feature status and limitations](../reference/feature-status.md): the capability scope of the first version.

> Implementation basis: `@sciforge/domain-siyuan-content-space-provider` v0.3.1.
