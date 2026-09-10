# Flare-hunting trigger campaigns

The trigger campaigns are a distinct observing strategy that complements
the pre-planned MFC-SOOP. Instead of targeting a specific active region
chosen days in advance, instruments run at Sun-centre pointing, or wait
in a dormant ready state, and respond to on-board STIX flare triggers.

They usually run outside the Remote Sensing Windows, whenever the
telemetry budget allows. That is what makes them complementary rather
than competing: they add flare-observing time in periods when the
remote-sensing payload would otherwise not be observing at all, without
consuming the scarce coordinated time inside an RSW.

The trade-off is deliberate. We give up the ability to choose a target,
and much of the Earth-side coordination that comes with planning a window
in advance, in exchange for a far higher probability of catching a large
flare.

## How the triggers work

STIX computes a flare trigger on board, at several levels, distinguishing
thermal from non-thermal emission. That trigger is distributed to the
other instruments across the spacecraft through Service 20, the
inter-instrument communication service, so EUI, SPICE and PHI can react
to a flare STIX has detected without any ground contact. Each instrument
consumes the trigger differently, matched to what it needs and what it
can afford in telemetry.

### EUI trigger mechanism

When EUI receives a STIX trigger at *t* = 0, it captures a tiered cadence
pattern around the trigger, keeping more images through the impulsive
phase and thinning them either side:

| Interval | Images kept |
| --- | --- |
| *t* = −18 to −8 min | 1 in 4 (regular and short) |
| *t* = −8 to +15 min | all (regular and short) |
| *t* = +15 to +45 min | 1 in 4 (regular and short) |

The negative-time coverage is possible because EUI is already observing
and buffering when the trigger arrives, the trigger decides what to keep,
not when to start. This is what makes the mode valuable: it preserves the
pre-flare and onset phases that a start-on-trigger instrument would miss.

The trigger level used was all-thermal 3 initially, switching to
thermal 2 on 2025-11-29.

### SPICE trigger mechanism

{bdg-warning}`Placeholder`

A description of how SPICE responds to the STIX trigger, and at what
trigger level, will be added here.

Note that SPICE runs 6-minute rasters in this mode, so it loses the
high-cadence sit-and-stare aspect that is central to the main
[Major Flare SOOP](instruments.md#spice).

### PHI trigger mechanism

PHI uses the STIX non-thermal level 2 trigger, which fires only on the
largest non-thermal flares. Because such events are rare, PHI trigger
campaigns are run as blocks of roughly two weeks, with PHI waiting about
22 hours a day for a trigger to arrive.

Roughly 8 seconds after the STIX trigger, PHI begins observing for 240 s
at 1 s cadence, at a fixed wavelength off the spectral line (continuum),
the configuration needed to catch white-light flare emission. Downlink of
the data is delayed relative to the observation.

The telescope used has evolved: HRT in 2024, moving to FDT in 2025 and
2026. FDT gives lower resolution but a guaranteed field of view, which
matters when you cannot know in advance where on the disc the flare will
occur.

## EUI trigger windows

{bdg-warning}`Placeholder`

A table of the EUI trigger windows will be published here alongside the
[campaign catalogue](campaigns/index.md). The windows span the December
2024 (LTP17), November and December 2025 (LTP21), and January and
February 2026 (LTP22) trigger campaigns.

## SPICE trigger windows

{bdg-warning}`Placeholder`

The SPICE trigger windows will be tabulated here.

## PHI trigger campaigns

{bdg-warning}`Placeholder`

The PHI trigger blocks for Autumn 2025 and Winter 2026 will be tabulated
here. Each block is a multi-week waiting period rather than a discrete
observing window, which is why they appear differently in the catalogue
from the MFC-SOOP instances.

## Flares caught by the PHI triggers

Three events have been captured so far, all with white-light imaging
from PHI's FDT:

- **2026-02-03**, X1.5
- **2026-02-04**, X4.2
- **2026-02-06**, C2

None of these events were co-observed by EUI or SPICE. They are
white-light and X-ray captures only, which is both what makes them
distinctive and what limits what can be done with them on their own.

Analysis of these events is ongoing and more detail will be added here,
including the STIX spectral properties and the spacecraft geometry for
each.

:::{note} Campaign write-ups in progress
Detailed accounts of how the December 2024, November and December 2025,
and January and February 2026 trigger campaigns were run in practice,
covering which instances ran, what EUI sequences were captured, and what
SPICE and PHI coverage resulted, are being written up and will appear
here.
:::
