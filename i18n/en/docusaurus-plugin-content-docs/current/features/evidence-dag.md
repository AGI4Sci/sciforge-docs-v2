---
title: Evidence DAG
description: Connect claims in a session to their sources, methods, artifacts, and limitations.
sidebar_position: 44
---

# Evidence DAG

Evidence DAG helps you check what a conclusion rests on: in the graph, see the sources, computation steps, figures, and limitations that support or refute it. First finish the analysis and save the sources, results, and related files, then click **Update** to save the evidence graph; after the update finishes, separately check the relationships and gaps in the graph. To combine several sessions, use [Project DAG](./project-dag.md).

## Opening it

- Entry: in the Research panel, click **View evidence graph**. When the standalone evidence panel is open, switch from the default **Research record** to **Evidence graph**.
- Target: the evidence graph already saved in the current session.
- Prerequisite: the task has left sources, an analysis process, and result records, and the evidence-graph feature and the text-reasoning configuration are available.

## Save and check the evidence graph

1. Finish a round of analysis, and save the sources actually used, the computation records, the result files, and the matching artifact versions; make clear which are conclusions and which are still hypotheses.
2. Click **Update**, wait for queueing and execution to finish, and confirm the new evidence graph has been saved. Updating calls the configured text-reasoning service and saves evidence records, with no extra approval.
3. In the graph, select a conclusion and its related nodes, and check item by item whether the sources, runs, code, environment, and artifact versions support it. Even after a successful save, this review is still yours to do.
4. Check whether the conclusion can be traced to its sources, find missing records and known limitations, and handle the prompts about a missing source, an unverified version, or a missing approval. After adding real records, update again and check the result.
5. To combine several sessions, first confirm this session's evidence graph has been saved, then go to Project DAG and update the project graph manually.

## Further checks

- Click **Audit** to check the structure of the saved evidence graph and see the gap hints. For now it only checks the graph's structure (L0); you still have to judge whether a conclusion has a scientific basis.
- Select a Conclusion node and click **Download rerun spec** to download the configuration notes needed to rerun the analysis. Before rerunning, also confirm that the input files, software, parameters, environment, and related result files are available; downloading the spec does not run the analysis.
- To check whether an analysis can be rerun under its original conditions, verify that the input files, software versions, parameters, environment, run records, logs, and result files are complete and verifiable. If the analysis involves randomness, also record the random seed; this is also required to reach the L4 reproducibility level.

## Tips

- If no claims, sources, or artifacts have been saved yet, the graph may be empty. Save the analysis records and actual files first, then update the evidence graph.
- If an update fails, you can keep viewing the graph saved before, but make sure you know which result you are reviewing. Only a saved graph can be used for audit.
- When a source or run record is missing, the graph shows a prompt. Go back to the actual source and run records to check; a chat summary alone cannot fill the gap.
- Restricted evidence may not be previewable, and you should respect the source's access permissions.
- Rebuilding is only for upgrades, corruption recovery, or reinterpretation, and needs a stated reason and justification; for everyday additions to the record, use Update.

## Related pages

- [Evidence & Reproducibility](./evidence-and-reproducibility.md): the group overview and the recommended record chain.
- [Project DAG](./project-dag.md): combine the evidence graphs several sessions have saved into a project view.
- [Research Dossier](./research-dossier.md): read research records and prepare delivery.
- [Artifact Versions](./artifact-versions.md): save the artifact versions that evidence references.
- [Virtual cell evidence atlas case](../cases/virtual-cell-evidence-atlas.md): how evidence is organized in a complete task.
