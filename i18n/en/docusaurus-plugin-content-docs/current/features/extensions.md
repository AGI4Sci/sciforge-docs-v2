---
title: Skills, MCP, and Extensions
description: Distinguish bundled domains, locally signed extensions, Agent Skills, and MCP Servers, and enable them safely.
sidebar_position: 4
---

# Skills, MCP, and Extensions

An “extension” in SciForge is not a single mechanism. Understanding the object types keeps documentation methods, external tools, and in-app panels from being confused with one another.

## Extension Center

Open **Extensions** in the left sidebar to view bundled domain extensions, locally installed packages, and Skills. Extension details should show the source, publisher, version, status, and contributions.

![SciForge Extension Center page](/img/docs/guides/extensions-center.png)
*Figure 1: Extension Center distinguishes bundled from locally installed extensions and shows contributions such as panels, toolbar actions, previews, and Agent capabilities.*

Local extensions accept only official SciForge-signed packages. Installation verifies the complete file set, Ed25519 signature, publisher identity, and Host API. Workspace content never installs or executes extensions automatically.

## Extension Marketplace

The Marketplace page in Extension Center uses the index bundled with the app, and a deployment can point it to a remote index. The installation chain performs permission confirmation, download, size and SHA-256 verification, publisher signature verification, staged unpacking, and atomic replacement in order. If any step fails, the existing installation is left intact.

- Before installation, the plugin's declared capabilities are listed and the user must confirm before continuing.
- Installed plugins can be disabled, enabled, or uninstalled. After uninstall, the corresponding capabilities are removed from the host immediately.
- Entries that are not published or are blocked state the reason, such as undeclared tools, capabilities that conflict with a built-in plugin, or a failed build.
- Whether a Marketplace entry can be installed depends on the current in-app index. This does not change the bundled domain extensions listed in this chapter.

## Agent Skill

Skills are specialized methods and workflows for Codex or Claude Code, usually consisting of `SKILL.md` plus supporting scripts and reference materials. Before enabling one, read:

- The Skill's trigger conditions and scope
- Whether it runs scripts, accesses the network, or writes files
- Required software, data, and credentials
- How results are verified

![SciForge Skills management page](/img/docs/guides/skills-center.png)
*Figure 2: The Skills page is used to view, create, and manage project-level or global Skills.*

Recognition of a Skill does not mean its scripts have been executed automatically. Installation, dependencies, and scripts from third-party Skills still require independent review.

## MCP Server

An MCP Server provides external tools or data to the Agent. When configuring one, record at least:

- The source and version of the service
- The launch command or service address
- The environment variables used and the credential scope
- Whether tools read local files, write to external systems, or send data
- Whether failures are retried, and how duplicate writes are avoided

Writes, sends, uploads, or deletes in external systems should not be authorized automatically just because MCP is connected.

## Computer Use Backend

Computer Use lets supported Runtimes operate desktop apps. It also requires a local Backend, screen recording, and Accessibility permissions. Limit the target apps and task scope, and require user confirmation before key actions such as signing in, authorizing, paying, sending, or deleting.

![SciForge Computer Use configuration](/img/docs/guides/ai-assistants-computer-use.jpg)
*Figure 3: The Settings page shows Runtime access, Backend status, and macOS permissions separately.*

## Troubleshooting order

1. Confirm that the extension or Skill status is not “Restart required” or “Invalid.”
2. Start a new session so the Runtime rediscovers available capabilities.
3. Check the target workspace, Skill directory, and MCP configuration.
4. Look for explicit errors in tool calls; do not rely on silent fallbacks.
5. For local extensions, verify the signature, Host API, and version.

Related page: [Permissions and security](../operations/security.md).
