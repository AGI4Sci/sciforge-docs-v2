---
title: Research Checkpoints
description: Automatically save the summary, sources, and file references of completed research turns, to review and continue later.
sidebar_position: 42
---

# Research Checkpoints

Research Checkpoints automatically saves the chat turns that were accepted and completed, recording the research summary, the reasons for changes, the sources, and the related file and Git references. It helps you see what was done at the time, what it was based on, and where to continue next time. The record also hints at which operations were not fully recorded.

## Opening it

- Entry: **This turn's research record** on a session result card; the card offers **Open research dossier**.
- Target: the completed chat turns in the current session, and the workspace they are bound to.
- Prerequisite: automatic recording is on by default and the session is bound to a workspace; the first version is generated after the first turn finishes.

## View and continue the research

1. Finish a round of research in a session bound to a workspace, and wait for the result card to show that the record has been saved.
2. Look at the title, the reason for changes, and the inputs and outputs, and check whether the sources and related files match this round's work.
3. Look for prompts that an analysis cannot be rerun, or that a result cannot be traced to its sources. When the operation record is incomplete, add the actual commands, environment, and output, so it can be rechecked later.
4. Under **Exact artifact versions**, choose an output and click **Open** to check the actual version it references.
5. Click **Open research dossier** to read the full record; to pick up from a historical record, select it and restore it as a new version, which keeps the existing history.

## What is saved

A checkpoint saves the summary and the references. The actual file contents and artifact versions must be saved and checked separately, see [Artifact Versions](./artifact-versions.md); for the Git state of the whole workspace, see [Git Checkpoints](./git-checkpoints.md). Having only a research summary does not mean all the result files were kept.

Saving adds a checkpoint version based on this turn's conversation, tool results, workspace file changes, and related artifact, computation, and Git records. Existing versions are kept. If the system cannot yet determine where a record should be linked, it is marked pending; check it before continuing.

## Manage automatic recording

In the research dossier, use **Turn on automatic recording** or **Stop automatic recording**. Turns completed while recording is stopped are not recorded automatically afterwards. On a version conflict, you can save again based on the current version, or discard this round's record.

Importing an old session, handling a conflict, and restoring as a new version need confirmation. Importing an old session keeps only the chat content; the system still warns that the history is incomplete and that some results cannot be traced to sources. The import itself does not fill in the research process that was missing at the time.

## Tips

- Only chat turns that were accepted and completed are recorded; for a task not yet finished, wait until it completes before checking.
- Operations done through the terminal, an editor, or similar may be recorded only as what changed, not fully as how those results were produced. Check them against the actual files and run records.
- New checkpoints are visible only within the workspace and cannot be exported by default. Before sharing, check access permissions and the record contents.
- The record redacts some narrative text, URLs, and credential-like query parameters, but you should still check manually for sensitive information.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Research Dossier](./research-dossier.md): view records, control automatic recording, and restore historical versions.
- [Git Checkpoints](./git-checkpoints.md): save a Git snapshot of the workspace.
- [Artifact Versions](./artifact-versions.md): save the content and versions of related artifacts.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): how a session limits the scope of records.
