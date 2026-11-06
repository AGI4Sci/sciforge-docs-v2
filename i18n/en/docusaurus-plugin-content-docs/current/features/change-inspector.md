---
title: Change Inspector
description: Inspect file diffs from a real, current agent session with a standalone read-only plugin.
sidebar_position: 43
---

# Change Inspector

The only production implementation of Change Inspector is the standalone DSH plugin `@sciforge/plugin-change-inspector` **0.1.2**. It reads the current real agent session authorized by the host, projects `file_change` records into bounded diff snapshots and paginated summaries, and returns results to the session that made the call. The old top **Changes** panel, static domain, and fallback have been removed.

## How to use it

Install a compatible package from a trusted source, enable it, and grant tool and `agent-threads.read` permissions for that exact version; see [Extension Center](./extensions.md) and [Version & Compatibility](../reference/version-and-compatibility.md). In the current session where file changes have already occurred, ask the agent to:

> Use Change Inspector to open a snapshot of the current session, list file changes and truncation status, page through the key diffs, then cross-check them against workspace files and Git status.

The plugin declares two read-only tools:

| Tool | What it returns |
| --- | --- |
| `open_session` | Current session identity, result identifier, and a bounded complete snapshot |
| `list_changes` | Change summary, next-page cursor, revision, and truncation reason; 100 entries per page by default, up to 500 |

The host may additionally derive a session resource opener; it is not a third tool declared by the plugin. When selection parameters are omitted, the host's current session is used; an explicit session/runtime must match the current caller. Other sessions in the same workspace, other runtimes, or arbitrary session discovery are outside the authorization scope. After the plugin is disabled or its permission is revoked, calls fail and do not fall back to the old implementation.

## How to tell whether a record is complete

- Extract only the `file_change` unified diff from tool records; panel screenshots or agent summaries cannot replace that record. An empty result does not prove the workspace was never written.
- A snapshot holds at most 5,000 changes and 256 KiB after serialization; when the limit is exceeded, the contiguous newest suffix is kept. A single complete patch is capped at 64 KiB, and a single patch summary in pagination is capped at 1 KiB.
- Check `patchBytes`, `patchTruncated`, `truncated`, and `truncationReasons`. Trailing whitespace and LF/CRLF line endings are preserved in untruncated raw patches; truncated output cannot be used for complete file reconstruction.
- A cursor is bound to the session and revision. After subsequent edits or if the cursor is rejected, re-read from the first page without a cursor; read-only pagination itself should not change the revision.

## Permissions and verification boundaries

The plugin does not write files, roll back changes, save checkpoints, or make network requests; its only data source is the host-authenticated real agent thread aggregate. Tool inputs cannot inject recorded sessions or fixtures.

Existing local app acceptance for 0.1.2 covers a real two-turn trailing-whitespace difference, stable pagination, and partial rejection and failure recovery; other permission timings and boundaries are covered by targeted automation. Source tests, real subprocess fixtures, local app acceptance, signed artifacts, and public marketplace release are different forms of evidence and cannot substitute for one another; this page does not claim that all platforms or all failure scenarios have passed.

![Historical SciForge changes panel](/img/docs/guides/workspace-changes.jpg)
*Retained historical UI screenshot: it shows the old panel, not the current 0.1.2 plugin entry point or acceptance evidence.*

Related: [Evidence & Reproducibility](./evidence-and-reproducibility.md), [Git Checkpoints](./git-checkpoints.md), [Permissions & security](../operations/security.md), [Plugin licenses](../reference/plugin-licenses.md).
