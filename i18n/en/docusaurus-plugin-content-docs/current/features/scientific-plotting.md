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

## Find images, code, and run results

Select a chart in **Figures** and expand **All versions and sources (所有版本与来源)** to see the code version and run behind it. Open **Code and runs (代码与运行)**, select the run, and click **Read run (读取运行)** to view its inputs, parameters, environment, and logs. The code and run lists each show 20 summaries per page. Click **More code versions (更多代码版本)** or **More run records (更多运行记录)** to open the next page.

Each code version saves a copy of its data, the parameters, and the source version. To rerun it, load that version and use the saved inputs. To use updated workspace files, select **Read workspace data again (重新读取工作区数据)** in the advanced settings and save a new version.

## Revise a figure, compare it, then accept

1. In **Figures**, select the sample chart, describe a change in the request box, and click **Send to AI (发送给 AI)**—for example, keeping the data and making the line orange. After the new run finishes, click **Refresh (刷新)**. The orange line appears as a candidate.
2. Compare **Current (当前图)** and **Revised (修改后)**. Use **Candidate (候选)** to switch between results when several are available.
3. Click **Request acceptance (申请接受)** and open the approval prompt in the left session. Click **Allow (允许)**, then return to **Figures** and click **Refresh**. The orange line becomes **Current (当前图)**, while the previous figure and its code stay in the history. Click **Keep current (保留当前图)** to retain the current figure instead.

If the current figure changed after the candidate was generated, select the current figure and generate a new candidate from that version.

![The current blue line and the orange candidate in the comparison panel](/img/docs/scientific-figures/guide-candidate-comparison.png)

## Analysis files, history, and recovery

**Use analysis outputs in the next step.** In the script, write intermediate results such as `cleaned.csv`, `summary.json`, or `rules.txt` to `SCIENTIFIC_FIGURES_OUTPUT_DIR`. In **Code and runs**, select the run and click **Read run**. The **Output files (输出文件)** dropdown lists each path and its size in bytes. Select a file to see its SHA-256 digest below the list.

In the session, specify the run and file you want to reuse, or enter the path manually as shown below. After saving a new code version, expand **Version and input snapshot (版本与输入快照)** to see the copied input.

<details>
<summary>Manual input paths and output limits</summary>

Open **Code and runs → Advanced settings: parameters, inputs, and files (高级设置：参数、输入与文件)**. If you are starting from a parent version, select **Read workspace data again (重新读取工作区数据)**. Prefix the relative path shown in **Output files** (the tool's `output.path`) with `.scientific-figures/`. Enter it in **Workspace input paths JSON (工作区输入路径 JSON)**, for example `[".scientific-figures/path-from-the-run/cleaned.csv"]`. This field sets `inputPaths`. Click **Save and freeze code (保存并冻结代码)** and expand **Version and input snapshot** to see the saved copy.

| Output | Format | Limit per run |
| --- | --- | --- |
| Publish as a figure or candidate | PNG | 16 files, 20 MiB each, 64 MiB total |
| Reuse in analysis | Valid UTF-8 CSV, TSV, or TXT, or parseable JSON | 32 files, 8 MiB each, 32 MiB total |

If saving fails, open the run and use the error message to adjust the file format, size, or count before rerunning.

</details>

**Complete an interrupted save.** If saving stopped after Python finished, open **Code and runs → Unfinished or interrupted runs (尚未结束或中断的运行)** and click **Complete interrupted record (完成中断记录)** on that run. Once completed, the record moves to the run history with its original logs and outputs. If the panel reports missing results, an unconfirmed process state, or a busy record, resolve that issue first. For a failed run, read the error log in the run details, fix the code or environment, and rerun from **Run frozen Python (执行已冻结 Python)**. Other history entries and pages remain accessible if a single record is damaged.

## View code and run it manually

1. In **Code and runs**, select a version and click **Load version (载入版本)**. After editing it, click **Save and freeze code (保存并冻结代码)**. The new version appears in the **Version (版本)** list.
2. Click **Run frozen Python (执行已冻结 Python)**. The run details display the status, exit code, inputs, parameters, and output files. Expand the code comparison, environment, or logs if you need to investigate.
3. After a successful run, select a PNG in **Output files** and choose where to publish it.

   - **New figure.** Click **Publish as a new figure (发布为新图件文档)**. Return to **Figures** and click **Refresh**. The new figure appears in the **Figures (图件)** dropdown.
   - **Candidate for an existing figure.** Select **Publish as a candidate for an existing document (发布为现有文档的候选图)** and choose its **Target document (目标文档)**. Click **Read and select current baseline (读取并选定当前基线)**. When **Explicit baseline (明确基线)** appears, click **Publish as candidate (发布为候选图)**. Return to **Figures**, click **Refresh**, and open the target figure’s **Candidate (候选)** menu.

![Sample source code, completed run status, and output file in Code and runs](/img/docs/scientific-figures/guide-code-and-runs.png)

## Rebuild the environment from the saved instructions

In **Code and runs**, load a successful run and use the output path to locate its `_environment/` directory:

- `environment.json`: records the Python version, operating system, and dependencies from the original run so you can compare environments.
- `requirements.txt`: pins the Python packages to the exact versions recorded during the run.
- `REBUILD.md`: gives step-by-step instructions to create an isolated environment and install dependencies before rerunning.

Prepare system libraries and drivers on the target machine separately. After changing the operating system or Python version, run the saved code with its saved inputs and compare the generated output files and key values.

## Troubleshooting

| What you see | Next step |
| --- | --- |
| The session has a result, but the panel shows an earlier figure | Click **Refresh (刷新)**, then select the figure and candidate from this run. |
| The plotting request failed to send | Keep your input. Check the DSH connection in **Settings → AI assistant**. Check model access in **Settings → General**. When both are ready, retry in the DSH session. |
| Python or Matplotlib cannot be found | Open the run log in **Code and runs**, then fix the `pythonCommand` path or install Matplotlib in that interpreter before rerunning. |
| The session attachment says `File not found` | Click **Read run (读取运行)** again in **Code and runs**, check whether the PNG appears under **Output files**, and check the plugin version. |
| The candidate did not become the current figure | Open the approval prompt in the session and click **Allow**, then return to **Figures** and click **Refresh**. If the current figure changed, select the new current figure and generate a candidate from it. |
| The code failed to execute | Open the standard error log in **Code and runs**, fix the script, click **Save and freeze code** and **Run frozen Python**, and publish after the status shows `completed`. |

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
