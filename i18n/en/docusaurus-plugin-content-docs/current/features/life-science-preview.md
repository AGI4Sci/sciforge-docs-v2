---
title: Life Science Preview
description: View structure, sequence, omics, imaging, and spectral files directly in the workspace.
sidebar_position: 10
---

# Life Science Preview

Life Science Preview routes common scientific files to dedicated views, so you can confirm what an object contains in file preview before deciding whether to hand it to an Agent for analysis. It sits in the "read data" stage and works alongside Biology Room, which organizes sample objects, and Dataset API, which fetches public data.

## Opening it

- Entry point: file preview in the file panel; open a supported local or remote workspace file.
- Applies to: workspace files; the extension and the preview manifest select the matching view.
- Prerequisite: the file is in the current workspace; remote workspaces are read by the remote Workspace Host, and the UI does not require downloading the whole file locally first.

## What it can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| View molecular structures | Open `.pdb`, `.cif`, `.mmcif`, `.sdf`, `.mol`, `.mol2`, `.xyz` | Chain, residue, and ligand summaries; a Mol* view; distance, angle, or dihedral measurements when coordinates are available |
| View sequences and genomes | Open `.fasta`, `.fa`, `.fna`, `.faa`, `.fastq`, `.gb`, `.gbk`, `.gff`, `.gff3`, `.gtf`, `.bed`, `.vcf` | Record counts, lengths, features, intervals, variant summaries, and region selection |
| View omics matrices | Open `.h5ad`, `.loom`, `.mtx`, `.h5`, `.hdf5`, `.zarr` | Matrix dimensions, observation/variable keys, embedding names, and metadata summaries |
| View bioimages | Open `.tif`, `.tiff`, `.ome.tif`, `.ome.tiff`, `.czi`, `.svs`, `.ndpi` | Dimensions, channels, OME metadata, region of interest (ROI) and channel selection; thumbnails and tiles for TIFF/OME-TIFF |
| View spectral and proteomics data | Open `.mzml`, `.mzxml`, `.mgf`, `.fcs` | Scan/event summaries, peak counts, intensity ranges, sampled peaks, and peak-interval annotations |
| Carry companion indexes | Open `.fai`, `.gzi`, `.tbi`, `.csi` | Transferred as companion indexes for sequence or genome files, for later object references |

**What it does not parse:** omics files are read as metadata only; HDF5, AnnData, Loom, and Zarr matrices are not decoded; CZI, SVS, and NDPI provide only container metadata placeholders, with no pixel decoding; FCS focuses on the visible header, keywords, and sampled-peak summary and does not provide a full event matrix; trajectory and density files can be handed to the Mol* view, but they fall outside chain, residue, and ligand summary parsing. Preview is a reading aid, not validation-grade format parsing or an analysis tool.

## Typical workflow

1. Confirm the workspace location at the top, then open the target file in the file panel.
2. Check the format, size, dimensions, or record count in the preview to confirm you opened the right file.
3. To continue analysis, create a region, residue, or channel selection so the Agent works on the original file.
4. In a remote workspace, confirm first that reads happen on the remote side; do not ask the Agent to copy a large file just for preview.
5. Treat preview results as session context only; key conclusions should still go back to the original files and compute records.

## Inputs, outputs, and permissions

- Read: preview summaries read the beginning of the file, at most 2 MB for text and 4 MB for binary, with an explicit truncation marker beyond that; the Workspace Host that owns the data performs the read.
- Write: preview itself does not modify source files; export only copies a same-format source file to a new workspace path.
- Approval or external effects: opening and reading need no approval; exporting a copy requires confirmation and writes to a new workspace path.
- What it will not do: convert formats, repair corrupted files, treat a preview summary as complete data, or upload workspace files.

## Known limitations

- Observation lists are truncated with an explicit marker, and oversized selections are rejected.
- Omics matrices, proprietary imaging containers, and FCS are metadata or placeholder previews and cannot support quantitative analysis.
- Bioimage thumbnails and tiles are attempted only for TIFF/OME-TIFF; compressed or non-8-bit TIFFs may fall back to metadata.
- Sequence and genome previews are based on truncated text and cannot replace full format validation or variant calling.
- Unregistered extensions do not enter these dedicated views and are handled as ordinary workspace files.

## Related pages

- [Biology Room](./biology-room.md): organize multiple sequences, structures, and annotations into a traceable room.
- [Dataset API](./dataset-api.md): fetch validated data from public biological databases and object storage.
- [Workbench tools](../workbench/tools.md): how files, the terminal, the browser, and other entry points divide the work.
- [Feature status and limitations](../reference/feature-status.md): the current stance on each capability.

> Implementation basis: `@sciforge/domain-life-science-preview` v1.0.1.
