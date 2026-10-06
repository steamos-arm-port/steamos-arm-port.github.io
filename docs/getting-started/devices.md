# Supported Devices

## Overview

SteamOS ARM Port ships one image per chip. The device is picked in the ABL
menu on first boot, and the system configures itself for it.

## Snapdragon 8 Elite (SM8750)

| Device | Status | Notes |
|---|---|---|
| AYN Odin 3 | :material-check-circle:{ .ok } Stable | No audio over HDMI yet |
| KONKR Pocket FIT Elite | :material-check-circle:{ .ok } Stable | No audio over HDMI yet |

## Snapdragon 8 Gen 3 (SM8650)

| Device | Status | Notes |
|---|---|---|
| KONKR Pocket FIT | :material-check-circle:{ .ok } Stable | Internal storage install |
| AYANEO Pocket S2 / S2 Pro | :material-check-circle:{ .ok } Stable | Internal storage install. Pick Pocket S2 for the S2 Pro |

## Snapdragon 8 Gen 2 (SM8550)

| Device | Status | Notes |
|---|---|---|
| AYN Odin 2 / Mini / Portal | :material-check-circle:{ .ok } Stable | |
| AYN Thor | :material-check-circle:{ .ok } Stable | Dual screen |
| AYANEO Pocket DS | :material-check-circle:{ .ok } Stable | Dual screen |
| AYANEO Pocket ACE / DMG / EVO | :material-check-circle:{ .ok } Stable | |
| AYANEO Pocket S 1K / S 2K | :material-alert-circle:{ .warn } Stable | AYANEO button not mapped yet, touch is off on some units |
| Retroid Pocket 6 / Nova | :material-check-circle:{ .ok } Stable | |

## Snapdragon 888 (SM8350)

| Device | Status | Notes |
|---|---|---|
| REDMAGIC 6 (NX669J) | :material-wrench:{ .warn } Build it yourself | See the [REDMAGIC 6 guide](https://github.com/hashtagbasit/SteamOS-ARM-Port/blob/main/docs/redmagic6.md) |

!!! note

    Devices other than the KONKR Pocket FIT are tested by the community. If
    something doesn't work on yours, [open an issue](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues)
    with your device name and the debug logs from [Troubleshooting](../help/troubleshooting.md#debug-logs).
