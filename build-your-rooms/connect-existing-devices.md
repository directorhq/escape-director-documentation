---
description: Connect existing HTTP or MQTT props to Room Automations without replacing their firmware.
---

# Connect Existing Devices

Use this guide to use an existing prop's messages and commands in Escape
Director. The device must already support HTTP or MQTT; it keeps its firmware.
Add it in **All Rooms → Edit → Devices → Add Integrated Device → Existing
device**.

| Term | Meaning |
| --- | --- |
| **Signal** | A message that starts an Automation, such as a button press. |
| **Command** | Something Escape Director asks the device to do, such as open a latch. |
| **State** | What the device reports, such as a door being open. |

## Before you begin

- Have the device's connection instructions, message format and supported
  commands. For MQTT, also have the broker address and any login details.
- Run [Room Connector](connect-room-devices.md) on the Room Station, on a
  network that can reach the devices or broker. Guest networks may block this.

## 1. Add the connection

1. Choose **Add Integrated Device → Existing device** and name it.
2. Choose **MQTT** or **HTTP** and fill in the connection details.
3. For HTTP, enter the **Device address** if Escape Director should send it
   commands. Leave it blank for a device that only sends messages.
4. Choose **Add Device**, then expand its row.

For incoming HTTP, copy the **POST endpoint** and **X-ED-Token header** into the
device's outgoing request settings, and send text or JSON as the request body.
Each HTTP device has its own endpoint. Keep the token private. The endpoint
points to this Room Station, so update the device if the computer's network
address changes.

**Check reachability** checks whether an HTTP device answers. It doesn't test a
command or the physical prop.

Passwords and tokens you enter in Escape Director stay on this computer. On
another Room Station, enter them again.

## 2. Map a signal

1. Choose **Add prop** and name the puzzle or mechanism.
2. Choose **Add from a message**, keep **A moment** selected, and name the
   signal, such as **Button pressed**.
3. Choose **Listen** and operate the device. For MQTT, enter its topic filter.
   Select a message, then click the value that matters, such as `"pressed"`.
   You can also enter the rule by hand.
4. Check the value type: the boolean `true` differs from the text `"true"`.
5. Choose the rule's verb (see below).
6. To complete a Room Puzzle, choose it under **Complete a puzzle**. This
   creates a regular Automation.
7. Choose **Save signal**.

<figure><img src="../.gitbook/assets/mapping-sheet-listen.webp" alt="New signal sheet listening on room/wall-safe/#, with captured messages, the chosen message and its door value open selected"><figcaption><p>Listen, choose a message, then click the value that means something.</p></figcaption></figure>

| Verb | Fires | Use for |
| --- | --- | --- |
| **is** | On every matching message, repeats included. | Events, such as a button press. |
| **changes to** | When a match follows a different value. The first report sets the starting state. | State changes, such as unsolved to solved. |

Listening can't tell whether repeated messages are separate events or regular
state reports, so choose based on how your device works. MQTT messages marked
**Retained** show earlier state and don't run Automations.

## 3. Map state and commands

- **State:** choose **Add from a message → A reading** to show a reported text,
  number or true/false value in Device Monitor. A reading doesn't trigger
  Automations.
- **Commands:** choose **Add command** and enter an MQTT topic and payload, or
  an HTTP GET or POST path. Use a name a Game Master will recognize, such as
  **Open latch**. If the device reports the result, choose that state under
  expected state, with its value and wait time.

<figure><img src="../.gitbook/assets/existing-device-mqtt.webp" alt="Wall safe MQTT Device with its prop, a Solved signal, Solved and Door readings, and an Open latch command"><figcaption><p>Each prop lists its signals, readings and commands beside the messages they use.</p></figcaption></figure>

{% hint style="warning" %}
Testing a command sends it for real. Keep people clear of moving props and check
the physical result before using the command in a game.
{% endhint %}

A test result shows what is known:

| Result | Meaning |
| --- | --- |
| **Sent** | Room Connector sent the request. MQTT without delivery confirmation may only show this. |
| **Accepted** | The broker or HTTP endpoint accepted it. This doesn't prove the prop acted. |
| **Expected state reported** | A matching report arrived after the command. No report means unconfirmed; the command may still have worked. |

<figure><img src="../.gitbook/assets/command-evidence.webp" alt="Test result for Wall safe Open latch: Sent, Accepted and Expected state reported"><figcaption><p>A test command shows what is known: sent, accepted, and whether the expected state was reported.</p></figcaption></figure>

MQTT commands are never retained. With delivery level 1, a broker can deliver a
command more than once, so use commands the device can safely repeat. The
device's own broker session may also queue messages while it's offline; check
its settings.

## 4. Use it in an Automation

In **Automations**, choose a device signal as a trigger or a device command as
an action. To create one there, choose **New device signal…** or **New device
command…**, then **Save and use**. Save the Automation afterward.

**Used in** beside a mapping opens the Automations that use it. Removing a
mapping disables those Automations until you repair them.

## 5. Check the complete game

1. In Devices, turn on **Test mode**. Send inputs, inspect messages, and test
   each command. Test mode doesn't run Automations or write to the Session Log.
2. To map a captured message, choose **Map…**. The mapping stays a draft until
   you choose **Turn off Test mode and save**.
3. Run a practice game. Operate the prop and check the Puzzle, Automation and
   physical output together.
4. Finish the game and use the device's own reset. **Reset Room** doesn't send a
   reset command to existing devices.

## Limits

- Commands missed while Room Connector is disconnected aren't sent again when
  it reconnects. Check the prop's state before sending another command.
- A device that only sends HTTP shows its last request time instead of
  **Online**. A quiet device may have nothing to report.

## Next

[Configure Room Automations](configure-room-automations.md)
to combine device signals and commands with your Room's other actions.
