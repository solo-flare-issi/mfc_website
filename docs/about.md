# About the campaigns

## What is a SOOP?

Solar Orbiter's science operations are built around Solar Orbiter
Observing Plans, or SOOPs. A SOOP is a coordinated observing programme
that specifies what several instruments do together, in what modes, to
answer a particular science question. Rather than each instrument
planning independently, a SOOP fixes the combination in advance, so the
resulting datasets are genuinely simultaneous and directly comparable.

This matters because Solar Orbiter's remote-sensing instruments are not
on continuously. Outside dedicated Remote Sensing Windows (RSWs) the
remote-sensing payload is powered down, and telemetry is limited even
inside them. Observing time is scarce and has to be committed in advance,
so it is planned as coordinated blocks rather than opportunistically.

The Major Flare SOOP is one of these programmes. It is the
flare-optimised observing mode: when we run an instance of it, EUI, SPICE,
STIX and PHI all switch into modes designed specifically to capture a
flare, pointed at an active region we think is likely to produce one.
Everything catalogued on this site is either an instance of that SOOP, or
one of the related flare-hunting campaigns that grew out of it.

The SOOP is coordinated by David Berghmans, Hannah Collier, Laura Hayes,
Andrew Inglis, Graham Kerr, Therese Kucera, Säm Krucker and Daniel Ryan.

## Why flares need a dedicated SOOP

Solar flares evolve on rapid timescales and exceed the dynamic range of
standard observing modes. Point a normal EUV imaging sequence at a flare
and the brightest, most interesting structures saturate; sample it at a
normal cadence and the impulsive phase is over in a handful of frames.

Understanding how flare energy is released and transported requires
simultaneous X-ray diagnostics, high dynamic range EUV imaging, and
spectroscopy. No single instrument provides all three, and the
combination only exists if it is planned deliberately.

## Our science goals

The SOOP is built around three goals.

1. Impulsive phase evolution. Probe the spatial evolution of flare
plasma on the timescales relevant to impulsive energy release, of order
seconds. This needs high-cadence, non-saturated EUI imaging together with
STIX and SPICE.

2. Accelerated ions. Identify flare-accelerated ions through the
Orrall-Zirker effect, which requires SPICE spectroscopy covering the
right lines at high cadence.

3. Three-dimensional flare geometry. Explore the 3D structure and
evolution of flares by exploiting Solar Orbiter's viewing angle. As the
orbit takes the spacecraft away from the Sun-Earth line and out of the
ecliptic, combining our observations with Earth-side data gives
stereoscopic views that neither vantage point provides alone.

