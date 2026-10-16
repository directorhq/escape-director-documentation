# Escape Director Documentation Agent Guide

This repository contains the public customer documentation (GitBook) for
Escape Director. Workspace-wide workflow is defined in
[`../AGENTS.md`](../AGENTS.md).

## Read first

- [`README.md`](README.md) and [`SUMMARY.md`](SUMMARY.md): structure and the
  reader's paths through the content.
- [`docs/content-design.md`](docs/content-design.md): voice, style, and
  spelling rules.
- [`CONTEXT.md`](CONTEXT.md): the product terms guides use and the words to
  avoid.

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
