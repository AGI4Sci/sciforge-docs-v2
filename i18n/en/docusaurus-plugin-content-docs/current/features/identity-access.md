---
title: Identity & Access
description: Manage the local account, cloud sign-in, device connection, and usage summary from the bottom of the sidebar.
sidebar_position: 60
---

# Identity & Access

Expand the workbench's left sidebar and look at the bottom for the **local account, cloud status, and usage summary**. Click the account row to open the account panel; click the cloud row to open the same panel positioned at **SciForge Cloud**. Settings sits below it.

## A local account is an attribution marker

Local features do not require sign-in. You can create a local account, confirm its display name, choose an account or rename it, and sign out of the account. A local account provides no security authentication and **does not isolate workspaces, chats, settings, API keys, or tool data**. On a shared computer, switching the display name is no substitute for operating-system account isolation.

The delete button on an account row first shows a confirmation area. Once confirmed, it deletes that local account and its attribution data on this machine, and this cannot be undone. When you delete the current account, the system selects the earliest-created remaining account; after the last account is deleted, no account is selected.

**Delete account** here is local identity management. It is not cloud account cancellation, project deletion, or workspace file cleanup. Signing out of a local account, signing out of the cloud, and disconnecting a device each do something different, so check the button name and its target before acting.

## Sign in to the cloud and connect a device

1. Create or choose a local account first. Until one is selected, "Browser sign-in" is unavailable.
2. Under **SciForge Cloud**, click **Browser sign-in** and complete authentication in the system browser. You do not need to paste a password or token into a session.
3. After returning, check the cloud identity. If no device is connected yet, click **Connect this device**.
4. Collaboration features that depend on cloud identity can continue only when the identity is valid and the device is active.

The local account, the model provider sign-in, and the SciForge cloud sign-in are separate configurations. Cloud features depend on the current app configuration and service availability.

| Panel state or action | Meaning and what to do |
| --- | --- |
| Not signed in to the cloud | Local features still work; cloud projects need sign-in |
| This device is not connected | Being signed in is not a device connection; connect the device from the interface |
| Connecting this device | Wait for the device registration result and avoid repeating the action |
| This device is connected | The device is active; a valid cloud identity and project permission are still required |
| This device is disconnected / connection error | Cloud permissions cannot be used as if connected normally; check the error and recover as prompted |
| Sign in again | Completes cloud authentication again; it does not automatically accept project invitations or tasks |
| Sign out | Clears the current cloud sign-in session; do not treat it as having revoked the device registration |
| Disconnect this device | Revokes this device's cloud access; local features are kept |

When a device is revoked, the identity changes, or device validity cannot be confirmed, cloud authentication rights are withdrawn. Do not use a cached display name to decide you are still authorized. If sign-in or connection fails, retry as the panel suggests and keep the original task and drafts.

## Reading the usage summary

The bottom of the sidebar shows token and cost summaries for **today** and the **last 7 days** recorded on this machine; for the actual charges, check the model provider's bill.

Loading, no data, and load failure each show their own message. No data does not mean no model requests were made.

## Credentials and recovery boundaries

Cloud sign-in material and device keys are managed by the platform's secure storage. When secure storage is unavailable, do not fall back to plaintext files or put credentials into chats, requirements, or delivery files.

When the local identity database is unavailable, other local features still work. The recovery entry asks you to type a confirmation text, first creates and verifies a backup, and then resets the local identity data. It is not a reset tool for the whole app's data.

Related pages: [Collaboration](./collaboration.md), [Runtime & models](../getting-started/runtime-and-models.md), [Permissions & security](../operations/security.md).
