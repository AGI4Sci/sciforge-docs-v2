---
title: Computer Use
description: Let supported Runtimes safely operate graphical interfaces through the local Backend.
sidebar_position: 52
---

# Computer Use

Computer Use lets supported Runtimes operate graphical interfaces on the desktop through a local Backend, turning observation, clicks, and input into governed MCP tools. It is suited to steps that must go through a UI and have no stable API. Every state-changing action requires a confirmed invocation.

## How to open it

- Entry: **Settings → AI assistant → Computer use**. Turn on the main switch and select the Runtimes allowed to use it.
- Target: the graphical interface target bound to and authorized for the current session. The current implementation uses a browser CDP backend to handle browser pages and Electron embedded pages.
- Prerequisite: the local Computer Use Backend is running. On macOS, screen recording and Accessibility permissions are also required.
- Connection: SciForge starts a managed MCP Server and provides bounded tools to Codex/Claude Code. No manual MCP command configuration is needed.

![SciForge Computer Use settings](/img/docs/guides/ai-assistants-computer-use.jpg)
*Figure 1: The Computer Use entry, Backend status, and system permissions on the Settings page.*

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Check availability | View Backend and system permission status on the Settings page | An available or unavailable status, with no silent fallback |
| Observe the target | Have the Agent read the current target and interactive elements first | A bounded page or target observation |
| Perform one action | Click, type, press a key, or scroll under explicit instructions | A structured action result and page version |
| Stop or release | Stop the current task or release the session | In-flight actions canceled and bindings cleaned up |

## Typical workflow

1. Enable Computer Use in Settings and select only the Runtimes this task needs.
2. Check Backend status and confirm in macOS System Settings that screen recording and Accessibility are authorized.
3. In the session, state the target page, the outcome you want, the stop conditions, and prohibited actions.
4. Have the Agent observe first, then perform actions step by step. Every state-changing call requires your confirmation.
5. Release the session when done and verify the result in the UI. Do not treat a successful tool return as confirmation of the business result.

## Inputs, outputs, and permissions

- Reads: structured observations of the current target, interactive elements, and bounded screenshots. Read-only queries do not require confirmation.
- Writes: UI actions such as clicks, typing, key presses, and scrolling. Every change must be bound to one trusted, confirmed invocation.
- Approval or external effects: actions such as signing in, authorizing, sending, uploading, purchasing or paying, deleting, and submitting official results must be confirmed by the user at execution time. A confirmation covers only that call and does not automatically authorize later actions of the same kind.
- Data boundary: screens and observation results may contain account details, patient information, or unpublished data and should be treated as sensitive. Do not ask the Agent to fill in passwords, verification codes, or payment information.
- What it does not do: bypass system permissions, keep operating after the turn ends, promise automation for arbitrary desktop apps, or switch to another backend when the Backend is unavailable.

## Known limitations

- The current execution backend is browser CDP, so targets are limited to browser pages and Electron embedded pages (for example, Browser Preview). It is not a general automation tool for arbitrary desktop apps.
- It requires the local Backend and a supported Runtime connection. When the Backend is unavailable, it reports an explicit error and does not silently degrade.
- Only Codex and Claude Code are supported. Other Runtimes do not receive this tool set.
- Screenshots and observation results are treated as untrusted and potentially sensitive by default. Redact them before export.
- Bindings for the turn are reclaimed when the session ends. Computer Use is not intended for unattended, long-running automation.

## Related pages

- [Permissions and security](../operations/security.md): Computer Use system permissions and confirmation of key actions.
- [Skills, MCP, and Extensions](./extensions.md): the differences between MCP, Skills, and plugins.
- [Browser Preview](./browser-preview.md): the main source of pages that Computer Use currently operates.
- [Workbench tools](../workbench/tools.md): how tools divide responsibilities and how to use them.

> Implementation basis: `@sciforge/domain-computer-use` v1.0.1.
