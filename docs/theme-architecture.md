# Theme architecture and customization

## Theme structure

| Directory | Responsibility |
| --- | --- |
| `layout/` | Document shell and shared asset loading |
| `templates/` | JSON page composition and resource-specific templates |
| `sections/` | Configurable page sections, header and footer |
| `snippets/` | Reusable Liquid rendering |
| `assets/` | CSS, JavaScript, icons and bundled imagery |
| `config/` | Theme settings schema and saved configuration |
| `locales/` | Storefront and editor translations |

There is no application server or package.json build pipeline in this theme. Shopify renders Liquid and supplies catalog, customer and cart context. Checkout is supplied by Shopify.

## Homepage

`templates/index.json` currently orders the sections as hero, categories, promotions, arrivals, care, testimonials and blog. Arrivals uses Dawn's featured collection section; the blog uses Dawn's featured blog section. Choose their source collection and blog in the theme editor.

| Custom section | Purpose |
| --- | --- |
| `pp-hero.liquid` | Branded two-dog hero and product composition |
| `pp-categories.liquid` | Category tiles and collection entry points |
| `pp-promotions.liquid` | Promotional banners |
| `pp-care-cards.liquid` | Pet care editorial cards |
| `pp-testimonials.liquid` | Quote/testimonial presentation |
| `pp-story.liquid` | Reusable brand story presentation |
| `pp-footer.liquid` | Newsletter, menus, contacts, social links and payment icons |

A section file being available does not mean it is active on the homepage. JSON templates and section groups determine which sections render.

## Shared presentation

Custom styles and scripts use the `pp-` prefix, including `assets/pp-design.css`, `assets/pp-design.js`, `assets/pp-footer.css` and `assets/pp-collection-directory.css`. The layout loads the Paws presentation assets over Dawn. Theme settings provide logo, fonts and color schemes; the documented defaults are white with terracotta buttons, cream surfaces and a dark brown footer.

The header setting **Show complete Paws navigation** enables the Paws navigation. Disabling it uses the selected Shopify menu. `pp-navigation.liquid` and `pp-information-links.liquid` support navigation rendering. Preserve the footer menu assignments `footer-shop` and `footer` when reconciling saved settings.

`pp-collection-directory-card.liquid` renders collection directory cards. Product presentation helpers are `pp-product-card.liquid`, `pp-product-preview-asset.liquid` and `pp-product-gallery-asset.liquid`. Check both product cards and the full gallery when changing image selection. Product handles act as keys for curated image choices, so a handle change may require a matching mapping update.

## Commerce and content

Dawn supplies product pages, media galleries, variant selection, cart drawer, quick add, collection filters, predictive search, accounts, forms, localization and gift cards. Changes to shared Dawn files can affect several page types; the project is not isolated entirely to files with the custom prefix.

Create and maintain About, Contact, FAQ and Delivery page resources in Shopify Admin and assign the matching theme templates. Blog/article content, menus, collections and products are also store resources rather than theme source. Review starter quotes, contact details and policy copy before publishing.

## Editing guidance

Use the theme editor for merchant-controlled copy, images, links, product selections and color schemes. Edit source when changing layout or behavior. Compare store-side settings before replacing `config/settings_data.json` or JSON templates, because theme-editor changes may already exist remotely. Retain original product details and variant behavior when changing curated imagery. Keep the upstream license with redistributed theme packages.
