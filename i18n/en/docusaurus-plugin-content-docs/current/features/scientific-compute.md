---
title: Scientific Compute
description: Validate job cycles, audit events, and reproducible traces with a local deterministic baseline.
sidebar_position: 13
---

# Scientific Compute

Scientific Compute provides a local, deterministic baseline for the job cycle: submission, monitoring, result collection, and event traces all run against fixed local fixtures. It is meant to validate how research compute is recorded, not to submit real cluster jobs. It comes before "preparing real compute"; actual remote execution still goes to the terminal or your own compute environment.

## Opening it

- Entry point: an Agent invokes the baseline task in a session; there is no standalone workbench panel today.
- Applies to: global run state, not bound to any workspace.
- Prerequisite: no scheduler, cluster account, or external service; a working Runtime is needed to make the call.

## What it can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Confirm the current compute provider | Query status | Local fixture with no real scheduler, and only four available scenarios |
| Run a baseline | Choose the success, blocked, rerun, or human-intervention scenario | Job and trace IDs, final state, resource usage, and trace integrity validation |
| Inspect the event stream | Read the returned JSONL | Events such as submit, start, monitor, complete, fail, or recover |
| Demonstrate interruption and recovery | Use the blocked or rerun scenario | Explainable state transitions and fixture artifact summaries |

**Current implementation scope:** the local fixture Provider only. It does not submit external jobs and does not claim support for Slurm, PBS, Kubernetes, or cloud scheduling; for real remote compute, connect to your own environment through the terminal.

## Typical workflow

1. Query status first and confirm that the current provider is the local fixture and that no real scheduler is present.
2. Choose a scenario and run the baseline, recording the trace ID, job ID, and final state.
3. Check the event count, trace integrity validation, and the JSONL to confirm the event chain is complete.
4. For blocked or rerun scenarios, verify state and artifact information to understand retry and recovery semantics.
5. When you need real compute, switch to the terminal in your own environment and bring the command, environment, inputs, and results back into the session.

## Inputs, outputs, and permissions

- Read: provider status; does not read workspace files.
- Write: writes nothing to the workspace; artifact paths and checksums are only fixture descriptions inside the baseline trace.
- Approval or external effects: compute runs locally with no external submission, so it does not trigger approval.
- What it will not do: execute command strings, connect to clusters, produce real scientific results, or use fixture state as a basis for job scheduling.

## Known limitations

- Only four fixed scenarios; results are deterministic fixtures, good for validating traces and flows but not for assessing real performance.
- Baseline traces are not persisted; if you need to keep them, save them explicitly in the session or artifact system.
- No graphical panel, and no way to monitor real queues from the UI.
- Blocked scenarios return fixture diagnostics, not the actual reason a real job failed.
- Slurm, PBS, and Kubernetes automatic scheduling are not declared as bundled capabilities; see [Feature status and limitations](../reference/feature-status.md).

## Related pages

- [Workbench tools](../workbench/tools.md): how the terminal and remote entry points divide the work.
- [Remote and collaboration](../operations/remote-and-collaboration.md): connection boundaries for remote workspaces and external environments.
- [Life Science Preview](./life-science-preview.md): view structure and sequence files before and after compute.
- [Feature status and limitations](../reference/feature-status.md): the current stance on scheduling and remote capabilities.

> Implementation basis: `@sciforge/domain-scientific-compute` v0.1.2.
