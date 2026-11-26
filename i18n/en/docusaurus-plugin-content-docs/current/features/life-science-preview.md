---
title: Life Science Preview
description: View structure, sequence, omics, imaging, and spectral files directly in the workspace.
sidebar_position: 10
---

# Life Science Preview

Open a scientific file to see its summary and choose the chain, region, or channel you want to analyze. Life Science Preview is included in SciForge's Biology Workbench. This page covers version **1.1.3**.

## Open a file

Open **Files** from the toolbar on the far right and select a file in the current workspace. Supported formats open directly in their scientific viewer, showing the file name, format, and structured summary; other formats open in the regular viewer. A remote workspace reads the preview from the remote file within the workspace's permissions and preview size limits.

## Supported formats and preview content

| File formats | What you see when it opens | What to do next |
| --- | --- | --- |
| `.pdb`, `.cif`, `.mmcif`, `.sdf`, `.mol`, `.mol2`, `.xyz` | Chain, residue, and ligand summaries and a Mol* 3D view | Select a region. When coordinates are available, measure distances, angles, or dihedrals. |
| `.fasta`, `.fa`, `.fna`, `.faa`, `.fastq`, `.gb`, `.gbk`, `.gff`, `.gff3`, `.gtf`, `.bed`, `.vcf` | Record counts, lengths, features, intervals, or variant summaries from the read portion | Select an interval and use its coordinates to read, validate, or analyze the source file. |
| `.h5ad`, `.loom`, `.mtx`, `.h5`, `.hdf5`, `.zarr` | Matrix dimensions, observation and variable field names, and dimensionality reduction names from the read portion | Note the fields you need, then open the full matrix from the source file with an analysis tool. |
| `.tif`, `.tiff`, `.ome.tif`, `.ome.tiff`, `.czi`, `.svs`, `.ndpi` | Dimensions, channels, and OME metadata. Supported TIFF and OME-TIFF files can show thumbnails and regions | Select a region of interest (ROI) or channel where available. Use an imaging tool for the pixels in CZI, SVS, or NDPI, or in a compressed or non-8-bit TIFF that only shows file information. |
| `.mzml`, `.mzxml`, `.mgf`, `.fcs` | Scan or event summaries, peak counts, intensity ranges, and sampled peaks from the read portion. FCS mainly shows headers and keywords | Annotate a peak interval where available. Use an FCS tool to read the full event matrix. |
| `.fai`, `.gzi`, `.tbi`, `.csi` | An index for an accompanying sequence or genome file | Reference the index together with its companion data file. |

Scroll down inside the preview to see additional spectrum, omics, and image summary cards. Use the Mol* view to inspect trajectory or density files; open the corresponding structure file for chain and residue summaries.

## Select molecular regions

Click a residue in the Mol* 3D view to add it to the selection. Click the same residue again to remove it, or click empty space to clear the selection. In the **Selection** panel below the viewport, clicking a `Chain <ID>` button replaces the current selection with that chain; you can also click a ligand button or the clear button there. The 3D highlight and the **Selection** panel list the currently selected chains, residues, atoms, or ligands.

Click individual residues one at a time. **Shift**-clicking in Mol* selects a continuous stretch along a polymer; if the **Selection** list shows a wider range than intended, click empty space or the clear button and click the needed residues individually.

Selections are stored in the file's preview session state. After closing and reopening a file, check the 3D highlight and **Selection** list before continuing. When continuing analysis in chat, include the chain ID and residue or atom numbers in your prompt.

## Continue analysis from a preview

In the session, specify the file path, selected region or channel, and the question to analyze. For a remote workspace, give the remote source file path. Use the preview summary to locate regions or field names; for quantitative analysis, full format validation, or variant calling, have your script or tool read the source file and report the input file, command, and output.

## Read limits and exported copies

The summary reads the beginning of the file, up to **2 MB (2,000,000 bytes)** for text or **4 MiB (4,194,304 bytes)** for binary data. When the preview says it is incomplete, its counts cover only the portion it read. Calculate whole-file counts from the source. If a selection is too large, narrow it and try again.

To export a copy, open the scientific file from **Files** on the right. Keep the preview open, and in a session with file-preview tools request a copy in the original format. Provide the source and a new workspace-relative destination. For example, open a FASTA file and request a copy at `exports/copy.fasta`. Use any available destination that keeps the original format.

Opening the preview and reading it require no confirmation. Approve the export after reviewing the source and destination in the write confirmation. Then open the destination folder in **Files**. The copy appears there with the same file extension.

## Related pages

- [Biology Room](./biology-room.md)
- [Get and organize data](./dataset-api.md)
- [Workbench tools](../workbench/tools.md)
- [Feature status and limits](../reference/feature-status.md)
