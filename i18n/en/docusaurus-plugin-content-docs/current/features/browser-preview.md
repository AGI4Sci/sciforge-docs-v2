---
title: Browser Preview
description: Open web pages inside the app so the Agent can browse and act on pages that are visible and subject to approval.
sidebar_position: 51
---

# Browser Preview

Open a web page in the right panel of the SciForge desktop app. Browse and sign in yourself, or use the session to tell the assistant what to read or do on the page.

## Open a page

1. Click **Browser** in the far-right toolbar. Open **More tools** if it is out of view, or open **Native browser** in the right panel. If a development page in a regular browser says native preview is unavailable, open the SciForge desktop app.
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

1. **Open the target page.** Tell the assistant which site to use and what you want to do. Approve the prompt when the assistant navigates, goes back or forward, or reloads. The address bar then shows the current URL.
2. **Fill in a draft.** Name the fields to fill and where to stop. For example, fill in the title and stop at the submit button. You can also ask the assistant to pause before sending, paying, deleting, or uploading something you want to review.
3. **Submit and look for a receipt.** State which data the assistant may send. After submission, look in the panel for the site’s receipt, success message, or destination page. Check the result before retrying.
4. **Download a file.** Specify the download link in the session. The reply shows the file name and path after the download. With a workspace open, look in **Files** for the session folder under `.sciforge-downloads`. Without a workspace, open the returned path under the app’s `browser-downloads` directory.

<details>
<summary>Page controls, pop-ups, and script debugging</summary>

On an authorized page, the browser can click, type, press keys, or drag. Enter can submit a form, and dropping a file can start an upload.

The browser blocks permission requests, pop-ups, and downloads initiated by the page itself. To download a blocked file, use an explicit download link. Use separate developer tools to debug page scripts.

</details>

## Related pages

- [Workbench tools](../workbench/tools.md)
- [Permissions and security](../operations/security.md)
- [Computer Use](./computer-use.md)
- [Remote resources and collaboration](../operations/remote-and-collaboration.md)

> Component version: `@sciforge/domain-browser-preview` v1.0.8.
