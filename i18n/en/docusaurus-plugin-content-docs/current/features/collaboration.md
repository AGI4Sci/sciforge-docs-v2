---
title: Collaboration guide
description: Starting from requirements and task assignment, complete member task acceptance, human review, deliverable acceptance, and project close-out.
sidebar_position: 61
---

# Collaboration guide

The project owner uses **Requirements** to define the deliverables and the **Board** to assign and review tasks. The assigned member adds the required files and submits or revises the delivery. The next member works from the upstream version the owner accepted.

## Open a collaboration project

1. Expand the left sidebar and use the account area at the bottom to [sign in and connect your device](./identity-access.md). Each member uses their own account.
2. Open a project, **My work**, or **Inbox** from the collaboration section. The project name appears at the top, and its tasks appear on the **Board**.
3. Before accepting a task, send a short message in a regular session. Once your Runtime and model return a reply, open the assignment.

| Project tab | Use it to |
| --- | --- |
| **Board** | Find tasks and see their assignment, delivery, and review status |
| **Members** | Invite or manage people as allowed by your role |
| **Requirements** | Define the goal, inputs, modules, and acceptance criteria |
| **Shared files** | Open shared material, sealed deliveries, and project results |
| **Project details** | See the project details and available management actions |

The collaboration service receives requirements, project discussions, result notes, and submitted files. The local workspace remains on your device. Store credentials in the corresponding service settings.

## 1. The owner prepares and confirms requirements

1. In the collaboration sidebar, click **+** and enter a project name.
2. Open **Requirements**. Under **Goals and deliverables** and **Inputs and boundaries**, list the data the member can access, the file names to deliver, acceptance criteria, and the allowed actions.
3. Click **Save requirements**. Review the generated modules, especially which inputs and dependencies each uses, then click **Confirm requirements**. If generation fails, use its error to identify what needs fixing before using **AI 补全** (draft with AI).
4. Invite people from **Members**. Invitees open the request from **Inbox** or the project invitation and click **Accept invitation**. Their names then appear under **Members**.

For example, assign B a report on per-sample counts, including the method and results. Make C's module depend on the owner accepting B's report.

![Requirements with two dependent modules](/img/docs/collaboration/requirements-ready.png)
*Requirements show which module must be accepted before the next can start.*

## 2. Check assignments and blocking reasons

As the owner, open the task from the **Board**. If the assignee is available and the upstream delivery is accepted, choose the member and click **Dispatch task**. The card moves to **Ready** and shows the assigned member. If dispatch fails, address the reason shown in the task and click **Dispatch again**. Before the member accepts an assignment, you can **Reassign** or **Withdraw assignment**.

| What the task shows | What to do |
| --- | --- |
| Waiting for an upstream delivery to be accepted | Open the upstream task and review the latest delivery. After accepting it, return to the downstream task. |
| Unassigned, or dispatch failed because there is no eligible member | Choose an assignee or complete the requested assignment action. The card then shows the assigned member under **Ready**. |

## 3. Members decide whether to accept

Open the request from **Inbox**, **My work**, the **Board** task card, or the task details. Read the goal, required files, dependencies, and expiry before responding.

| Action | Result |
| --- | --- |
| **Accept task** | The task is yours. When the Runtime is ready, the task session shows execution progress. Follow the message if the Runtime needs attention. |
| **Dismiss** | The request is removed from the relevant lists for your account. |
| **Reject** | The owner can arrange a new assignment. |

Dismiss the board reminder if you just want to close it. If the assignment has expired, ask the owner for a new one.

## 4. Handle agent questions and action confirmations

- **Answer a question.** The requested member opens the task details, supplies the missing data or decision, and returns to the task session to follow progress.
- **Decide on an action.** The requested member opens the request and reads what it will change or send, where it will act, and which version the request covers. Check its expiry, give a reason, and click **Approve action** or **Reject action**. For an expired request, wait for an updated one. The task session shows the execution result after the decision is submitted.

Use the action buttons for authorization. Discussions can provide context.

## 5. Members review the draft and submit

1. Open the delivery draft in the task details and preview the required files. If **Submit** is unavailable, the submission area names the missing file. Where **Choose required file** is available, pick a task output or upload a file, then click **用作必交文件** (Use as required file). It appears in the required files list, where you can preview it.
2. In **Result summary**, describe what you did, the checks you ran, and the scope of the result. For another revision in the task session, use **Work with AI**, then return to the draft.
3. To include a separate note, use **Add materials → Task files** or **Upload from this device**. Each submission allows up to 20 files and 200 MiB in total, with up to 100 MiB per attachment. Required files follow the task's format and size requirements.
4. Click **Submit**, review the version, notes, and files in the confirmation dialog, and submit that version. When device verification, signing, and upload are complete, the delivery section shows the submitted version, and the task moves to **Awaiting review**. The member handles any system secure-storage request.

![A delivery draft](/img/docs/collaboration/delivery-draft.png)
*The draft groups result notes, required files, and additional materials.*

![Delivery submission progress](/img/docs/collaboration/delivery-submitting.png)
*The submission shows device verification, signing, and upload progress.*

## 6. The owner reviews and hands off downstream

1. **Review the latest submission.** From **Board → Awaiting review**, open the task. In the task details, open the current submission at the top of the delivery section and compare its files and notes with the acceptance criteria.
2. **Request specific changes.** Click **Request revision** and describe which part needs work, then click **Send revision request**. The member updates the files and submits a new version. Open the new submission at the top of the delivery section. Use **Version history** to see the previous submission.
3. **Accept the version that meets the criteria.** Click **Adopt delivery (采纳交付)**. The task moves to **Completed**, and the delivery section shows **Adopted** and the version number.
4. **Hand off the accepted version.** Once the upstream delivery is accepted, dispatch the downstream task. The next member opens their task session and uses the files from the accepted delivery.

![The owner writes a revision request](/img/docs/collaboration/revision-request.png)
*The request identifies what the member needs to change.*

![Delivery History with more than one version](/img/docs/collaboration/delivery-history.png)
*Use the latest submission for review and the accepted one for downstream work.*

## 7. View shared files and close out

Under **Shared files**, find and preview files by source and version. To submit your own files, attach them from the task’s delivery draft with **Add materials**.

Once every module is accepted, review the project results and click **Complete project**. The project is closed when signing is complete and its status shows **Completed**.

![The completed project](/img/docs/collaboration/project-completed.png)
*Both deliveries are accepted, and the project shows Completed.*

## Board status at a glance

| Column | Who acts next |
| --- | --- |
| Backlog | The owner resolves dependencies or selects an assignee. |
| Ready | The assigned member responds to the dispatch. |
| In progress | The member follows execution, answers questions, or reviews the draft. |
| Awaiting review | The delivery is submitted and awaiting the owner. |
| Completed | The delivery is accepted. The owner can close the project when every task is complete. |

For a network, submission, or signing error, keep the draft and restore account and device access. Then open the delivery section in the task details. If this version is present, it can go to review. If only the draft remains, return to the task details and submit it again.

Continue with [the Pasilla case study](../cases/pasilla-collaboration.md), [Identity and sign-in](./identity-access.md), or [Runtime and models](../getting-started/runtime-and-models.md).
