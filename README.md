# mfc_website

Public website for the **Solar Orbiter Major Flare Campaigns**, maintained
by ISSI International Team #25-641, *"Maximising Science from Solar
Orbiter's Solar Flare Campaigns"*.

Built with [Sphinx](https://www.sphinx-doc.org/), the
[PyData Sphinx Theme](https://pydata-sphinx-theme.readthedocs.io/) and
[MyST](https://myst-parser.readthedocs.io/) (pages are written in
Markdown).

Live site: <https://solo-flare-issi.github.io/mfc_website/>

## Local development

```bash
pip install mkdocs mkdocs-material
mkdocs serve          # live-reloading preview at http://127.0.0.1:8000
mkdocs build          # static site into site/
```

## Structure

```
docs/
├── index.md              landing page
├── about.md              programme narrative
├── instances.md          MFC-SOOP instances, season by season
├── trigger-campaigns.md  EUI and PHI trigger operations
├── campaigns/index.md    campaign catalogue        [placeholder]
├── flares/index.md       flare catalogue           [placeholder]
├── resources.md          finding coordinated context data
├── publications.md       publications tracker
├── team.md               team, credit, how to cite
└── contribute.md         how to contribute
```

## Status

Narrative pages carry real content. The **campaign and flare catalogues
are placeholders** — the underlying catalogue is still being finalised.

Still to decide before the catalogues can be generated:

- Campaign ID scheme for detail-page URLs (`MFW20240319A` style vs
  6-digit `240319`).
- Source of truth: generate `docs/data/*.csv` from the working
  spreadsheet at build time, or promote CSVs in-repo to canonical.
- Where the flare list comes from — the dedicated flare sheet is not yet
  populated, and the four PHI-triggered events are not yet entered.
- Base URL for externally hosted movies and quicklook plots.

## Planned build pipeline

Once the catalogue is settled:

```
spreadsheet  ->  scripts/build_catalogue.py  ->  docs/data/*.csv
                                             ->  docs/campaigns/{id}.md
                                             ->  docs/flares/{id}.md
                                             ->  docs/instances.md
```

Narrative pages stay hand-edited; everything else regenerates from one
command.

## Licence

BSD 3-Clause. See [LICENSE](LICENSE).

Copyright (c) 2026, Solar Orbiter Major Flare ISSI Team.
