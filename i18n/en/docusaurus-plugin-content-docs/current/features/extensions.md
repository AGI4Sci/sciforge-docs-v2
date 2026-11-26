---
title: Skills, MCP, and Extensions
description: See where capabilities come from in the Extension Center, manage extensions and Skills, and check MCP and desktop-control permissions.
sidebar_position: 4
---

# Skills, MCP, and Extensions

Open **Extensions** for tools and panels. Use **Skills** to reuse a method, and MCP to connect a session to an external tool or data source.

## Open the Extension Center

Expand the left sidebar and click **Extensions**. Opening an entry shows its publisher, version, source, status, permissions, and contributed tools or panels.

Open extension pages from the left navigation and tool panels from the toolbar on the far right. For a file-preview extension, open a file of the supported type from **Files**. If an icon is out of view, open **More tools**. Use **Customize toolbar** to move supported tools. Dockable pages can sit on the left, right, bottom, or in the main area.

![Extension Center](/img/docs/guides/extensions-center-public-en.png)
*Open Extensions from the left sidebar to see where an item comes from.*

![Details for a bundled extension](/img/docs/guides/extensions-details-public-en.png)
*Open an entry to see its version, source, and status.*

## Check availability, install, and enable

| What you want to do | Where to go and what you get |
| --- | --- |
| Find out what a plugin does and see its compatibility status | Open the [SciForge public catalog](https://agi4sci.github.io/SciForge-market/) and select the entry to see its supported tasks and public status. |
| Install a DSH plugin in the desktop app | Open **Extensions → Market**. Installable entries show **Install**. The Market supplies `.sciforge-dsh-plugin` packages. |
| Use a bundled module | Open its entry in **Extensions** to see whether it is enabled and where to open it. |
| Install a signed extension from a local file | Open **Extensions → Install from file** and select a supported `.sciforge-plugin` package. The app verifies its publisher, signature, and version compatibility. |

**Install from the desktop Market.** Open an installable entry to review its publisher, version, tool permissions, and requested Host operations, then click **Install → Approve and install**. Once the entry shows **Enabled**, open its entry point and run a quick check. Existing plugins can be enabled, disabled, uninstalled, or rolled back from their detail page. If the app requests a restart, restart before opening the entry point.

In **Extensions → Market**, expand **Not installable yet** to see why an entry is unavailable. Follow the maintainer’s instructions for development builds. See [Versions and compatibility](../reference/version-and-compatibility.md#version-information) for the build and Market index shown in the screenshot.

![Unavailable entries in the desktop Market](/img/docs/guides/extensions-market-public-en.png)
*Expand Not installable yet to see the reason for each entry.*

### Plugin tutorials

Try these examples with a compatible, enabled version of the DSH plugin.

- **Anchored Comments.** In a workspace where you can save comments, open **Research record** and select “Missing values were filled with 0” within one entry. Click **Add comment**, write “Check whether a blank means the sample was not measured,” and click **Save (保存批注)**. To find the comment again, query it in the session. The result should contain both the quoted text and your note. See [Anchored Comments](./anchored-comments.md).
- **Change Inspector.** Use a session in a demo workspace to add a line to `notes.md`. In the same session, request the recorded changes. The list should include `notes.md`, and its diff should show the added line. Open the next batch if the list continues. See [Change Inspector](./change-inspector.md).
- **Scientific Figures.** Use a writable local workspace, a configured DSH session, and Python with Matplotlib on a macOS system that passes the execution checks. Open **Scientific Figures → New → Start from data**, run the sample, and click **Refresh** to see the PNG in **Figures**. See [Scientific Figures](./scientific-plotting.md).

## Use a Skill

Open **Extensions → Skills** to find a method. Before enabling it, review its project or global scope, trigger conditions, and the scripts, software, materials, or credentials it uses. If it installs dependencies, accesses the network, or writes files, check the requested scope in the approval prompt when it runs. Try a small sample first and compare the output file or reply against the Skill's criteria.

![Skills management](/img/docs/guides/skills-center.png)
*See the Skills available to the current project or globally.*

## Connect an MCP Server

1. Expand the left sidebar and open **Settings → AI assistant** to identify the Runtime used in the session. If it supports custom servers, follow its instructions to open its MCP settings. You can also use the MCP tools already available in the session.
2. In a Runtime that supports custom connections, open its MCP server settings and enter the startup command or server address. Before saving, review five items: the service's source, version, launch method or address, credential scope, and what data the tool reads, writes, or sends. Enter credentials in the configuration's credential input.
3. Return to the session and use the service for a read-only query, such as listing a resource you know exists. The result should include that resource's name or ID. Before sending, uploading, deleting, or writing anything, specify the target, data destination, and authorization. Afterward, open the target system to see the added or updated item.

## Use Computer Use

With Codex or Claude Code, open **Settings → AI assistant → Computer use** and turn it on; the page shows the Backend status and macOS **Accessibility** and **Screen Recording** permissions. In the session, specify the target browser page or embedded Electron page and the allowed task scope. When a sign-in, authorization, payment, send, or delete action comes up, approve or reject it in the confirmation prompt, then check the result on the page.

![Computer Use settings](/img/docs/guides/ai-assistants-computer-use.jpg)
*Settings show whether Computer Use is enabled and which system permissions it needs.*

## When you cannot find a feature

Open **Extensions** to see whether the entry shows **Enabled**, an error, or a restart prompt, and check your workspace permissions and Runtime support. If the tool panel is out of view, open **More tools** or **Customize toolbar**. If an enabled Skill or MCP tool does not appear in a session, start a new session. For a local installation failure, fix the package format, signature, publisher, or version shown in the error message and install again.

Related pages: [Workbench tools](../workbench/tools.md) and [Permissions and security](../operations/security.md).
