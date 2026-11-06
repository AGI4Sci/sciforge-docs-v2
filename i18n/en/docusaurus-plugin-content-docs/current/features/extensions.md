---
title: Skills, MCP, and Extensions
description: See where capabilities come from in the Extension Center, manage extensions and Skills, and check MCP and desktop-control permissions.
sidebar_position: 4
---

# Skills, MCP, and Extensions

When you need to add tools or a specialized method, first work out what you are installing, then check its source and permissions. Extensions provide app panels and tools, Skills provide task methods, and MCP connects external tools or data.

This page reflects the implementation as of 2026-11-06. For installed versions and available capabilities, see [Version & Compatibility](../reference/version-and-compatibility.md).

## Open the Extension Center

Open **Extensions** from the left sidebar to see built-in and installed extensions, the marketplace, and Skills. Expand the sidebar first if you need the full navigation.

Extension details show the publisher, version, source, status, permissions, and the features it contributes. After installing or enabling, related entries may appear in the left navigation, the vertical toolbar on the far right, or file preview. When there are many toolbar entries, use **More tools**; supported entries can be adjusted through **Customize toolbar**.

![The Extension Center in an earlier version](/img/docs/guides/extensions-center.png)
*Old interface: for understanding extension sources and feature details; the current layout follows the body text.*

## Install and manage extensions

In the marketplace, pick an entry and read the description, publisher, permissions, and installation status before confirming the install. Whether it can be installed depends on the current index and app compatibility; a blocked entry shows the reason.

Ordinary local installation uses an official signed package, and checks the signature, file contents, and Host API compatibility. Development sources are labeled separately and must not be treated as official signed installs. Files in a workspace never become enabled extensions automatically.

Installed extensions can be enabled, disabled, uninstalled, or rolled back with the operations the interface offers; built-in extensions are managed with the app version. If it says a restart is needed, or the extension is invalid or failed to load, handle that prompt first, then check the feature's entry point.

Extension pages that support docking can be placed on the left, right, bottom, or in the main area, and used together with the session. Changing position does not widen the extension's permissions.

## Use a Skill

A Skill usually contains method notes plus supporting scripts and material. Before enabling it, check:

- What tasks it suits, and when it triggers.
- Whether it runs scripts, accesses the network, or writes files.
- What software, data, and credentials it needs.
- What check shows the result is reliable.

![The Skills management page in an earlier version](/img/docs/guides/skills-center.png)
*Old interface: shows what project-level and global Skill management is for.*

Once a Skill is discovered, its scripts still run under the task's permissions. Dependency installs and external actions of a third-party Skill need separate checks; "enabled" is not a substitute for authorization.

## Connect an MCP Server

When configuring MCP, check the service source, version, launch method or address, the credential scope, and what data the tools will read or send. Test the connection with low-impact operations first, then move to tasks that write.

Before sending, uploading, deleting, or modifying anything in an external system, confirm the target and the user's authorization. A successful connection only shows that the service can be called; the task result still needs checking. Avoid writing keys directly into prompts, project requirements, or delivery content.

## Use Computer Use

Desktop control needs Runtime support, an available backend, and system permissions. Check the backend status in settings; on macOS, also check the Screen Recording and Accessibility permissions. Limit the target app and the task scope, and check each action such as sign-in, authorization, payment, sending, or deleting.

![Computer Use configuration in an earlier version](/img/docs/guides/ai-assistants-computer-use.jpg)
*Old interface: shows that the Runtime, Backend, and system permissions each need checking.*

## When you cannot find a feature

1. Check the status and error messages of the extension, Skill, or MCP.
2. Check whether the current workspace, permissions, and Runtime support the capability you need.
3. Start a new session so capabilities are discovered again; if a restart is needed, follow the interface prompt.
4. If a tool entry has disappeared, check **More tools** and the toolbar customization settings.
5. If a local extension fails to install, check the publisher, signature, and version compatibility; do not force-load it by turning off permission checks.

Related pages: [Workbench tools](../workbench/tools.md), [Permissions & security](../operations/security.md).
