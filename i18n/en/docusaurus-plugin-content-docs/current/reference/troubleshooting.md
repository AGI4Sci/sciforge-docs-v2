---
title: Troubleshooting
description: Diagnose SciForge problems across five layers — interface, Runtime, model access, permissions, and external services.
sidebar_position: 2
---

# Troubleshooting

First determine which layer the problem is in, so you do not change the model, Runtime, permissions, and workspace settings all at once.

## Five-layer quick diagnosis

| Layer | Check first |
| --- | --- |
| Application interface | Whether SciForge starts normally and the current workspace is correct |
| Runtime | Whether Codex, Claude Code, or DSH is selected, whether the command can be found, and whether sign-in is valid |
| Model access | Whether the Model API or Coding Plan is fully configured |
| Permissions and tools | File access range, approvals, Computer Use Backend, and system permissions |
| External services | Whether Cloud, MCP, Worker, or Provider is reachable; whether a remote workspace session is still attached |

## Runtime shows as disconnected

1. Open **Settings → AI assistant** and confirm the current Runtime.
2. In a system terminal, check whether `codex`, `claude`, or `dsh` can be found.
3. If automatic detection fails, enter the absolute path to the executable.
4. After the change, reconnect or start a new session.
5. Do not expect an automatic switch to another Runtime after a failure.

## Runtime is connected but the model does not respond

- Confirm whether you are using the Model API or a Coding Plan.
- The Model API requires a matching Base URL, API key, and model name.
- A Coding Plan requires a valid official sign-in state.
- The current Coding Plan path supports Codex; when you select Claude Code, configure Model API access.
- Do not enter a Provider API key in the Runtime sign-in field.
- Test first with a minimal prompt that reads no files, then investigate tools and the sandbox.

## Files still change during a read-only task

1. Stop the task immediately.
2. Compare `git status --short` before and after the task.
3. Open the **Changes** panel to check the files.
4. Confirm who executed the task, whether the setting was applied, and whether you approved a permission expansion; Claude Plan mode is not the same as Codex's read-only sandbox.
5. Check whether tests, interpreters, MCP, remote tools, or Computer Use wrote anything. Files ignored by Git need a separate check.
6. Do not automatically delete user changes that existed before the task.

## Scientific files are not understood

- Check the extension, file version, and workspace reference.
- Do not paste large files directly into the prompt.
- Check whether the corresponding preview, Domain, or Worker is available.
- If the current Provider does not support a binary format, degrade explicitly or stop; do not guess at the content.

## Evidence DAG or Dossier is empty

These panels do not generate evidence automatically from an empty session. First have the task explicitly record the research question, inputs, methods, claims, sources, artifacts, and limitations, then refresh the corresponding panel.

## Remote workspace is interrupted

- In the Workspace location selector, confirm the remote session status (remote, reconnecting, offline, or connection error).
- Use **Reconnect** for a session that is offline or in error; if reconnecting fails, switch back to a local workspace and continue local tasks.
- Check whether the remote command is still running, and do not submit a long computation again while the state is unknown.
- After the connection recovers, check the logs, output files, and return codes.

## Include when filing an issue

- SciForge version and operating system
- The selected Runtime and model access method
- Workspace type: local or remote
- Minimal reproduction steps and when the problem occurred
- Redacted logs or screenshots
- Expected behavior and actual behavior

Before submitting, remove API keys, Authorization headers, account names, server information, sample privacy, and real sensitive paths.
