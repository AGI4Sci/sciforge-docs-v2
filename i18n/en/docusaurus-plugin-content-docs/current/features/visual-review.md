---
title: Visual Review
description: Annotate revision notes on an image, then replace the source image after human confirmation.
sidebar_position: 21
---

# Visual Review

Visual Review turns "this is wrong here" into structured feedback the Agent can act on. It sits between producing a figure and delivering it: you point out the problems and make the final call, the Agent generates candidate versions from the annotations, and the plugin saves the comments, review package, and acceptance record.

## Opening it

- Entry point: **Visual Review** in the top toolbar opens the right panel; a specific review starts from an image in the session.
- Applies to: raster images, generated images, edited images, scientific charts, or slide images in the current workspace.
- Prerequisite: the workspace is available; one review document binds one source image, and opening from a versioned artifact validates the digest and byte length. Generating a candidate version needs a Runtime and an image-generation MCP; annotating and exporting a review package alone needs no external service.

## What it can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Point out what to change | Annotate with **Box**, **Arrow**, **Circle**, and **Pin**, and fill in revision suggestions | Structured comments |
| Hand the feedback to the Agent | Click **Generate revised version**; the plugin saves the comments, exports the review package, and sends the revision request | Candidate version |
| Compare before and after | Inspect the candidate with **Before**, **After**, **Split compare**, and **Overlay compare** | A difference judgment |
| Accept or reject | **Accept and replace** or **Reject** | A new version, or the source image kept as is |
| Unify the visual style | Choose a reference image in **Image style detection** | A paper visual specification bound to the document |

## Typical workflow

1. Open **Visual Review** from an image in the session and confirm the source image and workspace; if it comes from a versioned artifact, confirm the bound version.
2. Pick an annotation tool and mark the problem, then fill in a revision suggestion for each item; comments you have handled can be marked resolved.
3. Click **Generate revised version**. The plugin saves the comments as a review package and sends a constrained revision request in the current session.
4. The candidate enters the comparison view once it is ready. Check cropping, overlap, label legibility, and whether data and unannotated regions were changed by mistake.
5. When everything looks right, click **Accept and replace**; to redo it, click **Reject**. After acceptance the source image is replaced, and the old image keeps a revision backup.

## Inputs, outputs, and permissions

- Read: workspace raster images, review documents, bound Artifact Versions, existing comments, and candidate versions.
- Write: review documents and comments, review packages; on accepting a candidate, first commit an Artifact Version, then atomically replace the source image and keep a backup.
- Approval or external effects: **Accept and replace** is destructive and must be confirmed; generating a candidate calls the Agent/image-generation chain and may incur model calls and costs.
- What it will not do: generate or edit images itself; overwrite the source image before a candidate is accepted; parse document layout or vector source files.

## Known limitations

- Supports bounded raster images only (common PNG/JPEG/WebP and similar); slides are reviewed as images too, with no element-level editing.
- Candidate versions must be produced by the Agent/image-generation chain and pass candidate QA; this plugin offers no "edit the image directly" button.
- A document currently shows only one active candidate version; to try another approach, accept or reject the existing candidate first.
- After acceptance, downstream documents are not recompiled automatically; the plugin prompts the Agent to recompile and check references.

## Related pages

- [Scientific Figures](./scientific-plotting.md): a separate chat-based Python plotting plugin that compares candidates in its own panel and requests formal acceptance; it does not require the on-image annotation tools described on this page.
- [Evidence & Reproducibility](./evidence-and-reproducibility.md): acceptance produces a new Artifact Version.
- [Agent workflows](../workbench/agent-workflows.md): how revision requests return to the session and produce candidates.
- [Permissions and security](../operations/security.md): destructive operations and confirmation boundaries.

> Implementation basis: `@sciforge/domain-visual-review` v1.0.2.
