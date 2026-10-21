# Catalog, product drafts and imagery

## Drafts versus recorded published products

The IDE's `tools/new-product-drafts/paws-new-products-draft.csv` is an early import artifact. It has two products and three variant rows, uses draft status and Published=false, and leaves selling prices blank. It is not the latest record of the products' publication state.

Saved `verified-live.json` and `publication-verified.json` record the following on 19 October 2026:

| Product handle | Variants | Recorded selling price (ZAR) | Recorded publication |
| --- | --- | --- | --- |
| `3l-pet-water-fountain` | White, Black | 399.00 each | ACTIVE; published to Online Store |
| `reflective-dog-leash-set` | Default Title | 249.00 | ACTIVE; published to Online Store |

Those prices were recorded as temporary merchant-approved prices. Both products had untracked inventory and availableForSale=true in the saved response; that does not confirm supplier stock. The product response's onlineStoreUrl was null, while the separate publication response reported publication success. Verify current storefront access and availability before relying on these historical results.

The fountain appeared in `home-comfort`, `dogs` and `cats`; the leash in `dogs`. These are recorded collection memberships, not guaranteed current assignments.

## Product preparation artifacts

All paths in this section are relative to the parent workspace, outside the theme repository.

- `tools/prepare-new-product-drafts.cjs` reads the two supplier JSON files and regenerates product JSON plus the draft CSV. It writes old draft defaults and can overwrite later preparation work.
- `tools/new-product-drafts/prepare-live.cjs` generates active product input variables with the recorded temporary prices and changes the local product JSON. It does not itself submit the operations to Shopify.
- `paws-new-products-live.csv` is the later CSV counterpart. Review its contents rather than importing the earlier draft by filename alone.
- `create.graphql` and per-product `.variables.json` contain product creation/upsert inputs. Review the operation and identifiers before running them against a store.
- `variant-images.graphql` and its variables/results record variant image assignments.
- `publish.graphql`, publication variables and result files record sales-channel publication.
- `verify.graphql`, `verify-publication.graphql` and saved result JSON provide historical verification evidence.

Do not replay catalog mutations as a theme deployment step. Theme Git commits do not create products or publish catalog entries.

## Supplier claims and product copy

Supplier references are for the 3L Pet Water Fountain and Reflective Dog Leash Set from Perfect Dealz. Saved supplier costs are distinct from retail selling prices. Fountain power connector, dimensions and replacement filter availability require confirmation. Supplier leash copy mentions multiple lengths, but the saved product exposes only Default Title; verify exact size and set contents before adding variants or claims.

## Imagery

The parent tools folder contains supplier reference downloads, image prompt documents, generated previews and screenshots. `tools/new-product-drafts/image-prompts.md` covers the two new products. Other prompt documents cover hero products, categories, collection tiles, care cards, promotions and customer product previews.

Theme assets use names such as `pp-preview-<handle>-v1.png`, `pp-category-*`, `pp-care-*` and `pp-promo-*`. `tools/product-preview-asset-map.json` records curated preview mapping outside the repository. Liquid helpers inside the repository implement the deployed selection logic.

For an image change, inspect the real supplier/product reference, preserve recognizable product details, update the intended theme asset and helper mapping, and inspect cards, gallery, thumbnails, zoom and variant selection. Keep editorial imagery distinct from catalog facts. Preserve original detail photos where the gallery is intended to show them.
