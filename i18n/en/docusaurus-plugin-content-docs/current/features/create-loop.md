---
title: Create Loop (multi-step workflows)
description: Chain AI, conditions, HTTP, and human approvals in multi-node workflows.
sidebar_position: 30
---

# Create Loop (multi-step workflows)

Try a loop that turns a short note into three lines, then pauses for you to approve the result. Once that works, you can add a file write or an external request after the approval.

## How to open it

Click **Create Loop** in the far-right toolbar. If the icon is out of view, open **More tools**. Click **New Create Loop**, then name it at the top of the canvas. The definition and run records are stored on your device.

## Typical workflow

This example sends the three lines to an **Output** node after approval. Both **Run once** and **Run test** execute the configured nodes. AI nodes send requests to the model provider, and HTTP nodes send requests to the configured address; either may incur fees or write to external systems. Start with short text and leave out any nodes that write to an external system.

1. **Set up the Runtime.** Configure an available Runtime in **Settings → AI assistant**. Once it can reply in a regular session, return to the canvas.
2. **Add and connect the nodes.** A new loop already has a **Manual trigger**. Add **AI agent task**, **Human Approval**, and **Output** from the left. Connect **Manual trigger → AI agent task → Human Approval**, then connect **Approved** on **Human Approval** to **Output**. Leave **Rejected** unconnected. Select **Manual trigger** to set its **Working directory** on the right. Leave it blank to use the app workspace. AI, image, and code nodes use that directory.
3. **Set the AI model and sample.** Select **AI agent task** and choose a **Model** on the right. Leave it blank to use the current default. Enter a short note in **Prompt**. For example, “Monday: entered the sample table. Tuesday: standardized the units. Wednesday: reviewed missing values. Summarize each day in one line.”

   To try this node on its own, click **Test node** on the right, then click **Run test** in the dialog. This saves the loop and makes a live model request. When it finishes, the dialog shows **Success** and the test output.
4. **Set up human approval.** Select **Human Approval** and enter an **Approval title**, **Instruction**, and **Timeout (ms)**. In this example, approve when all three days are represented and the lines match the source.
5. **Run the loop and decide.** Click **Run once** at the top right. When the flow pauses at **Human Approval**, open the request on its card or in the run drawer. Look for the title you entered and the **Approve** and **Reject** buttons. In **Run log**, expand **AI agent task** to read its summary.
   - Click **Approve** if the summary meets the criteria. **Output** receives the summary, and the run status changes to **Success**.
   - Click **Reject** if anything is missing. In this example, the rejected port is unconnected, so **Output** does not run. Use **Run log** to see which nodes ran.
6. **Open the result.** In **Run log** on the right, open **Output** to see the three lines. Open the run in **Run history** and click **Audit report** if you need each node's inputs, outputs, and elapsed time. Run one representative sample end to end before processing a batch.

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
