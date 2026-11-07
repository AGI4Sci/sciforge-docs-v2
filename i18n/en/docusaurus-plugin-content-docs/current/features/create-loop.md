---
title: Create Loop (multi-step workflows)
description: Chain AI, conditions, HTTP, and human approvals in multi-node workflows.
sidebar_position: 30
---

# Create Loop (multi-step workflows)

Create Loop breaks a task into multiple inspectable steps. It sits above session execution: AI nodes generate or decide, condition and data-processing nodes control the path, HTTP nodes connect external systems, subflows reuse another Loop, and human approvals determine whether key actions proceed. Before using it, confirm that the models, network, and tools the chosen nodes need are available, and run the whole flow through in your current environment.

## How to open it

- Entry: **Create Loop** in the right toolbar (expand **More tools** if it is not shown). Edit nodes on the canvas; the right panel shows settings for the current Loop.
- Target: one Loop in the current workspace. Definitions and run records are stored on this machine.
- Prerequisite: AI nodes need an available Runtime and model, HTTP nodes need network access, and schedules and local webhooks are triggered by the app process, so the app must remain running. A Loop can be started with manual **Run once**, a schedule, a webhook, or an Agent hook.

## What you can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Chain a multi-step task | Add **AI agent task**, **LLM generation**, **Condition**, **HTTP request**, human approval, subflow, and other nodes from the left node panel, then connect them | A Loop you can save |
| Branch on data | Organize inputs and outputs with Condition, Switch, Merge, Filter, Loop, and similar nodes | Explicit data flow between nodes |
| Validate before going live | Use **Test node** with mock upstream input for a single node, then **Run once** for the whole Loop | Node results and run logs |
| Stop at key points | Add a **Human Approval** node, set the title, instruction, and timeout, then **Approve/Reject** on the card or in the run drawer | Controlled release |
| Trigger automatically | Configure a schedule, webhook, or Agent hook | Scheduled, external, or event-driven triggers |

## Typical workflow

1. Open **Create Loop** from the right toolbar or **More tools**, name it, and confirm the working directory. AI, image, and code nodes all use that directory.
2. Add trigger and task nodes and connect them in execution order. Write clear input references, error handling, and timeouts for each node.
3. Use **Test node** with mock upstream input to validate a single node first. The current Loop is saved before testing.
4. Click **Run once** and check each node's input, output, timing, and errors in the **Run log**, **Run history**, and **Audit report**.
5. After validation, turn on **Enabled**, enable **AI-callable** as needed, configure schedules or webhooks, and keep human approvals before key steps.

![SciForge Create Loop canvas](/img/docs/guides/create-loop.jpg)
*Figure 1: The Create Loop canvas connects multiple processing nodes into a runnable flow. Select a node to inspect its parameters on the right.*

## Where things are saved, and what actions affect

- Loop definitions and run history are saved on this machine. The run log and audit report show each step's input, output, and result; for important flows, also save the results you need to keep to an agreed location.
- Nodes may read or write workspace files, and may use the output of upstream nodes. Before running, check the working directory and output paths; before a rerun, check existing files and submissions that already completed, to avoid repeating operations.
- Starting a whole flow, stopping a run, and handling approvals all need confirmation. HTTP and AI nodes send real requests and may incur costs; **Test node** also performs real operations.
- Raw Secret values are not written to run records. Manual approval needs you to choose approve or reject; after the app restarts, a run paused at that point cannot be resumed.

## Known limitations

- **Restarting the app loses a run that was paused at a manual approval.** Before rerunning, look at the inputs, outputs, and results each step saved, and confirm which operations have already completed, to avoid writing or submitting twice.
- Schedules and webhooks depend on the app process. They do not fire while the app is closed.
- A step that needs a Secret must be able to obtain the credentials it needs when rerun; if they are unavailable, execution stops, and you must restore the configuration first.
- A single-node test proves only that node, not the whole flow. Tests also execute the node logic for real.
- When randomness is not fixed, rerun differences are marked as indeterminate and cannot be treated directly as a reproduction failure.

## Related pages

- [Automation and scheduled tasks](./automation.md): scheduled execution of a single AI instruction, and when to use Create Loop instead.
- [Evidence & Reproducibility](./evidence-and-reproducibility.md): run records, artifact versions, and the evidence chain.
- [Agent workflows](../workbench/agent-workflows.md): Agent hooks and execution boundaries in sessions.
- [Permissions and security](../operations/security.md): external requests, writes, and confirmation rules.

> Implementation basis: `@sciforge/domain-create-loop` v1.1.4.
