---
title: Browser Preview
description: Open web pages inside the app so the Agent can browse and act on pages that are visible and subject to approval.
sidebar_position: 51
---

# Browser Preview

Browser Preview runs a native Chromium page in the right panel for viewing local development pages, research materials, or sites that require sign-in. It is both a window for human browsing and a page resource the Agent can observe and operate. Web content is always treated as untrusted data.

## How to open it

- Entry: **Browser** in the right toolbar (expand **More tools** if it is not shown), or **Native browser** in the right panel.
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

## What actions affect, and where things are saved

- When reading a page, the Agent can get the body text, title, URL, interactive targets, and screenshots; password and payment/CAPTCHA fields and regions marked sensitive are excluded. Reading by URL accesses that address from this machine and does not ask for extra confirmation.
- Filling forms, selecting options, clicking, pressing keys, and dragging act directly on the page. For example, pressing Enter may submit a form, clicking a link may start a download, and dragging a file may trigger an upload. Before starting, confirm these actions are within what the task allows, and ask the Agent to stop before important actions such as sending, paying, or deleting.
- The Agent's navigation, Back, Forward, and Reload need confirmation. The browser tool itself does not pop up a confirmation for each click, key press, or drag; whether the AI assistant you use asks separately depends on its settings.
- Permission requests, popups, and downloads started by the page itself are denied. Downloads started by the Agent are not confirmed again by the browser tool; files are saved to the workspace Downloads directory, or to the app's private directory when no workspace is available. After downloading, check the file and where it was saved.
- Sign-in state is kept after you close the panel, and the same workspace shares that browser identity. Check the current account before switching tasks. The configuration and credentials of an external browser are not imported automatically.

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
