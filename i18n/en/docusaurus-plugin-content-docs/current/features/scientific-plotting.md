---
title: Scientific Figures
description: Select files, describe the plot you want in chat, really run Python, and compare and accept candidate figures.
sidebar_position: 20
---

# Scientific Figures

**Select files → tell the AI how to draw → review the result → accept when satisfied.** Scientific Figures ties a text request, Python code, an actual run, and image versions together. To revise an image, just keep typing the change; you do not need to box, arrow, or pin anything on the image.

:::info Current version
The current source is `@sciforge/plugin-scientific-plotting` **0.4.0-mvp.11**, which supports the native DSH panel and the SciForge adapter entry. The 2026-11-05 case and screenshots kept in this page come from **0.4.0-mvp.10** and from earlier versions where explicitly marked; they have not been re-accepted as mvp.11. The accepted environment is macOS arm64, the DSH Runtime, and Python + Matplotlib. For public marketplace availability, see the actual release record, and for the compatibility baseline see [Version & Compatibility](../reference/version-and-compatibility.md). R/MATLAB execution is not implemented yet.
:::

For the actual steps and screenshots of multi-file cleaning, four-panel figures, missing-value matrices, and failure recovery, see [Complex scientific figure case](../cases/scientific-figures-complex.md).

## Installing and opening

1. In **Extensions → Marketplace**, find the Scientific Figures package compatible with your SciForge version, check the publisher and permissions, approve the installation, and enable it. If it is not listed, the maintainer must supply a signed package and its installation source.
2. Open a writable local workspace and a **DSH session** whose model is configured.
3. In SciForge, select **Scientific Figures** from the plugin picker in the right sidebar. In native DSH, use the **Figures** panel in the session input area, or type `/scientific-figures`. The default **Figure** page contains file input, text input, and image preview.

The machine needs a working Python and Matplotlib. In the plugin configuration, point `pythonCommand` to an interpreter you have confirmed works; the default `python3` does not mean Matplotlib is installed. The plugin does not install dependencies automatically. Before running, you can ask the Agent to query `status` to check the configuration; a successful configuration check still needs an actual run to confirm the environment works.

Native DSH requires `>=0.2.1-rc.4 <0.3.0` and Node >=22. The SciForge adapter entry currently runs only on macOS environments that pass the isolation check; installing the plugin successfully does not remove the execution limits on Windows and Linux. The package contains the native Canvas component for this platform, so a different platform, architecture, or Linux libc needs a matching build.

## Starting from data and code

**Data and code are the core of reproducibility; the image is the result of one run.** Under **New**, choose one of two starting points:

| Starting point | Must provide | What happens next |
| --- | --- | --- |
| **Start from data** (recommended) | Data file, plotting request | The AI inspects the data, writes code, freezes the inputs, actually runs it, and creates the first figure. |
| **Existing data and code** | Data file, Python code, request | Saves the existing code and a data snapshot, runs once to establish a baseline; an existing image can be used for comparison. |

After you click **Start plotting**, check the run in the session on the left; when it finishes, refresh and select the figure. Later, keep typing changes on the **Figure** page; you do not need to reimport every raw data file.

```text
Read data/trend.csv, use time as the x-axis and response as the y-axis.
Draw a blue line chart with units on the axes. Do not fabricate data.
Freeze this step's data and code and actually run it; for later changes, generate a candidate first and wait for my confirmation.
```

File selection is a workspace file reference, not a browser upload entry point. With only an image, exact data cannot be restored. A supplied source image is marked "user-provided, not yet verified" and linked to the saved code and inputs; no past successful run is fabricated. The result of an actual run is kept as a separate version.

![Real Scientific Figures creation entry: start from data, or from existing data and code](/img/docs/scientific-figures/04-data-code-start.png)

## What is saved at each step

| Record | How it is saved |
| --- | --- |
| Data | Each code version has its own input byte snapshot, original relative path, SHA-256, and length. Child versions copy the parent's frozen data by default and do not re-read mutable workspace files. |
| Code and parameters | Full source file, entry point, parameters, and parent relationship; old versions are not overwritten. |
| Run environment | Python/Matplotlib versions, implementation, interpreter name, platform/architecture, and a list of installed Python package versions. |
| Runs and artifacts | Each run uses a new ID and records state, exit code, length-limited logs, and PNG, CSV, TSV, JSON, and TXT outputs; every file has a path, SHA-256, and byte count. |
| Environment rebuild files | A successful run automatically saves `_environment/requirements.txt` (exact versions), `environment.json`, and `REBUILD.md`. |
| History | Code, data, runs, source images, and candidates are all kept; **Version history** lets you view earlier figures. Accepting only changes the current figure pointer. |

