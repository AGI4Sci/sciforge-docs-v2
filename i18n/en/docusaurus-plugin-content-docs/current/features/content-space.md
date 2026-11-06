---
title: Content Space
description: Connect external content services, and see the notebook and shared-file entry points currently supported.
sidebar_position: 62
---

# Content Space

Content Space provides a single entry point to external content services. The current SiYuan connection can list notebooks; whether you can go on to browse, read, write, or transfer depends on what the connected service actually supports. Content stays in the original service.

## How to open it

- Entry: **Content Space** in the right panel. **Shared files** on the full Collaboration page uses the same entry point. Shared files currently has no direct upload button.
- Target: containers, regular files, and Provider-native documents from connected Providers. Currently, only SiYuan notebooks can be listed.
- Prerequisite: install and connect a Provider that declares the relevant operation family. Connection usually requires the service address and account/token; Content Space does not read credentials. OpenContent has been retired; the only Provider currently available to users is SiYuan, and it declares notebook discovery only.

## What you can do

You can currently choose SiYuan notebooks. The other operations in the table below need separate support from the service provider and must not be treated as currently available features; in particular, you cannot upload files directly through the Shared files entry.

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Select a space or container | Select the root or a directory of a connected Provider in Content Space; SiYuan lists notebooks that are not closed | A read-only container reference |
| Browse and locate files | List container entries and open them by exact resource reference | A file or container view |
| Upload or download regular files | After the Provider declares transfer operations, copy between the container and the workspace through a Host-restricted transfer | A file copy subject to Host transfer limits |
| Open or write Provider-native documents | After the Provider declares native document operations, execute against the target document and version | A document in the Provider |
| Manage shared spaces and members | Available only when the Provider declares Administration | A member change receipt |

## Typical workflow

1. Install and connect the Provider first. The connection binds the current user to a specific Provider instance and cannot be copied for use by another user.
2. Open Content Space and select a Provider and container. SiYuan currently lists only notebooks that are not closed; selecting one returns a read-only container reference.
3. To read or write SiYuan documents, go to the [SiYuan Notes](./siyuan.md) page, or have the Agent use SiYuan's search, read, and write capabilities.
4. When the interface says an operation is not yet supported, use the original service's own entry point. If the connection is no longer valid, reconnect first.

## Inputs, outputs, and permissions

- Reads: Provider instances, containers, file metadata, and the readiness level declared by the Provider. Provider credentials are not read or displayed.
- Writes: files, native documents, or membership in the Provider. Locally, only non-secret references and the current user's connection binding are kept.
- Approval or external effects: ordinary non-destructive writes can run within authorized resources. Native document and extension operations declared destructive, member changes, and any destructive operation require human confirmation every time and cannot reuse the previous approval.
- What it does not do: replace a Provider's native ACL with Project member permissions, automatically fall back to another Provider after a binding becomes invalid, or treat a raw ID as authorization.

## Known limitations

- **OpenContent has been retired**: space and member management, upload and download, and native documents are no longer served by an OpenContent Provider. When no service supports an operation, the interface says it is unavailable.
- The current SiYuan Provider declares notebook discovery only; other operations return `blocked_by_contract`. The local mock Provider is for testing only and is not a user feature.
- The readiness level is evidence only and does not guarantee that a given call will be allowed. Every call also checks the current identity, authorization, audience, platform, transfer limits, and binding status.
- Immutable artifact references (`ArtifactReference`) require proof of immutable retention and exact-version reads. Issuance is blocked when those conditions are not currently met.
- Shared container members and Cloud Project members are two separate identity boundaries. Provider membership does not grant Project permissions.

## Related pages

- [SiYuan Notes](./siyuan.md): the currently installed Content Space Provider and its capability boundaries.
- [Collaboration](./collaboration.md): the relationship between Shared files and task delivery files.
- [Permissions and security](../operations/security.md): general rules for external writes and per-operation confirmation.
- [Feature status and limitations](../reference/feature-status.md): how current capability status is defined.

> Implementation basis: `@sciforge/domain-content-space` v5.0.4.
