# Dawn foundation

Initialized with Shopify CLI:

`shopify.cmd theme init paws-play-dawn --clone-url https://github.com/Shopify/dawn.git --latest --no-input`

Base: Shopify Dawn 15.5.0. The original source is https://github.com/Shopify/dawn. Keep LICENSE.md when redistributing.

Native Dawn product pages, cart drawer, variant selection, search, accounts, filters, contact form, newsletter and checkout integration are retained. Custom presentation files use the pp- prefix.

## Shopify deployment targets

Store: `k0uusd-n8.myshopify.com`. The live theme is `191876399394` and follows the GitHub `rebuild-on-dawn` branch. The separate Development preview is `191874236706`; publishing changes to the live theme does not update that preview automatically.

On 2026-10-19, the complete live theme was downloaded and synchronized to the Development preview, including templates, settings, sections, snippets, translations and assets. The homepage tiles are Home & comfort, Shop for all pets, Travel & car, and Grooming & bath. Preserve the footer's `footer-shop` and `footer` menu assignments when syncing theme-editor settings.

Before further changes, pull the shared branch and compare live theme-editor settings. Deploy the intended changes to both themes when both previews need to match. Shopify product categories, collections, products, pages and navigation menus are shared store data and are managed separately from theme files.
