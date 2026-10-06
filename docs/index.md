---
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

![](assets/mark.svg){ .hero__mark role="presentation" }

# SteamOS ARM Port

## Valve's SteamOS, ported to ARM handhelds

SteamOS ARM Port takes the SteamOS build Valve made for the Steam Frame and
brings it to Snapdragon gaming handhelds, with the hardware support, power
tuning and handheld features it needs.

[Install SteamOS ARM Port](getting-started/install.md){ .md-button .md-button--primary }
[Check device support](devices/index.md){ .md-button }
[Downloads](downloads.md){ .md-button }

</div>

!!! warning "Unofficial community project"

    SteamOS ARM Port is a community port and is not made, supported or endorsed
    by Valve. Steam, SteamOS and Steam Frame are trademarks of Valve
    Corporation, used here only to describe what the port is based on.
    Installing it replaces your device's bootloader, so read the install guide
    and back up your data first.

<ul class="features" role="list" markdown="1">
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-steam:</div>
    <div>
      <strong>The Real SteamOS</strong>
      <p>Valve's own Game Mode, Steam client and KDE desktop from the Steam Frame build, not a lookalike.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-update:</div>
    <div>
      <strong>Updates Through Steam</strong>
      <p>Signed updates from Settings > System. No reflashing, and a failed update rolls back on its own.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-package-variant-closed:</div>
    <div>
      <strong>Loadout</strong>
      <p>Emulators, PC game stores and apps picked for your chip, with suggestions based on the games you have.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-plus-box-multiple-outline:</div>
    <div>
      <strong>Add Any Game</strong>
      <p>Windows games, console game files, Linux apps and Android apps go into your Steam library with their artwork.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-store-outline:</div>
    <div>
      <strong>Epic, GOG and Amazon</strong>
      <p>An ARM64 build of Heroic installs your PC libraries, and they play from Steam with Proton.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-sleep:</div>
    <div>
      <strong>Sleep That Lasts</strong>
      <p>Real sleep on every supported chip, with quiet fan curves and Steam's own power and charge controls.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-monitor-multiple:</div>
    <div>
      <strong>Dual Screen</strong>
      <p>On the AYN Thor and AYANEO Pocket DS the bottom screen gets its own launcher, dashboard and themes.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-android:</div>
    <div>
      <strong>Android Apps</strong>
      <p>The Play Store through Valve's Lepton, with every app as its own title in your library.</p>
    </div>
  </li>
</ul>

## Supported Chips

| Chip | Devices | Status |
|---|---|---|
| Snapdragon 8 Elite | AYN Odin 3, KONKR Pocket FIT Elite | :material-check-circle:{ .ok } Stable |
| Snapdragon 8 Gen 3 | KONKR Pocket FIT, AYANEO Pocket S2 / S2 Pro | :material-check-circle:{ .ok } Stable |
| Snapdragon 8 Gen 2 | AYN Odin 2 / Mini / Portal / Thor, AYANEO Pocket ACE / DMG / DS / EVO / S 1K / S 2K, Retroid Pocket 6 / Nova | :material-check-circle:{ .ok } Stable |

See [Supported Devices](devices/index.md) for what works on each one.
