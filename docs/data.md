---
html_theme.sidebar_secondary.remove: true
---

# Data and downloads

The catalogue is published as machine readable CSV alongside these pages,
so it can be read straight into Python, TOPCAT or a spreadsheet.

::::{grid} 1 2 2 2
:gutter: 3

:::{grid-item-card} {octicon}`table;1.5em;sd-mr-1` Campaign table
:link: campaigns.csv

One row per observing window: identifiers, LTP and season, planned and
observed windows for each instrument, file counts, cadences, spacecraft
geometry.
:::

:::{grid-item-card} {octicon}`flame;1.5em;sd-mr-1` Flare table
:link: flares.csv

One row per flare: time, GOES class, observing instruments, Earth
visibility, spacecraft distance, and the campaign it belongs to.
:::

::::

## Reading the catalogue in Python

```python
import pandas as pd

base = "https://solo-flare-issi.github.io/mfc_website/"
campaigns = pd.read_csv(base + "campaigns.csv")
flares = pd.read_csv(base + "flares.csv")

# every M or X class flare seen from Solar Orbiter
major = flares[flares.goes_class.str.match(r"[MX]", na=False)]

# join a flare back to the window it was observed in
merged = flares.merge(campaigns, left_on="campaign_uid",
                      right_on="uid", suffixes=("_flare", "_campaign"))
```

## Column definitions

### Campaigns

| Column | Meaning |
| --- | --- |
| `uid` | Unique campaign identifier. `MFW` for MFC-SOOP windows, `MFT` for trigger windows |
| `kind` | `Major Flare` or `Trigger` |
| `ltp`, `rsw`, `season` | Long Term Plan, Remote Sensing Window, and season label |
| `date`, `window` | Date and planned observing window in UT |
| `eui_window`, `spice_window`, `phi_window` | Planned per instrument windows |
| `eui_observed`, `spice_observed`, `phi_observed` | Actual windows verified against SOAR |
| `eui_files`, `spice_files`, `phi_files` | Number of files in SOAR for each instrument |
| `eui_cadence`, `spice_cadence`, `phi_cadence` | Verified observing cadence |
| `instruments_soar` | Instruments with data in SOAR under the campaign SOOP |
| `soop` | SOOP name as recorded in SOAR |
| `trigger_instrument` | For trigger windows, the instrument responding to the STIX trigger |
| `so_au`, `so_location` | Spacecraft distance in AU and Heliographic Stonyhurst location |
| `target_coords` | Target pointing coordinates |
| `seen_from_earth` | Whether the target was visible from Earth |
| `notes` | Observer notes from the working catalogue |

### Flares

| Column | Meaning |
| --- | --- |
| `flare_id` | Identifier built from date and peak time |
| `campaign_uid` | The campaign window the flare falls in |
| `date`, `time_ut` | Date and time of the flare in UT |
| `goes_class` | GOES class, or a STIX estimate for far side events |
| `observed_by` | Solar Orbiter instruments that recorded it |
| `seen_from_earth` | Whether the flare was visible from Earth |
| `so_au`, `hg_stonyhurst` | Spacecraft distance and location |

## Provenance and caveats

The tables are generated from the team working spreadsheet by
`scripts/build_catalogue.py` in the site repository, then cross checked
against the Solar Orbiter Archive for observed windows, file counts and
cadences.

Two things to be aware of before using the catalogue in a statistical
analysis:

- **Flare classes for far side events are STIX estimates**, not GOES
  measurements, and carry the corresponding uncertainty.
- **The PHI trigger campaign flares are not yet included.** The four
  events listed on the [Trigger Campaigns](trigger-campaigns.md) page
  still need entering into the source catalogue.

## Licence and citation

The catalogue is released under the
[BSD 3-Clause License](https://github.com/solo-flare-issi/mfc_website/blob/main/LICENSE).
You are free to use and redistribute it, including commercially, provided
the copyright notice and disclaimer are retained. A Zenodo deposit with a
citable DOI is planned to accompany the campaign paper.

If you use the catalogue, please cite it:

```text
Hayes, L. et al. (2026). Solar Orbiter Major Flare Campaigns
Catalogue v1.0. Zenodo. [DOI to be assigned]
```

Corrections and additions are welcome, see [Contribute](contribute.md).
