---
title: Plugin licenses
description: Licenses, historical directory scope, and distribution notes for the seven current standalone plugins.
---

# Plugin licenses

The table below lists the versions and licenses of the 7 current plugin packages. See each feature page for installation requirements and [Version and compatibility](./version-and-compatibility.md) for how the versions relate.

| Plugin / source directory | Source version | Declared license | npm `private` field |
| --- | --- | --- | --- |
| Anchored Comments / `plugins/anchored-comments` | 0.2.1 | MIT | `true` |
| Change Inspector / `plugins/change-inspector` | 0.1.2 | MIT | `true` |
| Evidence DAG / `plugins/evidence-dag` | 1.0.0 | Apache-2.0 | `true` |
| Git Checkpoints / `plugins/git-checkpoints` | 0.1.0 | MIT | `true` |
| Project DAG / `plugins/project-dag` | 1.0.0 | Apache-2.0 | Not set |
| Research Checkpoints / `plugins/research-checkpoints` | 0.1.0 | MIT | `true` |
| Scientific Figures / `plugins/scientific-plotting` | 0.4.0-mvp.11 | MIT; the NOTICE and third-party licenses below are also retained | `true` |

## Source, installers, and npm publication

- **Source license**: The entries above are each package's license declaration; using and redistributing the package still requires retaining the applicable LICENSE, copyright, and NOTICE. The repository root license cannot be used to override plugins or third-party components that carry their own license declarations.
- **Installer contents**: When redistributing, check the actual package contents, and keep the LICENSE, copyright, and NOTICE files in the package.
- **npm `private: true`**: This field prevents ordinary npm publication. It does not mean the source is confidential, commercially proprietary, or barred from use under the existing license, and it does not mean the package cannot be distributed as a signed installer. Leaving the field unset also does not prove that the package has been published.
- **Release status**: Version, license, installation authorization, and Marketplace availability are separate matters; rely on the specific release record and a trusted installation source.

## Retained notices for Scientific Figures

The package declares MIT and must still retain its `NOTICE`: `src/worker/` comes from the plotting worker originally released under Apache-2.0 (historical commit `02e7abb2`), and moving or merging directories does not remove its Apache-2.0 terms. Redistributing these worker sources separately should also carry the original Apache-2.0 terms and applicable notices. The MIT declarations for the historical domain and adapter code are retained as well.

The current build includes the JavaScript and the actually loaded platform native package for `@napi-rs/canvas` **0.1.100**, under `dist/node_modules` in the artifact. Third-party components in the package keep their own licenses; when distributing, check the license files inside the actual installer, the identity of the native package, and `dist/native-runtime.json`, rather than copying only the MIT row from this table. Changing platform, architecture, or Linux libc requires a matching build.

## Historical directories and scope

Old plugins in the public repository carry their own LICENSE. When you update or migrate code, retain the corresponding license and attribution.

| Historical directory | Historical license / current status |
| --- | --- |
| `plugins/biology-room` | Historical plugin MIT; the standalone directory is now retired, and the room functionality is provided by the bundled Biology Workbench 1.1.3 |
| `plugins/life-science-preview` | Historical plugin MIT; the standalone directory is now retired, and previews are provided by the same bundled Biology Workbench |
| `plugins/visual-review` | Historical plugin MIT; the standalone plugin and the old static domain have both been removed, see the [migration note](../features/visual-review.md) |
| Old `scientific-compute` and `dataset-api` domains | Now retired, see the migration pages for [Scientific Compute](../features/scientific-compute.md) and [Dataset API](../features/dataset-api.md); not counted among the seven plugins |

The licenses of the historical directories continue to apply to the code released at the time; deleting a directory, bundling a feature, or migrating a page does not constitute relicensing. The bundled Biology Workbench is part of the application source and should not simply inherit the old plugin's MIT declaration. When reusing historical code, go back to the LICENSE, NOTICE, and file headers of the corresponding version to confirm the applicable terms.
