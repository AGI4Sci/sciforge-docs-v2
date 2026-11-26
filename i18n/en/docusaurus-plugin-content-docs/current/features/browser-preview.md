---
title: Browser Preview
description: Open web pages inside the app so the Agent can browse and act on pages that are visible and subject to approval.
sidebar_position: 51
---

# Browser Preview

Open a web page in the right panel of the SciForge desktop app. Browse and sign in yourself, or use the session to read the current page and perform an action. The page shows the result.

## Open a page

1. Click **Browser** in the far-right toolbar. Use **More Tools** if it is out of view, or open **Native browser** in the right panel. If a development page in a regular browser says native preview is unavailable, open the SciForge desktop app.
2. Enter an HTTP(S) address and press Enter. The address bar shows the current URL. Use the panel controls to go back or forward, reload, or go full screen.
3. Sign in within the panel if the site requires it. Sessions in the same workspace share its browser sign-in. Use the site's account menu to see which account is active. Sign in separately for accounts used in an external browser.

Each native browser instance opens one page. Use the address bar to identify the active page when you switch panels.

## Read a page

Send a link in the session and specify what to find. For example, ask for a dataset's release date. The assistant first tries a read-only HTTP(S) request from your device. If the content needs sign-in or script rendering, open it in the **Browser** panel and direct the session to the current page. Use the title, URL, or quotations in the reply to find the source.

<details>
<summary>What the browser can read</summary>

The initial read-only URL request requires no extra confirmation. Browser tools can read text, titles, URLs, and controls, and can take screenshots. The read excludes password, payment, CAPTCHA, and marked sensitive fields. For a chart rendered on a canvas, a cross-origin iframe, or a closed shadow root, use a screenshot or inspect the page yourself. Instructions displayed on a site are page content. Actions follow the task you set in the session.

</details>

## Take an action on a site

1. **Go to the target page.** Identify the site and the action in the session. When the assistant navigates, goes back or forward, or reloads, you confirm. The address bar then shows the destination.
2. **Fill or submit a form.** Specify the fields, the data that may be sent, and where to stop. An example is filling the title of a draft and stopping before submitting it. Browser clicks, key presses, and drags act immediately. Enter can submit a form, and dragging a file can upload it. For a send, payment, deletion, or upload that needs your decision, ask the assistant to stop before that step. After submitting, look for the receipt or destination page.
3. **Download a specific file.** Identify the link to download. The assistant can start it directly. A completed download returns the file name and path. With a workspace, it saves to the session folder under `.sciforge-downloads`. Without an available workspace, it saves under the app's private `browser-downloads` directory. Open the returned path to see the file.

<details>
<summary>Pop-ups and script debugging</summary>

The browser blocks permissions, pop-ups, and downloads initiated by the page itself. To download a blocked file, use an explicit download link. Use separate developer tools to debug page scripts.

</details>

## Related pages

- [Workbench tools](../workbench/tools.md)
- [Permissions and security](../operations/security.md)
- [Computer Use](./computer-use.md)
- [Remote resources and collaboration](../operations/remote-and-collaboration.md)

> Component version: `@sciforge/domain-browser-preview` v1.0.8.
