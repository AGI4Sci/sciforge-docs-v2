---
title: Remote resources and collaboration
description: Distinguish remote workspace sessions from SciForge Cloud collaboration, and understand the data and permission boundaries of each.
sidebar_position: 2
---

# Remote resources and collaboration

Remote workspaces answer “where computation and data live”; Cloud collaboration answers “who works together around a Project and Task.” You can combine the two or use either on its own.

## Remote workspaces

A remote workspace brings a SciForge Workspace Host session running on another machine into the local workbench: files, the terminal, Git, and Agent requests act on the remote directory, while the interface stays on your machine.

- Entry point: the **Workspace location** selector at the top of the workbench, which switches between **Local workspace** and attached remote sessions; the selector also shows each remote session's lifecycle (persistent Server / runs with the connection), connection status (remote, reconnecting, offline, limited functionality, connection error), and network egress.
- When a session disconnects or errors, use **Reconnect** for that session in the selector.
- The open-source client does not include a connection management panel for registering SSH targets, VPN environments, and workspace authorization; remote sessions appear in the selector only after a deployment provides and attaches them.

Remote files, terminals, and Agent commands act on the remote directory. Do not mistake “shown in a local window” for “the data has been copied to this machine.”

:::note[Current boundaries]

Remote workspace support may be narrower than local workspace support. Before using branches, snapshots, complex file operations, or scientific previews, check the feature status for the current version and validate in a test directory.

:::

## Cloud collaboration

Use Cloud collaboration when you need to continue a personal Session on your phone, or when a team needs to assign and accept Tasks around a Project. It requires a Cloud service address, account, and collaboration service configuration provided by your administrator.

Team operation steps are in the [Collaboration guide](../features/collaboration.md); a real request, rework, and downstream handoff are in the [Pasilla three-person collaboration case](../cases/pasilla-collaboration.md). Check the sign-in and device prerequisites for team collaboration in that guide; setting up a personal Session on your phone is a separate path.

![SciForge Cloud connection page](/img/docs/guides/cloud-collaboration-connect.png)
*Figure 2: Cloud connection status is independent of the local workspace.*

Unified sign-in has three distinct states:

| State | Purpose |
| --- | --- |
| Local account | Marks the current user and ownership on this machine |
| Cloud sign-in | Confirms your cloud user identity |
| Device connection | Click **Connect this device** to authorize the current desktop installation to access Cloud capabilities |

A local account is not cloud authentication; a connected workspace also does not mean you have joined a collaboration Project.

![SciForge Cloud collaboration projects page](/img/docs/guides/cloud-collaboration-projects.png)
*Figure 3: Team collaboration revolves around Projects, Tasks, owners, and acceptance results.*

## Data and credential boundaries

- SSH keys, VPN credentials, and MFA are managed by you or by system security infrastructure.
- Cloud, collaboration services, and Content Space may send data to external services.
- Before uploading production data, confirm the destination, scope, retention policy, and team permissions.
- Remote commands and collaboration tasks should still record inputs, outputs, return codes, and approvals.
- After a network interruption, check the state of the remote process before deciding whether to retry, so you do not submit the same computation twice.

Case: [Virtual cell perturbation prediction benchmark](../cases/virtual-cell-benchmark.md).
