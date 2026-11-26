---
title: Skills, MCP, and Extensions
description: See where capabilities come from in the Extension Center, manage extensions and Skills, and check MCP and desktop-control permissions.
sidebar_position: 4
---

# Skills, MCP, and Extensions

Open **Extensions** for tools and panels. Use **Skills** to reuse a method, and MCP to connect a session to an external tool or data source.

## Open the Extension Center

Expand the left sidebar and click **Extensions**. An entry's details show its publisher, version, source, status, permissions, and what it adds.

Open extension pages from the left navigation and tool panels from the toolbar on the far right. For a file-preview extension, open a file of the supported type from **Files**. If an icon is out of view, open **More Tools**. Use **Customize Toolbar** to move supported tools. Dockable pages can sit on the left, right, bottom, or in the main area.

![Extension Center](/img/docs/guides/extensions-center-public-en.png)
*Open Extensions from the left sidebar to see where an item comes from.*

![Details for a bundled extension](/img/docs/guides/extensions-details-public-en.png)
*Open an entry to see its version, source, and status.*

## Check availability, install, and enable

| What you want to do | Where to go |
| --- | --- |
| Find out what a plugin does and see its compatibility status | Open the [SciForge public catalog](https://agi4sci.github.io/SciForge-market/) and select the entry. |
| Install a DSH plugin in the desktop app | Open **Extensions → Market**. Available entries offer **Install**. The Market supplies `.sciforge-dsh-plugin` packages. |
| Use a bundled module | Open its entry in **Extensions** to see whether it is enabled and where to open it. |
| Install a signed extension from a local file | Open **Extensions → Install from file** and select a supported `.sciforge-plugin` package. Check its publisher, signature, and version compatibility. |

To install from the Market, open the entry and review its publisher, permissions, and required host interfaces. Then click **Install → Approve and install**. Once the entry shows **Enabled**, open the tool and try it. The entry also provides the actions available for that extension, such as disabling, uninstalling, or rolling back. If the app requests a restart, reopen the tool afterward.

If an entry appears under **Not installable yet**, expand the group to see why. Use the maintainer's instructions for plugins supplied with a development build.

![Unavailable entries in the desktop Market](/img/docs/guides/extensions-market-public-en.png)
*Expand Not installable yet to see the reason for each entry.*

### Plugin tutorials

Try these examples with a compatible, enabled version of the DSH plugin.

- **Anchored Comments.** In a workspace where you can save comments, open **Research Record** and select “Missing values were filled with 0” within one entry. Click **Add Comment**, write “Check whether a blank means the sample was not measured,” and click **Save**. To find the comment again, query it in the session. The result should contain both the quoted text and your note. See [Anchored Comments](./anchored-comments.md).
- **Change Inspector.** Use a session in a demo workspace to add a line to `notes.md`. In the same session, request the recorded changes. The list should include `notes.md`, and its diff should show the added line. Open the next batch if the list continues. See [Change Inspector](./change-inspector.md).
- **Scientific Figures.** Use a writable local workspace, a configured DSH session, and Python with Matplotlib on a macOS system that passes the execution checks. Open **Scientific Figures → New → Start from data**, run the sample, and refresh the panel. The PNG appears in **Figures**. See [Scientific Figures](./scientific-plotting.md).

## Use a Skill

Open **Extensions → Skills** to find a method. Before enabling it, look at its project or global scope, what triggers it, and what scripts, software, materials, or credentials it uses. If it installs dependencies, accesses the network, or writes files, review those permissions when you run it. Try a small sample and compare its output against the Skill's criteria.

![Skills management](/img/docs/guides/skills-center.png)
*See the Skills available to the current project or globally.*

## Connect an MCP Server

1. Expand the left sidebar and open **Settings → AI Assistants** to identify the Runtime used in your session. Use the Runtime's own MCP configuration if it supports custom servers. SciForge's desktop settings manage the Runtime and its Market installs plugins. This desktop build has no general-purpose editor for custom MCP servers. If the session's Runtime does not support custom connections, use the tools it already provides.
2. In a Runtime that supports custom connections, open its MCP server settings and enter the startup command or server address. Before saving, review the service's source, version, launch method or address, credential scope, and what data it can read, write, or send. Enter credentials in the configuration's credential input.
3. Return to the session and use the service for a read-only query, such as listing a resource you know exists. The result should include that resource's name or ID. Before sending, uploading, deleting, or writing anything, identify the target, the destination for the data, and the permission to act. Find the new or changed item in the target system afterward.

## Use Computer Use

With Codex or Claude Code, enable Computer Use in **Settings** and look at its status. On macOS, check Screen Recording and Accessibility permissions. Identify the browser page or embedded Electron page and what can be done there. Review any login, authorization, payment, send, or delete action when it comes up, then look for its result on the page.

![Computer Use settings](/img/docs/guides/ai-assistants-computer-use.jpg)
*Settings show whether Computer Use is enabled and which system permissions it needs.*

## When you cannot find a feature

Open **Extensions** and look for a disabled entry, an error, or a restart request. If the tool panel is out of view, use **More Tools** or **Customize Toolbar**. If an enabled Skill or MCP tool is missing from a session, try a new session. For a local installation failure, use the error to identify the package format, signature, publisher, or version to check.

Related pages: [Workbench tools](../workbench/tools.md) and [Permissions and security](../operations/security.md).
