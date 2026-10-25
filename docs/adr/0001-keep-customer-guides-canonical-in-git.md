---
status: accepted
date: 2026-08-03
---

# Keep customer guides canonical in Git

> Amended on 2026-10-25: the help center is published with Mintlify instead
> of GitBook. See [ADR 0002](0002-publish-the-help-center-with-mintlify.md).
>
> Amended on 2026-10-16: the Featurebase help center is off, so Featurebase no
> longer holds copies of Product Guides.

Customer-facing Product Guides are maintained as Markdown in the documentation repository and published through GitBook because this keeps changes reviewable, versioned, and easy to update. Featurebase and the application link to Product Guides; they do not keep their own copies.

## Consequences

- GitBook remains the complete, public documentation experience and the only source of help articles.
- The Featurebase help center is turned off. Support chat links to Product Guides when an article helps.
- The application should link directly to the most relevant Product Guide when its context is known.
