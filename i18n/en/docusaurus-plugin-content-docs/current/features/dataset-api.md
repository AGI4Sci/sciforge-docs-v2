---
title: Dataset API
description: Migration note for the retired Dataset API, and how to record where your data came from.
sidebar_position: 11
---

# Dataset API

:::info[Migration note]
In the [current source baseline](../reference/version-and-compatibility.md), the old `dataset-api` domain is retired. The built-in API described in earlier versions of this page is no longer provided. This page keeps its original URL so old links and historical records can still find it.
:::

The old data-source catalog, UI-registered endpoints, S3 object browsing, preparation plans, checkpoint recovery, and validate-and-publish flow are no longer available operations. Do not assume old `.sciforge/datasets` records were migrated automatically or can still be executed. Keep the original files and source material, and check them one by one.

To obtain data, use the data provider's supported client, or your own scripts and environment. Record the source URL, access time, data version, license, download parameters, file size, and SHA-256. Manage credentials as described in [Permissions & security](../operations/security.md). The old page's rule that retries had to go through the Dataset API does not apply to a retired capability.

Supported downloaded files can be viewed in [Life Science Preview](./life-science-preview.md), and [Biology Room](./biology-room.md) can organize the sequence, structure, and genome assets it supports. Data acquisition, cleaning, and scientific conclusions still each need real execution and source records; see [Evidence & reproducibility](./evidence-and-reproducibility.md). These two built-in biology features do not replace the old Dataset API's data ingestion and publishing service.
