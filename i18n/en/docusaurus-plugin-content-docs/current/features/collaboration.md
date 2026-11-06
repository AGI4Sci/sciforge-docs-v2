---
title: Collaboration guide
description: Follow the owner and member workflow to confirm requirements, accept tasks, deliver, revise, adopt, and close out a project.
sidebar_position: 61
---

# Collaboration guide

Collaboration lets one owner and several members complete a project together: the owner writes requirements, AI completes work modules, members accept tasks in their own SciForge, execute them, and review drafts, the owner reviews deliveries, downstream work uses adopted results, and the project is closed out at the end.

For first-time use, you can complete one cycle with this page, then see the [Pasilla three-person collaboration case](../cases/pasilla-collaboration.md) and use the real screenshots to understand the completion marker for each step.

## Before you begin

1. Install the SciForge desktop version provided by your administrator that matches the collaboration service.
2. Complete Cloud sign-in and connect the current device as described in [Identity & Access](./identity-access.md). Open **Collaboration** in the left sidebar and confirm the status is **Cloud connected**. Your administrator provides the service address.
3. The owner and each member who will execute tasks configure a working Runtime and model, and first confirm that an ordinary session works. See [Runtime and models](../getting-started/runtime-and-models.md).
4. Prepare the goals, input data, output requirements, and acceptance criteria. Each member participates in the project with their own cloud account.

Work-module completion requires structured output. If a model supports only JSON objects, select the corresponding mode based on channel capabilities in **Settings → Model access → Model API**. The Pasilla case uses OpenAI Chat Completions and **JSON object only**; this is not a fixed setting for every model.

## Roles and pages

| Role | Main actions |
| --- | --- |
| Owner | Create a project, confirm requirements, invite members, adjust assignments, request revisions or adopt deliveries, and close out |
| Member | Accept tasks, converse with the local AI, check files, edit the result note, and confirm submission |
| Coordinator | Helps complete requirements and organize work modules on the owner's side; the owner decides delivery adoption |
| Member's local AI | Executes per the task instructions and generates drafts; drafts require member review and submission |

Use **My work** in the left sidebar to find your own tasks and **Inbox** to handle invitations and assignments. After selecting a project, switch between **Board, Requirements, Files, and Project settings**.

## 1. The owner creates a project and writes requirements

1. Open **Collaboration** and click **+** next to the project area. Enter the project name as prompted and create the project.
2. Open the project's **Requirements** page and edit **Goals & deliverables** and **Inputs & boundaries**.
3. In the goals, state the final files, division of work, and acceptance method. In the inputs, state the available data, sources, and analysis scope.
4. Click **Save requirements**. Saving automatically starts work-module completion; wait for it to finish, then review the results.

For example: “B calculates total sample counts and produces a report; C continues the comparison based on B's adopted report; the report must include methods, validation results, and analysis limitations.” Also provide, in the requirements, the inputs that the tasks can actually read.

**Completion marker**: generated work modules and task instructions appear in a pending-confirmation state. If completion fails, check the message first, make adjustments, and use **Regenerate**.

![The Requirements page after completion, with generated work modules the owner can review before confirming requirements](/img/docs/collaboration/requirements-ready.png)
*Figure 1: The requirements page after completion. Downstream modules explicitly depend on upstream adopted results.*

## 2. The owner confirms requirements, invites members, and checks assignments

1. Review the task instructions, inputs, outputs, and dependencies for each module. If there is a problem, edit the requirements and regenerate first.
2. Click **Confirm requirements** to make the current version the project baseline.
3. Invite members through the project's member management entry. Invitees accept in their own Inbox.
4. Return to the Board and check the owner on each task card. To adjust, open the task card, use the reassignment entry, and select the target member.

**Completion marker**: task cards appear on the Board. Assigned tasks wait for members to accept, and tasks with dependencies show that they are waiting for upstream adoption. The owner can adjust task assignments based on the team's division of work.

## 3. Members accept tasks and have their local AI execute them

1. Open your **Inbox** or **My work** and enter a received task.
2. Read the goals, inputs, delivery requirements, and dependencies, then click Accept task once ready.
3. After acceptance, the local AI starts executing. Use the session entry in the task to view progress, tool calls, and generated files.
4. If you need to add requirements, use **Ask AI to revise** in the draft to enter that task session. When the AI asks questions, answer them in the corresponding entry.

**Completion marker**: a reviewable delivery draft and files appear when execution ends. The AI session ending does not mean the delivery has been submitted; the member still needs to check and confirm it.

## 4. Members review the draft, add materials, and submit

1. Click **Preview** on a file and check whether the content and calculations match the task instructions.
2. Edit the **Result note** to describe what was actually completed, the checks performed, and limitations. It is saved with this delivery version.
3. Click **Add material** and select files produced by this execution from **Task files**, or select your own files through **Upload from this computer**.
4. Check the submission manifest. In the example, the AI README is required, and the member adds a separate note; additional materials do not replace required files.
5. Click **Submit**, check the version, note, and files again in the confirmation window, then confirm.

