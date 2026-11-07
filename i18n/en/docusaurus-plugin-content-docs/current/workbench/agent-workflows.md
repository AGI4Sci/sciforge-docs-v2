---
title: Working with the Agent
description: Write tasks as goals, scope, constraints, and acceptance criteria, and check tools and approvals during execution.
sidebar_position: 2
---

# Working with the Agent

State the goal, allowed scope, deliverables, and stop conditions clearly so that every step the Agent takes can be checked.

## The four parts of an executable task

| Part | Question to answer | Example |
| --- | --- | --- |
| Goal | What problem should ultimately be solved? | Find the root cause of the failing test |
| Scope | Where may the Agent read and modify? | Only the current package; do not change public APIs |
| Constraints | Which actions must not run automatically? | Do not install dependencies or access the internet |
| Acceptance | How do you prove it is done? | Relevant tests pass, with the root cause and changes explained |

Recommended template:

```text
Goal: ...
Scope: ...
Constraints: ...
Deliverables: ...
How it will be accepted: ...
Stop if: ...
```

## Read first, plan next, write last

For unfamiliar projects or research data, three rounds are recommended:

1. **Read-only analysis**: Have the Agent establish a baseline for the project, data, and risks.
2. **Plan review**: Check the files to be modified, output paths, dependencies, and verification method.
3. **Execute and verify**: Switch to the appropriate permissions, complete the writes, and review the diff.

![A read-only task running in SciForge](/img/docs/quickstart/quickstart-task-running.jpg)
*Shows the task text and execution status.*

## Check input files

Add material through **Attach file** in the input area, drag and drop, paste, or file references. Before sending, check the file names, paths, and types in the attachment tray and remove entries you do not need to send; after sending, open a preview from the file chips below the message.

Workspace path references let the Agent read files on demand; they do not automatically embed the full text in the prompt. Importing external files writes to the workspace; read-only tasks should reference existing files. For details, see [Workspaces and sessions](./workspaces-and-sessions.md).

## Watch the execution

During execution, focus on:

- The step the Agent is currently working on
- The files it actually reads
- Tool calls and their parameters
- Commands, return codes, and output
- Files written and their target paths
- Approval requests waiting for your decision

Before approving, check the operation's target, scope of impact, external destinations, and recovery method. To view files or diffs, open a panel from the far-right vertical toolbar; pages that support docking can be moved to the side or bottom and viewed alongside the session.

In collaborative tasks, questions are answered by the designated member; action confirmations require a note and an explicit approve or reject. After submitting a decision, keep watching the execution results, and finally have a member review the delivery and the owner accept it. See [Collaboration](../features/collaboration.md).

## Correct incomplete results

Don't just say "be more detailed." Cite the specific gap:

> You listed the entry files but did not explain the call chain from startup to the main interface. Continue the read-only analysis and list the functions and source paths in call order; mark anything speculative separately.

## Split long tasks

Break long tasks into phases that can be accepted independently, and state the inputs, outputs, and stop conditions for each. Research tasks in particular should stop when a data audit fails, rather than continuing to generate charts and reports that look complete.

Next: [Workbench tools](./tools.md).
