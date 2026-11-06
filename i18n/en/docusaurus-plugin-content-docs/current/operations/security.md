---
title: Permissions and security
description: Choose read-only, workspace write, approval, and Computer Use permissions based on the impact of the task.
sidebar_position: 1
---

# Permissions and security

Permission configuration should match the task goal. Broader permissions do not automatically make results better; they only widen the impact of mistakes or misuse.

## File access range

| Scope | Suitable tasks | Main risks |
| --- | --- | --- |
| **Can only read files** | Project understanding, code review, data inventory, and planning | Codex uses its read-only sandbox; Claude uses Plan mode, and the two are not equivalent |
| **Can edit workspace** | Changing code and generating analyses, figures, and reports | Overwriting existing files, writing to the wrong directory, and mixing in unrelated changes |
| **Can access all files** | Controlled tasks that explicitly need reads or writes across directories | Removes read-only or workspace scope limits and runs tools automatically, which may affect data and configuration outside the workspace |

Start first tasks, unfamiliar repositories, and unreviewed Skills from Codex's read-only configuration. Both Codex and Claude begin with a configuration that allows changes in the working directory, so you must adjust it yourself; MCP, remote execution, and Computer Use each need separate permission checks. For details, see [Configure the read-only sandbox](../getting-started/read-only-sandbox.md).

## Approval policy

An approval request should state at least:

- What operation will run
- The target file, directory, host, or external service
- Whether it will write, upload, send, or delete
- Whether it can be retried safely after a failure
- How to check the result and recover

Denying approvals alone is no substitute for a read-only sandbox; default-allowed workspace writes may never trigger an approval at all.

## Credentials

- Do not put API keys, tokens, or passwords in prompts, Git repositories, or screenshots.
- MCP, the Model API, and collaboration services should each use the minimum credential scope they need.
- Do not use a Provider key as a Runtime sign-in credential.
- Before exporting logs, traces, or a research dossier, check for Authorization headers, server addresses, real paths, and sample privacy.

## Computer Use

Computer Use may operate other desktop apps, so it is constrained at the same time by SciForge settings, Backend status, and macOS screen recording/accessibility permissions.

![SciForge Computer Use permission status](/img/docs/guides/ai-assistants-computer-use.jpg)
*Figure 1: Check the allowed Runtime, Backend, and operating-system permissions together before enabling it.*

The following actions should be confirmed by the user at the moment they run: account sign-in or authorization, sending messages, uploading data, purchases or payments, deleting external content, and submitting official evaluation results.

## Research data safety

- Use public or redistributable data for tutorials.
- Do not overwrite raw data by default; write derived results to a separate directory.
- Whether data in a remote workspace may be downloaded is decided by project policy.
- External models, MCP, and web uploads change the data boundary and must be evaluated separately.
- Screenshots should hide real account names, keys, patient information, and server details.

## Pre-task checklist

- [ ] The workspace or project copy is correct
- [ ] A Git baseline has been recorded
- [ ] The Runtime and file access range match the task
- [ ] Output directories and overwrite policy are clear
- [ ] Boundaries for network, installation, sign-in, and upload are clear
- [ ] Acceptance and recovery methods are clear
