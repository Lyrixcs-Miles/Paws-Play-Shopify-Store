# Paws & Play Shopify theme

Custom Online Store 2.0 theme converted from the local Paws & Play website. The HTML site outside this directory remains unchanged.

## Install and preview

1. In Shopify Admin, open **Online Store → Themes → Add theme → Upload ZIP file** and choose `paws-and-play-shopify.zip` from the parent folder.
2. Open **Customize** on the uploaded theme before publishing.
3. Configure the header and footer menus and replace the contact details. The store name comes from your Shopify store settings.
4. On the homepage, select two products for the hero and a collection for Latest Arrivals. Until selected, those areas show illustration previews without invented prices or working purchase buttons.
5. Select your blog in Latest Blog Posts. It uses real Shopify articles; it does not import the old demo articles.
6. Replace the starter testimonial with genuine customer feedback or remove that section.
7. Create your About, Contact, FAQ, and Delivery pages in Shopify Admin. Assign the matching `about`, `contact`, `faq`, or `delivery` page template. Enter your page copy in Shopify Admin and edit the section settings in Customize.
8. Add products, prices, product photos, variants, collections, shipping rates, taxes, payment methods, and policies in Shopify Admin. These are store data, not theme files.
9. Enable collection filters through Shopify Search & Discovery if needed. Collection sorting, pagination, search, real cart forms, checkout handoff, newsletter signup, and contact submissions are built in.
10. Preview on desktop and mobile and complete a test order before publishing. This package has not been uploaded, published, or transaction-tested against a connected store.

## Theme editor

The homepage has independently editable and reorderable hero, categories, banners, featured collection, care cards, testimonials, and blog sections. Both original hero dogs are included as default assets. Choose replacements with the image pickers. Accent, cream, text, and footer colors are global theme settings.

Decorative pet photography has unique default placements. A product's own catalog photo stays consistent when the same product appears in different storefront locations. Product and article images come from Shopify's CDN. The bundled imagery is the same local imagery approved during the website build. The rejected blue-background photo is excluded.

## Development

From this directory:

```powershell
shopify.cmd theme check
shopify.cmd theme dev --store your-store.myshopify.com
shopify.cmd theme package
```

Use `shopify` in shells that do not require the Windows `.cmd` suffix. Development preview requires your store login; the ZIP can be uploaded directly without CLI setup.

`tools/build-shopify-theme.cjs` in the parent project builds the initial Liquid source. Do not rerun it after editing theme files unless you intend to regenerate those files. `shopify-theme/assets/shopify.css` and `theme.js` contain the Shopify-specific layout and interactions; the combined original styles are in `base.css`.
