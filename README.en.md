# SciForge Documentation v2

[简体中文](./README.md) · English

SciForge user documentation built with Docusaurus 3 and published on GitHub Pages. The site ships Simplified Chinese at `/` and English at `/en/`.

## Content layout

```text
docs/                         # Simplified Chinese source
i18n/en/
├── docusaurus-plugin-content-docs/current/   # English docs mirror
├── docusaurus-plugin-content-pages/          # English homepage and video guide
├── docusaurus-plugin-content-docs/current.json
├── docusaurus-theme-classic/                 # navbar and footer strings
└── code.json                                 # theme strings
```

The Chinese docs under `docs/` are the source of truth. Every page has a matching English file under `i18n/en/docusaurus-plugin-content-docs/current/` with the same relative path. Frontmatter keys, link targets, code blocks, and image paths stay identical; only `title` and `description` values are translated.

## Local development

```bash
npm install
npm start
```

Chinese: `http://localhost:3000/sciforge-docs-v2/`
English: `http://localhost:3000/sciforge-docs-v2/en/`

## Build checks

```bash
npm run typecheck
npm run build
```

The build runs `scripts/build-search.cjs`, which indexes both locales into `src/data/search-index.json`. Static output is written to `build/` (Chinese) and `build/en/` (English).

Use `npm run preview` to check the production build at `http://127.0.0.1:3025/sciforge-docs-v2/`.

## Translating or updating English pages

1. Update the Chinese page under `docs/`.
2. Copy the same relative path under `i18n/en/docusaurus-plugin-content-docs/current/` and translate the prose.
3. Keep headings, tables, admonitions, links, code, image paths, and frontmatter keys unchanged.
4. Update English sidebar labels or generated-index descriptions in `i18n/en/docusaurus-plugin-content-docs/current.json`.
5. Run `npm run write-translations -- --locale en` after adding new UI strings, then translate the generated messages under `i18n/en/docusaurus-theme-classic/` and `i18n/en/code.json`.
6. Run `npm run typecheck` and `npm run build`.

The English video guide reuses the Chinese-narrated video and translates chapter titles in `i18n/en/docusaurus-plugin-content-pages/guide.tsx`. When the video is re-recorded, update those chapter titles alongside `scripts/tour-plan.cjs`.

## Publishing

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds both locales and deploys GitHub Pages. The repository must use **Settings → Pages → Build and deployment → GitHub Actions**.

Target URLs:

- Chinese: `https://agi4sci.github.io/sciforge-docs-v2/`
- English: `https://agi4sci.github.io/sciforge-docs-v2/en/`

## Content principles

- Base functional claims on the current SciForge source and real interface.
- Mark experimental or partially available capabilities explicitly.
- Keep only reviewed documentation and redacted screenshots in the public repository.
- Operational pages should state permissions, external effects, completion signals, and known limitations.

## License

Documentation and site code are released under the [MIT License](./LICENSE).
