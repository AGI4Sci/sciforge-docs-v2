---
title: Computer Use
description: Enable Computer Use so Codex or Claude Code can operate browser and in-app embedded pages within the scope you authorize.
sidebar_position: 52
---

# Computer Use

Computer Use lets the Agent observe a page and click, type, press keys, or scroll step by step, which suits tasks that must be done through an interface. It currently supports **Codex and Claude Code only**, and its scope is browser pages and the embedded pages of Electron apps, such as Browser Preview; it cannot be used to operate arbitrary desktop applications.

## Enable and check

1. Open **Settings → AI assistant → Computer use**, turn on **Enable computer use**, and enable **Codex app-server** or **Claude Code CLI** under **Runtime access**.
2. Check **Backend status** on the settings page. If it shows **unavailable** or **not reported**, click **Refresh status** and resolve any prompt shown.
3. Under **macOS permissions**, verify that **Accessibility** and **Screen Recording** show **granted**. If not, open macOS System Settings to grant them and restart SciForge if prompted.
4. Open the target page, and in the session state the task, allowed actions, stop conditions, and forbidden actions.

![SciForge Computer Use settings](/img/docs/guides/ai-assistants-computer-use.jpg)
*Figure 1: Enable Computer Use on the settings page, and check its run status and system permissions.*

## Run a task

1. Have the Agent observe the current page first; the reply reports the page title, URL, and target controls.
2. Carry out actions step by step. Every call that changes state prompts for your confirmation; review the specific action before allowing it, as a confirmation does not authorize later actions of the same kind.
3. Before signing in, authorizing, sending, uploading, buying, paying, deleting, or submitting a formal result, review the target and consequences. If an outcome is uncertain, check the page receipt before retrying so you do not submit twice.
4. When done, stop the task or close the session to release the operating lease, and inspect the final result on the page.

## What actions affect, and tips

- Observation reads the page content, interactive elements, and screenshots; read-only queries need no confirmation.
- Clicking, typing, key presses, and scrolling act directly on the target page and may submit something or change the page state.
- Pages and screenshots may contain accounts, patient information, or unpublished data; check and redact before sharing or exporting. Do not have the Agent fill in passwords, verification codes, or payment information.
- When the run status is unavailable or system permissions are insufficient, fix the problem before continuing the task.
- When the session ends, the current operating connection is released. Computer Use is not suited to unattended, long-running automation.

## Related pages

- [Permissions & security](../operations/security.md): system permissions and confirmation of key actions.
- [Skills, MCP, and Extensions](./extensions.md): tool connections and extension management.
- [Browser Preview](./browser-preview.md): the main page entry that can currently be operated.
- [Workbench tools](../workbench/tools.md): how the tools divide the work, and usage principles.

> Implementation basis: `@sciforge/domain-computer-use` v1.0.1.
