---
description: Recover from common Live View, timer, media, and Room Session save problems.
---

# Troubleshoot a Live Session

Use the section matching the visible problem. Preserve the current Room Dashboard until the Room Session is safe.

## Live View does not open

1. Confirm the browser did not block the new window.
2. Select **Open Live View** once.
3. Check the taskbar or other display for an existing Live View window.
4. If it opened on the wrong display, move that window before using fullscreen.

Do not open several Live View windows for the same Room.

## Live View is open but looks wrong

- Confirm the correct Room is open.
- Exit fullscreen and place the window on the intended display.
- Check display scaling and resolution.
- If the layout itself is wrong, finish the current safe operation and update [Live View configuration](../build-your-rooms/configure-live-view.md) before the next group.

## A message or Clue does not appear

- Confirm Live View is open.
- Check the Session Log before sending the content again. Use its filter when the relevant action is hidden among other events.
- Confirm the correct Puzzle is selected.
- Use **Clear Live View** only when removing the current player-facing content is intended.

## Audio or media does not play

1. Check the Room Station output device and volume.
2. Open the **Audio mixer** and confirm the asset exists and is not muted.
3. Confirm the browser has permission to play or capture audio when required.
4. Try the exact image, video, or audio control once.

If an asset is missing, do not replace Room configuration during the active game unless the operator understands the effect. Use a safe alternative and repair the Room before the next group.

## The timer needs correction

- To add time, type a positive number of minutes. To take time away, type a negative number. Then select the **Minute(s)** button.
- Confirm the new value on both the Room Dashboard and Live View.
- Avoid speed controls during a real Room Session unless the operating plan specifically requires them.

## The Room Station loses its connection

- Keep the Room Dashboard and Live View open.
- Do not refresh or sign out during the active Room Session.
- Continue only when the application shows the current Room is available for supported offline operation.
- When the connection returns, allow any pending Room Session record to synchronize.

## The Room Session does not save

1. Keep the completion dialog or recovery state open.
2. Confirm every required field, including the Game Master and player details.
3. Submit once and wait for the result.
4. If the application reports a pending or rejected record, preserve the Room Station state and follow the displayed recovery action.

{% hint style="danger" %}
Do not clear browser data, remove the offline download, or discard a pending or rejected Room Session unless you intend to permanently remove that local record.
{% endhint %}

## An application update is ready during a game

Leave the update message visible and finish the active or completed-but-unsaved Room Session first. **Update now** stays disabled while this browser profile has an active game, including a game in another Escape Director window. Select it only after the Room Session is safely saved and the control becomes available.

## Escalate to support

Use [Troubleshoot and Get Help](../help/README.md) when the safe steps above do not restore operation. Include the Room name, visible error, browser, operating system, and whether the Room Session is still active or waiting to save.
