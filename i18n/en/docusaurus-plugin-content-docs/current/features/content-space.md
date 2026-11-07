---
title: Content Space
description: View the connected note service and choose an open notebook in SiYuan.
sidebar_position: 62
---

# Content Space

Content Space is for viewing the connected note service and choosing a notebook. It currently supports SiYuan Notes, and lists only notebooks that are open and not closed in SiYuan. The note content stays in the original SiYuan service.

## Open it and choose a notebook

1. First connect your own SiYuan service as described on the [SiYuan Notes](./siyuan.md) page.
2. Open **Content Space** in the right panel; **Shared files** on the full Collaboration page also provides this entry.
3. Choose the connected SiYuan service, then choose a notebook from the list. If you cannot find the one you want, first confirm in SiYuan that the notebook is open.
4. To read, edit, or search documents, open the **SiYuan Notes** page, or have the Agent use SiYuan's search, read, and write tools.

## Tips

- Content Space currently offers notebook selection only; you cannot browse or edit SiYuan documents, or upload or download files, here.
- The **Shared files** entry also has no direct upload button for now. Choosing a notebook does not send local files into SiYuan.
- When the connection is no longer valid, first check the SiYuan service address and connection status, then reconnect.
- Document edits and Agent writes affect the connected SiYuan service; before acting, confirm the target notebook and document.

## Related pages

- [SiYuan Notes](./siyuan.md): connect the service, edit and search, and archive tasks.
- [Collaboration](./collaboration.md): how Shared files relates to task delivery files.
- [Permissions & security](../operations/security.md): external writes and confirmation rules.
- [Feature status and limitations](../reference/feature-status.md): the current status of each capability.

> Implementation basis: `@sciforge/domain-content-space` v5.0.4.
