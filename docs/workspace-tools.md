# Parent workspace tools and saved evidence

These files live in `../tools/` relative to the theme repository. They are not distributed by a clone of this repository. This index groups the tools by purpose; inspect each file before execution because many are one-off scripts with fixed paths, ports, product handles or output names.

## Migration and comparison

| Tool | Purpose / precautions |
| --- | --- |
| `build-shopify-theme.cjs` | Earlier standalone theme builder; writes `shopify-theme/` in the parent workspace |
| `rebuild-on-dawn.cjs` | One-time rebuild using `paws-play-dawn/` and targeting `LiveTheme/`; can reset custom work and must not be casually rerun |
| `compare-live-theme.cjs` | Compares the saved `tools/live-home-check/` tree with `LiveTheme/`; writes `live-theme-differences.json`; does not fetch the store |
| `live-home-check/`, `publish-review/` | Saved theme snapshot/review material; verify freshness before use |

## Catalog and content

`read-public-product-inventory.cjs`, `audit-storefront-consumables.cjs`, `prepare-category-fixes.cjs` and the category/taxonomy GraphQL files support catalog investigation. Category plans, audit outputs and variables capture past work. The `update-non-consumables.cjs` and `update-static-non-consumables.cjs` scripts belong to the prior catalog/static-content workflow; read their side effects before use.

`shopify-content-inventory.graphql`, `shopify-page-create.graphql`, `shopify-blog-create.graphql`, `shopify-article-create.graphql`, page JSON and `blog-post-*.json` cover content preparation. Operation files and saved responses are not an automatic deploy pipeline. Check the selected store, variables and mutation behavior before executing them.

The new-product folder has its own detailed guide in [Catalog, product drafts and imagery](catalog-and-assets.md).

## Image preparation and wiring

`download-product-reference-images.cjs`, `download-remaining-product-references.cjs`, `download-new-product-references.cjs`, `read-hero-product-references.cjs` and `read-new-supplier-products.cjs` support reference gathering. Saved reference images and supplier JSON capture inputs at the time they were fetched.

`wire-product-preview-images.cjs`, `use-curated-product-gallery-images.cjs`, `size-preview-card-images.cjs`, `update-accurate-hero-products.cjs`, `fix-collection-category-images.cjs` and `update-all-pets-tile.cjs` prepare or change presentation. Review their destination paths before running them. The `prepare-*-preview.cjs` and `setup-all-pets-preview.cjs` files are local preview helpers.

## Browser checks

The folder contains checks for categories, care images, all-pets tiles, collection tiles, hero composition/products, promotions, testimonials, footer, mobile products, product alignment, product page access and product galleries. File names generally begin with `check-`; `update-gallery-browser-check.cjs` also belongs to browser verification.

These are focused ad hoc scripts rather than a unified test suite. For example, `check-product-gallery-browser.cjs` expects an existing browser debugging endpoint at `127.0.0.1:9334`, navigates a Shopify preview at `127.0.0.1:9292`, checks a fixed product route, takes screenshots at 390 and 1440 pixels, and closes the connected browser. Run it only against a dedicated testing browser. Other scripts may use different assumptions.

## Evidence interpretation

- `*-validation.json`, `*-checks.json` and `*-check.json` are saved results; inspect actual contents and timestamps.
- `*-theme-check.json` captures earlier theme-check output and may predate current code.
- PNG files with viewport widths in their names capture visual review at those widths.
- Saved HTML such as `current-preview.html`, `updated-preview.html` and `gallery-page-*.html` is a snapshot rather than a live preview.
- `live-theme-differences.json` describes the local saved snapshot comparison, not necessarily the current production state.

For a new change, rerun relevant checks where their dependencies are available and record the revision, target, viewport and outcome. Keep credentials and private customer/order data out of documentation, operation fixtures and commits.
