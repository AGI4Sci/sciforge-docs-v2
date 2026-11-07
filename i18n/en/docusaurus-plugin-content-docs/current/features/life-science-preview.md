---
title: Life Science Preview
description: View structure, sequence, omics, imaging, and spectral files directly in the workspace.
sidebar_position: 10
---

# Life Science Preview

Life Science Preview ships with SciForge, with no separate plugin needed. It shows the structure and summaries of scientific files to help you locate material for further analysis. Full data analysis still requires reading the original files and running the appropriate tools.

## Open a file

Open a file in the current workspace's file panel. Supported formats display the corresponding scientific preview; other formats open as ordinary files.

Both local and remote workspaces are supported. Remote files are read from the remote side, so previewing does not require downloading the entire file to this machine first. Reads remain subject to workspace permissions and size limits.

## Supported formats and preview content

| Purpose | Supported formats | Preview content |
| --- | --- | --- |
| View molecular structures | `.pdb`, `.cif`, `.mmcif`, `.sdf`, `.mol`, `.mol2`, `.xyz` | Chain, residue, and ligand summaries and a Mol* 3D view; distance, angle, or dihedral measurements when coordinates are available |
| View sequences and genomes | `.fasta`, `.fa`, `.fna`, `.faa`, `.fastq`, `.gb`, `.gbk`, `.gff`, `.gff3`, `.gtf`, `.bed`, `.vcf` | Record counts, lengths, features, intervals, and variant summaries; analysis-region selection |
| View omics file information | `.h5ad`, `.loom`, `.mtx`, `.h5`, `.hdf5`, `.zarr` | Readable file information such as matrix dimensions, observation and variable field names, and dimensionality-reduction result names; the full matrix is not read |
| View biological imaging information | `.tif`, `.tiff`, `.ome.tif`, `.ome.tiff`, `.czi`, `.svs`, `.ndpi` | Dimensions, channels, and OME metadata; region of interest (ROI) and channel selection where supported, or thumbnails and local image regions for TIFF/OME-TIFF |
| View spectral and flow cytometry summaries | `.mzml`, `.mzxml`, `.mgf`, `.fcs` | Readable scan or event summaries, peak counts, intensity ranges, and partial peak data; peak-interval annotations can be added |
| View companion index files | `.fai`, `.gzi`, `.tbi`, `.csi` | Recognizes companion indexes for sequence or genome files for use in later operations; indexes are not parsed as sequence or variant data |

## Select molecular regions

In the molecular preview's selection panel, choose a chain or ligand to highlight it in the 3D view. Click **Clear** to remove the highlight. A selection can contain multiple chains, residues, atoms, or ligands.

**Selection state is separate from the source file.** Actions in the selection panel update the current file's preview-session state; they do not write selections into PDB, CIF, or other source files. The preview session and chat session are separate records, and an on-screen highlight does not mean the selection has been saved permanently.

After closing and reopening a file, check the selection you want to keep using. Include important chain, residue, or atom identifiers in your analysis request as well. That gives the AI assistant an explicit scope to follow even if the selection state was not retained.

In the 3D view, clicking a residue adds it to the current selection; clicking a selected residue again deselects it. If you click residue A and then residue B, both remain selected. Clicking empty space clears the selection. Clicking a chain button in the selection panel replaces the current selection with the entire chain. Holding Shift while clicking may select a polymer range rather than toggle a single residue.

Summaries for spectra, omics matrices, and biological images are arranged as cards. If the content is long, scroll within the preview panel to view it.

## Continue analysis from a preview

1. Confirm the current workspace, then open the target file in the file panel.
2. Check the filename, format, size, and summary to confirm that it is the intended file.
3. Select regions, residues, or channels as needed, then tell the AI assistant the file path, analysis scope, and goal in the session.
4. In a remote workspace, have the assistant read the original file directly on the remote side. There is no need to copy an entire large file just to preview it.
5. Check the original data, commands, and run results used in the analysis. Preview summaries help you locate and understand files; they do not replace computation records.

## Read limits and exported copies

- Summaries read only the beginning of a file: up to **2 MB (2,000,000 bytes)** of text or **4 MiB (4,194,304 bytes)** of binary data. Content beyond that is marked as incomplete, and counts in the summary may not represent the entire file.
- Previewing does not modify the source file. Exporting copies the source file in its original format to a new workspace path; it does not convert formats or repair damaged files.
- Opening and reading require no confirmation. Exporting a copy requires confirmation; check the save path before proceeding.
- Previewing and exporting do not upload workspace files. To upload, convert, or repair a file, give the assistant a separate task.

## Limits by preview type

- Item lists may show only an initial portion and indicate that they are incomplete. Selections that are too large are rejected with a prompt; narrow the selection.
- Omics previews mainly show file information. They do not read full matrices from HDF5, AnnData, Loom, or Zarr and cannot be used directly for quantitative analysis.
- CZI, SVS, and NDPI display only readable file information, not actual pixel content.
- FCS mainly displays the readable header, keywords, and partial peak data, without a full event matrix.
- TIFF/OME-TIFF attempts to generate thumbnails and local image regions. Compressed or non-8-bit images may show only file information.
- Sequence and genome summaries are based on partial text and cannot replace full format validation or variant calling.
- Trajectory and density files can be viewed in the Mol* 3D view, but they do not generate chain, residue, and ligand summaries.

## Version information

Life Science Preview is part of the app's built-in Biology Workbench. This documentation corresponds to version **1.1.3**.

## Related pages

- [Biology Room](./biology-room.md): organize related scientific files and annotations in one place.
- [Acquiring and organizing data](./dataset-api.md): download data and record its source, date, version, license, and verification results.
- [Workbench tools](../workbench/tools.md): learn how to use file previews, the terminal, and the browser.
- [Feature status and limitations](../reference/feature-status.md): check usage requirements and current limits.
