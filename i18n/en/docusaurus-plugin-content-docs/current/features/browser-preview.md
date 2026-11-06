---
title: Browser Preview
description: Open web pages inside the app so the Agent can browse and act on pages that are visible and subject to approval.
sidebar_position: 51
---

# Browser Preview

Browser Preview runs a native Chromium page in the right panel for viewing local development pages, research materials, or sites that require sign-in. It is both a window for human browsing and a page resource the Agent can observe and operate. Web content is always treated as untrusted data.

## How to open it

- Entry: **Browser** in the top toolbar, or **Native browser** in the right panel.
- Target: one browser page instance in the current session; one instance corresponds to one page.
- Prerequisite: the SciForge desktop window. Opening a localhost development site in an ordinary browser cannot host the native view, and an explicit unavailable message appears.
- Input box context: when a message contains an HTTP(S) link, that URL is attached for the Agent. It first attempts a read-only fetch, then hands off to the browser panel when it encounters sign-in or script-rendered content.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Open a web page | Enter an HTTP(S) address in the address bar and press Enter | The native page, title, and current URL |
| Browse and reload | Use the Back, Forward, Reload, and Fullscreen buttons | Page state and observable page content |
| Let the Agent read | Have it read the URL or current page first | Bounded body text and interactive targets |
| Let the Agent act | Navigate, click, fill, or scroll under explicit instructions | Page changes; actions bound to the current page version |

## Typical workflow

1. Open Browser in the right panel and sign in to any sites you need. Sign-in state is saved in the current workspace's browser profile.
2. Have the Agent read the page first and confirm the URL, title, and key content. Do not have it click immediately.
3. When navigation is needed, you confirm it. Before clicks, key presses, or drags, check the action and its consequences.
4. Observe the page again after an action to confirm submission results, downloads, or navigation instead of relying only on the Agent's summary.
5. Close the panel when the task is done. When you reopen it, verify that sign-in, URL, and page are still in the expected state.

## Inputs, outputs, and permissions

- Reads: page body, title, URL, interactive targets, and controlled screenshots. Password, payment/CAPTCHA fields, and explicitly sensitive regions are excluded. Reading by URL makes a network request from the local machine and does not trigger an additional approval.
- Writes: the Agent can fill forms, select options, scroll, hover, click, press keys, and drag. These actions apply directly to the native page.
- Approval or external effects: navigation, Back, Forward, and Reload are external writes and require confirmation. Clicks, key presses, and drags are governed as destructive actions, but the capability layer does not prompt for extra confirmation; they may submit forms, trigger downloads, or change external state. Whether a Runtime approval also appears depends on its settings.
- Downloads and sign-in: permission requests, popups, and downloads initiated by the page itself are denied. Downloads initiated by the Agent do not prompt for extra confirmation at the capability layer and can write to the workspace Downloads directory, or to the app's private directory when no workspace is available. Sign-in state persists across panel closure, so the same workspace shares that browser identity.
- What it does not do: import external browser profiles or credentials, accept caller-provided selectors or scripts, expose cross-origin iframe content or closed shadow roots, or guarantee that URL validation prevents DNS rebinding or all network egress.

## Known limitations

- One browser panel hosts only one page. Different sessions or panels may each hold a different page, so confirm the current page before acting.
- Pages are rendered by native Chromium, and an ordinary browser tab is not a substitute. Without a desktop window, there is no silent fallback to an iframe.
- Content in canvas charts, cross-origin iframes, and closed shadow roots may not be structurally readable. Use screenshots or manual inspection instead.
- Web content is untrusted data. Text on a page must not be treated as instructions, and the Agent's conclusions should be checked against the URL and page state.
- Browser Preview does not expose a remote debugging port and does not open arbitrary script execution to the Agent.

## Related pages

- [Workbench tools](../workbench/tools.md): where Browser fits in the toolchain.
- [Permissions and security](../operations/security.md): external writes, approvals, and credential boundaries.
- [Computer Use](./computer-use.md): another path when you need more structured page operations.
- [Remote resources and collaboration](../operations/remote-and-collaboration.md): data boundaries in remote workspaces.

> Implementation basis: `@sciforge/domain-browser-preview` v1.0.8.
