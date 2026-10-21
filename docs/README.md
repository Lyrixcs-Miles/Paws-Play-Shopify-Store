# Paws & Play project documentation

Documented from the local workspace on 21 October 2026. Store observations below are historical records from 19 October, not a fresh production audit.

## Project and repository boundaries

Paws & Play is a pet supplies storefront. Its current implementation is a Shopify Online Store theme based on Dawn 15.5.0, with custom brand presentation and native Dawn shopping functionality.

The workspace root is not a Git repository. `LiveTheme/` is the maintained repository, with remote `https://github.com/Lyrixcs-Miles/Paws-Play-Shopify-Store.git` and working branch `rebuild-on-dawn`. `paws-play-dawn/` is a separate repository containing the Dawn reference checkout, currently at a detached HEAD. The earlier standalone implementation is recorded on the maintained repository's `main` branch, according to its existing README.

| Workspace path | Purpose | Included in the maintained repository? |
| --- | --- | --- |
| `LiveTheme/` | Customized Shopify theme and this documentation | Yes |
| `paws-play-dawn/` | Dawn reference used for the rebuild | No |
| `index.html`, `pages/` | Original static storefront prototype | No |
| `assets/css/`, `assets/js/`, `assets/imgs/` | Static prototype styles, scripts and imagery | No |
| `tools/` | Migration, catalog, imagery and verification scripts and saved results | No |
| `tools/new-product-drafts/` | Supplier references, CSVs, GraphQL operations and product publication evidence | No |
| `archive/old-flat-files/` | Earlier flat HTML/CSS/JavaScript prototype | No |
| `paws-and-play-dawn-shopify.zip` | Previously generated Dawn theme upload archive | No |
| `paws-and-play-shopify.zip` | Previously generated standalone theme archive | No |

Cloning the GitHub repository gives the theme, not the entire parent workspace. Documentation describing parent files does not make those files available in a fresh clone. Keep a separate backup of those working materials. Existing ZIPs are dated artifacts; generate a new package from the intended theme revision when needed.

## Documentation map

- [Theme architecture and customization](theme-architecture.md)
- [Development, validation and release workflow](operations.md)
- [Catalog, product drafts and imagery](catalog-and-assets.md)
- [Parent workspace tooling and saved evidence](workspace-tools.md)
- [Dawn provenance and recorded deployment targets](../UPSTREAM.md)
- [Upstream license](../LICENSE.md)

## State and remaining verification

The local theme contains branded homepage sections, responsive navigation and footer, a collection directory, curated product imagery, information-page templates and Dawn commerce components. Local scripts and saved screenshots cover several desktop, tablet and phone layouts. Their presence does not establish that every check passes against the current revision.

The deployment record identifies store `k0uusd-n8.myshopify.com`, live theme `191876399394`, and Development preview `191874236706`. It records synchronization on 19 October 2026 and a live theme linked to `rebuild-on-dawn`. These identifiers and the linkage must be rechecked before a release.

Payments, checkout, inventory accuracy, app compatibility, contact details, policies and a complete test order require store-level verification. Product, collection, article, page and navigation data live in Shopify separately from this repository.