![A member delivery draft containing the result note, AI README, and an explanatory file the member added](/img/docs/collaboration/delivery-draft.png)
*Figure 2: Version 1 of the draft contains two files. You can still edit the note and adjust additional materials before submitting.*

During submission, the current stage is shown, such as device verification and signing, preparing the submission, or uploading files. If a system keychain authorization prompt appears, handle it yourself, then wait for the app to return a result.

![The submission window showing delivery files being uploaded and the file manifest for this version](/img/docs/collaboration/delivery-submitting.png)
*Figure 3: Uploading is still part of submission; wait for an explicit sealed result.*

**Completion marker**: the draft becomes a versioned **delivery snapshot** marked as submitted and awaiting owner confirmation. A sealed version cannot be edited in place; a revision produces a new version.

:::note[File limits]

One delivery may contain at most 20 files totaling no more than 200 MiB, with each additional file no larger than 100 MiB. Also follow the task's requirements for required files; in this case, the AI README report is capped at 1 MiB.

:::

## 5. The owner previews, requests revisions, or adopts

1. Open a **Pending review** task on the Board, preview the files in the submitted version, and read the result note.
2. Check against the acceptance criteria. If there is a problem, click **Request revision**, write specific feedback, and send it, for example: “Add the zero-count proportion for each sample and list the CPM columns and validation.”
3. The member receives the feedback, makes changes, reviews the work again, and submits a new version.
4. The owner previews that version again, confirms it meets the requirements, and clicks **Adopt**.

![The owner writing specific revision feedback under a submitted delivery and sending a revision request](/img/docs/collaboration/revision-request.png)
*Figure 4: Formal revisions are sent through Request revision; the task discussion box is for communication.*

**Completion marker**: after adoption, the module moves to **Completed**, and the project's adopted count increases. After a member submits successfully, the delivery still waits for owner review.

## 6. Review version history and downstream handoff

Expand **Version history** in the task delivery section to view earlier snapshots. Revisions do not overwrite old versions, so check the current version number during review.

![Version 1 history retained below a version 2 delivery snapshot](/img/docs/collaboration/delivery-history.png)
*Figure 5: The member has submitted version 2, and version 1 can still be expanded.*

Only after an upstream delivery is adopted do dependent downstream tasks continue to be dispatched. When downstream members accept and execute, the system uses files from the adopted upstream version as input, with no manual copying between people. The Pasilla case shows C using B's version 2 report and member note.

## 7. The owner closes out the project

1. Check that all modules have been adopted, for example **Adopted 2/2**.
2. Click the project's **Close project** entry and describe the actual scope completed, outcomes, and limitations.
3. Confirm closeout and wait for device signing and the cloud result.

**Completion marker**: **Completed** appears next to the project title, and all task cards are in the Completed column. Even after all modules are adopted, the owner must still perform the closeout action.

![The project showing Completed and Adopted 2/2, with both task cards in the Completed column](/img/docs/collaboration/project-completed.png)
*Figure 6: The project's final completed state.*

## Board status at a glance

| Column | Meaning | Next step |
| --- | --- | --- |
| Inbox | Modules not yet dispatched, possibly waiting for upstream adoption | The owner checks assignments and dependencies |
| Not started | Assigned and waiting for a member to accept | The member reads and accepts the task |
| In progress | AI is executing, or the member is reviewing or revising the draft | The member reviews and submits |
| Pending review | The delivery is sealed and awaiting review | The owner adopts it or requests a revision |
| Completed | The module delivery has been adopted | The owner closes out after all modules are complete |

## Troubleshooting

| Symptom | Suggested action |
| --- | --- |
| Work-module completion fails | Check the error, verify the model, protocol, and structured-output configuration, adjust, then click Regenerate |
| AI execution fails or is interrupted | Return to the task draft to view the error, then rerun as prompted or continue editing the draft; reruns are billed through the model channel used |
| Submission or closeout reports a device signing error | Keep the content, check sign-in, device connection, and system authorization; verify the current submission record and retry as prompted, and contact your administrator if the error persists |
| Network interruption or reconnecting | Keep the draft, check task status after the connection recovers, and avoid duplicate submissions |

## Data and files

- Requirements, member relationships, tasks, discussions, submitted result notes, and delivery files go to the collaboration cloud service. Ordinary local workspaces are not automatically synced in their entirety as a result.
- When a remote Model API is called, task context and the content the model needs may be sent to the configured model provider. Model keys are managed by local configuration; do not put them in requirements, discussions, or delivery files.
- Keep files that the task marks as required. Other materials can be added through **Add material** and submitted with the delivery.

## Related pages

- [Pasilla three-person collaboration case](../cases/pasilla-collaboration.md): real data, a concrete division of work, and downstream handoff screenshots.
- [Identity & Access](./identity-access.md): cloud accounts and device connections.
- [Runtime and models](../getting-started/runtime-and-models.md): the local execution environment.
- [Remote resources and collaboration](../operations/remote-and-collaboration.md): the difference between remote workspaces and team collaboration.
- [Feature status and limitations](../reference/feature-status.md): the overall support scope at present.

> Implementation basis: `@sciforge/domain-collaboration` v13.0.0.
