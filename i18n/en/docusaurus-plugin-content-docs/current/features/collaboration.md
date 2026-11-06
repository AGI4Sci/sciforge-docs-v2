---
title: Collaboration guide
description: Starting from requirements and task assignment, complete member acceptance, human review, delivery adoption, and project close-out.
sidebar_position: 61
---

# Collaboration guide

The owner writes clear requirements and confirms the division of work. Members accept tasks, execute them in their own SciForge, review drafts, and submit. Finally the owner adopts the result. Tasks that hand off to one another use the files already adopted upstream.

This page reflects the interface as of 2026-11-06. For differences in installed versions, see [Version & Compatibility](../reference/version-and-compatibility.md).

## Open a collaboration project

1. Expand the left sidebar and complete [cloud sign-in and device connection](./identity-access.md) in the account area at the bottom.
2. In the sidebar's collaboration area, open a project, **My work**, or **Inbox**. If you cannot see the project tree, expand the sidebar first.
3. In an ordinary session, confirm the Runtime and model respond before starting a collaboration task.

Each member uses their own cloud account. Project requirements, discussions, result notes, and submitted files go to the collaboration service; an ordinary local workspace is not synced as a whole directory. Do not put model keys or sign-in credentials into any of these.

Once a project is selected, there are five tabs at the top:

| Tab | Purpose |
| --- | --- |
| **Board** | See tasks and the progress of acceptance, assignment, review, and adoption |
| **Members** | See project members; invite or manage members according to your current role |
| **Requirements** | Edit goals, inputs, work modules, and acceptance criteria, and confirm requirements |
| **Shared files** | See shared material, sealed task deliveries, and project results |
| **Project info** | See the project description, status, and available management actions |

## 1. The owner prepares and confirms requirements

1. In the collaboration project area, use **+** to create a project and fill in a name.
2. Open **Requirements** and edit **Goals & deliverables** and **Inputs & boundaries**. State the data sources, final files, how acceptance works, and the actions that must not be performed.
3. Click **Save requirements** and wait for the work modules to be completed. On failure, read the message, check the model configuration, then use **Regenerate**.
4. Check each module's goal, inputs, outputs, dependencies, and acceptance criteria. When all are correct, click **Confirm requirements**.
5. Invite members under **Members**. Invitees enter from the inbox or the project invitation prompt, read the requirements, and accept the invitation.

For example: "B counts the total samples and submits a report; C continues the comparison using the report B had adopted. The report must include the method, validation results, and limitations." Also provide inputs the members can actually read.

![The Requirements page from an earlier version](/img/docs/collaboration/requirements-ready.png)
*Historical demo screenshot (kept when checked on 2026-11-06; capture date not recorded): shows work modules and dependencies. For current navigation, follow the five tabs on this page.*

## 2. Check assignments and blocking reasons

On the board, the owner opens a task and checks the executor and upstream dependencies. Depending on the task's current state, choose a member and **Assign task** or **Reassign**, or **Change assignee** or **Withdraw assignment** for an assignment not yet accepted.

A module with dependencies waits until its upstream result is adopted. The interface keeps the assign entry and shows the reason, with the button disabled. Finish the upstream review first. If a task is still unassigned after requirements are confirmed, or assignment failed and no member is available, the owner needs to pick an executor or handle the to-do as prompted. Do not treat a task waiting to be assigned as already running.

## 3. Members decide whether to accept

Members can see incoming assignments from **Inbox, My work, a board task card, or task details**. Read the goal, file requirements, dependencies, and validity period first, then choose:

| Action | Result |
| --- | --- |
| **Accept task** | Confirms you take the task; it runs once your local Runtime is ready, or you are prompted to recover it |
| **Ignore** | Handles the current assignment, and the task is removed from your related lists; it is not the same as dismissing a notice bar |
| **Decline** | Explicitly declines the current assignment; the owner rearranges it according to the project state |

Go by the buttons actually available; an assignment that has expired or been handled cannot be accepted again. Dismissing the assignment reminder on the board does not perform "Ignore" for you. After accepting, use the task session to see run progress and tool calls.

## 4. Handle agent questions and action confirmations

