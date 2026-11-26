---
title: Scientific Figures
description: Select files, describe your plotting request in chat, run Python to generate images, then compare and accept candidate figures.
sidebar_position: 20
---

# Scientific Figures

Draw your first line chart from two rows of sample data. Then change its color, compare the candidate with the current chart, and use the run history to find the code and data behind either version.

## Install and open Scientific Figures

1. Open [Extensions → Market](./extensions.md) and find **Scientific Figures**. If the entry offers **Install**, install it and wait for **Enabled**. If the entry appears under **Not installable yet**, expand that group to see why. Start at the next step if you have a compatible version enabled.
2. On a macOS system that passes the execution checks, open a writable local workspace and a **DSH session** with a model configured. Plotting uses Python with Matplotlib installed. If you need to choose the interpreter, set `pythonCommand` in the plugin configuration.
3. In the right sidebar's plugin picker, choose **Scientific Figures (科研图件)**. Start when the **Figures (图件)** tab opens. This guide gives the panel's Chinese button labels alongside their English names.

<details>
<summary>Plugin version, platform, and native DSH entry</summary>

The plugin steps here use **0.4.0-mvp.13**. Native DSH requires `>=0.2.1-rc.4 <0.3.0` and Node >=22. The package includes a native Canvas component. Choose a build that matches your platform, architecture, and Linux libc where applicable. The SciForge plotting entry runs on macOS. Windows and Linux can install compatible packages, while Python execution through this entry requires macOS. Implement plotting steps from R or MATLAB scripts in Python before using this entry.

In native DSH, open **Figures** in the session input area or enter `/scientific-figures`.

</details>

## Select data and code to generate your first figure

1. Save this sample as `data/trend.csv` in the workspace.

   ```csv
   time,response
   0,1.2
   1,1.8
   ```
2. Open **New (新建) → Start from data (从数据开始)** and enter `data/trend.csv` in **Data file (数据文件)**. Describe the chart you want. You can adapt this example:

   ```text
   Read data/trend.csv. Draw a blue line chart with time on the x-axis and response on the y-axis.
   Use the column names as labels because the data has no units. Save the data and code, run it, and publish the PNG.
   ```
3. Click **Start plotting (开始绘图)**. When the session shows a result, return to **Figures**, click **Refresh (刷新)**, and select the new figure. The line should run from (0, 1.2) to (1, 1.8).

For an existing script, select **Existing data and code (已有数据和代码)** and enter the workspace-relative paths to the data and Python script. You can add an original image for comparison. The panel labels it as user-provided and unverified, and saves the PNG from the new run separately.

![Sample data, plotting instructions, and the Start plotting button on the New tab](/img/docs/scientific-figures/guide-new-from-data.png)

## Save data and reuse it in later revisions

Select a chart in **Figures** and expand **All versions and sources (所有版本与来源)** to find the code and run behind it. Open **Code and runs (代码与运行)**, select the run, and click **Read run (读取运行)** to view its inputs, parameters, environment, and logs. The code and run lists each show 20 summaries per page. Use **More code versions (更多代码版本)** or **More run records (更多运行记录)** to see the next page.

Each code version saves a copy of its data, the parameters, and the source version. To rerun it, load that version and use the saved inputs. To use updated workspace files, select **Read workspace data again (重新读取工作区数据)** in the advanced settings and save a new version.

## Revise a figure, compare it, then accept

1. In **Figures**, select the sample chart and describe a change, such as keeping the data and making the line orange. After the new run finishes, click **Refresh**. The orange line appears as a candidate.
2. Compare **Current (当前图)** and **Revised (修改后)**. Use **Candidate (候选)** to switch between results when several are available.
3. Click **Request acceptance (申请接受)** and review the request in the session. Click **Allow (允许)** to make the orange line the current figure. The previous figure and its code stay in the history. Use **Keep current (保留当前图)** to retain the current figure instead.

If the current figure changed after the candidate was generated, select the current figure and generate a new candidate from that version.

![The current blue line and the orange candidate in the comparison panel](/img/docs/scientific-figures/guide-candidate-comparison.png)

## Analysis files, history, and recovery

To reuse a result, have the script write files such as `cleaned.csv`, `summary.json`, or `rules.txt` to `SCIENTIFIC_FIGURES_OUTPUT_DIR`. Select the run under **Code and runs**, click **Read run**, and locate the saved path under **Output files (输出文件)**. When assigning the next analysis in the session, include the run and file you want to reuse. You can also add it manually. After saving a new code version, **Version and input snapshot (版本与输入快照)** lists the copied input. Write intermediate variables to files before passing them to another run.

