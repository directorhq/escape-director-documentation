---
description: Connect a controller running your own Arduino code with the open-source Device SDK.
---

# Build Your Own Controller

Use this guide to connect a controller running your own firmware to your Room.
Your firmware runs the prop. Escape Director shows its state, sends its commands
and uses its signals in Automations and linked Puzzles.

If you want to set up inputs and outputs without writing code, choose
**Escape Director firmware** instead. If a device already sends HTTP or MQTT
messages, choose **Existing device** and map its messages.

## Before you begin

- **The Device SDK:** download the SDK ZIP from the
  [latest release on GitHub](https://github.com/directorhq/escape-director-device-sdk/releases/latest).
  The SDK is open source under the MIT License, so you can use and
  change it for your props however you like.
- **A supported board:** the SDK includes adapters for the Arduino UNO R4 WiFi
  and GIGA R1 WiFi, paired over USB and Wi-Fi. Other boards with USB and Wi-Fi
  work once they have a board adapter; see the SDK's
  [board porting guide](https://github.com/directorhq/escape-director-device-sdk/blob/main/BOARD_PORTING.md).
- **Room Connector**, up to date and running on the Room Station computer.
  Room Connector handles the USB connection during setup.
- **Chrome** on the same computer and a USB data cable.
- Experience uploading Arduino sketches.

Use a spare controller for your first test, with prop loads disconnected.

## 1. Upload the example

Follow `GETTING_STARTED.md` in the SDK. It installs the libraries and uploads
**room_basic**, a train door with one prop, **Train door**. The board's built-in
LED stands in for the door, and touching pin 2 to GND pulls its lever, so it
needs no wiring.

## 2. Pair the controller

1. Open the Room and choose **Edit → Devices**. Stop any game first.
2. Choose **Add Integrated Device → Your own firmware (SDK)**, name the Device,
   then choose **Add Device** and **Save Devices**.
3. Close Arduino IDE's Serial Monitor and other programs using the controller.
4. Open the Device and choose **Pair controller**. Select your board under
   **USB controller**, then choose **Check controller**. Setup recognizes your
   firmware by its name and version.
5. Choose the Wi-Fi network the Room Station uses (controllers use 2.4 GHz
   Wi-Fi), enter its password and choose **Join network**. Setup finishes when
   the controller reaches the Room Station.
6. The Device shows **Connected** and lists the props your firmware reports.
   Choose **Save props to Room**.

Do not choose **Install firmware**: it replaces your firmware with Escape
Director's.

## 3. Test the props

Turn on **Test mode** and try each prop's commands. Watch the physical outputs
as well as the reported state: a confirmed command means the controller accepted
it, not that a mechanism moved. With the example, **Open door** lights the
board's LED for one second.

<figure><img src="../.gitbook/assets/sdk-test-mode.webp" alt="Gallery controller in Test mode: three props with live readings, their command buttons, and the Test trace"><figcaption><p>In Test mode, each prop shows its readings and the commands your firmware allows.</p></figcaption></figure>

Only commands your firmware allows in Test mode appear there.

Test mode does not run Automations or complete Puzzles.

## 4. Use the props in your Room

- **Completes Puzzle:** for a prop that supports Puzzle completion, choose the
  Puzzle it completes. Completing either one completes the other.
- **Automations:** use the prop's signals as triggers and its commands as
  actions. They appear as **Device › Prop › Capability**.

<figure><img src="../.gitbook/assets/sdk-device-props.webp" alt="Gallery controller with firmware v1.2.0 matching the Room, and three props: Clockwork plinth and Counterfeit seal linked to Puzzles, and Portrait lights"><figcaption><p>Props your firmware declares, with their live readings and linked Puzzles.</p></figcaption></figure>

Start a practice game to check the trigger and the effect. With the example,
link **Train door** to a Puzzle, start a game and touch pin 2 to GND: the LED
lights for five seconds and the Puzzle completes.

## 5. Update your firmware

1. Stop any game, turn off Test mode, then upload the new firmware.
2. Open the Device's **Controller setup**, choose **Check controller**, then
   **Update connection**. Setup lists any props that changed.
3. When the controller reconnects, choose **Save props to Room**.
4. Check each prop's **Completes Puzzle** link and its Automations, then test again.

Change your sketch's version when you change it. Its name, version and declared
props, signals, commands and state make up what the Room sees; changing any of
these requires the connection update, even if the prop behavior is unchanged.

Links and Automations are kept for props and capabilities whose IDs didn't
change.

## Build your prop with a coding agent

The SDK includes `AGENTS.md`, instructions that coding agents such as
Claude Code read automatically. It tells the agent how to add the SDK to your
sketch while keeping your puzzle logic, and how to check its work.

1. Open the extracted SDK folder in your coding agent.
2. Describe your prop: its inputs and outputs, what solves it, and which
   commands you want. For example: _"Add the SDK to my vault_keypad sketch.
   Make one prop that completes when 4-7-1-9 is entered on the keypad, with
   Reset and Open latch commands. Compile it for the UNO R4 WiFi."_
3. Review the changes, then upload the firmware and follow step 2,
   **Pair the controller**, or step 5, **Update your firmware**, above.
4. Test every command yourself. An agent can compile and upload the firmware,
   for example with Arduino CLI, but it can't check the wiring or the prop.

## You're ready when...

- The Device shows **Connected** and **Props saved**, and its expanded panel
  says **Room matches the controller**.
- Each prop reports its state and responds in Test mode.
- A practice game completes the linked Puzzle or runs the Automation once.

## Troubleshooting

**Controller description changed:** the firmware reports a different description.
Follow step 5, **Update your firmware**, above.

**Controller description is invalid:** expand **Developer details**, fix the
listed declarations in your sketch and upload it again. If the controller
never appears, open the Serial Monitor at 115200 baud: the SDK prints any
declaration it rejected.

**The controller ran out of memory during setup:** restart it and try again.
If it continues, reduce the memory your firmware uses, such as large buffers or
text.

**Offline:** check the controller's power and Wi-Fi, and that Room Connector is
running.

**A Test command works but the Puzzle doesn't complete:** Test mode never
completes Puzzles. Check the **Completes Puzzle** link during a practice game.

## Next

[Configure Room Automations](configure-room-automations.md) to use your props'
signals and commands.
