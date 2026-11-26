---
title: Skills, MCP, and Extensions
description: See where capabilities come from in the Extension Center, manage extensions and Skills, and check MCP and desktop-control permissions.
sidebar_position: 4
---

# Skills, MCP, and Extensions

When you need to add tools or a specialized method, first work out what you are installing, then check its source and permissions. Extensions provide app panels and tools, Skills provide task methods, and MCP connects external tools or data.

## Open the Extension Center

Open **Extensions** from the left sidebar to see built-in and installed extensions, the marketplace, and Skills. Expand the sidebar first if you need the full navigation.

Extension details show the publisher, version, source, status, permissions, and the features it contributes. After installing or enabling, related entries may appear in the left navigation, the vertical toolbar on the far right, or file preview. When there are many toolbar entries, use **More tools**; supported entries can be adjusted through **Customize toolbar**.

![Extension Center in the public source build](/img/docs/guides/extensions-center-public-en.png)
*The extensions list in a build from public source.*

![Version and source of a bundled extension](/img/docs/guides/extensions-details-public-en.png)
*Open an entry to see its version, source, and status.*

## Check availability, install, and enable

| What you want to do | Where to go |
| --- | --- |
| Look up a plugin or module and check its compatibility status | Open the [SciForge public catalog](https://agi4sci.github.io/SciForge-market/) |
| Use a module bundled with the app | Open **Extensions** and check the bundled entry for details and where to open it |
| Install a standalone plugin | Check **Extensions → Market** for available packages, or use **Install from file** with a compatible signed package from the maintainer |

The market index bundled with the public source build checked for this guide (`9daddeb`) lists no installable plugins. Expand **Not installable yet** to see the reasons for Change Inspector and Scientific Figures.

![Desktop Market with the unavailable entries expanded](/img/docs/guides/extensions-market-public-en.png)
*The desktop Market shows current installation status.*

Once you have a compatible signed package, check its publisher, version, and permissions, then follow the prompts to install and enable it. A source marked for development is for local verification. Files in your workspace do not register themselves as extensions.

Use the available controls to enable, disable, uninstall, or roll back an installed extension. Handle restart or load errors before looking for its tools. Dockable extension pages can be placed on the left, right, bottom, or main area.

## Use a Skill

A Skill usually contains method notes plus supporting scripts and material. Before enabling it, check:

- What tasks it suits, and when it triggers.
- Whether it runs scripts, accesses the network, or writes files.
- What software, data, and credentials it needs.
- What check shows the result is reliable.

![The Skills management page](/img/docs/guides/skills-center.png)
*Shows what project-level and global Skill management is for.*

Once a Skill is discovered, its scripts still run under the task's permissions. Dependency installs and external actions of a third-party Skill need separate checks; "enabled" is not a substitute for authorization.

## Connect an MCP Server

When configuring MCP, check the service source, version, launch method or address, the credential scope, and what data the tools will read or send. Test the connection with low-impact operations first, then move to tasks that write.

Before sending, uploading, deleting, or modifying anything in an external system, confirm the target and the user's authorization. A successful connection only shows that the service can be called; the task result still needs checking. Avoid writing keys directly into prompts, project requirements, or delivery content.

## Use Computer Use

Computer Use currently supports Codex and Claude Code, and can operate browsers and the embedded pages of Electron apps. First enable it in settings and check the run status; on macOS, also check the Screen Recording and Accessibility permissions. Limit the target page and the task scope, and check each action such as sign-in, authorization, payment, sending, or deleting.

![Computer Use configuration](/img/docs/guides/ai-assistants-computer-use.jpg)
*After enabling Computer Use, check the run status and system permissions.*

## When you cannot find a feature

1. Check the status and error messages of the extension, Skill, or MCP.
2. Check whether the current workspace, permissions, and Runtime support the capability you need.
3. Start a new session so capabilities are discovered again; if a restart is needed, follow the interface prompt.
4. If a tool entry has disappeared, check **More tools** and the toolbar customization settings.
5. If a local extension fails to install, check the publisher, signature, and version compatibility; do not force-load it by turning off permission checks.

Related pages: [Workbench tools](../workbench/tools.md), [Permissions & security](../operations/security.md).
