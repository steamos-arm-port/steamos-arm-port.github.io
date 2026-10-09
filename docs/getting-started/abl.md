# Flash the ROCKNIX ABL

## Overview

The ABL is the part of the bootloader that starts the operating system. The
stock one only starts Android, so it is replaced with the
[ROCKNIX ABL](https://github.com/ROCKNIX/abl), which starts the unofficial SteamOS ARM Port
from the microSD card or internal storage and still starts Android from its
menu. The ROCKNIX ABL is made by the ROCKNIX team and is licensed under the
GPL-2.0. Every image carries a copy for its chip.

## Steps

1. Flash the image to your microSD card, see [Flash to a microSD Card](install.md).

2. Insert the card, boot into Android, and copy the `rocknix_abl` folder from
   the card's **BOOT** drive to the root of internal storage, so it ends up
   as `/sdcard/rocknix_abl`. The scripts look for it there.

3. Open your device's root script tool in Android settings.

    !!! note

        The name varies by manufacturer: **Run script as Root**, **Root
        Script** or similar, usually in the device's own settings section.

4. Browse to `rocknix_abl` and select `flash_abl.sh`.

    !!! warning

        Flashing the wrong chip's ABL can leave the device unable to start.
        Only use the folder from the image for your device: each image
        carries the ABL for its own chip only.

5. The script backs up the current ABL as `abl_a.img` and `abl_b.img` in the
   same folder before writing anything, then flashes both slots. Copy the
   two backup files to your PC for safekeeping.

6. Restart holding **Volume Down** to open the ABL menu.

## Restoring the Previous ABL

Run `restore_abl.sh` from the same folder. It writes the backup back to both
slots.