When a task needs more information, the designated member answers in the task details. If a request involves actions such as modifying files, writing to external systems, or deleting, first read the specific action, its scope of impact, the request version, and its validity period, write a decision note, then click **Approve this action** or **Decline this action**.

Only the designated member can decide, and an expired request must wait to be refreshed. After submitting a decision, check the receipt and later task progress; whether the action completed depends on what actually ran. An ordinary discussion message does not replace action approval.

## 5. Members review the draft and submit

1. When execution finishes, open the delivery draft, preview the required files, and check the content.
2. Edit the **Result note**, stating what was actually done, the check results, and limitations.
3. To add material, click **Add material**: choose this run's output from **Task files**, or use **Upload from this computer**. Extra material does not replace the required files.
4. To have the AI revise, go to the task session through **Ask AI to revise**.
5. Check the file list and click **Submit**. In the confirmation window, check the version, note, and files, then confirm the submission.

While submitting, wait for a clear result from device verification, signing, and file upload. If a system secure-storage authorization prompt appears, handle it yourself. On success, a versioned **delivery snapshot** is created and waits for the owner's review. This version cannot be edited in place; a revision creates a new version.

One delivery can hold at most 20 files, no more than 200 MiB in total; each attached file is at most 100 MiB. Required files may also have task-specific format and size requirements, so follow the submission window's prompts.

![A member delivery draft from an earlier version](/img/docs/collaboration/delivery-draft.png)
*Historical demo screenshot (kept when checked on 2026-11-06; capture date not recorded): shows how the result note, required files, and extra material relate.*

![The submission process from an earlier version](/img/docs/collaboration/delivery-submitting.png)
*Historical demo screenshot (kept when checked on 2026-11-06; capture date not recorded): the upload stage still waits for the final submission receipt.*

## 6. The owner reviews and hands off downstream

On the board, open a task pending confirmation, preview this version's files, and read the result note against the acceptance criteria. To ask for more, use **Request revision** and write specific feedback; the member revises, rechecks, and submits a new version. When the requirements are met, click **Adopt**, and the task moves to Completed.

History keeps older snapshots, so check the current version when reviewing. Only after the upstream is adopted can a downstream task continue to assignment; downstream execution uses the files of the adopted version.

![The owner's revision screen from an earlier version](/img/docs/collaboration/revision-request.png)
*Historical demo screenshot (kept when checked on 2026-11-06; capture date not recorded): a formal revision uses "Request revision"; discussion is for communication.*

![Delivery version history from an earlier version](/img/docs/collaboration/delivery-history.png)
*Historical demo screenshot (kept when checked on 2026-11-06; capture date not recorded): a new delivery keeps the record of the previous version.*

## 7. View shared files and close out

**Shared files** lists project files by source and version, and lets you preview submitted content. **Upload file** here is currently unavailable and shows the reason. To submit material with a task, go back to **Add material** in the delivery draft; do not wait for an upload to succeed on the Shared files page.

After all modules are adopted, the owner checks the results and limitations, then uses the **Close project** entry to confirm completion and waits for signing and the server result.

![The completed project from an earlier version](/img/docs/collaboration/project-completed.png)
*Historical demo screenshot (kept when checked on 2026-11-06; capture date not recorded): shows how module adoption relates to project close-out; it is not an acceptance record for the current release package.*

## Board status at a glance

| Column | Meaning | Next step |
| --- | --- | --- |
| Inbox | The module has not been assigned, perhaps waiting on a dependency or manual assignment | The owner checks the blocking reason and executor |
| To start | Assigned, waiting for the member to accept | The member reads, then accepts, ignores, or declines |
| In progress | Running, waiting for a human answer, or the member is reviewing the draft | Check task details and handle the current request |
| Pending confirmation | A delivery has been submitted | The owner reviews, requests revision, or adopts |
| Completed | The module's result is adopted | The owner closes the project once all modules are done |

On a network interruption, submission failure, or signature error, keep the draft first, check sign-in and device status, and after recovery check whether a submission record already exists before retrying as prompted.

Continue reading: [Pasilla three-person collaboration case](../cases/pasilla-collaboration.md), [Identity & Access](./identity-access.md), [Runtime & models](../getting-started/runtime-and-models.md).
