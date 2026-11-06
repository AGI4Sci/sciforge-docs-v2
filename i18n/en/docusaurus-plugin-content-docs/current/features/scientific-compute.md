---
title: Scientific Compute
description: Migration note for the retired capability, and how to keep records of real computation.
sidebar_position: 13
---

# Scientific Compute

:::info[Migration note]
In the [current source baseline](../reference/version-and-compatibility.md), the old `scientific-compute` domain is retired. It no longer provides a callable built-in capability or a standalone plugin. This page keeps its original URL so old links and historical records can still find it.
:::

The old page described a local, deterministic fixture job loop used to test the event trail of submission, monitoring, blocking, and recovery. It never represented real cluster scheduling or real scientific results. Do not keep looking for the status query, the four-scenario baseline run, or the job-monitoring entry point it described.

For real computation, use the [workbench terminal](../workbench/tools.md) and your own compute environment. For remote files and where execution happens, see [Remote & collaboration](../operations/remote-and-collaboration.md). Keep the actual commands, an input summary, software versions, parameters, exit status, and output files, and organize them as described in [Evidence & reproducibility](./evidence-and-reproducibility.md).

Python + Matplotlib figures can use the standalone [Scientific Figures plugin](./scientific-plotting.md). Its code and input snapshots and run receipts are not a general job scheduler. The current baseline should not be read as a promise of built-in Slurm, PBS, or Kubernetes scheduling.
