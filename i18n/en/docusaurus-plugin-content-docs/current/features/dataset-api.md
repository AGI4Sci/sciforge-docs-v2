---
title: Dataset API
description: Register data sources, fetch public biological data with validation, and produce reproducible datasets.
sidebar_position: 11
---

# Dataset API

Dataset API is the workspace-level data ingestion and preparation layer: it registers public biological databases, private object storage, and derived datasets as governable data sources, then uses plan-based flows to fetch, organize, validate, and publish them. Use it for the "find data, fetch data, turn it into a reproducible dataset" stage, together with Life Science Preview and Create Loop.

## Opening it

- Entry point: the dataset result card in a session; the Create Loop resource panel. Custom endpoints and object storage connections can only be registered through the UI, and they require confirmation.
- Applies to: the current workspace and its `.sciforge/datasets` data source registry.
- Prerequisite: the data source address is reachable; when authentication is needed, reference credentials through environment variables; S3-compatible storage requires registering the service address, bucket, and allowed prefixes first.

## What it can do

| What you want to do | How to do it | Output |
| --- | --- | --- |
| Find public biological data sources | Browse the bundled biological provider catalog and check metadata, raw data endpoints, and authentication requirements | Catalog entries with an explanation of the adaptation approach |
| Fetch metadata or raw data | Issue a size-limited request against a registered endpoint, choosing metadata or raw data | Derived files with SHA-256, a provenance manifest, and a request receipt, plus fragment previews |
| Browse object storage | After registering S3-compatible storage, list objects, read object headers, and download by range | Object copies named by checksum, with metadata |
| Prepare data on a plan | Generate a preparation plan, review and confirm it, then execute | Immutable plans, run checkpoints, derived datasets, and provenance manifests |
| Validate quality and publish | Run validation, then publish | Reproducible dataset versions and `data-construction-pipeline.md` |

**What it does not do:** it does not run arbitrary shell, SQL, or Python, and it does not treat model-generated code as processing logic. Every preparation step is carried out deterministically by Dataset API from strict JSON parameters; failures should be retried or recovered through Dataset API, not worked around by connecting directly with `curl` in the terminal.

## Typical workflow

1. Pick a provider in the catalog and confirm the endpoint, authentication method, and adaptation type; do not assume an adapter is implemented just from a catalog entry.
2. Register custom endpoints or object storage through the UI; the Agent cannot add arbitrary endpoints and can only use registered source IDs.
3. Fetch metadata or raw data, then verify checksums, byte ranges, and source receipts.
4. Generate a preparation plan, review the data-construction pipeline that comes with it, then confirm and execute.
5. On failure, resume with the immutable plan ID and run ID; when done, run validation, and before publishing confirm that the validation report covers the same path and SHA-256.

## Inputs, outputs, and permissions

- Read: the workspace data source registry, public catalogs, registered API responses, and object storage objects.
- Write: registry, run state, derived artifacts with checksums, provenance manifests, and published versions; source files are not overwritten.
- Approval or external effects: custom endpoint and object storage registration, and plan confirmation, require confirmation; registering preset providers, ordinary fetches, and preparation run as workspace write.
- What it will not do: store credentials in plaintext, execute arbitrary code, turn generic sources into an arbitrary URL proxy, or silently overwrite existing content.

## Known limitations

- Catalog entries describe access methods only and do not mean the corresponding adapter is implemented.
- Requests to generically registered sources allow GET only, subject to timeouts, response size, cross-origin redirects, and HTTPS restrictions; the only exception is the whitelisted UniProt ID mapping POST.
- Object storage currently uses the S3-compatible API: listings return at most 1,000 keys per page, and downloads default to a 256 MiB cap; HTTPS is on by default, and internal HTTP requires explicit confirmation.
- Public database availability, rate limits, and field changes are outside SciForge's control; failures come back as structured receipts.
- Raw downloads are stored byte for byte, without parsing or converting source data; hand scientific interpretation to a preview or analysis step.

## Related pages

- [Life Science Preview](./life-science-preview.md): view fetched sequence, structure, imaging, and other files.
- [Biology Room](./biology-room.md): organize fetched biological files into an annotatable room.
- [Permissions and security](../operations/security.md): approvals, credentials, and external access boundaries.
- [Feature status and limitations](../reference/feature-status.md): the current capability stance.

> Implementation basis: `@sciforge/domain-dataset-api` v1.0.2.