For a full description of the instruments and the modes they run, see
[Instruments and modes](instruments.md). A summary of the 2024 campaigns
is published in [Ryan et al. (2025)](https://doi.org/10.1007/s11207-025-02561-6).

## How campaigns are designed and coordinated

The campaigns run through three connected observing strategies:

**1. MFC-SOOP instances.** Pre-planned blocks of a few hours, run inside
an RSW and pointed at a chosen active region. This is the "typical" MFC
mode, and it is what the [Instances](instances.md) page catalogues.

**2. Flare-hunting trigger campaigns.** Instrument modes that respond to
an on-board STIX flare trigger rather than to a pre-selected target. See
[Trigger Campaigns](trigger-campaigns.md).

**3. MFC-related high-cadence EUI windows.** Not formal MFC SOOPs, but run
in flare-relevant EUI modes, and frequently the windows that catch flares
the formal campaigns miss. The December 2024 block is the clearest
example: ten windows that between them captured a rich set of pulsation
and QPP events.

Observing modes have evolved across the campaigns, from the Spring
2024 baseline of a 16 s cycle containing six short exposures, through the
longer 60 s cycles used from 2025. SPICE moved from a 5.1 s to a 2.1 s
cadence in 2025 to avoid saturation and to match EUI more closely. A
very-high-cadence video mode at 0.167 s is under evaluation as a future
mode. [Instruments and modes](instruments.md) describes each of these in
full.

Multi-observatory coordination is a large part of the campaign work.
Campaigns have been coordinated with IRIS, Hinode (EIS, SOT, XRT), DKIST,
EOVSA and other radio arrays, BBSO and other ground-based Hα sites, and
with the FOXSI-4 / Hi-C Flare rocket campaign in April 2024. The
[Resources](resources.md) page documents how to find this context data for
any event in the catalogue.

## Target selection in practice

Because the observing block has to be committed in advance, target
selection is a forecasting problem worked on roughly a 48 hour decision
cycle. Coordinators look at the current active-region population (NOAA
region numbers, McIntosh classifications, SHARP parameters and recent
flaring history) and weighs several competing factors:

- Which regions are most likely to produce a significant flare in the
  window.
- Which regions are visible from Solar Orbiter's current position, and
  what the viewing geometry gives: a limb view, a top down view of
  ribbons, or a far side event invisible from Earth.
- Whether Earth-side coordination is possible and worth optimising for,
  which pulls towards regions visible from both vantage points.

These pull against each other, and the record includes both successes and
misses. Some instances caught nothing; a few had pointing errors. Both
outcomes are recorded in the catalogue, a campaign window with no flare
is still a coordinated dataset, and knowing which windows produced nothing
matters for anyone using the catalogue statistically.

## The flare-hunting trigger campaigns

The trigger campaigns invert the targeting problem. Instead of choosing a
region in advance, instruments run at Sun-centre pointing or wait in a
dormant ready state, and respond to an on-board STIX flare trigger.
This trades spatial resolution and pre-planned coordination for a much
higher chance of catching a large flare, and it is how the largest
events were captured, including the 2026-02-04 X4.2.

Full detail on the EUI, SPICE and PHI trigger mechanisms is on the
[Trigger Campaigns](trigger-campaigns.md) page.

## Hybrid MFC + trigger observing

The LTP24 season (Summer 2026) pilots a hybrid design: a pre-planned
MFC-SOOP block on a target active region, with trigger-mode extensions
either side of it. The aim is to keep the coordinated, high-value
pre-planned dataset while extending the effective time on-sky during which
a major flare could be caught.

The pilot is in progress. Its operational assessment will be reported
here and in the campaign paper as results come in.

## Lessons learnt and ongoing development

Recurring themes so far:

- **Instrument performance.** HRI<sub>EUV</sub> saturation limits are now
  reasonably well characterised (L1 clipped at 25600 DN; L2 0.04 s shorts
  reaching ~2.3×10⁶ DN s⁻¹ after normalisation). A roughly 20-minute
  thermal oscillation from the heaters introduces jitter; a
  jitter-corrected L3 dataset is desirable but not yet available.
- **Pointing.** Two Autumn 2025 instances had pointing errors in which the
  target region was observed from Solar Orbiter but not by the
  coordinating Earth-side observatories.
- **Archive labelling.** SOAR product names do not cleanly distinguish
  MFC data from flare-hunting data, since EUI can be doing both at once.
  Cadence-based selection has been proposed as a discriminator. Better
  labelling of flare-hunting data is an active team deliverable.
- **Dissemination.** Campaign windows have been circulated by mailing
  list, which has sometimes failed to reach instrument operators in time.
  A public, machine-readable index of planned and executed windows,
  this site, is part of the fix.

## Where things stand

The SOOP has worked. We have observed multiple major flares with
coordinated EUI, STIX, SPICE and PHI data, achieved genuinely
high-cadence non-saturated flare observations, and the early scientific
return is already there in published papers, ongoing analyses and PhD
projects. The datasets have also proved valuable beyond flare science,
for active-region and plasma-evolution studies.

The key science is still ahead of us. We do not yet have an event with
simultaneous high-cadence coverage of flare footpoints across all
instruments, and SPICE slit alignment remains the critical opportunity
for improving what we get from each campaign. As Solar Orbiter's orbit
carries it further out of the ecliptic, the stereoscopic geometry with
Earth-side observatories strengthens, which makes the 3D diagnostics
progressively better.

There is also a timing argument. The solar cycle is likely past peak but
still highly active, so the next 12 to 18 months are the best remaining
opportunity for major flare observations in this mission phase.

The campaigns have fed into instrument development too: they have been
central to the science and technical case for the High-resolution Flare
Imager (HIFI), a flare-focused EUV imager proposed as part of the
SPARK mission concept to ESA's M-class call.
