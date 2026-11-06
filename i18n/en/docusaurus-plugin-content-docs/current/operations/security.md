---
title: Permissions and security
description: Choose read-only, workspace write, approval, and Computer Use permissions according to the impact of the task.
sidebar_position: 1
---

# Permissions and security

First choose the file access range for the task, then check the terminal, plugin, remote service, and computer-use permissions you will use. Confirm the workspace and output locations before running, and verify the destination before submitting or uploading.

## File access range

| Range | Suitable tasks | Main risks |
| --- | --- | --- |
| **Can only read files** | Project understanding, code review, data inventory, and planning | Codex uses a read-only sandbox; Claude uses Plan mode, and the two are not equivalent |
| **Can edit workspace** | Modifying code and generating analyses, figures, and reports | Overwriting existing files, writing to the wrong directory, and mixing in unrelated changes |
| **Can access all files** | Controlled tasks that explicitly require cross-directory reads or writes | Removes read-only or workspace scope limits and runs tools automatically, potentially affecting data and configuration outside the workspace |

For a first task, an unfamiliar repository, or an unreviewed Skill, start with the Codex read-only configuration. Both Codex and Claude allow workspace writes in their initial configuration, so you must change this deliberately; MCP, remote execution, and Computer Use each require separate permission checks. For details, see [Configuring a read-only sandbox](../getting-started/read-only-sandbox.md).

## Approval policy

An approval request should state at least:

- What operation will be performed
- The target files, directories, hosts, or external services
- Whether it will write, upload, send, or delete
- Whether it can be retried safely after a failure
- How to check the result and recover

The absence of an approval dialog does not mean an operation is read-only. Manual terminals run with the current system user's permissions; plugins must also be installed, enabled, and granted permissions for the relevant version separately.

## Credentials

- Do not put API keys, tokens, or passwords in prompts, Git repositories, or screenshots.
- MCP, the Model API, and collaboration services should each use the minimum credential scope they need.
- Do not treat a provider key as a Runtime login credential.
- Before exporting logs, traces, or a research dossier, check for Authorization headers, server addresses, real paths, and sample privacy.

## Computer Use

Computer Use may operate other desktop apps, so it is constrained at the same time by SciForge settings, backend status, and macOS Screen Recording/Accessibility permissions.

![SciForge Computer Use permission status](/img/docs/guides/ai-assistants-computer-use.jpg)
*Figure 1: Before enabling it, check the allowed Runtime, Backend, and operating-system permissions together.*

The following actions should be confirmed by the user at the moment they are performed: account sign-in or authorization, sending messages, uploading data, purchasing or paying, deleting external content, and submitting formal evaluation results.

When Scientific Figures accepts a candidate figure, it requires a formal tool call in the session and host confirmation; "Request acceptance" in the panel only initiates the request. Deleting anchored comments and submitting feedback also have their own confirmation steps; see the corresponding feature pages for details.

## Research data security

- Use public or redistributable data for tutorials.
- Do not overwrite raw data by default; write derived results to a separate directory.
- Whether data in a remote workspace may be downloaded is determined by the project policy.
- External models, MCP, and web uploads change the data boundary and must be evaluated separately.
- Screenshots should hide real account names, keys, patient information, and server details.

## Pre-task checklist

- [ ] The workspace or project copy is correct
- [ ] A Git baseline has been recorded
- [ ] The Runtime and file access range match the task
- [ ] Output directories and overwrite policy are clear
- [ ] Boundaries for network, installation, sign-in, and upload are clear
- [ ] Acceptance and recovery methods are clear
