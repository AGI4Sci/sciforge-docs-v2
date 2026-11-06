---
title: Life Science Preview
description: View structure, sequence, omics, imaging, and spectral files directly in the workspace.
sidebar_position: 10
---

# Life Science Preview

Life Science Preview is a preview submodule of the built-in `@sciforge/domain-biology-workbench` **1.1.3**. It shares one domain package with Biology Room, ships with the app, and needs no marketplace install or plugin enablement. It routes common scientific files to 6 preview slots and 5 kinds of viewer; the companion-index slot only transports. The old standalone life-science-preview plugin and domain package have been removed, while the preview slots and wire identifiers stay compatible. For how versions are quoted, see [Version & Compatibility](../reference/version-and-compatibility.md).

## Opening it

- Entry point: file preview in the file panel; open a supported local or remote workspace file.
- Applies to: workspace files. The view is chosen from the extension and the preview manifest.
- Prerequisite: the file is in the current workspace. For a remote workspace, the remote Workspace Host reads it, and the interface does not require downloading the whole file to this machine first.

## What it can do

| What you want to do | How | Output |
| --- | --- | --- |
| View molecular structures | Open `.pdb`, `.cif`, `.mmcif`, `.sdf`, `.mol`, `.mol2`, `.xyz` | Chain, residue, and ligand summary; Mol* view; distance, angle, or dihedral measurement when coordinates are available |
| View sequences and genomes | Open `.fasta`, `.fa`, `.fna`, `.faa`, `.fastq`, `.gb`, `.gbk`, `.gff`, `.gff3`, `.gtf`, `.bed`, `.vcf` | Record count, length, features, intervals, variant summary, and region selection |
| View omics matrices | Open `.h5ad`, `.loom`, `.mtx`, `.h5`, `.hdf5`, `.zarr` | Matrix dimensions, observation/variable keys, embedding names, and a metadata summary |
| View biological imaging | Open `.tif`, `.tiff`, `.ome.tif`, `.ome.tiff`, `.czi`, `.svs`, `.ndpi` | Size, channels, OME metadata, region of interest (ROI) and channel selection; thumbnails and tiles for TIFF/OME-TIFF |
| View spectra and proteomics | Open `.mzml`, `.mzxml`, `.mgf`, `.fcs` | Scan/event summary, peak count, intensity range, sampled peaks, and peak-interval annotations |
| Carry a companion index | Open `.fai`, `.gzi`, `.tbi`, `.csi` | Transported as the companion index of a sequence or genome file, for later object references |

**What is not parsed:** For omics, only metadata is read; HDF5, AnnData, Loom, and Zarr matrices are not decoded. CZI, SVS, and NDPI give only container-metadata placeholders and no pixel decoding. FCS mainly shows the visible header, keywords, and a sampled-peak summary, without a full event matrix. Trajectory and density files can be handed to the Mol* view, but they are outside the scope of chain, residue, and ligand summaries. The preview is a reading aid, not validation-grade format parsing or an analysis tool.

## Molecular selection and what gets saved

A molecular selection can express multiple chains, residues, atoms, and ligands. The Inspector offers chain, ligand, and clear actions. A selection sent back by the host is synced to Mol*, including the latest selection during asynchronous initialization. The source file stays read-only.

After changes, reopen the file and check the selection. For now there is no commitment that every click in the 3D viewport is saved automatically, or that rapid successive selections are kept in order. A highlight in the viewport does not by itself mean the selection was saved.

## Typical workflow

1. Confirm the workspace location at the top, and open the target file in the file panel.
2. Check the format, size, dimensions, or record count in the preview to make sure you opened the right file.
3. To continue the analysis, create a region, residue, or channel selection and let the agent work on the original file.
4. In a remote workspace, first confirm that reading happens on the remote side. Do not have the agent copy a whole large file just for the preview.
5. Treat preview results only as session context. Key conclusions should still go back to the original file and the computation records.

## Inputs, outputs, and permissions

- Reads: preview summaries read the beginning of the file, up to 2,000,000 bytes of text and 4 MiB of binary. Anything beyond that is marked as truncated, and the Workspace Host that owns the data does the reading.
- Writes: the preview itself does not modify the source file. Export only copies the source file, in the same format, to a new workspace path.
- Approval or external effects: opening and reading need no approval. Exporting a copy needs confirmation and writes to a new workspace path.
- What it does not do: it does not convert formats, repair damaged files, treat a preview summary as complete data, or upload workspace files.

## Known limitations

- Observation lists are truncated with an explicit marker, and selections that are too large are rejected.
- Omics matrices, proprietary imaging containers, and FCS get metadata or placeholder previews only, so do not use them for quantitative analysis.
- Thumbnails and tiles for biological imaging are attempted only for TIFF/OME-TIFF; compressed or non-8-bit TIFFs may fall back to metadata.
- Sequence and genome previews are based on truncated text and cannot replace full format validation or variant calling.
- Unregistered extensions do not enter the dedicated views above and are still handled as ordinary workspace files.

## Related pages

- [Biology Room](./biology-room.md): organize multiple sequences, structures, and annotations into a traceable room.
- [Dataset API migration note](./dataset-api.md): the old data-ingestion service is retired; obtain data through the provider's client or your own environment and keep the source records.
- [Workbench tools](../workbench/tools.md): how files, the terminal, the browser, and other entry points divide the work.
- [Feature status & limits](../reference/feature-status.md): see the current position on each capability.

> Current version: built-in Biology Workbench 1.1.3. Preview reads and file transfer are still subject to workspace permissions and size limits.
