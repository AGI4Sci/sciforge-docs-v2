---
title: Automation & scheduled tasks
description: Use scheduled tasks to repeat a single agent instruction, or use Create Loop to organize multi-step flows.
sidebar_position: 3
---

# Automation & scheduled tasks

First verify that the task completes correctly in a normal session, then turn it into an automation. Automation repeats mistakes, and it also amplifies unclear permissions and output paths.

There are two entry points for automation: **Scheduled tasks** is a built-in scheduling capability of the app and is not a domain extension; **Create Loop** is a built-in plugin that handles multi-node flow orchestration.

## Which one to use

| Need | Entry point |
| --- | --- |
| Run one AI instruction daily, once, at an interval, or manually | **Scheduled tasks** (this page) |
| Connect AI tasks, conditions, HTTP requests, approvals, and subflows | [Create Loop](./create-loop.md) |

## Create a scheduled task

Open **Scheduled tasks** from the left, click **New task**, and configure the name, instruction, model, reasoning effort, run time, and workspace in order.

![SciForge Scheduled tasks page](/img/docs/guides/scheduled-tasks.jpg)
*Figure 1: A scheduled task keeps the task content, model, plan, and runtime environment in one configuration sheet.*

An instruction suitable for validation:

> Check the current workspace for newly appeared experiment logs and produce a summary of no more than three items. Do not modify the original logs; save the output to the pre-agreed reports directory.

:::warning[Run conditions]

Scheduled tasks require SciForge to keep running and the computer to be awake at the trigger time. "Keep awake" only prevents suspension while a task is running; it cannot wake a computer that is already asleep.

:::

## Create a Loop

When you need multiple steps, open **Create Loop** from the top of the workbench. For full instructions, see [Create Loop (multi-step flows)](./create-loop.md); the shortest path is:

1. Create a Loop and add AI task, condition, HTTP request, or manual approval nodes.
2. Define the input, output, and failure handling for each node.
3. Test a single node first, then run the whole flow manually.
4. Only after validation, enable schedule triggers, webhooks, or agent hooks.

When a manual approval node pauses, it depends on the current in-memory state of the app; restarting the app loses that paused run. For important flows, make node outputs repeatable and keep idempotency keys and run records.

## Automation acceptance

- Workspace and output paths are explicit
- Runtime, model, and Skill are pinned
- The shortest task already succeeded in a normal session
- Single nodes and the whole flow have each passed testing
- External requests, writes, and credential use have approval boundaries
- Recent results, errors, and recovery steps can be found

When automation fails, don't start by increasing the retry count; first open the session and node results for the most recent run and determine whether the error will repeatedly cause external effects.