<details>
<summary>Manual input paths and output limits</summary>

Open **Code and runs → Advanced settings: parameters, inputs, and files (高级设置：参数、输入与文件)**. If you're starting from a parent version, select **Read workspace data again**. Prefix the relative path shown in **Output files** (the tool's `output.path`) with `.scientific-figures/`. Enter it in **Workspace input paths JSON (工作区输入路径 JSON)**, for example `[".scientific-figures/path-from-the-run/cleaned.csv"]`. This field sets `inputPaths`. Click **Save and freeze code (保存并冻结代码)** and look for the copy under **Version and input snapshot**.

| Output | Format | Limit per run |
| --- | --- | --- |
| Publish as a figure or candidate | PNG | 16 files, 20 MiB each, 64 MiB total |
| Reuse in analysis | Valid UTF-8 CSV, TSV, or TXT, or parseable JSON | 32 files, 8 MiB each, 32 MiB total |

If saving fails, open the run and use the error to identify which format or size to change before rerunning.

</details>

If saving stopped after Python finished, open **Code and runs → Unfinished or interrupted runs (尚未结束或中断的运行)** and use **Complete interrupted record (完成中断记录)** on that run. After the save, the original logs and output appear in the run history. If the app reports missing results, an unconfirmed process state, or a busy record, address that issue first. For a failed run, read its error, fix the code or environment, and start again from **Run frozen Python (执行已冻结 Python)**. Other history entries remain accessible if a record is damaged.

## View code and run it manually

1. In **Code and runs**, select a version and click **Load version (载入版本)**. After editing it, click **Save and freeze code**. The new version appears in the list.
2. Click **Run frozen Python**. The run details show its status, inputs, parameters, and outputs. Expand the code comparison, environment, or logs if you need to investigate.
3. After a successful run, select a PNG and click **Publish as a new figure (发布为新图件文档)**. To add a candidate to an existing figure, select **Publish as a candidate for an existing document (发布为现有文档的候选图)**, choose **Target document (目标文档)**, and click **Read and select current baseline (读取并选定当前基线)**. Once the baseline appears, click **Publish as candidate (发布为候选图)**. Find the new figure in **Figures**, or the candidate under the target figure's **Candidate** menu.

![Sample source code, completed run status, and output file in Code and runs](/img/docs/scientific-figures/guide-code-and-runs.png)

## Rebuild the environment from the saved instructions

In **Code and runs**, open a successful run and use the output path to locate its `_environment/` directory.

- `environment.json` lists the Python version, system, and dependencies so you can compare environments.
- `requirements.txt` pins the Python packages to the versions used by the run.
- `REBUILD.md` walks you through creating a separate environment and installing the dependencies before rerunning.

Install system libraries and drivers on the target machine. After changing the system or Python version, rerun the saved code against its saved inputs and compare the main outputs and values.

## Troubleshooting

| What you see | Next step |
| --- | --- |
| The session has a result but the panel shows an earlier figure | Click **Refresh**, then select the figure and candidate from this run. |
| The plotting request failed to send | Keep the input. Restore the DSH session and model connection before retrying. |
| Python or Matplotlib cannot be found | Open the error in **Code and runs**, then check the interpreter path and its Matplotlib installation. |
| The session attachment says `File not found` | Read the run again, then look for the PNG in its output and check the plugin version. |
| The candidate did not become the current figure | Open the request in the session and look for the **Allow** decision. If the current figure changed, generate a candidate from that figure. |
| The code failed to execute | Read the run log, fix the error, and rerun. Publish the candidate after the run succeeds. |

## Current scope and limits

Figure data is saved in the workspace's `.scientific-figures/` directory. To include the figure in a research record, keep its data, code, and results. See [Evidence and reproducibility](./evidence-and-reproducibility.md).

Start in a writable workspace outside the system's temporary directory, with execution isolation enabled. The workspace used when the session starts defines the write scope. Python may still read other files or access the network, so run code you trust. Check the model provider's data policy before sending plotting data.

## Related pages

- [Scientific Figures cases](../cases/scientific-figures-complex.md)
- [Extension Center](./extensions.md)
- [Runtime and models](../getting-started/runtime-and-models.md)
- [Workspaces and sessions](../workbench/workspaces-and-sessions.md)
- [Feature status and limits](../reference/feature-status.md)
- [Versions and compatibility](../reference/version-and-compatibility.md)
