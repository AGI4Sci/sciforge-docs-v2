---
title: Identity & Access
description: Manage the local account, cloud sign-in, device connection, and usage summary from the bottom of the sidebar.
sidebar_position: 60
---

# Identity & Access

Expand the workbench's left sidebar and look at the bottom for the **local account, cloud status, and usage summary**. Click the account row to open the account panel; click the cloud row to open the same panel positioned at **SciForge Cloud**. Settings sits below it.

## A local account is an attribution marker

- **Use local features only**: Open the account panel from the bottom of the left sidebar, click **Create account** or select an existing Local Account, and set its **Display name**. Use **Edit name** to rename it or **Exit account** to sign out locally.
- **Join cloud collaboration**: Select a Local Account first, then sign in under **SciForge Cloud** and connect your device as described below. A linked account syncs its display name to SciForge Cloud and collaborators.
- **Share a computer across people**: Use separate operating-system accounts on the machine. OS accounts isolate workspaces, chats, settings, API keys, and tool data; a SciForge Local Account only labels ownership on this device.

The **Delete account** button on an account row first opens a confirmation area. Once confirmed, it deletes that Local Account and its local attribution data on this machine, which cannot be undone. If you delete the active account, SciForge switches to the earliest-created remaining account; after the last account is deleted, the sidebar shows **No Local Account selected**.

**Delete account** applies to the local account and its associated local data. **Exit account** (local), **Sign out** (cloud), and **Disconnect this Desktop** act on different targets; check which section of the panel you are using before clicking.

## Sign in to the cloud and connect a device

1. Create or select a Local Account first. While **No Local Account selected** is shown, **Sign in with browser** is unavailable.
2. Under **SciForge Cloud**, click **Sign in with browser** and complete authentication in the system browser. Do not paste passwords or tokens into a chat session.
3. Return to the app to see your cloud identity. If the device status shows **This Desktop is not connected**, click **Connect this Desktop**.
4. Once the status shows **This Desktop is connected**, you can open collaboration projects, **My work**, and **Inbox** from the sidebar.

The local account, the model provider sign-in, and the SciForge cloud sign-in are separate configurations. Cloud features depend on the current app configuration and service availability.

| Panel state or action | Meaning and what to do |
| --- | --- |
| Not signed in to Cloud | Local features still work; cloud projects need sign-in |
| This Desktop is not connected | Being signed in is not a device connection; click **Connect this Desktop** |
| Connecting this Desktop | Wait for device registration to finish without clicking repeatedly |
| This Desktop is connected | The device is active; a valid cloud identity and project permission are still required |
| This Desktop is disconnected / This Desktop has a connection issue | Cloud permissions are unavailable; check **Connection details** and recover as prompted |
| Sign in again | Completes cloud authentication again; it does not automatically accept project invitations or tasks |
| Sign out | Clears the current cloud sign-in session; it does not revoke device registration |
| Disconnect this Desktop | Revokes this device's cloud access while keeping local features |

When a device is revoked, the identity changes, or device validity cannot be confirmed, cloud authentication rights are withdrawn. Do not use a cached display name to decide you are still authorized. If sign-in or connection fails, retry as the panel suggests and keep the original task and drafts.

## Reading the usage summary

The bottom of the sidebar shows token and cost summaries for **today** and the **last 7 days** recorded on this machine; for the actual charges, check the model provider's bill.

Loading, no data, and load failure each show their own message. No data does not mean no model requests were made.

## Credentials and recovery boundaries

Cloud sign-in material and device keys are managed by the platform's secure storage. When secure storage is unavailable, do not fall back to plaintext files or put credentials into chats, requirements, or delivery files.

When the local identity database is unavailable, other local features still work. The recovery entry asks you to type a confirmation text, first creates and verifies a backup, and then resets the local identity data. It is not a reset tool for the whole app's data.

Related pages: [Collaboration](./collaboration.md), [Runtime & models](../getting-started/runtime-and-models.md), [Permissions & security](../operations/security.md).
