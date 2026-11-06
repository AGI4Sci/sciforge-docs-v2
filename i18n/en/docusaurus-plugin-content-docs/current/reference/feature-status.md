---
title: Feature status and limitations
description: Distinguish source verification, historical real-world acceptance, and public release status by the latest implementation.
sidebar_position: 1
---

# Feature status and limitations

This round verifies the implementation against **2026-11-06 · mainline `3f6b0c3`**. The table below does not automatically promote earlier real-world cases to cross-platform acceptance for the latest version; installer and Marketplace release status must be checked separately. [Version and compatibility](./version-and-compatibility.md) explains how these baselines relate.

| Capability | Status this round | Current scope and limitations |
| --- | --- | --- |
| Workspace, session, and workbench layout | Implementation verified | The vertical toolbar on the right, the account area in the sidebar, and the panel layout follow the latest implementation; historical screenshots may use an older layout. |
| Codex / Claude Code | Current entry points and configuration verified | Choose the Runtime explicitly; models, sign-in, file permissions, and tool permissions are configured separately, and different executors are not treated as a silent fallback. |
| DSH Runtime | Implementation verified | Long tasks use an idle timeout, and ongoing progress in the same session can renew it; the connection check and action confirmation each have their own time limit. |
| Attachments and file references after sending | Implementation verified | Selecting, dragging, or pasting a file puts it in the attachment tray; the file reference is retained after sending. A file reference does not mean every Runtime receives embedded binary data. |
| Text, code, and other file previews | Implementation verified | Whether you can edit depends on the format, whether the content was truncated, and whether a write-back channel exists; the interface should show why a file is read-only. |
| Local accounts, cloud devices, and usage | Implementation verified | Deleting a local account does not delete the cloud account or your files; cloud identity and model provider identity are managed separately. |
| [Collaboration](../features/collaboration.md) | Requires an available service, roles, and task authorization | Entry points for boards, members, requirements, shared files, and project information; shared files come from task delivery, and direct upload is not currently offered. The historical [Pasilla case](../cases/pasilla-collaboration.md) keeps its original verification scope. |
| [Biology Workbench preview](../features/life-science-preview.md) | Bundled implementation verified | Large files may show only a summary; after changing a molecule selection, reopen it to recheck. |
| [Scientific Figures](../features/scientific-plotting.md) | Current implementation MVP.11; historical local acceptance MVP.10 | Frozen data and code, real Python, analysis artifacts, pagination, recovery, and environment rebuild files; the MVP.10 macOS arm64 + DSH evidence is retained, and it is not used to claim an all-platform or public Marketplace release for MVP.11. R is not implemented. |
| [Anchored Comments](../features/anchored-comments.md) | Standalone plugin | Capture and external feedback require the corresponding host capabilities; deleting and submitting feedback have explicit approvals. |
| [Change Inspector](../features/change-inspector.md) | Standalone read-only plugin | Lets the Agent list the file differences in this session, paginated when too long; the old Changes panel has been removed. |
| Artifact versions, checkpoints, Evidence / Project DAG, dossiers | Available conditionally; verify per package | The bundled features can be used as described on each page; the optional Evidence / Project DAG plugins cannot yet replace the bundled features. |
| Scheduled tasks and Create Loop | Requires the app to be running and an execution environment | Task triggering, approvals, and restart boundaries follow each page; this is not a guarantee of a system-level unattended service. |
| Plugin Marketplace, Skills, MCP | Available conditionally | A failed Marketplace read, no installable packages, and an empty search are handled separately; source code, signed packages, and a public Marketplace listing are separate matters. |
| Dataset API / Scientific Compute / old Visual Review | No longer part of the current standalone feature set | Old links keep a migration note; the old operation entry points are no longer offered. |
| Remote SSH management | Internal supplement | The public site does not provide VPN, SSH target registration, or server-side operating steps. |
| Virtual cell models, Slurm/PBS/Kubernetes scheduling | Not promised as bundled capabilities | You can connect them in an authorized external environment; a tutorial is not a delivery of a model or a scheduling service. |

## How to read verification status

Source and contract verification shows that an implementation path exists; automated tests show that the scenarios they cover pass; real operation or installer acceptance must state the version, platform, and date. None of the three replaces the others. A passing documentation build this round also does not mean every client feature has been re-verified.

When you file an issue, include the client and plugin versions, your system, the entry point, reproduction steps, and redacted screenshots. If a historical case disagrees with the latest interface, check the version page first, then report the specific difference in the body text.
