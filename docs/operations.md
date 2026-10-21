# Development, validation and release workflow

## Prerequisites and working directory

Use Git and Shopify CLI for theme work. Parent tooling uses Node.js/CommonJS; some browser scripts also depend on a browser debugging session and modern Node globals such as fetch and WebSocket. No package manifest pins these tool versions in the theme repository. Check each script's imports and requirements before use.

Run theme commands inside `LiveTheme/`. Authenticate with an account permitted to access the intended Shopify store. For a fresh clone, use the repository URL in the documentation index and select `rebuild-on-dawn`; the parent workspace tools will not be present.

## Local development

1. Check `git status` and pull the shared branch before making changes.
2. Compare remote theme-editor settings with local files before overwriting configuration or templates.
3. Start a Shopify development preview using the command already documented in the project README: `shopify.cmd theme dev --store k0uusd-n8.myshopify.com`.
4. Open the preview URL emitted by the CLI and confirm which theme and store it targets.
5. Edit the theme and inspect affected routes at phone, tablet and desktop widths.

On macOS/Linux the command executable is normally `shopify` rather than `shopify.cmd`. Check installed CLI help for current options when targeting a specific existing theme.

The root static `index.html` and `pages/` form a separate prototype. Serving those files does not render Liquid or exercise Shopify cart, checkout, accounts or store data.

## Validation

Run `shopify.cmd theme check` from the theme root for a theme code change. Review errors and warnings against the current revision. `shopify.cmd theme package` builds an upload package from local theme files. Keep generated archives outside the source change unless deliberately maintaining release artifacts.

Manual verification should follow the scope of the change:

- Homepage: hero composition, category links, promotions, arrivals, care cards, testimonials and blog links.
- Navigation/footer: desktop menu, mobile drawer, information links, newsletter and footer menus.
- Collections/search: directory links, filters, sorting, product cards, prices and predictive search.
- Products: correct images, detail photos, thumbnails, zoom, variants, price updates and add-to-cart.
- Cart: drawer updates, quantities, removal and checkout handoff.
- Content: information-page templates, forms, article rendering and real contact/policy details.
- Responsive/accessibility: horizontal overflow, legible copy, focus visibility, keyboard interaction and useful image alternatives.

Complete a test order and payment/shipping checks in the appropriate store test setup before treating checkout as verified. Existing screenshots and validation JSON are historical evidence, not tests automatically run by Git.

## Release and synchronization

The recorded live theme is `191876399394` and follows GitHub branch `rebuild-on-dawn`. The separate Development preview is `191874236706`. Confirm current linkage in Shopify before pushing: a Git push may update the linked live theme. Publishing or updating one theme does not automatically synchronize the other.

Review the diff, run appropriate checks, commit to the intended branch and push normally. Do not force-push over store-generated commits. If the remote has advanced, fetch and integrate it while preserving theme-editor changes, then repeat checks relevant to the integration.

To use an upload workflow, generate a fresh package from the reviewed revision and upload it through Shopify Admin. Preview before publishing. Product and navigation changes are separate store operations; a theme archive is not a complete store backup.

When both theme targets need the same release, reconcile their sections, templates, settings, snippets, translations and assets deliberately. Preserve footer menu assignments. Record which revision reached each target. The existing UPSTREAM document records a full synchronization on 19 October 2026.

## Recovery and troubleshooting

Use Git history to inspect or revert a bad source change, review the revert and release it through the same workflow. Preserve a copy of theme-editor settings before replacing them. Do not reset the entire theme using the migration script as a recovery shortcut.

If images are missing, check asset filenames, product handles and preview/gallery helper selection. If menu links differ between themes, check section settings and shared store menus. If a published product is absent, check active status, sales-channel publication, collection conditions and storefront access separately. If a local preview differs from production, verify the theme identifier and compare settings as well as code.
