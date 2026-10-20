---
description: Connect a controller, configure its props, and test them with your Room.
---

# Connect Room Devices

Use this guide to connect a controller to your Room, set up its props in the
app, and link them to Puzzles. Devices live in **All Rooms → Edit → Devices**.

When you add a Device, choose what runs on the controller:

| Choice | Use it when | Guide |
| --- | --- | --- |
| **Escape Director firmware** | You want to set up inputs and outputs in the app, without code, on an Arduino GIGA R1 WiFi or UNO R4 WiFi. | This page |
| **Your own firmware (SDK)** | You or your developer write the controller's program. Its props and wiring are defined in the firmware, not in the app. | [Build Your Own Controller](build-your-own-controller.md) |
| **Existing device** | The device already sends HTTP or MQTT messages and should keep its firmware. | [Connect Existing Devices](connect-existing-devices.md) |

See [Which controllers and props work](../help/common-questions.md#devices-and-props)
for other boards.

## Before you start

- Use Chrome on the computer that will operate the Room: a Mac, or a Windows 11
  PC with an Intel or AMD processor.
- Have your controller, a USB data cable and the Wi-Fi password ready. For a
  GIGA R1 WiFi, attach its external antenna.
- Use the same non-guest network as the Room Station. The network must allow
  devices to communicate with one another.
- Keep the controller's prop outputs disconnected while installing firmware and
  setting up wiring.

## 1. Connect Room Connector

Room Connector is the app on the Room Station that talks to your controllers.

1. In **Devices**, connect **Room Connector** and download it when prompted. On a
   Mac, use the download for your Mac's processor.
2. Install and open it:
   - **Mac:** move the app to **Applications** and open it. The first time,
     macOS may say it can't verify Room Connector. Choose **Done**, open
     **System Settings → Privacy & Security**, and choose **Open Anyway**. You
     do this once for each version.
   - **Windows:** run the installer. If Windows shows **Windows protected your
     PC**, check that the warning names the app `Room-Connector-Windows-x64.exe`,
     then choose **More info** and **Run anyway**. Room Connector opens in the
     system tray, at the bottom right of the screen.
3. When Chrome asks to open Room Connector, allow it. Choose **Connect** in Room
   Connector's window.
4. If Chrome asks to access devices on your local network, allow it for Escape
   Director.
5. On Windows, if Windows Security asks whether Room Connector (it may be shown
   as Node.js) can use the network, allow **Private networks** only. Keep the
   firewall on.
6. Check that the Devices tab says Room Connector is **Connected**.

{% hint style="warning" %}
Room Connector isn't signed yet, so your computer warns before opening it. Only
skip this warning for a file you just downloaded from the Devices tab.
{% endhint %}

<figure><img src="../.gitbook/assets/devices-overview.webp" alt="Devices tab for The Curator's Vault: Room Connector connected and three Devices available"><figcaption><p>Room Connector is connected and every Device in the Room shows its status.</p></figcaption></figure>

Keep Room Connector running while operating the Room. Refreshing the page
doesn't require reinstalling it. On Windows, turn on **Start at login** in its
tray menu if this computer runs the Room every day.

## 2. Add and pair your controller

These steps use Escape Director firmware. If the controller runs your own
firmware built with the Device SDK, pair it from
[Build Your Own Controller](build-your-own-controller.md#2-pair-the-controller)
instead, so your firmware isn't replaced.

1. Choose **Add Integrated Device → Escape Director firmware**, name the Device,
   and choose **Add Device**.
2. Close Arduino IDE's Serial Monitor and any other program using the
   controller. Connect it by USB, choose **Pair controller**, and select it when
   prompted.
3. If the board needs firmware, choose **Install firmware** and select your
   board. This replaces its current program. Leave the cable connected while
   the controller restarts; setup continues to Wi-Fi by itself.
4. Choose a Wi-Fi network and enter its password. For a hidden network, choose
   **Enter name manually**.
5. Wait for setup to confirm that the controller reached the Room Station.

<figure><img src="../.gitbook/assets/add-device-choices.webp" alt="Add Integrated Device dialog with Escape Director firmware selected, Your own firmware (SDK), Existing device, and a Device name field"><figcaption><p>Choose what runs on the controller, then name the Device.</p></figcaption></figure>

USB is only needed for setup and firmware installation. After that, the
controller uses Wi-Fi, but it still needs a power source.

## 3. Configure the props

1. Add the props this controller will operate. Several props can share one
   board using different channels.
2. Choose each prop's behavior and assign input and output channels to match
   the wiring.
3. For an ordered sequence, arrange the input rows in the order players must
   activate them.
4. Choose **Save and apply** (or **Apply** if the changes are already saved),
   confirm, and wait for the controller to confirm.

Saving in the app and applying to the controller are separate steps. Fix any
reported problem before testing.

## 4. Test the props

1. Turn on **Test mode**.
2. Operate each physical input and check the reported progress and the actual
   output. Confirm each prop controls only its intended output.
3. Reset the prop and try the inputs in a different order.
4. Return the inputs to their starting positions, reset the props, and turn off
   Test mode before changing the configuration or starting a game.

Test mode doesn't run Automations or complete Puzzles. Use the board's wiring
instructions to connect and check the real loads before admitting guests.

## 5. Link props to Puzzles

1. In a prop's **Completes Puzzle** selector, choose the Puzzle it represents.
2. Start a practice game. Complete the Puzzle from the Room Dashboard and check
   that the linked prop completes.
3. Finish the game, choose **Reset Room**, and start another practice game.
   Solve the physical prop and check that its Puzzle completes once.
4. Finish and reset again. Check that the controller recovers after you turn it
   off and on before using the Room with guests.

A linked Puzzle works in both directions, so you don't need Automations for
that. Use Automations when completion should also do something else, such as
play audio.

## During a game

A controller can show **Reconnecting…** while it recovers, then resume on its
own. Commands missed during the gap aren't repeated. If **Device control
paused** stays, check the controller and any reported problem before choosing
**Resume device control**.

<figure><img src="../.gitbook/assets/device-monitor.webp" alt="Device Monitor during a game: Room Connector connected, three Devices with their props, and Activity showing The Clockwork Plinth completed from its linked prop"><figcaption><p>During a game, open Devices on the Room Dashboard to see each prop and recent activity.</p></figcaption></figure>

## Update Room Connector

**Update required** means a feature needs a newer version. **Update available**
means a newer version is ready, but the current one still works. Finish any
running game first.

- **Mac:** quit Room Connector, replace the app in **Applications** with the new
  download, then open it. Restarting the old app doesn't update it.
- **Windows:** choose **Quit Room Connector** from its tray menu, run the new
  installer, then open Room Connector.

Your setup stays saved, so you don't need to pair again.

## If setup is interrupted

- Keep the same Device and reopen its **Controller setup**. Don't add a second
  Device or reinstall firmware because one attempt failed.
- Check that Room Connector is running, and close other programs using the USB
  connection before you retry.
- If Wi-Fi connects but setup can't reach the Room Station, check that both use
  the same network and that it allows devices to communicate.
- A controller moved from another computer needs its Room Station connection
  updated. Use **Reconnect to Room Station** if setup offers it, and wait for
  confirmation before testing again.
- If you denied Chrome's local-network permission, allow it for Escape Director
  in the site's permissions, then reload and reconnect Room Connector. If your
  organization manages that setting, ask its administrator. Keep browser and
  firewall protections on.

## Next

[Configure Room Automations](configure-room-automations.md) to use your props'
signals and commands with the Room's other actions.
