---
title: Runtime and model access
description: Configure model access, choose Codex, Claude Code, or DeepSeek Harness, and complete a connection check.
sidebar_position: 2
---

# Runtime and model access

Configure the model service first, then choose the AI assistant that executes tasks. The former determines where model requests go; the latter plans work and calls tools.

| Setting | Entry point | What to confirm |
| --- | --- | --- |
| Model access | First-run wizard or **Settings → General** | The Model API base URL, key, and model, or official sign-in for Coding Plan |
| AI assistant | **Settings → AI assistant** | Installation, connection, and permissions for Codex, Claude Code, or DeepSeek Harness (DSH) |
| Current session | Execution settings in the bottom input area | The Runtime, model, and available tiers for this run |

Settings is at the bottom of the expanded left sidebar. Local accounts and SciForge cloud sign-in are managed separately, see [Identity & Access](../features/identity-access.md).

## Choose model access

With **Model API**, enter the Base URL, API Key, and model name provided by your service provider; if you are unsure about the protocol, use automatic detection. An existing key only means the field is configured; whether the upstream accepts it must be confirmed with an actual request.

![Model API settings](/img/docs/quickstart/quickstart-model-api.jpg)
*This screenshot illustrates the configuration fields. Enter your own service settings.*

With **Coding Plan**, complete official sign-in or device-code authorization in the interface. The Coding Plan path currently supports Codex; Claude Code uses model access. If sign-in or connection fails, fix the current access path according to the prompt, then retry.

## Choose and connect a Runtime

In **Settings → AI assistant**, choose the execution runtime and check the detection result; if automatic detection fails, use **Choose local app** or enter the absolute path to the executable, then detect again.

- **Codex**: uses the installed Codex app-server; check the model and permissions before starting a task.
- **Claude Code**: configure model access and check its permission mode.
- **DSH**: connects through a local ACP program; the model and reasoning tier take effect in the session after connecting. Check the program you specified, the system path, and common install locations first, and only try the component bundled with the app when none of them work.

DSH's **Shell command execution** is off by default; enable it only for a DSH you installed yourself, and each run still requires approval. Do not switch to full permissions just to make an error go away.

![AI assistant settings](/img/docs/guides/ai-assistants.jpg)
*Shows execution runtime configuration, tool confirmations, and file scope.*

Codex and Claude Code can edit the workspace by default. For your first analysis, adjust permissions according to [configure a read-only sandbox](./read-only-sandbox.md) first. After switching execution runtimes, re-check the connection, sign-in, and permissions; existing sessions' mappings and configuration do not migrate automatically.

When you need to operate desktop applications, also check **Computer Use**'s Runtime support, backend, and system permissions.

![Computer Use settings](/img/docs/guides/ai-assistants-computer-use.jpg)
*Illustrates the configuration items that must be checked separately.*

## Run a minimal connection check

Start a new session, confirm that the expected Runtime is selected in the input area, and send:

> Reply only with “connected”. Do not read or modify files, and do not call external services.

After you receive a response, continue to the [five-minute quickstart](./five-minute-quickstart.md). If the selected Runtime is unavailable, fix it according to the error or switch deliberately; the app will not automatically pick another Runtime for you.

## Troubleshoot DSH timeouts

DSH distinguishes between a timeout on a single connection request and a task that makes no progress for a long time:

| Case | Meaning and handling |
| --- | --- |
| Initialization, create, or resume session requests time out | The default single wait is 15 seconds. Check the local program, the connection, and any explicit error; extending the wait will not solve long-running tasks |
| A task produces no session updates for a long time | By default, the turn stops after 10 minutes of continuous silence; long tasks that keep receiving updates for the current session can exceed 10 minutes. Review the existing results before deciding whether to continue the same session |

For technical troubleshooting: the former's configuration name is `requestTimeoutMs`; the latter, although named `promptTimeoutMs`, means the idle limit and has the error code `runtime_prompt_idle_timeout`. After a timeout, the original session identifier can be recovered, but you should still check existing files and external actions before continuing the task.
