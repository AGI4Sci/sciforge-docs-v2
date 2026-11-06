---
title: Identity & Access
description: Manage local attribution and cloud identity separately, with clear boundaries for sign-in, device authorization, and revocation.
sidebar_position: 60
---

# Identity & Access

Identity & Access answers “who is acting now, and is this device authorized?” It does not participate in specific research analysis, but it determines whether external capabilities such as Collaboration and Content Space can act on behalf of the current user.

## How to open it

- Entry: the **Account** area at the top of the workbench. It opens the Identity panel, which is divided into “Local account” and “SciForge Cloud.”
- Target: the current installation, current local account, current Desktop device, and cloud sign-in session.
- Prerequisite: local features do not require sign-in. Cloud sign-in requires the SciForge Cloud address provided by your administrator, an account, and a working system browser.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Mark the local user | Create or select a local account, and rename it if needed | A local attribution marker that is restored automatically after a restart |
| Sign in to the cloud | In “SciForge Cloud,” click **Browser sign-in** and complete OIDC sign-in in the system browser | The current cloud user and sign-in session |
| Authorize this device | After signing in, click **Connect this device** to complete Desktop device registration | An active device that can access cloud capabilities |
| End or transfer authorization | Use **Sign out** or **Disconnect this device** | Local features remain, while cloud and cross-user permissions are revoked immediately |

## Typical workflow

1. Open Account at the top and create or select a local account. It is used only for local attribution and does not need to match your cloud name.
2. Click Browser sign-in and complete account authentication in the system browser. Do not paste your password or token back into SciForge.
3. After returning, click Connect this device and confirm that the panel shows both signed-in status and “This device is connected.”
4. When you leave, change machines, or lose a device, sign out first. Disconnect the device only when you are sure it will no longer be used.

## Inputs, outputs, and permissions

- Reads: the local account list, current cloud user, device connection status, and session validity.
- Writes: local account selection and display name, OIDC sign-in sessions, and device registration and revocation. Project content is never written.
- Approval or external effects: browser sign-in and device registration change cloud account state. Signing out and disconnecting a device immediately affect features that depend on cloud identity, so they require user confirmation.
- Credentials: OIDC refresh material, the device signing private key, and Agent authorization are stored only in platform private storage (macOS Keychain, Windows DPAPI, Linux libsecret/KWallet). If secure storage is unavailable, the operation fails closed.
- What it does not do: treat a local account as security authentication, isolate local data, fill in passwords on your behalf, or expose tokens to the interface or other domain packages.

## Known limitations

- A local account is only an attribution marker. Workspaces, settings, and API keys on the same installation are not isolated when you switch local accounts.
- Completing sign-in does not mean the device is registered. Cross-user permissions require both a cloud-authenticated identity (`cloud-authenticated` Principal) and an ACTIVE device. Device registration is more like a lease that must stay valid rather than a one-time permanent authorization.
- If the device is revoked, a refresh is unconfirmed, or the OIDC user changes, the cloud-authenticated identity immediately falls back to local selection, and capabilities that depend on it, such as Collaboration, stop.
- Signing out usually keeps the device registration. To revoke this device's ability to access the cloud, choose **Disconnect this device**.
- If platform secure storage is missing or insecure, SciForge refuses to save credentials. There are no environment variables, plaintext files, or other fallback paths.
- The email address, display name, or membership of an external account is not treated as SciForge identity. Binding an external account must be explicit and revocable.

## Related pages

- [Collaboration](./collaboration.md): cloud sign-in and an active device are prerequisites for multi-user collaboration.
- [Content Space](./content-space.md): Provider connections bind to the current identity, and switching accounts invalidates old bindings.
- [Permissions and security](../operations/security.md): general rules for approvals, credentials, and data boundaries.
- [Remote resources and collaboration](../operations/remote-and-collaboration.md): the differences between remote workspaces, Cloud sign-in, and device registration.

> Implementation basis: `@sciforge/domain-identity-access` v5.0.2.