When you modify code without changing data, the frozen inputs are inherited by default. To use updated data, tick **Re-read workspace data** in advanced settings to form a new version. If data cleaning, filtering, or transformation should feed the next step, you must first save the result file and include it in the next version's input snapshot; the plugin does not automatically capture the whole workspace or arbitrary variables in Python memory.

Rerunning a specific version uses the code, parameters, and data bytes saved with it; rewriting or deleting the old source file should not change the saved snapshot. The environment listing helps you check dependencies, but it is not a portable container, a package binary archive, or a complete lockfile, and it does not guarantee identical image digests across platforms.

## Saving analysis artifacts, pagination, and recovery

The script writes cleaned data and statistical results to `SCIENTIFIC_FIGURES_OUTPUT_DIR`, where they are saved alongside the figure, for example `cleaned.csv`, `summary.json`, and `rules.txt`. CSV/TSV/TXT must be valid UTF-8 and JSON must be parseable; an error fails explicitly rather than treating a bad file as a successful result. The PNG limit remains 16 files, 20 MiB each, 64 MiB total; analysis files have a separate limit of 32 files, 8 MiB each, 32 MiB total.

To use a saved file in the next step, combine the workspace-relative `.scientific-figures/` with the `output.path` returned by the run and put it into the new code version's `inputPaths`. That step copies and freezes the input again, so you do not have to manually save the staging file elsewhere in the workspace. **Only PNGs can be published as figures**; data files can still be selected to view their saved path and summary.

**Code and runs** shows 20 summary entries per page by default; click **More code versions / More runs** to load more. Full contents and verification files are fetched only when you read a selected record. A corrupted entry shows a local error and should not block other pages or break the record entry point.

Trusted results from a terminated process are saved first, then artifacts are collected and submitted; staging is cleaned up only after submission succeeds. Among **runs that have not finished or were interrupted**, only entries with a trusted process result offer **Complete interrupted record**: this reuses the original result to finish the submission without rerunning Python. Entries with no result, an unconfirmed stopped process, or a leftover lock need inspection; the plugin will not guess success, steal the lock, or retry automatically.

## Rebuilding the environment

The `_environment` directory of each successful run stores: the exact package version list, Python/platform/architecture information, and instructions for creating a virtual environment and installing dependencies. Match the recorded Python implementation, version, platform, and architecture first, then follow `REBUILD.md` in a separate virtual environment.

The plugin only generates files and does not install packages automatically. The pinned-version file is not a hashed package lock and does not include binaries, drivers, system libraries, original index URLs, or editable source. Packages may be unavailable during a rebuild, and byte-identical images are not guaranteed across platforms. Old runs keep only the records that existed at the time and do not backfill historical environment files.

## Modifying, comparing, and accepting

Keep describing changes in text, for example "keep the data, change the line to blue, shorten the title." The AI should save a new code version, actually run it, and publish the output as a candidate figure.

- **Current figure / After change**: inspect the current version against the selected candidate. When several candidates exist, switch between them with the **Candidate** dropdown.
- **Request acceptance**: sends an acceptance request into the session and waits for the host's formal approval. After confirming the object, click **Allow** in the approval, and only then does the current figure update.
- **Keep current figure**: rejects the selected candidate and keeps using the current figure.

Generating, publishing a candidate, and formally accepting are three separate steps. An AI reply of "done" does not mean it has been accepted; go by the actual operation result. After acceptance, the source image and the historical code and runs are still kept. When a figure changes, old candidates may lose their baseline and need to be regenerated.

## Viewing code and runs

Open **Code and runs** when you need to verify the process; ordinary plotting does not require reading this first.

1. Select a version and click **Load version** to view the Python source.
2. After editing, click **Save and freeze code** to get a new child version; the old code is not overwritten.
3. Click **Run frozen Python** to see run status, exit code, and output. Expand parameters, input paths, source comparison, environment, and logs as needed.
4. A successful output can be published as a new figure or as a candidate for an existing figure; before publishing a candidate you need to read and select the current baseline.

