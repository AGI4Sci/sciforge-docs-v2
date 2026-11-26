---
title: View and revise figures
description: Describe figure changes in words, then compare and accept the candidate after it actually runs.
sidebar_position: 21
---

# View and revise figures

Use the standalone [Scientific Figures](./scientific-plotting.md) plugin to generate figures from data and Python + Matplotlib code. Install a compatible plugin and prepare the environment it needs first, then state the plotting or revision request in words.

1. Choose the data and code in the workspace, and say what to change, for example "keep the data, make the line blue, and shorten the title". With only an image, the exact data cannot be recovered.
2. Have the Agent save a new code version and actually run it, then click **Refresh (刷新)** to see the candidate figure.
3. Compare the current version and the candidate under **Current (当前图)** and **Revised (修改后)**; when there are several candidates, switch among them in the **Candidate (候选)** dropdown.
4. When satisfied, click **Request acceptance (申请接受)**, open the approval request in the session, and click **Allow (允许)** to make the candidate the current figure; to keep revising, state the next request.

The plugin keeps immutable code, input, run, and image versions; accepting a candidate updates the current figure, while the original figure and the run records are kept. After a figure changes, a candidate may need to be regenerated. It has no on-image boxes, arrows, or pins for annotation, and it does not register records with artifact versions or evidence relationships automatically.

To leave feedback on specific text, use the standalone [Anchored Comments](./anchored-comments.md). When you need a screenshot, enable that feature first. A comment only records feedback; changing the image still requires running the plot again and accepting the candidate. For organizing and delivering results, see [Evidence & reproducibility](./evidence-and-reproducibility.md).
