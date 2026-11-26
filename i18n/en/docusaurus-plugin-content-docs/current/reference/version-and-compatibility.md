---
title: Version & Compatibility
description: Find the applicable versions and installation requirements for the client and plugins.
---

# Version & Compatibility

When you cannot find a button the tutorial mentions, check the client and plugin versions first.

## Version information

| Item | Version or where to look |
| --- | --- |
| Earlier tutorial screenshots | 2026-11-06, mainline `3f6b0c3`. |
| Latest stable installer | [v0.2.16](https://github.com/AGI4Sci/SciForge/releases/tag/v0.2.16). |
| Apple Silicon prerelease | [v0.2.18](https://github.com/AGI4Sci/SciForge/releases/tag/v0.2.18), published November 26, 2026. |
| Source build for the plugin guides and Extension Center screenshots | [Public source build `9daddeb`](https://github.com/AGI4Sci/SciForge/commit/9daddeb). The bundled desktop Market index had no installable entries at the time. |
| [Public source](https://github.com/AGI4Sci/SciForge) | Check the commit you actually checked out. |

## Interface entry points

- Common tools are in the vertical toolbar on the right; when the window is not tall enough, some tools move into "More tools".
- When the left sidebar is narrowed, icons are usually kept; account and settings are below the sidebar. A narrow window may use an overlay instead.
- After you select, drag, or paste files, you can check them in the attachment tray, and after sending you can still open the file references from the message.
- Open **Extensions → Market** to check whether a DSH plugin is available to install.
- A collaboration project is divided into "Board, Members, Requirements, Shared files, Project info".

For the full steps, see [Workbench](../workbench/workspaces-and-sessions.md), [Account](../features/identity-access.md), and [Team collaboration](../features/collaboration.md).

## Features and how they are installed

| Feature | Conditions |
| --- | --- |
| Biology Room, Life Science Preview | Ship with the app; no separate install needed. |
| Anchored Comments, Change Inspector | Install and enable a compatible release, then check the permissions listed in the tutorial. |
| Scientific Figures | Install and enable a compatible release. Desktop plotting needs supported macOS, DSH, Python, and Matplotlib. |
| Team collaboration | Sign in to the cloud, connect a device, and obtain project permissions. |
| Acquiring data, running analysis | Use the Agent tools, scripts, or compute environment you configured yourself. |

The [plugin license terms](./plugin-licenses.md) list each plugin's version and license; for the specific installation steps, see [Extensions & marketplace](../features/extensions.md).

## Historical case verification

### Pasilla collaboration

The three-account run and screenshots for the [Pasilla case](../cases/pasilla-collaboration.md) date to **2026-10-27**. The example used the first 50 rows from 7 samples. The deliverables were Markdown reports and the member’s note.

- Independent recalculation matched all 350 subset CPM values in B’s version 1. Version 2 kept those 350 values and added the requested checks.
- Both inputs in C’s task directory matched the files listed in A’s accepted version 2 delivery.
- Recalculation from the same excerpt matched C’s top 5 ranking and the reported group means and differences to 6 decimal places.

### Complex scientific figures

The [Scientific Figures cases](../cases/scientific-figures-complex.md) ran on **2026-11-05**. The original runs used v8/v9 for cases 1–4 and v10 for case 5. The runs retained the data, code, logs, and outputs.

- In case 1, independent calculations matched all 10 combinations of group and time point. Case 3 regenerated the same two figures.
- The output list in case 4 included names with spaces, Chinese characters, or uppercase extensions.
- In case 5, the input copy for the next run matched the saved CSV. The original run record was saved after an interruption.
- The recorded checks cover generation of the environment record, which includes exact package versions and rebuild instructions. See the [Scientific Figures requirements](../features/scientific-plotting.md#current-scope-and-limits).

## Reporting problems

Please provide the system, the client and plugin versions, the steps taken, and a screenshot.

The user manual is published on [this site](https://agi4sci.github.io/sciforge-docs-v2/en/), and its text is maintained in the [documentation repository](https://github.com/AGI4Sci/sciforge-docs-v2).