You can also expand **All versions and sources** to go from a specific figure to its linked code and run records.

![Real code and runs view, showing a loaded Python child version](/img/docs/scientific-figures/02-code-and-run.png)

## Case: modify a line chart and formally accept it

This is a **real application acceptance case from 2026-11-05, kept in the 0.4.0-mvp.10 page**; the data uses demo values and does not represent a research conclusion. It verified "chat request → freeze code → actual Python → candidate figure → formal approval → restart recovery."

### 1. Prepare data and the request

The existing line chart has an x-axis of `[1, 2, 3]` and a y-axis of `[1, 3, 8]`. Provide the existing Python file in the panel and ask it to save a new child version with the y-axis changed to `[2, 4, 7]`, actually run it, publish a candidate, and not accept yet.

```text
Based on the current line chart's Python code, keep the x-axis,
change y to [2, 4, 7], save it as a new child version, and actually run it.
Publish it as a candidate figure first; do not accept automatically.
```

### 2. Verify the actual output

| Item | Measured result |
| --- | --- |
| New code version | `chat-mvp-v5-20261105`, parent relationship preserved |
| Run | `chat-mvp-run-v5-20261105` |
| Run result | `completed`, exit code `0` |
| Environment | Python `3.14.7`, Matplotlib `3.11.2` |
| Output | PNG, 960 × 720, 31,384 bytes |
| Candidate | `r-ee889dbf7bff5aa71d3732541fa9d5a6` |

The chat auto-attached image was verified for real in **0.4.0-mvp.6**: after re-reading that run, the image decodes and displays normally. The screenshot comes from the actual chat attachment and was not redrawn.

![Line chart in a real chat auto-attachment](/img/docs/scientific-figures/03-chat-attachment.png)

### 3. Confirm acceptance and check after restart

Click **Request acceptance** in the panel, and the session triggers the host's formal approval. After approval, the document revision becomes `7` and the current figure points to that candidate; the original figure is still kept. Then quit and restart SciForge: the chat box, file entry points, and accepted figure all recover, and the image still loads normally.

## FAQ

| Symptom | Resolution |
| --- | --- |
| AI finished but the panel still shows the old figure | Click **Refresh** and check the figure and candidate selection. |
| Sending fails | Confirm that a working DSH session and model connection are available; keep your input and retry once the session recovers. |
| Python or Matplotlib unavailable | Check the error in **Code and runs**, configure the right interpreter and dependencies, then retry with a new run. |
| Image auto-attachment shows `File not found` | Update to a compatible version that includes the 0.4.0-mvp.6 fix, and ask the AI to re-read that run. Error paths already saved in old messages are not rewritten automatically. |
| Cannot accept a candidate | Check whether formal approval completed and whether the current document/baseline changed; do not hand-edit approval fields. |
| Run failed but you still want to publish an image | Fix it and run successfully first; a failed run cannot be published as a formal candidate. |

## Current scope and boundaries

- Implemented: Python + Matplotlib, saving PNG and CSV/TSV/JSON/TXT artifacts, code snapshots, dependency pin files, paginated history, interrupted-submission recovery, figure linking, and formal acceptance. R keeps the executor boundary, but execution is not implemented.
- Inputs are workspace files. After a successful plot you must refresh manually; local dependencies and the model service are yours to configure.
- On-image boxing, arrows, circling, and pin annotations are no longer provided. The old standalone [Visual Review](./visual-review.md) has also been retired.
- Records are saved in `.scientific-figures/` in the current workspace. They do not depend on Artifact Versions or Evidence DAG, and do not automatically register versions or evidence with them. Organize linked records separately when needed.
- The first session limits the writable scope of the workspace; switching directories does not widen permissions. Running is refused in a read-only environment, when isolation is unavailable, or when the workspace is in the system temporary directory.
- Local Python has write isolation, but that is not the same as prohibiting global reads or network access. Model requests are also subject to the data policy of the model service you use, so do not claim "data never leaves the machine." Only execute trusted code.
- This case covers a representative local path and does not promise pixel-identical reproduction on every platform, Runtime, or environment.

## Related pages

- [Extension Center](./extensions.md): installation sources, permissions, and enabling/disabling.
- [Runtime and models](../getting-started/runtime-and-models.md): prepare a working session.
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md): confirm the file and task context.
- [Feature status and limitations](../reference/feature-status.md): verified scope and release status.
