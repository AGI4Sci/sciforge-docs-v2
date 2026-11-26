---
title: SiYuan Notes
description: Connect your own SiYuan service to the workbench and archive traceable Markdown summaries after tasks finish.
sidebar_position: 63
---

# SiYuan Notes

Open your SiYuan service from SciForge to read or update research notes, or save a session result to a specific document.

## How to open it

1. Prepare a reachable HTTP or HTTPS SiYuan service in server mode. You can use a service you deploy or subscribe to. Have the API Token ready if the service requires one.
2. Click **SiYuan Notes** in the left sidebar. In its **Settings**, enter the service address and save. Leaving it blank uses the installation's default address. Enter the API Token in **Settings** or set `SIYUAN_API_TOKEN` in the launch environment. The token from Settings takes precedence and is stored in the app's encrypted storage.
3. Once the editor opens, choose the notebook and document. For a connection error, retry or return to **Settings** and check the address and token.

The editor opens to the right of the session. You can move it from the header to the left, bottom, or main area and resize it. The app saves its position and size on this device.

## Open an existing note

Open **SiYuan Notes** from the left sidebar, then choose the notebook and document. Reopen the document after editing to see the saved text.

To find material from a session, search by part of its path and use the resulting document ID or path to read the Markdown. If the result is marked as truncated, specify the section you need. **Content Space** can locate open SiYuan notebooks. Use the SiYuan editor or session tools to work with a document.

## Save a session result to SiYuan

Specify the notebook, path, title, and content in the session. For example, save this session's QC summary as “Weekly QA” in the “Project A” notebook at `/Sample QC`. After writing, open that location in **SiYuan Notes**. The document should contain the session's QC summary.

## View automatic archives

A successful top-level agent turn with a final reply is archived automatically to the connected SiYuan service. Decide which content can be sent to that service before starting. After the task, open **SiYuan Notes → SciForge 工作总结** and find the turn by time under `/SciForge`. Its document contains the request, the final reply, the timestamp, and the turn ID. The first archive creates the notebook if needed. To save an intermediate result, specify a destination document.

If the service is down or the write cannot yet be verified, the archive stays on your device and SciForge retries at the next task or startup. Before retrying, it looks for a document from the same turn to avoid duplicates. After the connection returns, open `/SciForge` on that service and look for the document.

## Related pages

- [Content Space](./content-space.md)
- [Collaboration guide](./collaboration.md)
- [Permissions and security](../operations/security.md)
- [Feature status and limits](../reference/feature-status.md)

> Component version: `@sciforge/domain-siyuan-content-space-provider` v0.3.1.
