---
title: Create Loop (multi-step workflows)
description: Chain AI, conditions, HTTP, and human approvals in multi-node workflows.
sidebar_position: 30
---

# Create Loop (multi-step workflows)

Try a loop that turns a short note into three lines, then pauses for you to approve the result. Once that works, you can add a file write or an external request after the approval.

## How to open it

Click **Create Loop** in the far-right toolbar. Look under **More Tools** if the icon is out of view. Name the loop and choose its working directory in the canvas settings. AI, image, and code nodes use this directory. The definition and run records are stored on your device.

## Typical workflow

This example sends the three lines to an **Output** node after approval. Both a trial run and **Test node** execute the configured nodes. AI nodes send requests to the model provider. HTTP nodes send requests to the configured address. These requests may incur fees. Start with short text and leave out anything that writes to an external system.

1. **Set up the Runtime.** Configure an available Runtime in **Settings → AI Assistants**. Once it can reply in a regular session, return to the canvas.
2. **Add and connect the nodes.** Add **Manual trigger**, **AI agent task**, **Human Approval**, and **Output** from the left side. Connect the first three nodes in order. Connect the **Approved** output to **Output**, and leave **Rejected** unconnected.
3. **Give the AI node one sample.** Select **AI agent task**, pick a model, and enter a short note in **Prompt**. Example input: “Monday: entered the sample table. Tuesday: standardized the units. Wednesday: reviewed missing values. Summarize each day in one line.” You can use **Test node** on the AI node to see whether it returns three lines. Testing saves the loop first.
4. **Set up human approval.** Select **Human Approval** and enter a title, instructions, and timeout. In this example, approve when all three days are represented and the lines match the source.
5. **Run the loop and decide.** Click **Run once** and confirm. When the run pauses, open the request with the approval title and **Approve** and **Reject** buttons on the card or in the run drawer. Read the upstream result. If it meets the criteria, click **Approve**. The pause ends, **Output** receives the three lines, and the run shows **Success** when it finishes. Click **Reject** if something is missing. The **Output** node is skipped.
6. **Open the result.** In **Run log**, open **Output** to see the three lines. Find the run in **Run history** and use **Audit report** if you need the inputs, outputs, or timings. Run one representative sample end to end before processing a batch.

![The manual trigger, AI agent task, human approval, and output nodes on the Create Loop canvas](/img/docs/guides/create-loop-approval-full.png)
*The Approved port leads to Output. The right panel shows the approval instructions for this example.*

## What you can do

| Task | Where to configure it |
| --- | --- |
| Generate content or run an agent task | Add **LLM generation** or **AI agent task**, then enter the inputs and the result you need. |
| Branch based on the data | Add **Condition**, a multi-way branch, merge, filter, or loop. Select the upstream node that supplies each input. |
| Call an external service | Add **HTTP request** and set the destination and permissions. Put **Human Approval** before the request if someone needs to approve it. |
| Reuse an existing flow | Add a subworkflow and select the loop and its inputs. |
| Start automatically | After a successful trial run, turn on **Enabled**. Set up a schedule or webhook, enable **AI Callable**, or configure an Agent hook. Scheduled and local webhook triggers require the app to stay running. |

## Where things are saved, and what actions affect

- Before running, set the working directory, timeouts, output paths, and how to handle failures. Save results you need later to the workspace.
- Follow the app's confirmation when stopping the run or deciding an approval. Nodes that use a Secret need that credential to rerun. The run history hides the original value.
- Restarting the app ends a run paused for approval. Open **Run history** to see which nodes completed. If any already wrote files or submitted a request, start a new loop with the saved output and only the remaining steps. To repeat this text-only example, run it again from **Manual trigger**.
- If randomness is unfixed, differences between runs are marked inconclusive. Fix randomness before comparing runs for reproducibility.

## Related pages

- [Automation and scheduled tasks](./automation.md)
- [Evidence and reproducibility](./evidence-and-reproducibility.md)
- [Agent workflows](../workbench/agent-workflows.md)
- [Permissions and security](../operations/security.md)

> Component version: `@sciforge/domain-create-loop` v1.1.4.
