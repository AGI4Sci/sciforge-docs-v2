---
title: Running analysis and computation
description: Run analysis in a Python, R, or cluster environment you configured, and keep the inputs, dependencies, and actual outputs.
sidebar_position: 13
---

# Running analysis and computation

Before running an analysis, prepare and verify the Python, R, or cluster environment you configured yourself. When you want the Agent to execute, state in the session the environment to use, the input files, the analysis steps, and the output location; which operations are available depends on the execution environment and permissions.

1. Confirm the location, format, and version of the input files, and keep the raw data and source records.
2. Prepare the scripts and the dependencies they need, and record the interpreter, package versions, and run parameters; for cluster jobs, also record the submit command and resource requests.
3. Actually run the analysis, and check the run status, exit code, and logs; on failure, keep the error message, fix it, and run again.
4. Check that the output files and statistical results match expectations, and save how the inputs, code, dependencies, and outputs correspond. Without an actual run record, do not write an expected result up as a completed computation.

To plot from data and Python code, revise, and accept candidate figures, use [Scientific Figures](./scientific-plotting.md); that plugin must be installed separately with its dependencies configured, and currently supports Python + Matplotlib. For cross-task source and computation records, see [Evidence & reproducibility](./evidence-and-reproducibility.md).
