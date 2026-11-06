# SciForge video tour

Recorded 2026-09-05. A documentation walkthrough with images and text; interface screenshots do not represent a live continuous session.

Documentation site: https://agi4sci.github.io/sciforge-docs-v2/en/

## 01 Starting from a research task

### 00:00:00.000 · SciForge · research workbench

Page: https://agi4sci.github.io/sciforge-docs-v2/en/

Welcome to SciForge. This tour goes from a research question to inputs, execution, and checkable deliverables.

These are the new docs with real interface screenshots: a feature walkthrough, not a continuous experiment recording.

### 00:00:11.533 · Home page cases · tasks, outputs, and verification status

Page: https://agi4sci.github.io/sciforge-docs-v2/en/

The home page shows each case's goal, key outputs, and verification status, so you can judge if it fits your task.

On the left: cross-scale data to evidence review. On the right: the external model benchmark, kept marked experimental.

### 00:00:22.733 · Feature groups · find an entry point by task

Page: https://agi4sci.github.io/sciforge-docs-v2/en/

Features are grouped as research workflow, workbench, and connections and extensions, so you can start from your goal.

Switch to the workbench to learn sessions, Agent collaboration, and tools.

Connections and extensions covers the runtime, remote resources, and specialized capabilities.

### 00:00:34.600 · See a full case first, then learn the features

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/overview

Start with the two virtual cell cases to see a task go from data to evidence and report, then look up features as needed.

Case one reviews existing outputs. Case two is external model benchmarking, still an experimental flow.

## 02 Completing your first safe task

### 00:00:45.533 · Model access and the execution runtime

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/getting-started/runtime-and-models

Model access provides the model; the runtime handles files and tools. This read-only tutorial uses Codex.

In Settings at lower left, open AI assistant, find the Codex section, and check the command and sign-in status.

### 00:00:56.400 · Turn on the read-only sandbox

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/getting-started/read-only-sandbox

In the Codex section, change "can modify the working directory" to "read files only", then restart and start a new session.

Claude's plan mode is not equivalent to this sandbox. Saying "do not modify files" does not guarantee isolation.

### 00:01:07.133 · Record the file state before the task

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/getting-started/five-minute-quickstart

Use a clean Git workspace, run the status command on the page and save the output; for a non-Git project, copy it first.

Then open the local project, confirm the directory and session, and send the task.

### 00:01:16.733 · Send the full prompt from the documentation

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/getting-started/five-minute-quickstart

Paste the full read-only prompt into the input box. The task only looks at top-level files and judges what the project is.

A stated scope, expected output, and prohibitions help you judge whether the result really met the request.

### 00:01:27.400 · Check the execution

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/getting-started/five-minute-quickstart

Watch file reads, tool calls, and command results. For an approval request, check the actual action and target path.

These screenshots show one read-only session, so you can compare the three stages: send, run, finish.

### 00:01:38.267 · Accept with both the result and the Git status

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/getting-started/five-minute-quickstart

Check the answer and compare Git status again. It skips ignored files; for strict acceptance, compare file lists and hashes.

If something changed unexpectedly, stop, keep the scene, and use the sandbox and troubleshooting pages to find the cause.

## 03 Case 1 · Cross-scale evidence review

### 00:01:50.000 · ECCITE-seq · from research question to delivery

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-evidence-atlas

Case one covers the evidence relationships among transcription, protein, pathways, and cell fitness after a perturbation.

This real output is opened in the current dev build. Browsing is verified; a full rerun still needs step-by-step checks.

### 00:02:00.467 · Inputs, scripts, and outputs in the workspace

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-evidence-atlas

Take stock in the Files panel: source data, rebuild scripts, derived tables, figures, report. Each stage needs clear inputs and outputs.

Before writing, check the plan and output directory, and record code version, input hashes, and environment.

### 00:02:12.067 · Write the research task as checkable requirements

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-evidence-atlas

The full prompt starts with a file inventory, then a plan, quality checks, a review table, figures, and a dossier.

It also requires keeping controls and missing data, stating evidence limits, and listing external actions to confirm.

### 00:02:22.933 · Stage 1 · Freeze sources and audit quality

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-evidence-atlas

The inventory and quality report are stage-one deliverables. Check controls were not lost and "not measured" is not read as "no response".

The figure keeps each layer's coverage and missing status. Never fill missing values with zeros; warnings go in the report.

### 00:02:34.067 · Stage 2 · Trace perturbations and responses row by row

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-evidence-atlas

Link perturbations, target annotations, pathways, and responses in a review table, with source and transformation per row.

With only a ready-made derived table, limit the scope to reviewing derived results, not redoing the raw-data analysis.

### 00:02:45.400 · Stage 3 · Generate figures from audited results

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-evidence-atlas

Figures come from audited derived tables, recording input, script, parameters, and version, so result paths stay visible.

If transcription and protein disagree in direction, keep the result and check the time scale and panel coverage.

### 00:02:56.400 · Separate observations, candidate explanations, and causal conclusions

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-evidence-atlas

Cross-layer agreement helps form hypotheses, but one figure cannot support a causal conclusion by itself.

In the report, separate supported claims, candidate explanations, and claims the data still cannot support.

### 00:03:05.467 · Stage 4 · Review and lock down the delivery

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-evidence-atlas

Finally, check file changes, link each key claim to data, method, figure, and limits, and save versions and a checkpoint.

The dossier should hold results, warnings, failed paths, and rerun steps, so another researcher can keep checking.

## 04 Case 2 · External model prediction benchmark

### 00:03:16.733 · Experimental · confirm the model and verification status first

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-benchmark

