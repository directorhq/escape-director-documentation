---
description: Short answers to common "Can I…?" and "Where do I…?" questions about Escape Director.
---

# Common Questions

Use this page to find where to do something in Escape Director. Each answer links to the full guide.

## Rooms, Puzzles, and Clues

**Where do I set up Puzzles and Clues?**
In **All Rooms → Edit → Puzzles & clues**. You can also add and edit them from the Room Dashboard. See [Add Puzzles and Clues](../build-your-rooms/add-puzzles-and-clues.md).

**Can I add or edit a Clue from the Room Dashboard?**
Yes. Select the Puzzle, then select **+** at the top of the Clues list. You can add text, image, audio, or video Clues. See [Edit Puzzles and Clues from the Room Dashboard](../build-your-rooms/add-puzzles-and-clues.md#edit-puzzles-and-clues-from-the-room-dashboard).

**Can I add or edit a Puzzle during a game?**
Yes, from the Room Dashboard. A change to **Can be marked complete** applies to the next game.

**Can I upload media from the Room Dashboard?**
No. Upload files in **All Rooms → Edit → Media library**. Then you can use them in Clues or send them from the Room Dashboard. See [Manage Room Media](../build-your-rooms/manage-room-media.md).

**Can I send an image, video, or sound that isn't a Clue?**
Yes. On the Room Dashboard, use **Images**, **Videos**, or **Audios** under the message box. See [Run a Live Session](../run-a-session/run-a-live-session.md).

**What happens if I delete a media file that a Clue uses?**
The Clues that use it are deleted too. The confirmation lists them first. Past games stay the same.

**What happens if I delete a Room?**
Its Puzzles, Clues, media, Automations, and game history are deleted for good. Its games leave Room Statistics, Analytics, and Leaderboards. See [Delete a Room](../getting-started/create-and-configure-your-first-room.md#delete-a-room).

## Storage

**How much media can I store?**
25 GB for all your Rooms and Leaderboards together. Each file can be up to 5 GB. See [Storage limits](../build-your-rooms/manage-room-media.md#storage-limits).

**Where can I see how much storage I've used?**
In **Account Settings → Membership → Media storage**.

**Why did my upload fail?**
The file may be over 5 GB, or your storage may be full. Delete media you no longer use, then try again.

## Devices and props

**Which controllers and props work with Escape Director?**
There are three ways to connect a prop:

- **Your own firmware:** keep your puzzle logic and add the open-source Device SDK. It includes adapters for the UNO R4 WiFi and GIGA R1 WiFi, and other Arduino boards with USB, Wi-Fi and enough memory can use it through a small board adapter ([board porting guide](https://github.com/directorhq/escape-director-device-sdk/blob/main/BOARD_PORTING.md)). Other platforms can speak the SDK's [MQTT protocol](https://github.com/directorhq/escape-director-device-sdk/blob/main/protocol.md) directly. See [Build Your Own Controller](../build-your-rooms/build-your-own-controller.md).
- **Escape Director firmware:** set up inputs and outputs in the app without writing code, on an Arduino UNO R4 WiFi or GIGA R1 WiFi. See [Connect Room Devices](../build-your-rooms/connect-room-devices.md).
- **An existing device:** any device that already sends HTTP or MQTT messages keeps its firmware; you map its messages in Escape Director. See [Connect Existing Devices](../build-your-rooms/connect-existing-devices.md).

## Running games

**Can a Room run without internet?**
Yes, when the Room is prepared for offline use on that browser. Check **Account Settings → This browser**. See [Prepare Your Room Station](../prepare-for-a-shift/prepare-your-room-station.md).

**Can I edit Puzzles or Clues while offline?**
No. Editing needs a connection.

## Account

**How do I change or cancel my plan?**
Open **Account Settings → Membership** and select **Manage billing**. See [Use Account Settings](../account/use-account-settings.md).

**How do I delete my account?**
Open **Account Settings → Security** and select **Delete account**. It deletes your Rooms, game history and everything else for good, and ends your membership right away without a refund. See [Delete your account](../account/use-account-settings.md#delete-your-account).

**How do I change my email address?**
Contact support. See [Troubleshoot and Get Help](README.md).

**Can I try new features early?**
Yes. Open **Account Settings → Beta features** and turn on the ones you want. See [Try beta features](../account/use-account-settings.md#try-beta-features).

**What does the dot on the bell mean?**
You have an unread notification, such as a product update or a trial reminder. See [Check notifications](../account/use-account-settings.md#check-notifications).
