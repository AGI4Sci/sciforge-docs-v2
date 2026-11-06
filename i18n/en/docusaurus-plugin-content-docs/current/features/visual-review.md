---
title: Visual Review
description: Migration note for the old image-review entry point, and how to review figures now.
sidebar_position: 21
---

# Visual Review

:::info Migration note
In the [current source baseline](../reference/version-and-compatibility.md), the standalone `visual-review` plugin and the old static domain have both been removed. This page keeps its original URL so old links and historical records can still find it. The old toolbar entries and panel operations are no longer current steps.
:::

Do not treat the following from earlier versions as still available: box selection, arrows, circles, pins, review packages, split or overlay comparison, visual-spec recognition, and "accept and replace". The existence of old review data also does not mean the current implementation migrates or reads it automatically. Keep the original files and records, and check the recovery path separately.

The current [Scientific Figures](./scientific-plotting.md) is managed by the standalone Scientific Figures plugin. You describe the change in words as a Python + Matplotlib request, it runs the code to produce a candidate, and you accept it through the host's formal approval. It keeps its own immutable code, input, run, and image versions, and accepting updates the current-figure pointer. It has no on-image annotation interface, and it is not the old Visual Review's general source-image replacement service.

To leave feedback on specific text or a registered task view, use the standalone [Anchored Comments](./anchored-comments.md). Screenshots depend on host authorization and a capture service. Saving a comment does not mean the image was changed, a candidate was accepted, or an artifact version was registered. For cross-artifact source and delivery records, see [Evidence & reproducibility](./evidence-and-reproducibility.md).