Case two is for researchers with an external prediction model. SciForge organizes protocol and runs; the model predicts.

It is marked experimental: full model runs and continuous verification are unfinished. This shows the flow and requirements.

### 00:03:28.067 · Tell offline scoring from the official pre-check

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-benchmark

Offline: open the reference answer only after predictions are sealed, then score locally. Official: pre-check with current tools.

Do not mix the truth and scoring claims of the two paths; a passed pre-check is not an upload or an official score.

### 00:03:39.333 · Pin the protocol, model, and environment before predicting

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-benchmark

Before the first prediction, fix the data split, metrics, aggregation rules, stopping conditions, and what the model may see.

Record code, weights, environment, device, and seed for every run, so reruns never silently swap the model or preprocessing.

### 00:03:50.467 · Check hard contracts on a small sample

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-benchmark

First check the smallest slice: shape, gene order, background labels, cells per condition, and value types.

Exact requirements follow the official data package and CLI docs. If any hard check fails, skip the full prediction.

### 00:04:01.200 · Seal predictions and keep a separate run record

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-benchmark

After prediction, hash the files and keep the command, return code, logs, and outputs in a separate run directory.

The offline reference is for scoring only after sealing. A rerun makes a new record and keeps its differences.

### 00:04:11.400 · Report the overall score, and the failure conditions too

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/cases/virtual-cell-benchmark

Split the result into contract checks, metric components, performance by background and perturbation, and interpretation.

Keep failure conditions and limits, don't turn one total score into a mechanism claim, then add the records to the dossier.

## 05 Understanding the workbench and Agent collaboration

### 00:04:21.533 · The workspace scopes inputs; the session keeps context

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/workbench/workspaces-and-sessions

The workspace holds project files; the session holds the goal and execution trail. Confirm project name and directory first.

Open outputs and reference paths from the Files panel, so questions can go back to real inputs and generating scripts.

### 00:04:31.933 · State the goal, boundaries, deliverables, and stopping conditions

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/workbench/agent-workflows

A task for the Agent states at least the goal, input scope, deliverables, permissions, and stopping conditions.

For complex tasks: check, plan, then execute and verify. If incomplete, name the missing evidence and acceptance criteria.

### 00:04:42.333 · Check tool results and file changes

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/workbench/workspaces-and-sessions

Check tool calls, terminal output, and return codes, then open the Changes panel for additions, edits, and deletions.

A task delivers actual files plus the evidence you checked, and the final answer should help you find them.

## 06 Organizing evidence and reproducible records

### 00:04:52.067 · Choose a record object by purpose

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/features/evidence-and-reproducibility

A file version pins an artifact, a checkpoint pins a stage, and the evidence graph links claims to supporting data and methods.

The dossier turns these records into a readable research narrative; each object has its own job.

### 00:05:02.067 · Let conclusions trace back to inputs and process

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/features/evidence-and-reproducibility

A dossier keeps the question, inputs, methods, results, credibility, limitations, and how to rerun.

In review, follow a conclusion to its figure, then script, data, and run record, and confirm the chain has no gaps.

## 07 Scheduling recurring tasks and multi-step flows

### 00:05:12.133 · Scheduled tasks · repeat on a schedule

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/features/automation

For a task that repeats regularly, set its frequency, workspace, inputs, and notification policy.

Verify the smallest task by hand once, then check the scheduled run's output, logs, and failure records.

### 00:05:21.133 · Loop · organize dependencies, conditions, and checks

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/features/automation

When steps have dependencies and branches, use the flow canvas to organize nodes, conditions, and human checks.

Define recovery paths and stop conditions for failing nodes; automated runs keep the task's original permissions.

## 08 Extending capabilities and connecting remote resources

### 00:05:30.667 · Choose extension capabilities as needed

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/features/extensions

The Extension Center shows each extension's source, version, and status. Find the capability, then verify it with a minimal task.

"Enabled" only describes configuration; for a specific task, still check the actual run result.

### 00:05:41.333 · Skills, MCP, and GUI tools

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/features/extensions

Skills give specialized methods; MCP connects external tools and data; GUI tools handle steps that must operate an app.

Before use, understand scripts, dependencies, credentials, and external effects; prefer clear, checkable tools.

### 00:05:53.133 · Connect existing servers and compute environments

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/operations/remote-and-collaboration

For a lab server or remote compute, set up an SSH workspace through the remote resources wizard.

Confirm the remote path and environment, keep the same inputs, outputs, and run records, and check recovery after disconnects.

### 00:06:03.933 · Confirm the project and data scope before collaborating

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/operations/remote-and-collaboration

The cloud collaboration page connects to and shows projects; what you can use depends on the service and permissions.

Before inviting members, syncing files, or uploading data, confirm the target project, data content, and access scope.

## 09 Security, troubleshooting, and next steps

### 00:06:14.267 · Keep permissions consistent with the task scope

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/operations/security

Read-only analysis and write tasks use different file scopes. When approving, check the command, path, and external target.

Keep credentials out of screenshots and logs; also check license, de-identification, and sharing rules for research data.

### 00:06:24.333 · Locate problems across five layers

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/reference/troubleshooting

When something fails, check in order: workspace, runtime and model, tools and permissions, external services, artifacts.

When reporting a problem, include version, platform, reproduction steps, a redacted log, and expected versus actual results.

### 00:06:35.133 · Next · run the read-only task, then pick a case

Page: https://agi4sci.github.io/sciforge-docs-v2/en/docs/intro

Now run the read-only task yourself from the five-minute quickstart, then pick a case close to your research goal.

Keep checking feature status and limits, and make every analysis a deliverable you can open, check, and rerun.
