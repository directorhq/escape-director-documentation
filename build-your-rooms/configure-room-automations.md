---
description: Build, enable, and test Room Automations safely before using them in a live Room Session.
---

# Configure Room Automations

Use this guide to run an ordered sequence of Room actions from a game event or a Dashboard button.

## Before you begin

- Configure every Puzzle, Clue, media file, and soundtrack the Automation will use.
- Finish or reset any active Room Session.
- Test on the Room Station you will use during live games.

<figure><img src="../.gitbook/assets/room-automations-editor.webp" alt="Room Automation editor for Finale Sequence with an All Puzzles completed Trigger and three ordered Actions"><figcaption><p>A valid Automation pairs one Trigger with ordered Actions. This example sends a final message, waits five seconds, then completes the Room.</p></figcaption></figure>

## Create an Automation

1. Open **All Rooms** and select **Edit** for the Room.
2. Open the **Automations** tab.
3. Select **New automation** and enter a name that tells the Game Master what the sequence does.
4. Choose the Trigger that starts the sequence.
5. Add each Action in its running order. Drag an Action to change that order.
6. Select **Save** when the editor shows **Valid**.

New Automations start disabled. Escape Director also disables choices that need Room content you have not configured.

## Check the Action order

An Automation can contain up to 20 Actions. Video and audio Actions continue to the next Action immediately unless you enable **Wait until finished before continuing**.

**Complete Room** and **Fail Room** end the sequence. Nothing can follow either Action. Put any end-of-game media before the final Action, or use the Room's configured success and failure screens.

## Enable and test the Automation

1. Turn on the Automation in **Edit Room**.
2. Open the Room Dashboard.
3. Start a controlled test and perform the event that matches the Trigger.
4. For a Dashboard button, open **Automations**, select the named button once, then select it again while **Press again** is shown.
5. Check the timer, Live View, audio, Puzzles, Clues, and Session Log for the expected result.
6. Select **Reset Room** before the next test or live group.

{% hint style="warning" %}
The Room Dashboard does not have a preview or practice mode. Testing an Automation runs its real Actions and can change the timer, send Clues, play media, or complete or fail the Room.
{% endhint %}

## Prepare for offline operation

After you finish editing, open the Room on its Room Station while online so it is ready offline. The offline copy includes the enabled Automations and their media, so they keep running during a game even if the internet drops.

If you change an Automation or one of its media files, open the Room again while online before you rely on it offline.

## You're ready when...

- The Automation is enabled.
- Its Trigger starts it at the intended moment.
- Its Actions run in the intended order.
- The Session Log shows one expandable Automation Run.
- The Room has been reset and prepared on its Room Station.

## Next

[Connect Room Devices](connect-room-devices.md) when the Room has props or other hardware to connect. Otherwise, go to [Prepare Your Room Station](../prepare-for-a-shift/prepare-your-room-station.md).
