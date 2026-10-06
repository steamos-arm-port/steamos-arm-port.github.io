# FAQ

??? question "Is this made by Valve?"

    No. SteamOS ARM Port is an unofficial community project. It uses the
    SteamOS build Valve made for the Steam Frame, but Valve doesn't make,
    support or endorse it. Please don't contact Valve about it.

??? question "Is it the real SteamOS?"

    Yes. Game Mode, the Steam client and the desktop are Valve's own, from the
    Steam Frame build. What this project adds is the kernel and hardware
    support for each handheld, power and fan tuning, and handheld features
    like Loadout and the dual screen launcher.

??? question "Does Android still work?"

    Yes. Android stays on the device and starts from the ABL menu. Installing
    to internal storage erases Android's user data, but Android itself stays.

??? question "Do Windows games run?"

    Many do, through FEX and Steam's ARM64 Proton, like on the Steam Frame.
    Games with anti-cheat that doesn't support Linux won't run.

??? question "How do I update?"

    Through Steam: **Settings > System > Check for updates**. See
    [Updates](../using/updates.md).

??? question "How do I go back to only Android?"

    Remove the microSD card. If it was installed to internal storage, choose
    **UNINSTALL CFW** in the ABL menu, or restore the saved partition table,
    see [Install to Internal Storage](../getting-started/internal-storage.md#giving-the-space-back-to-android).

??? question "My device isn't listed"

    Each device needs its own hardware support. New chips and devices are
    added over time; requests go in
    [GitHub issues](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues).
