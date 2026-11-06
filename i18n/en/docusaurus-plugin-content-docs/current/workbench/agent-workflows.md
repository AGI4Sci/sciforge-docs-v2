---
title: Collaborate with the Agent
description: Write tasks as goals, scope, constraints, and acceptance criteria, and check tools and approvals as execution proceeds.
sidebar_position: 2
---

# Collaborate with the Agent

A high-quality task is not a longer prompt. It is a shared understanding between you and the Agent of the goal, the allowed scope, the deliverables, and the stopping conditions.

## The four parts of an actionable task

| Part | Question it answers | Example |
| --- | --- | --- |
| Goal | What problem should be solved in the end? | Find the root cause of the failing test |
| Scope | Where may the Agent read and change files? | Only the current package; do not change public APIs |
| Constraints | Which actions must not run automatically? | Do not install dependencies or access the internet |
| Acceptance | How do you prove the task is complete? | The relevant tests pass, and the root cause and changes are explained |

Recommended template:

```text
Goal: ...
Scope: ...
Constraints: ...
Deliverables: ...
Acceptance: ...
Stop if: ...
```

## Read first, plan next, write last

For an unfamiliar project or research dataset, use three rounds:

1. **Read-only analysis**: Have the Agent establish a baseline for the project, the data, and the risks.
2. **Plan review**: Check the files to be changed, output paths, dependencies, and verification method.
3. **Execute and verify**: Switch to the appropriate permission, complete the writes, and review the diff.

![Read-only task running in SciForge](/img/docs/quickstart/quickstart-task-running.jpg)
*Figure 1: The original task text, execution status, and workspace stay visible in the same session.*

## Inspect execution

During execution, focus on:

- The step the Agent is currently handling
- The files it actually read
- Tool calls and their parameters
- Commands, return codes, and output
- Files written and their target paths
- Approval requests waiting for your decision

An approval is not a “continue” button. Before you confirm, check the operation target, its impact, external destinations, and how to recover.

## Correct incomplete results

Do not just say “be more detailed.” Point to the specific gap:

> You listed the entry files but did not explain the call chain from startup to the main interface. Continue the read-only analysis and list the functions and source paths in call order; label anything speculative separately.

## Split long tasks

Split long tasks into phases that can be accepted independently, and write the inputs, outputs, and stopping conditions for each phase. Research tasks in particular should stop when a data audit fails, rather than continue producing figures and reports that look complete.

Next: [Workbench tools](./tools.md).
