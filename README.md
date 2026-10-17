# Paws & Play — built on Shopify Dawn

Built over **Dawn 15.5.0**, initialized with Shopify CLI. Dawn's native product pages, variant picker, media gallery, cart drawer, quick add, collection filters, predictive search, accounts, contact/newsletter forms, localization, gift cards, and checkout integration are retained.

Theme root: `D:\Development\My Personal Projects\Paws & Play\LiveTheme`

The standalone theme is preserved in Git history on `main`. This rebuild uses `rebuild-on-dawn`. The original HTML website in the parent folder is unchanged.

## Preview with Shopify CLI

Run from this folder:

```powershell
shopify.cmd theme dev --store your-store.myshopify.com
```

Replace the store domain with yours and complete Shopify's login prompt. Store access is required. Use `shopify` instead of `shopify.cmd` in macOS/Linux shells.

## Add to Shopify

Connect `Lyrixcs-Miles/Paws-Play-Shopify-Store`, branch **rebuild-on-dawn**, through Shopify Admin's GitHub theme integration. Alternatively upload `paws-and-play-dawn-shopify.zip` from the parent project folder. Preview and complete a test order before publishing.

## Customize

- The `Paws:` sections provide the two-dog hero, category cards, banners, pet care cards, and testimonials. Edit their images, text, links, products, and color schemes in the theme editor.
- Latest Arrivals and Latest News use Dawn's native featured collection and blog sections. Choose your collection and blog. Catalog data and article content come from Shopify Admin.
- Edit your logo, fonts, header menus, footer, and color schemes in Dawn's settings. Scheme 1 is white with terracotta buttons, scheme 2 is cream, and scheme 3 is the dark brown footer.
- The header's **Show complete Paws navigation** setting restores Home, Shop, Blog, Pages, and Contact on desktop, with all information links visible in the mobile drawer. Turn it off to use your selected Shopify menu. The **Paws: footer** section includes editable newsletter copy, shop/help menus, contact details, social links, and payment icons, with responsive layouts for phones, tablets, and desktop screens.
- Create About, Contact, FAQ, and Delivery pages, and assign their matching templates. Enter real contact details and policies. Replace the starter brand quote with genuine feedback or remove that section.
- Both hero dogs remain as unique default images. Editorial pet photos are not repeated. A product's catalog image stays consistent wherever that same product appears.

## Source and checks

Custom presentation files use `assets/pp-*`, `sections/pp-*`, and `snippets/pp-product-card.liquid`. The main layout loads the scoped Paws styles and testimonial script. Native Dawn shopping code has not been replaced by the previous custom implementation.

```powershell
shopify.cmd theme check
shopify.cmd theme package
```

`UPSTREAM.md` records the starter and initialization command. `LICENSE.md` preserves Shopify's upstream license. The parent `tools/rebuild-on-dawn.cjs` is a one-time migration script; rerunning it resets theme files and should not be used after custom edits.

The theme is prepared locally and packaged for upload. Store rendering, payments, checkout, and app compatibility still need testing in a Shopify development preview.
