---
status: accepted
date: 2026-10-25
---

# Publish the help center with Mintlify

GitBook moved custom domains and logo changes to a paid plan. Mintlify's free
plan keeps the custom domain, so the help center at `docs.escapedirector.com`
is built by Mintlify from `main` in this repository. Product Guides stay
canonical in Git ([ADR 0001](0001-keep-customer-guides-canonical-in-git.md)).

## Consequences

- Pages are MDX, and `docs.json` holds navigation, branding and redirects.
- Page paths match the URLs GitBook published, so search results and links
  from the app keep working. The older GitBook paths are permanent redirects.
- The site shows a "Powered by Mintlify" badge and has no AI search, as before
  on GitBook.
