---
title: Feature status and limitations
description: Distinguish SciForge capabilities that are currently verified, partially available, experimental, or not released.
sidebar_position: 1
---

# Feature status and limitations

This page is the first documentation baseline and does not replace the changelog for each release. Status comes from current source registration, user-visible entry points, and checks against the real interface.

| Capability | Status | Current notes |
| --- | --- | --- |
| Local workspaces and sessions | Verified | Open projects, create and continue sessions, and browse the workspace |
| Codex Runtime | Verified | Default Runtime; configuration and sign-in failures report explicit errors |
| Claude Code Runtime | Verified | Requires explicit user selection and Model API access; does not silently fall back to Codex |
| DSH Runtime (DeepSeek Harness) | Implementation verified | Requires explicit user selection; model and reasoning level take effect on the ACP session, and native shell tools are off by default and approved one at a time |
| Model API / Coding Plan | Verified | The API can be configured for Codex or Claude; the current Coding Plan path supports Codex |
| Read-only and workspace write scope | Implementation verified | Both default to allowing workspace writes; Codex's read-only sandbox differs from Claude's Plan mode, and external tool permissions need separate checks |
| File preview and Change Inspector | Verified | Supported formats and remote support differ |
| Scheduled tasks | Verified | The app must be running, and the computer must stay awake when the task triggers |
| Create Loop | Verified | Supports multi-node flows; paused approval state is not preserved across app restarts |
| [Scientific Figures](../features/scientific-plotting.md) | Local MVP verified; no public release declared | 0.4.0-mvp.6: file and text chat, real Python/Matplotlib, candidate previews, formal approval, restart recovery, and chat image attachments have been tested; requires a compatible signed package and local dependencies, currently accepted on macOS arm64 + DSH, R not implemented |
| Artifact / Evidence / Dossier | Partially available | Entry points are registered; content quality depends on whether the task produces the corresponding records |
| Remote workspace | Connection management not included in the open-source version | The Workspace location selector can switch between local and attached remote sessions; SSH targets, VPNs, and the authorization management panel are not included in the open-source repository |
| Cloud collaboration | Partially available | Supports requirement confirmation, task delivery, rework, adoption, and closure; cloud sign-in and device connection are required first, see the [Pasilla three-person collaboration case](../cases/pasilla-collaboration.md) |
| Extensions Center, Skills, and MCP | Partially available | Object types and security boundaries differ; some changes require restarting the session |
| Virtual cell prediction models | Not bundled | Users can connect them through Agents, scripts, and external environments |
| Slurm/PBS/Kubernetes automatic scheduling | Not declared as bundled | Current tutorials only describe using external environments through the terminal |

## Status definitions

- **Verified**: An entry point exists in the current version, and representative real operations have been completed.
- **Implementation verified**: The source path from configuration to execution has been confirmed; this does not mean isolation testing is complete for every platform and tool combination.
- **Partially available**: The main path exists but is limited by platform, data, Worker, external deployment, or sub-features.
- **Experimental**: Suitable for controlled integration; do not promise ordinary users a complete closed loop.
- **Not bundled / Not released**: Cannot be proven as a user-facing feature from source registration and the real interface.

## Documentation verification order

1. Whether the current source registers the capability.
2. Whether there is a user-visible entry point.
3. What the name and status are in the Chinese interface.
4. What the operation's Effect, Approval, and Scope are.
5. Whether it has completed one end-to-end verification in the real app.
6. Whether the screenshots come from the same version and the same task chain.

When documentation and the product disagree, the actual behavior of the current release takes precedence; when filing an issue, include the version, entry point, reproduction steps, and redacted screenshots.
