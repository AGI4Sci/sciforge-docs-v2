---
title: Troubleshooting
description: "Diagnose SciForge problems across five layers: interface, Runtime, model access, permissions, and external services."
sidebar_position: 2
---

# Troubleshooting

First determine which layer the problem is in, so you do not change models, the Runtime, permissions, and workspace settings all at once.

## Five-layer quick diagnosis

| Layer | Check first |
| --- | --- |
| App interface | Whether SciForge started correctly and the current workspace is the right one |
| Runtime | Whether Codex, Claude Code, or DSH is currently selected, whether the command can be found, and whether sign-in is valid |
| Model access | Whether the Model API or Coding Plan is fully configured |
| Permissions and tools | File access range, approvals, the Computer Use Backend, and system permissions |
| External services | Whether Cloud, MCP, Worker, or Provider is reachable; whether a remote workspace session is still attached |

## Runtime shows as disconnected

1. Open **Settings → AI assistant** and confirm the current Runtime.
2. In your system terminal, check whether `codex`, `claude`, or `dsh` can be found.
3. If automatic detection fails, enter the absolute path to the executable.
4. After changing it, reconnect or start a new session.
5. Do not expect an automatic switch to another Runtime after a failure.

## Runtime is connected but the model does not respond

- Confirm whether you are using a Model API or a Coding Plan.
- A Model API requires a Base URL, API Key, and model name that match completely.
- A Coding Plan requires a valid official sign-in state.
- The current Coding Plan path supports Codex; if you select Claude Code, configure the Model API.
- Do not put a Provider API key in the Runtime sign-in field.
- Test with a minimal prompt that reads no files first, then investigate tools and the sandbox.

## A read-only task still changes files

1. Stop the task immediately.
2. Compare `git status --short` before and after the task.
3. Have the installed and authorized [Change Inspector](../features/change-inspector.md) inspect the current session changes and compare them with the actual files.
4. Confirm the executor, whether settings were applied, and whether you approved expanded permissions; Claude Plan mode is not the same as the Codex read-only sandbox.
5. Check whether tests, interpreters, MCP, remote tools, or Computer Use wrote anything. Files ignored by Git need a separate check.
6. Do not automatically delete user changes that existed before the task.

## Scientific files are not understood

- Check the extension, file version, and workspace reference.
- Do not paste large files directly into a prompt.
- Confirm in the file preview whether the format is supported; look for size limits or read errors.
- When the current Provider does not support a binary format, it should explicitly degrade or stop rather than guess at the content.

## Evidence DAG or dossier is empty

These panels do not generate evidence automatically from an empty session. First have the task explicitly record the research question, inputs, methods, claims, sources, artifacts, and limitations, then refresh the corresponding panel.

## The remote workspace is interrupted

- In the workspace location picker, confirm the remote session state (remote, reconnecting, offline, or connection error).
- Use **Reconnect** on a session that is offline or has errored; if reconnecting fails, switch back to a local workspace and continue local tasks.
- Check whether the remote command is still running, and do not resubmit a long computation when the state is unknown.
- After the connection is restored, check the logs, output files, and return codes.

## Include when filing an issue

- SciForge version and operating system
- The selected Runtime and how model access is configured
- Workspace type: local or remote
- Minimal reproduction steps and the time it occurred
- Redacted logs or screenshots
- Expected behavior and actual behavior

Before submitting, remove API keys, Authorization headers, account names, server information, sample privacy data, and real sensitive paths.
