# Escape Director Documentation Agent Guide

This repository contains the public customer documentation (GitBook) for
Escape Director. The product's code lives in separate repositories
(`escape-director-frontend`, `escape-director-backend`, and the public
`escape-director-device-sdk`).

## Read first

- [`README.md`](README.md) and [`SUMMARY.md`](SUMMARY.md): structure and the
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
4. Open a pull request to `main`; link the issue. GitBook adds a preview link
   to the pull request. Pull request descriptions follow `.github/PULL_REQUEST_TEMPLATE.md`; fill every section.

Merging to `main` publishes at once, so merge a guide only when what it
describes is in production.

## Guardrails

- Write for customers (Room owners and Game Masters), not developers. Use the
  domain language in `CONTEXT.md`; never expose internal terms,
  Linear context, API details, or credentials.
- Keep navigation consistent: new pages belong in an existing section, are
  linked from its `README.md`, and appear in `SUMMARY.md` when appropriate.
- Screenshots use fictional demo data only; never capture real customer Rooms,
  sessions, or accounts.
- Do not commit build output or GitBook-generated artifacts.
- If your change invalidates anything stated in this guide or the documents it
  references, update those documents in the same pull request.
