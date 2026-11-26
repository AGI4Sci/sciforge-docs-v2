---
title: Create Loop (multi-step workflows)
description: Chain AI, conditions, HTTP, and human approvals in multi-node workflows.
sidebar_position: 30
---

# Create Loop (multi-step workflows)

Try a loop that turns a short note into three lines, then pauses for you to approve the result. Once that works, you can add a file write or an external request after the approval.

## How to open it

Click **Create Loop** in the far-right toolbar. Look under **More tools** if the icon is out of view. Name the loop and set its **Working directory** in the canvas settings. AI, image, and code nodes use this directory. The definition and run records are stored on your device.

## Typical workflow

This example sends the three lines to an **Output** node after approval. Both **Run once** and **Test node** execute the configured nodes. AI nodes send requests to the model provider, and HTTP nodes send requests to the configured address; either may incur fees or write to external systems. Start with short text and leave out any nodes that write to an external system.

1. **Set up the Runtime.** Configure an available Runtime in **Settings → AI assistant**. Once it can reply in a regular session, return to the canvas.
2. **Add and connect the nodes.** Add **Manual trigger**, **AI agent task**, **Human Approval**, and **Output** from the left side. Connect the first three nodes in order. Connect the **Approved** port on **Human Approval** to **Output**, and leave **Rejected** unconnected.
3. **Select a model and enter a sample on the AI node.** Select **AI agent task**, pick a **Model** in the right panel (leave empty to use the current default model), and enter a short note in **Prompt**. You can adapt this example input: “Monday: entered the sample table. Tuesday: standardized the units. Wednesday: reviewed missing values. Summarize each day in one line.” To test the AI node on its own—knowing it will make a live model request—click **Test node**. Testing saves the loop first and shows the three generated lines in the node output.
4. **Set up human approval.** Select **Human Approval** and enter an **Approval title**, **Instruction**, and **Timeout (ms)**. In this example, approve when all three days are represented and the lines match the source.
5. **Run the loop and decide.** Click **Run once** in the top-right corner and confirm. When the run pauses at **Human Approval**, the node shows **Waiting for user confirmation**. Open the approval request on the card or in the run drawer, where the title and **Approve** and **Reject** buttons appear, and read the upstream summary. If it meets the criteria, click **Approve**: the pause ends, **Output** receives the three lines, and the run status shows **Success**. If anything is missing, click **Reject**: the flow takes the **Rejected** port, and **Output** is marked **Skipped** without executing.
6. **Open the result.** In the **Run log** tab on the right, open **Output** to see the three lines. Open the run in **Run history** and click **Audit report** if you need each node's inputs, outputs, and elapsed time. Run one representative sample end to end before processing a batch.

![The manual trigger, AI agent task, human approval, and output nodes on the Create Loop canvas](/img/docs/guides/create-loop-approval-full.png)
*The Approved port leads to Output. The right panel shows the approval instructions for this example.*

## What you can do

| Task | Where to configure it |
| --- | --- |
| Generate content or run an agent task | Add **LLM generation** or **AI agent task**, then enter the inputs and output requirements. |
| Branch based on the data | Add **Condition**, **Switch**, **Merge**, **Filter**, or **Loop**, and choose which upstream node supplies each value under **Reference upstream fields**. |
| Call an external service | Add **HTTP request** and set the method, URL, and credentials. Put **Human Approval** before the request if someone needs to approve it first. |
| Reuse an existing flow | Add **Run Create Loop** (subworkflow) and select the target loop and its inputs. |
| Start automatically | After a successful trial run, turn on **Enabled**. Set up a **Schedule trigger** or **Webhook trigger**, turn on **AI-callable**, or bind an agent phase under **Triggers**. Scheduled and local webhook triggers require the app to stay running. |

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
