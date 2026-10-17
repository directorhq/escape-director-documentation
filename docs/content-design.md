# Customer documentation design

This document records the accepted structure and presentation rules for Escape Director Product Guides. It guides repository contributors and is not part of the customer-facing navigation.

## Source of truth

Product Guides are maintained as Markdown in this repository and published through GitBook. See [ADR 0001](adr/0001-keep-customer-guides-canonical-in-git.md).

## Navigation model

Organize the complete documentation around one shared operational journey:

1. Get Started
2. Build Your Rooms
3. Prepare for a Shift
4. Run a Session
5. Review and Improve
6. Troubleshoot and Get Help

Do not duplicate the main documentation tree by role. Instead, provide short homepage entry paths for:

- an owner setting up Escape Director; and
- a Game Master preparing to run a Room.

Each role shortcut should link into the same canonical Product Guides. Keep navigation at no more than two page levels, prefer task-based page titles, and place the most likely next action at the end of each guide.

## Visual guidance

Use screenshots to orient readers and clarify consequential interactions, not as a substitute for written instructions.

- Start a major workflow guide with one clean screenshot of the relevant interface when it helps the reader understand the whole workspace.
- Place tightly cropped screenshots beside important or potentially confusing steps.
- Add numbered callouts only when a screenshot needs to explain several related controls.
- Capture the real Escape Director application using realistic, controlled demo Room data. Never publish customer data, personal account details, email addresses, tokens, or unrelated browser chrome.
- Give every meaningful image descriptive alt text and a short caption that explains why it is shown.
- Keep labels, required actions, warnings, and outcomes in text so that a changed screenshot cannot make the instructions unusable.
- Replace a screenshot when a UI change makes it misleading; do not replace it solely because of an immaterial visual difference.

## Example Rooms

Use a small, consistent set of fictional demo Rooms so that instructions and screenshots feel like one continuous walkthrough.

- Every Room, Game Master, team, and account shown must be fictional.
- Prefer `Demo · Clockwork Heist` for new account setup, Room configuration, Live View, Room Station preparation, live-session, and ordinary statistics screenshots. Existing screenshots with other fictional Rooms (such as `The Curator's Vault` or `Sublevel 13`) stay until the UI changes enough to need a retake.
- For Analytics, use the fictional Rooms and Game Masters in the local test account (for example `The Alchemist's Study`), which has enough games to fill every card.

Keep example names, Puzzle order, Clues, media, Game Masters, and Session details consistent between related pages wherever the application state allows it.

## Product Guide template

Keep each Product Guide focused on one customer task and use this order when the sections apply:

1. State in one or two sentences what the feature does and where it lives, with the path in bold (for example **Account Settings → Locations**).
2. List prerequisites under `Before you begin` only when the reader could otherwise become blocked or make a material mistake.
3. Give short, numbered steps. Place screenshots beside the difficult or easy-to-misidentify moments. Compare options or modes in a table instead of repeating near-identical steps.
4. Describe the success state under `You're ready when ...` only when it is not obvious from the last step.
5. Place warnings beside the step where the risk occurs.
6. Link the normal continuation under `Next`.
7. Keep page-specific troubleshooting brief and link to a focused troubleshooting guide for deeper recovery. Do not add a generic `Get help` section; the Help menu and the troubleshooting section already cover it.

## Editorial test

A section belongs only when it helps the reader:

- complete the stated task;
- recognize success;
- avoid a material mistake; or
- reach the next relevant Product Guide or support surface.

Remove repetition, product marketing, obvious interface descriptions, speculative advice, and background that does not change what the reader should do. Move reusable facts, option definitions, and detailed explanations to focused reference pages instead of interrupting task steps.

Prefer short paragraphs, descriptive headings, numbered actions, compact checklists, and direct links. Use the exact visible interface label when telling a reader what to select.

## Contextual application help

Use the existing application Help menu as the consistent entry point instead of scattering help icons throughout forms and workspaces. When a relevant Product Guide exists, the menu should present:

1. `Guide for this page`, linked to the most relevant task for the current application route;
2. `Browse all documentation`;
3. `Feedback Portal`, when configured; and
4. `Open Chat`, when configured.

Keep the route-to-guide mapping explicit in the frontend so that renamed or reorganized Product Guides can be updated and tested in one place. Fall back to the documentation homepage when a route has no focused guide.

## Publication boundary

Published Product Guides describe the current production application. A screenshot or instruction captured from a development environment may be published only when:

- the pictured behavior, label, and control are already available in production; or
- the documentation is coordinated with an upcoming release and remains unpublished until that release reaches production.

Treat documentation readiness as part of release qualification for customer-visible changes. Do not teach a workflow from a development-only state merely because that state is easier to capture.

Documentation is not a universal merge or release gate. Every customer-visible change should assess its documentation impact, and any deferred update must have a named owner and tracked follow-up. Missing or stale guidance blocks release only when it would make the customer workflow materially wrong or unsafe, particularly for billing, data loss, irreversible actions, authentication, or live-session and offline operation.

## Editorial voice

Write in a calm, operational second-person voice.

- Use American spelling (color, center, canceled) and US date and time formats.
- Keep the language as simple as possible: short sentences and everyday words.
- Use the product terms defined in [`CONTEXT.md`](../CONTEXT.md), and the exact capitalization the app shows for a label (for example, the **Media library** tab).

- Tell the reader what to do using the exact visible interface label, then state the expected result when it is not obvious.
- Use `owner` or `Game Master` only when responsibility matters; otherwise use `you`.
- Avoid `just`, `simply`, `obviously`, product marketing, jokes, and unnecessary technical terminology.
- Explain offline behavior, caching, and recovery in product language unless a technical detail changes the operator's required action.
- Use warnings sparingly and only for data loss, disrupted Room Sessions, billing or account consequences, or irreversible actions.

## Maintenance workflow

- Identify affected Product Guides and contextual Help links in each customer-visible feature change.
- Review coordinated documentation alongside the release when practical, while allowing ordinary documentation improvements to follow asynchronously under a tracked owner.
- Use descriptive screenshot filenames based on the task or interface; do not add generic names such as `image (8).png`.
- Publish instructions and screenshots only when their behavior is in production.
- Periodically review broken links, stale screenshots, unanswered searches, support patterns, and low-rated pages to choose the next documentation improvements.

Run `node scripts/validate-docs.mjs` before publication to check local Markdown links, image references, the site cover, and GitBook redirect destinations.
