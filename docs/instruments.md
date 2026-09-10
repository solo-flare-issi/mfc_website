# Instruments and observing modes

The Major Flare SOOP coordinates four Solar Orbiter instruments, each
running a mode specifically designed for flares. The modes matter: a
flare seen in a standard observing mode is usually saturated, undersampled
in time, or both. This page describes what each instrument does during a
campaign and why.

## Why flares need dedicated modes

Flares evolve on timescales of seconds and exceed the dynamic range of
standard observing modes. The impulsive phase, where the energy release
actually happens, is short, bright, and structured on small spatial
scales. To study it we need three things at once: high cadence imaging
that does not saturate, X-ray diagnostics of the accelerated electrons,
and spectroscopy of the atmospheric response. No single instrument
provides all of that, which is why the campaigns coordinate all four.

## EUI/HRI<sub>EUV</sub>

The High Resolution Imager at 174 Å provides the high-cadence, saturation
free EUV imaging that is the backbone of the campaign.

EUI takes two kinds of image during a campaign:

| Image type | Exposure | Compression | Size |
| --- | --- | --- | --- |
| Regular | 2 s | lossy, high quality (×7.4) | 1 MiB |
| Short | 0.04 s | lossy, strong (×124) | 0.06 MiB |

The short exposures are the key to the whole approach. At 0.04 s the
detector does not saturate even in the brightest flare kernels, so we
retain photometry where a regular exposure would be clipped. The trade
off is compression: shorts are compressed hard to keep the telemetry
affordable, so they are noisier. Running both together gives the dynamic
range of the shorts alongside the sensitivity and image quality of the
regular exposures.

### Observing cycles

Several combinations of shorts and regulars have been flown as the
campaigns have evolved:

| Cycle | Pattern | Typical volume |
| --- | --- | --- |
| **16 s** | 6 shorts every 2 s, then 1 regular taking 4 s | 4 h gives 1224 MiB: 3600 shorts, 900 regulars |
| **60 s** | 18 shorts every 3 s, 1 short during 2 s, then 1 regular taking 4 s | 7 h gives 899 MiB: 7980 shorts, 420 regulars |

The 16 s cycle was the Spring 2024 baseline and gives the highest
effective cadence. The 60 s cycle trades some cadence for a longer window
on the same telemetry budget, which matters when we want to cover a wide
window and cannot predict when the flare will occur.

Which cycle ran for any given campaign is recorded in the
[campaign catalogue](campaigns/index.md).

## SPICE

SPICE provides high-cadence EUV spectroscopy spanning roughly 10 kK to
10 MK, so it samples everything from the chromosphere to flare-hot
plasma. During a campaign it runs two things.

### High-cadence sit-and-stare

The slit is held fixed on the target so we get the best possible temporal
sampling of whatever crosses it.

| | 2023 and 2024 | 2025 onwards |
| --- | --- | --- |
| Cadence | 5.1 s | 2.1 s |
| Exposure | 4.8 s | 1.8 s |
| Slit | 4″ | 2″ |

The change from 2025 was made for three reasons: to avoid saturating
certain lines, to better serve the Orrall-Zirker science goal using
Lyβ, and to match the EUI cadence more closely so the two datasets can be
compared directly.

The line list spans 10 kK to 10 MK and is designed specifically to cover
the region around the Lyβ and O VI lines for the Orrall-Zirker
effect. One instance in RSW 26 used an alternative list covering lines
useful for FIP-effect studies.

### Context raster

Before and after each sit-and-stare run, SPICE takes a context raster of
the region. This takes about 27 minutes, uses the 4″ slit, and uses the
same line list as the sit-and-stare phase. The rasters put the
sit-and-stare data in spatial context, which is essential given the slit
only samples one line across the region.

The slit position is the hardest part of the campaign. Getting the
slit onto the flaring footpoints requires predicting where in the active
region the flare will occur, and it remains the single biggest
opportunity for improving the scientific return of these campaigns.

## STIX

STIX provides non-thermal X-ray imaging spectroscopy, which is how we
learn about the flare-accelerated electrons: how many, at what energies,
and where they are depositing their energy. STIX observes continuously
and does not need a special campaign mode, which is why it is also what
drives the [flare-trigger campaigns](trigger-campaigns.md).

Because STIX and EUI observe from the same place at the same time, we can
tie the hard X-ray footpoints directly to the EUV kernels without any of
the cross-calibration and viewing-angle problems that come with combining
instruments at different vantage points.

## PHI

PHI provides high-resolution magnetograms and white-light context images
of the target region, giving the magnetic configuration the flare occurs
in.

Two telescopes have been used. The High Resolution Telescope (HRT)
gives the better spatial resolution and was used in 2024. The Full Disc
Telescope (FDT) gives lower resolution but a guaranteed field of view,
which is why it was adopted for the trigger campaigns from 2025, where we
cannot know in advance where on the disc the flare will be.

## Coordinated observations

The campaigns are planned alongside Earth-side and ground-based
facilities: IRIS, Hinode (XRT and EIS), DKIST, SST, EOVSA and I-LOFAR.
The [Resources](resources.md) page lists how to find coverage from these
and other observatories for any event in the catalogue.

## Summary

| Instrument | Role in the campaign |
| --- | --- |
| **EUI/HRI<sub>EUV</sub>** | High-cadence, short-exposure, saturation-free EUV imaging |
| **STIX** | Non-thermal X-ray imaging spectroscopy of accelerated electrons |
| **SPICE** | High-cadence EUV spectroscopy, 10 kK to 10 MK, sit-and-stare plus context rasters |
| **PHI** | High-resolution magnetograms and white-light context |
