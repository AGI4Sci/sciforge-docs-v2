---
title: Runtime and model access
description: Tell Model API, Coding Plan, Codex, Claude Code, and DeepSeek Harness apart, and complete the minimal configuration.
sidebar_position: 2
---

# Runtime and model access

SciForge separates configuration into two layers: where models come from, and who executes tasks.

| Layer | What it determines | Where to set it |
| --- | --- | --- |
| Model access | Whether requests go through a Model API or a supported Coding Plan | First-launch guide or **Settings → General** |
| AI assistant Runtime | Whether Codex, Claude Code, or DeepSeek Harness (DSH) plans and invokes tools | **Settings → AI assistant**, and the bottom-right of the input box |

## Choose model access

When you choose **Model API**, you provide a Base URL, an API key, and a model name; if the upstream protocol is uncertain, leave automatic detection on.

![SciForge Model API configuration](/img/docs/quickstart/quickstart-model-api.jpg)
*Figure 1: The minimum fields for a Model API. The address, key, and model name in the screenshot illustrate the fields only; do not copy them.*

When you choose **Coding Plan**, complete authorization through the official sign-in or device code shown in the interface. The current implementation supports the Coding Plan path for Codex; Claude Code requires Model API access. A failed connection does not silently switch to the Model API.

## Configure Codex, Claude Code, or DSH

Configure each Runtime separately in **Settings → AI assistant**:

- **Codex**: selected by default; suited to general code, file, and tool tasks.
- **Claude Code**: must be selected explicitly and configured with a Model API, and follows Claude Code's execution model.
- **DeepSeek Harness (DSH)**: must be selected explicitly. SciForge checks the path you configured explicitly first, then PATH, then common install locations, and only falls back to the bundled DSH component if all of them fail; DSH's model and reasoning level take effect on the ACP session after connecting and are not changed here. DSH's native shell tools are off by default; once enabled, every execution still requires your individual approval.

Typically keep the default command `codex` or `claude`. If automatic detection fails, enter the absolute path to the executable.

![SciForge AI assistant settings](/img/docs/guides/ai-assistants.jpg)
*Figure 2: The AI assistant page centralizes the command, the tool approval policy, and the file access range.*

Both Runtimes default to a **Can edit workspace** file access range. For your first read-only analysis, adjust Codex's range first; Claude's “Can only read files” maps to Plan mode and should not be treated as the same sandbox guarantee. For the steps, see [Configure the read-only sandbox](./read-only-sandbox.md).

When you want the Agent to operate desktop apps, continue on the settings page to check **Computer Use**'s Runtime access, Backend, and macOS permissions.

![SciForge Computer Use settings](/img/docs/guides/ai-assistants-computer-use.jpg)
*Figure 3: Computer Use requires the Runtime, the Backend, and system permissions to all be in place.*

## Choose the executor for the current session

Back in the workbench, check the current Runtime in the execution settings area at the bottom-right of the input box. Switching Runtime does not carry over another Runtime's sign-in state, configuration, or session mapping.

:::warning[No silent fallback]

When the selected Runtime is unavailable, SciForge should show an error rather than switching to another Runtime automatically. Fix the current configuration, or switch explicitly yourself.

:::

## Minimal verification

Start a new session and send:

> Reply only with “connection successful”. Do not read or modify files, and do not call external services.

Once you receive a clear response, continue to the [Five-minute quickstart](./five-minute-quickstart.md).
