# mfc_website

This is the public website for the **Solar Orbiter Major Flare
Campaigns**: what the campaigns are, how we run them, and a catalogue of
what we have observed since 2023.

**Live site:** <https://solo-flare-issi.github.io/mfc_website/>

The campaigns are an ongoing effort run with the Solar Orbiter Science
Operations Centre and the EUI, SPICE, STIX and PHI instrument teams. This
site came out of the work of ISSI International Team #25-641,
*"Maximising Science from Solar Orbiter's Solar Flare Campaigns"*, led by
Laura Hayes (DIAS) and Hannah Collier (University of Toronto).

## This is a work in progress

Quite a lot of this is still being put together, so please treat what is
here as a first pass rather than a finished product.

In particular:

- **The catalogues are not final.** The campaign and flare tables are
  built from our working spreadsheet, and that spreadsheet is still being
  cleaned and checked. Expect the numbers, the identifiers and some of
  the details to change.
- **The flare list is incomplete.** More flare details are coming, and
  the events captured by the PHI trigger campaigns are not yet entered.
- **Links to movies, quicklook plots and timeseries are still to come.**
  Every campaign page has a placeholder where the STIX and HRI
  timeseries, field-of-view plots, orbit plots and JHelioviewer movies
  will go. These are being generated and will be hosted separately and
  linked from here.
- **Some narrative sections are still being written**, particularly the
  detailed write-ups of how each trigger campaign was actually run, and
  the SPICE trigger details.

If you spot something wrong, please open an issue. Corrections are very
welcome, especially from anyone who was involved in running a campaign.

## How it is built

Sphinx with the [PyData Sphinx Theme](https://pydata-sphinx-theme.readthedocs.io/)
and [MyST](https://myst-parser.readthedocs.io/), so pages are written in
Markdown rather than reStructuredText. It deploys to GitHub Pages through
the workflow in `.github/workflows/deploy.yml` on every push to `main`.

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

make html                                       # build into _build/html
pip install sphinx-autobuild                    # optional, for live preview
sphinx-autobuild docs _build/html --open-browser
```

The build runs with `-W`, so warnings fail it. That is deliberate: it
stops a broken cross-reference or a bad directive reaching the live site.

## Layout

```
docs/
├── index.md              landing page
├── about.md              what a SOOP is, our aims, how targets are chosen
├── instruments.md        EUI, SPICE, STIX, PHI and the modes they run
├── instances.md          MFC-SOOP instances, season by season
├── trigger-campaigns.md  EUI, SPICE and PHI trigger operations
├── campaigns/            campaign catalogue        (generated)
├── flares/               flare catalogue           (generated)
├── data.md               CSV downloads and column definitions
├── resources.md          finding coordinated context data
├── publications.md       papers using campaign data
├── team.md               team, coordinators, how to cite
├── contact.md            who to contact about what
└── contribute.md         how to contribute

data/                     the working spreadsheet the catalogue is built from
scripts/build_catalogue.py
```

## Updating the catalogue

Everything under `docs/campaigns/` and `docs/flares/` is generated. Do not
edit those files by hand, they get overwritten. Instead edit the
spreadsheet in `data/` and re-run the build:

```bash
python scripts/build_catalogue.py
```

That regenerates the campaign and flare pages, the two index tables, and
the CSVs in `docs/_data/` that the Data page offers for download.

It can also read directly from a published Google Sheet if you set
`MFC_SHEET_KEY`, though the committed spreadsheet is the default so that
builds stay reproducible and work offline.

The narrative pages are all hand-written and are not touched by the
script.

## Licence

BSD 3-Clause. See [LICENSE](LICENSE).

Copyright (c) 2026, Solar Orbiter Major Flare ISSI Team.
