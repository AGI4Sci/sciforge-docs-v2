---
title: Version and compatibility
description: Find the applicable versions for the client, plugins, and cases.
---

# Version and compatibility

This manual describes how to use the latest client. This round is updated against **the mainline version `3f6b0c3` from 2026-11-06**. If you cannot find a button described in a tutorial, check your client and plugin versions first.

## Where to find version information

| Item | Version this round | Notes |
| --- | --- | --- |
| Client | Mainline `3f6b0c3` | The interface and feature basis for this round of tutorials. |
| [Public source](https://github.com/AGI4Sci/SciForge) | `57ac3d0` observed this round, public sync #141 | The development mainline and the public code may have different update times; rely on the commit you actually downloaded. |
| Scientific Figures plugin | `0.4.0-mvp.11` | MVP.10 screenshots and run results in historical tutorials keep their original version. |
| Installers and other plugins | Check the download instructions, extension list, and release records | Having source code or usage instructions does not mean the corresponding installer is listed in the Marketplace. |

## Old screenshots and the new interface

Some screenshots and videos in the tutorials come from earlier versions. When looking for entry points, follow the current description:

- Commonly used tools have moved to the vertical toolbar on the right; when the window is not tall enough, some tools move into **More tools**.
- When the left sidebar is narrowed, it usually keeps only icons; account and settings are at the bottom of the sidebar. Narrow windows may switch to an overlay.
- After you select, drag, or paste a file, you can check it in the attachment tray, and after sending you can still open the file reference from the message.
- To install plugins, open **Extensions** and go to the **Market** tab.
- Collaboration projects are divided into “board, members, requirements, shared files, and project information”.

For complete steps, see [Workbench](../workbench/workspaces-and-sessions.md), [Account](../features/identity-access.md), and [Collaboration](../features/collaboration.md). Cases keep their own date, version, and system; an operation that has not been redone does not have its verified version changed.

## Feature migration

| Old feature | How to use it now |
| --- | --- |
| Biology Room, Life Science Preview standalone plugins | Merged into Biology Workbench, so no separate installation is needed; they cover biology objects and scientific file previews respectively. |
| Dataset API, Scientific Compute | Retired. To obtain data or run computations, use the Agent tools, scripts, and environment you have configured. |
| Old built-in Anchored Comments, Change Inspector | Use the corresponding standalone plugins; see each tutorial for installation requirements. |
| Old Scientific Plotting / Visual Review | Use Scientific Figures for plotting; the old Visual Review is no longer offered as a standalone plugin. |

[Plugin licenses](./plugin-licenses.md) lists each plugin's version, license, and installation requirements.

## Documentation and release notes

[This website](https://agi4sci.github.io/sciforge-docs-v2/) is the unified user manual, and the [documentation repository](https://github.com/AGI4Sci/sciforge-docs-v2) maintains the body text. Wiki pages in the client repository remain as entry points, and internal documentation separately holds deployment, remote management, and development records.

This round updates the tutorials from the code and did not re-run every feature on every platform. Runs and screenshots that were actually completed are noted in the cases; see [Feature status](./feature-status.md) for current limitations. If you run into a problem, provide your system, the client and plugin versions, the steps you took, and redacted screenshots.
