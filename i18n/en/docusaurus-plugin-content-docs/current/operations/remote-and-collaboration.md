---
title: Remote resources and collaboration
description: Distinguish remote workspace sessions from SciForge Cloud collaboration, and understand the data and permission boundaries of each.
sidebar_position: 2
---

# Remote resources and collaboration

Remote workspaces address "where compute and data live"; Cloud collaboration addresses "who works together around a Project and Task." The two can be combined or used independently.

## Remote workspaces

A remote workspace brings a SciForge Workspace Host session running on another machine into the local workbench: files, terminals, Git, and Agent requests act on the remote directory, while the interface stays on your machine.

- Entry point: the **Workspace location** selector at the top of the workbench, which switches between **Local workspace** and attached remote sessions; the selector also shows each remote session's lifecycle (Persistent server / Connection session), connection status (Remote, Reconnecting, Offline, Limited, Connection error), and network exit.
- When a session disconnects or errors, use **Reconnect** on the target session in the selector.
- The open-source client does not include a connection management panel for registering SSH targets, VPN environments, and workspace authorization; remote sessions appear in the selector only after the deployer provides and attaches them.

Remote files, terminals, and Agent commands actually act on the remote directory. Do not mistake "displayed in a local window" for "the data has been copied to your machine."

:::note[Current boundaries]

After connecting, check the remote path and file reads first, then test the terminal and the tools you need. If one tool reports that it is unavailable, do not conclude that the entire remote workspace is unusable; for the specific scope, see [Version and compatibility](../reference/version-and-compatibility.md).

:::

## Cloud collaboration

Use Cloud collaboration when you need to continue a personal Session on your phone, or when a team needs to assign and accept Tasks around a Project. It requires the Cloud service address, account, and collaboration service configuration provided by your administrator.

For team procedures, see [Collaboration guide](../features/collaboration.md); for a real submission, revision, and downstream handoff, see [Pasilla three-person collaboration case](../cases/pasilla-collaboration.md). Check the sign-in and device prerequisites for team collaboration in that guide; setting up a personal Session on your phone is a separate path.

![SciForge Cloud connection page](/img/docs/guides/cloud-collaboration-connect.png)
*Figure 2: Cloud connection status and the local workspace are independent of each other.*

Unified sign-in has three distinct states:

| State | Purpose |
| --- | --- |
| Local account | Marks the current user and ownership on this machine |
| Cloud sign-in | Confirms your cloud identity |
| Device connection | Click **Connect this device** to authorize the current desktop installation to access Cloud capabilities |

A local account is not cloud authentication; a connected workspace also does not mean you have joined a collaboration Project.

In collaboration, **Shared files** is for viewing resources provided by the content service; there is currently no direct upload entry point. Task delivery follows the Task submission and acceptance process; do not treat the Shared files entry as a general-purpose cloud drive upload.

![SciForge Cloud collaboration projects page](/img/docs/guides/cloud-collaboration-projects.png)
*Figure 3: Team collaboration revolves around Projects, Tasks, owners, and acceptance results.*

## Data and credential boundaries

- SSH keys, VPN credentials, and MFA are managed by the user or by system security infrastructure.
- Cloud, collaboration services, and Content Space may send data to external services.
- Before uploading production data, confirm the destination, scope, retention policy, and team permissions.
- Remote commands and collaborative tasks should still record inputs, outputs, return codes, and approvals.
- After a network interruption, confirm the state of the remote process before deciding whether to retry, to avoid submitting compute twice.

Case: [Virtual cell perturbation prediction benchmark](../cases/virtual-cell-benchmark.md).
