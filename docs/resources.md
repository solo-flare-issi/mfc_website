# Finding coordinated observations

Where to find context data for Solar Orbiter flare events. Organised by
data type rather than alphabetically, so you can work down the list for
any event in the catalogue.

## Solar Orbiter data

| Resource | Link | Use it for |
| --- | --- | --- |
| **SOAR** | [soar.esac.esa.int](https://soar.esac.esa.int/soar/) | The authoritative source for all Solar Orbiter data |
| **STIX Data Centre** | [datacenter.stix.i4ds.net](https://datacenter.stix.i4ds.net/) | STIX flare list, quicklooks and imaging |
| **JHelioviewer** | [jhelioviewer.org](https://www.jhelioviewer.org/) | Browsing and making movies of event states |
| **EUI event states (SIDC)** | [sidc.be/EUI/data/states](https://www.sidc.be/EUI/data/states/) | EUI event list with JHelioviewer-ready image sequences |
| **EUI instrument wiki** | [gitlab-as.oma.be](https://gitlab-as.oma.be/SIDC/SpaceInstruments/eui/-/wikis/home) | Per-campaign observing logs, e.g. `Log20240319-MajorFlareWatch` |
| **EUI response functions** | [gitlab-as.oma.be](https://gitlab-as.oma.be/sidcpublic/euipublic/-/tree/master/soloEUI/ResponseFunctions) | Calibration and instrument response |

## Related flare catalogues

The catalogue deliberately links to existing community catalogues rather
than duplicating them.

- **STIX flare list with locations**:
  [github.com/hayesla/stix_flarelist_science](https://github.com/hayesla/stix_flarelist_science)
- **EUI event catalogue (Daye)**: combines EUI with the STIX catalogue,
  with columns giving the number of flares in each HRI<sub>EUV</sub>
  sequence.
  [Google Sheet](https://docs.google.com/spreadsheets/d/1gjcOGc4lwKMryx79znmbNSp_xbwGKWdxvhugPTY9jqE)
- **SPICE catalogues**: {bdg-secondary}`TBC` which SPICE
  flare or campaign catalogues exist is an open question with the SPICE
  team.

## Radio

| Resource | Link | Use it for |
| --- | --- | --- |
| **NRH / NDA / ORFEES** | [secchirh.obspm.fr](https://secchirh.obspm.fr/) | Metric to decametric bursts; combined overviews |
| **EOVSA / LWA overview** | [ovsa.njit.edu/browser](https://ovsa.njit.edu/browser/) | Daily spectra overview browser |
| **EOVSA flare list** | [ovsa.njit.edu/flarelist](https://ovsa.njit.edu/flarelist/) | Microwave imaging spectroscopy events |
| **LWA quicklook spectra** | [ovsa.njit.edu/lwa-data/qlook_spectra](https://ovsa.njit.edu/lwa-data/qlook_spectra/) | Low-frequency dynamic spectra |
| **Learmonth** | [sws.bom.gov.au](https://www.sws.bom.gov.au/World_Data_Centre/1/9) | Southern-hemisphere radio spectrograph coverage |
| **Ondřejov** | [space.asu.cas.cz/~radio](https://space.asu.cas.cz/~radio/) | Decimetric quicklooks |
| **I-LOFAR** | [lofar.ie/monitor-dev](https://lofar.ie/monitor-dev/) | High-resolution low-frequency spectra |
| **RPW / PSP / STEREO / WIND** | [parker.gsfc.nasa.gov/crocs.html](https://parker.gsfc.nasa.gov/crocs.html) | Multi-spacecraft radio overview, including Solar Orbiter RPW |

## White (optical) light

| Resource | Link | Use it for |
| --- | --- | --- |
| **Kanzelhöhe Observatory** | [cesar.kso.ac.at](https://cesar.kso.ac.at/database/kso_obslog_query.php) | Observing-log query for Hα and white light |
| **BBSO** | [bbso.njit.edu](https://www.bbso.njit.edu/Research/FDHA/logs/) | Full-disc Hα logs |
| **Ondřejov Solar Patrol** | [space.asu.cas.cz/~sunwatch/archive](https://space.asu.cas.cz/~sunwatch/archive) | Full-disc Hα (select H-alpha full disk) |
| **Hida Observatory / SMART** | [hida.kyoto-u.ac.jp/SMART](https://www.hida.kyoto-u.ac.jp/SMART/T1.html) | Hα and continuum imaging |

## IRIS and Hinode

| Resource | Link | Use it for |
| --- | --- | --- |
| **HEK search (LMSAL)** | [lmsal.com/heksearch](https://www.lmsal.com/heksearch/) | Finding IRIS and Hinode (EIS, SOT, XRT) observations for a given time |

Checking IRIS and Hinode coverage for a given window currently means a
manual HEK search. Extracted links for campaigns already checked will be
carried on the per-campaign detail pages.

## DKIST

{bdg-secondary}`TBC`, DKIST coordination is confirmed for
the 2026-09-18 instance, but the data-access path still needs documenting
here.

:::{tip} Something missing?
If you know of a resource that should be on this list, or a link here
has rotted, please [contribute](contribute.md) a correction.
:::
