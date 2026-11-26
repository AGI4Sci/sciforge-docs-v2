---
title: Automation and scheduled tasks
description: Use scheduled tasks to repeat a single Agent instruction, or use Create Loop to organize multi-step flows.
sidebar_position: 3
---

# Automation and scheduled tasks

First verify in an ordinary session that the task completes correctly, then turn it into an automation. Define the output path and the operations that need confirmation up front, so that scheduled repeats do not overwrite files or submit twice.

Automation has two entry points: **Scheduled tasks** is a built-in scheduling capability of the app, not a domain extension; **Create Loop** is a built-in flow tool for multi-node orchestration.

## Choose which one

| Need | Entry point |
| --- | --- |
| Run a single AI instruction daily, once, at an interval, or manually | **Scheduled tasks** (this page) |
| Connect AI tasks, conditions, HTTP requests, approvals, and subflows | [Create Loop](./create-loop.md) |

## Create a scheduled task

Open **Scheduled tasks** from the left and click **New task**. Enter the name, instruction, model, reasoning effort, run time, and workspace. Click **Confirm** to add the task to the list. To try it immediately, click **Run once** on its card. When the run ends, check the status and **Last result**.

![SciForge scheduled tasks page](/img/docs/guides/scheduled-tasks.jpg)
*Figure 1: A scheduled task puts the task content, model, schedule, and runtime environment in a single configuration table.*

An instruction suitable for validation:

> Check the current workspace for newly appeared experiment logs and produce a summary of no more than three items. Do not modify the original logs; save the output to the prearranged reports directory.

:::warning[Run conditions]

Scheduled tasks require SciForge to keep running and the computer to be awake at the trigger time. "Keep awake" only prevents suspension while a task is running; it cannot wake a computer that is already asleep.

:::

## Create a Loop

When you need multiple steps, open **Create Loop** from the right toolbar or **More tools**. For full instructions, see [Create Loop (multi-step workflows)](./create-loop.md); the shortest path is:

1. Create a Loop and add **AI agent task**, **Condition**, **HTTP request**, or **Human Approval** nodes.
2. Define the input, output, and **Error handling** for each node.
3. Select the node you want to try and click **Test node → Run test**. When the dialog shows the test output, return to the canvas and click **Run once**. Open **Run history** to see the result for the full flow.
4. Turn on **Enabled** only after a successful trial run, then configure **Schedule trigger**, **Webhook trigger**, **AI-callable**, or **Triggers** (agent hooks).

**Restarting the app loses a run that was paused at a Human Approval node.** For important flows, save each step's input, output, and result; before rerunning, open **Run history** to check which nodes completed and whether a file write, request, or submission has already taken effect, so you do not write or submit twice.

## Automation acceptance

- Workspace and output paths are explicit
- Runtime, model, and Skill are fixed
- The shortest task has already succeeded in an ordinary session
- Individual nodes and the whole flow have each passed testing
- External requests, writes, and credential use have approval boundaries
- Recent results, errors, and recovery methods can be found

When automation fails, do not start by increasing the retry count; first open the session and node results for the most recent run and determine whether the error will repeatedly produce external effects.
