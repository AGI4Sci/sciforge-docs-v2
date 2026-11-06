---
title: Anchored Comments
description: Anchor comments to specific content and hand them to the Agent as explicit context.
sidebar_position: 22
---

# Anchored Comments

Anchored Comments answers the question "which spot exactly do I mean?" It binds feedback to a specific file, text selection, or UI region, saves the screenshot evidence from that moment, and gives people and the Agent one shared comment thread. Use it to leave traceable feedback while reading, checking a chart, or trying out the interface.

## Opening it

- Entry point: **Comment on anything** in the top toolbar; after you enter comment mode, point at registered research content or a UI element, and the **Comments** overlay opens once the comment is saved.
- Applies to: visual targets that the Host has registered and that are not marked sensitive; these can be research content in a file, a text selection, or a UI region.
- Prerequisite: the workbench and the target content open normally; submitting product feedback requires a configured HTTPS feedback gateway.

## What it can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Comment on specific content | Open **Comment on anything**, click the target, fill in the comment, and **Save comment** | A comment with an anchor and a screenshot |
| Distinguish purpose | Choose **Research content** or **SciForge feedback** in the editor | A research comment or product feedback |
| Manage follow-ups | Mark resolved, reopen, or delete in **Comments** | Comment status |
| Give the Agent context | Tick comments and click **Attach N comments to the next message** | Explicit context for the next message |
| Submit a product issue | Click **Submit feedback** on a product feedback comment and confirm the public content | A GitHub Issue |

## Typical workflow

1. Open the page or research content you want to discuss and turn on **Comment on anything** in the top toolbar.
2. Point at the target region and click; the editor shows the comment target. Choose **Research content**, then write what you want the Agent to understand or change.
3. Click **Save comment**. The plugin saves the anchor, target description, and screenshot evidence, and creates a thread in **Comments**.
4. Tick the comments you want the Agent to see and click **Attach N comments to the next message**; only the ticked comments go into the next message.
5. Follow up status in **Comments**; mark a comment resolved once the issue is settled, and delete comments that were created by mistake or are stale (confirmation required).

## Inputs, outputs, and permissions

- Read: labels, positions, and accessible names of registered targets, host-provided screenshots, and existing comment threads.
- Write: comment threads, anchors, screenshot evidence, and status; deleting a comment writes back to local storage and requires confirmation.
- Approval or external effects: **Submit feedback** is an external write and requires confirmation; it publicly uploads the comment, the ticked screenshots, and the environment or logs to a GitHub Issue, and unticked content should not be included.
- What it will not do: traverse the app DOM, choose redaction regions itself, automatically send unticked comments to the Agent, or submit product feedback automatically.

## Known limitations

- Only visual targets registered by the host can be commented on; unregistered or sensitive regions are rejected with a notice that the region cannot be commented on.
- Screenshot capture and redaction are the host's responsibility; the plugin stores only the immutable evidence the host returns.
- Product feedback depends on a configured HTTPS feedback gateway; without one, no Issue can be created.
- At most 8 comments can be attached at once; each thread carries only its 6 most recent messages, and anything beyond that does not enter the context.

## Related pages

- [Visual Review](./visual-review.md): region-by-region review of an image with candidate confirmation.
- [Agent workflows](../workbench/agent-workflows.md): how attached comments enter the next message.
- [Permissions and security](../operations/security.md): external writes, public uploads, and confirmation boundaries.
- [Feature status and limitations](../reference/feature-status.md): the current definition of capability status.

> Implementation basis: `@sciforge/domain-anchored-comments` v1.0.2.
