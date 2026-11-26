---
title: SiYuan Notes
description: Connect your own SiYuan service to the workbench and archive traceable Markdown summaries after tasks finish.
sidebar_position: 63
---

# SiYuan Notes

Open your SiYuan service from SciForge to read or update research notes, or save a session result to a specific document.

## How to open it

1. Prepare a reachable HTTP or HTTPS SiYuan service in server mode. You can use a service you deploy or subscribe to. Have the API Token ready if the service requires one.
2. Click **SiYuan Notes** (labeled **Cloud Services** in some builds) in the left sidebar. In its **Settings**, enter the **Service address** and click **Save settings**. Leaving it blank uses the installation's default address. Enter the **API token** in **Settings** or set `SIYUAN_API_TOKEN` in the launch environment. The token from Settings takes precedence and is stored in the app's encrypted storage.
3. Once the editor opens, choose the notebook and document. You can also click **Test saved connection** in **Settings** to see a read-verified connection status before editing. For a connection error, click **Retry** or return to **Settings** to check the address and token.

The editor opens to the right of the session. You can move it from the header to the left, bottom, or main area and resize it. The app saves its position and size on this device.

## Open an existing note

Open **SiYuan Notes** from the left sidebar, then choose the notebook and document. Reopen the document after editing to see the saved text.

To find material from a session, ask the assistant to search by title or path fragment, then give the resulting document ID or path to read the Markdown body. If the result is marked as truncated, specify the section you need. **Content Space** can locate open SiYuan notebooks. Use the SiYuan editor or session tools to work with a document.

## Save a session result to SiYuan

Specify the notebook, path, title, and content in the session. As an example you can adapt, ask the session to save this turn's QC summary as “Weekly QA” in the “Project A” notebook under `/Sample QC`. After the write completes, open that location in **SiYuan Notes**; the document body should contain the QC summary.

## View automatic archives

A successful top-level agent turn with a final reply is archived automatically to the connected SiYuan service. Decide which content can be sent to that service before starting. After the task finishes, open the **SciForge 工作总结** notebook in **SiYuan Notes** and find the turn by timestamp under `/SciForge`. The archived document contains the prompt, the final reply, the completion timestamp, and the turn ID. The first archive creates the `SciForge 工作总结` notebook if it does not exist yet. To save an intermediate result during a task, specify a destination document in the session.

If SciForge can’t reach the service or verify that the write finished, it keeps the pending document on this device. It retries when the app next starts or the next top-level turn finishes. Before writing, it looks for a document from the same turn to avoid duplicates. Once the service is back, open `/SciForge` in its `SciForge 工作总结` notebook to find the archived document.

## Related pages

- [Content Space](./content-space.md)
- [Collaboration guide](./collaboration.md)
- [Permissions and security](../operations/security.md)
- [Feature status and limits](../reference/feature-status.md)

> Component version: `@sciforge/domain-siyuan-content-space-provider` v0.3.1.
