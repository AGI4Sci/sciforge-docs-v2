---
title: Documentation maintenance checklist
description: Maintain one user manual against the latest client, and check versions, links, and the public boundary.
---

# Documentation maintenance checklist

User tutorials are maintained only in `sciforge-docs-v2`. The client repository keeps the site entry points, install and development notes, and internal supplements; it no longer duplicates the full tutorials.

## 1. Pin this round's version

Record the date and commit of the latest client mainline first, then verify the interfaces, settings, package versions, and operations the change touches. Update [Version and compatibility](../reference/version-and-compatibility.md) and the repository README. Record the public source commit separately; do not wait for it to update before writing the manual.

Read the current implementation, not just the old README, test names, or planning documents. If a behavior exists only as a test expectation and is not wired into any actual call, list it as an item to verify; do not write it up as an operating step.

## 2. Update content and navigation

- Write "where to open it, how to operate it, what you get" first, then the limits that affect the operation.
- Use the actual names shown in the interface. Do not repeat the mainline commit, permission terms, and verification notes on every page; link to the version page instead.
- When a feature moves, adjust the overview, sidebar, and related links. Keep a short migration note at the old URL and take it out of the current feature navigation.
- English site: update the same-path pages under `i18n/en/docusaurus-plugin-content-docs/current/`. When you add or remove a page or rename a sidebar category, also update `i18n/en/docusaurus-plugin-content-docs/current.json`.
- Do not claim "all plugins are available" from a directory count. Describe built-in modules, standalone plugins, Skills, and MCP separately.
- Keep the original date and version on screenshots and cases. Do not relabel them as a new-version demo unless re-recorded; add one sentence to outdated screens.

## 3. Check the public boundary

The public site may describe user operations of the latest client. Internal deployment, database migration, VPN/SSH management, server-side adaptation, real account configuration, and private acceptance material stay in internal documents. General usage such as client sign-in, device connection, and team projects can be public.

For new images, first check for visible accounts, paths, tokens, and rights to the material. Keep already-reviewed images; do not bulk-restore old media from the private repository. Keep plugin licenses, original-author attribution, and third-party notices as they are; documentation updates do not change licenses or repository visibility.

## 4. Keep entry points consistent

The user-manual links on the public and private client home pages both point to https://agi4sci.github.io/sciforge-docs-v2/ . Old manual pages inside the repository keep a link to the matching site page. Internal supplements do not go into the public export.

Later source exports must keep the licenses, replacement assets, security test fixtures, and these entry points that the public repository has already reviewed; do not overwrite the public repository with the private repository's directories.

## 5. Build and check

```bash
npm ci
npm run typecheck
npm run build
```

The build generates the search index and checks internal links. Also check whether retired features still appear on the home page, sidebar, search suggestions, and video chapter descriptions. A successful build only shows the docs can be built; the content still needs a page-by-page review.

If the video is not re-recorded, keep the original file and chapter order, and note the applicable version on the guide page. When chapter data is involved, also run `node scripts/check-tour.cjs`.

## 6. Publish and spot-check

Review through a PR, and wait for the GitHub Pages deployment to succeed after merging. Spot-check the home page, the version page, the feature overview, and this round's key pages online, and confirm the new content and page links work.

The PR should state the basis for the update, the main pages, the check results, and any screenshots that need to be retaken later. If something goes wrong, roll back with a new revert PR; do not deploy an earlier site configuration.
