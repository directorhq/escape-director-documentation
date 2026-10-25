# Escape Director Documentation Agent Guide

This repository contains the public customer documentation (Mintlify) for
Escape Director. The product's code lives in separate repositories
(`escape-director-frontend`, `escape-director-backend`, and the public
`escape-director-device-sdk`).

## Read first

- [`docs.json`](docs.json): site settings, navigation and redirects, and the
  reader's paths through the content.
- [`docs/content-design.md`](docs/content-design.md): voice, style, and
  spelling rules.
- [`CONTEXT.md`](CONTEXT.md): the product terms guides use and the words to
  avoid.

## Work from issue to pull request

1. Work starts from the assigned Linear issue (team ED).
2. Refresh `origin/main` and branch from it, using the issue's branch name
   when it has one.
3. Run `node scripts/validate-docs.mjs`.
4. Preview the site with `npx mint dev` (Node 20 to 24; the Mintlify CLI refuses Node 25) and open each page
   you changed.
5. Open a pull request to `main`; link the issue. Pull request descriptions follow `.github/PULL_REQUEST_TEMPLATE.md`; fill every section.

Merging to `main` publishes at once, so merge a guide only when what it
describes is in production.

## Writing guides

Each guide helps a Room owner or Game Master finish a task or make a decision.
Before adding text, ask which task or decision it helps with.

- Give each feature a short page: what it does, where it lives (the path, in
  bold, such as **Account Settings → Locations**), how to start, and anything
  that would surprise someone.
- Do not describe buttons, icons, layouts or every screen state that the
  reader can already see. Use a table to compare options, and a short section
  on differences and limits instead of repeating near-identical steps.
- A small interface tweak needs no guide change, and a new control does not
  need its own page.
- When how a feature works changes, rewrite the affected section instead of
  adding a note about the new behavior.

## Guardrails

- Write for customers (Room owners and Game Masters), not developers. Use the
  domain language in `CONTEXT.md`; never expose internal terms,
  Linear context, API details, or credentials.
- Keep navigation consistent: new pages belong in an existing section folder,
  are linked from the section's first page, and are listed in `docs.json`.
- Page URLs come from file paths and are what search engines and the app link
  to. When you rename or move a page, add a permanent redirect in `docs.json`
  from the old path.
- Pages are MDX: start with `title` and `description` front matter (no `#`
  heading), link with paths from the site root (`/run-a-session/run-a-session`),
  and keep images in `images/`.
- Screenshots use fictional demo data only; never capture real customer Rooms,
  sessions, or accounts.
- Do not commit build output or Mintlify-generated artifacts.
- If your change invalidates anything stated in this guide or the documents it
  references, update those documents in the same pull request.
