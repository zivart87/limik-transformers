# LIMIK site QA audit — 2026-06-29

Site checked: https://www.limiktransformers.com/

Tester: Codex / LIMIK team assistant

## Scope

I checked the live public site manually through the browser:

- desktop home page
- desktop request-quote page
- product page for power transformers
- thank-you page
- mobile home page
- mobile hamburger menu and Transformers submenu
- empty RFQ submit validation
- quick form flow from home to request-quote
- header/footer/product/support links
- basic SEO/meta/tracking signals

I did not submit a valid lead with real data, because that would create an external GHL/contact side effect. I only tested empty-form validation.

## Executive Summary

The site is a good MVP visually, and the main pages are usable enough to show the offer. But it is not ready for paid traffic yet because several header/footer links open 404 pages, the form logic can show success even if webhook delivery fails, the webhook endpoint is exposed in frontend JavaScript, and lead/tracking fields are not yet reliable enough for Google Ads / Meta optimization.

Recommended status: **do not scale paid traffic until P0/P1 items are fixed and retested.**

## What Works

- Home page loads and gives a clear transformer-manufacturing message.
- Request Quote page opens and has a full RFQ form.
- Empty required fields trigger visible validation errors.
- Product pages checked:
  - `/transformers/power/` works.
  - `/transformers/autotransformers/` works.
  - `/transformers/gsu/` works.
- Thank-you page exists at `/thank-you/`.
- Mobile layout does not show horizontal overflow at 390px width.
- Mobile hamburger opens the menu.
- Mobile Transformers submenu expands and exposes product links.
- Google Tag Manager is present: `GTM-5RH77HDC`.

## P0 / Critical

### QA-001 — Broken navigation links open 404

Priority: P0

Observed:

Several header/footer links lead to Vercel `404: NOT_FOUND`.

Broken URLs found:

- `/company/team/`
- `/careers/`
- `/contact/`
- `/transformers/`
- `/industries/`
- `/support/`
- `/support/documentation/`
- `/support/faq/`
- `/support/certifications/`
- `/support/calculator/`

Impact:

Paid visitors will click normal navigation and land on 404 pages. This reduces trust and can hurt conversion rate and ad quality.

Expected:

Every visible menu/footer link should either open a real page or be hidden until the page exists.

Recommended fix:

Create the missing pages or remove/replace those links before launching paid traffic.

Evidence:

- `outputs/site-audit/08-transformers-404.png`

### QA-002 — RFQ form redirects to thank-you even if webhook request fails

Priority: P0

Observed:

The RFQ form JavaScript redirects users to `/thank-you/` after the webhook call. The fallback/error path also redirects to thank-you.

Impact:

A user can see a successful thank-you page even when the lead was not delivered to GHL. This is dangerous for paid traffic because lost leads will look like successful conversions.

Expected:

Redirect to thank-you only after confirmed successful delivery, or store the lead reliably server-side and retry. If delivery fails, show a clear error and log the failure.

Recommended fix:

Move form submission behind a server/serverless endpoint, validate the response, and only then redirect to thank-you.

## P1 / High

### QA-003 — GHL webhook endpoint is exposed in frontend JavaScript

Priority: P1

Observed:

The full GHL webhook endpoint is visible in client-side page JavaScript on the RFQ form and product-page forms.

Impact:

Anyone can copy the endpoint and spam the CRM/webhook directly. It also makes debugging and versioning harder.

Expected:

Webhook URLs should not be public in browser JavaScript.

Recommended fix:

Proxy the submit through a backend/serverless route. Keep the real webhook URL in server environment variables.

Security note:

The exact webhook URL is intentionally not copied into this report.

### QA-004 — Home quick form sends query params but does not prefill RFQ page

Priority: P1

Observed:

The small form on the home page uses `GET` to `/request-quote/`. When tested with:

`/request-quote/?name=QA%20Tester&company=QA%20Co&email=qa%40example.com&message=Mini%20form%20test`

the RFQ page opened, but `first_name`, `company`, `email`, and `message` fields stayed empty.

Impact:

The visitor may think the first form step carried over, but the RFQ page forces them to re-enter information. This adds friction and can lose leads.

Expected:

Either the home form should submit directly to lead capture, or the RFQ page should prefill fields from query params.

Recommended fix:

Implement query-param prefill, or change the home form to a real submit endpoint.

### QA-005 — Lead payload is missing advertising attribution fields

Priority: P1

Observed:

The form payload includes business fields, but I did not see obvious payload fields for:

- `page_url`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`
- `gclid`
- `gbraid`
- `wbraid`
- `fbclid`
- `_fbp`
- `_fbc`
- form name / form id

Impact:

Google Ads, Meta, and GHL will have weaker attribution. It will be harder to know which campaign/keyword/ad produced each RFQ.

Expected:

Every lead should carry page URL, form source, UTM fields, click IDs, and campaign metadata into GHL.

Recommended fix:

Capture and pass attribution fields from URL/cookies/local storage into the server-side form payload.

### QA-006 — Small product-page form may not map free-text message correctly

Priority: P1

Observed:

The product-page form payload sends `message` and a `formSource`. The team already saw that the small form creates a contact but the free-text answer does not appear correctly in GHL.

Impact:

Sales receives incomplete lead context. This is especially bad for custom transformer RFQs.

Expected:

Message/free-text should map to a visible GHL note or custom field every time.

Recommended fix:

Coordinate with Nadia/GHL mapping. Consider sending both a standard `message` and a clearly named custom field such as `rfq_message` or `project_details`.

### QA-007 — Placeholder contact and social links are still visible

Priority: P1

Observed:

Footer/contact surfaces include inconsistent or placeholder-looking details:

- `info@limik.com`
- `info@limik.us`
- displayed phone: `+1 (864) 555-0100`
- social links point to `#`

Impact:

This reduces trust. Visitors may call or email the wrong contact, and social links look unfinished.

Expected:

Use the real phone/email/company contact, or hide unfinished social links.

Recommended fix:

Replace all placeholder details with verified LIMIK contact details from the live business setup.

## P2 / Medium

### QA-008 — SEO metadata is thin or missing

Priority: P2

Observed:

Checked pages have titles, but missing or empty core SEO metadata:

- meta description missing/empty
- canonical link missing/empty
- Open Graph title/image missing/empty

Impact:

Organic search and social previews will be weaker. This also makes product pages less ready for SEO landing-page work.

Expected:

Every important page should have unique title, meta description, canonical URL, and OG/Twitter preview tags.

Recommended fix:

Add SEO metadata per page, especially for product, industry, and RFQ landing pages.

### QA-009 — Home page has multiple H1 headings

Priority: P2

Observed:

The home page slider exposes multiple `h1` headings:

- `WHERE AMERICA'S POWER BEGINS`
- `BUILT FOR THE AMERICAN GRID`
- `U.S. ENGINEERING. NO DELAYS`

Impact:

This can weaken semantic clarity for SEO/accessibility.

Expected:

One primary H1 per page. Other slide titles should be H2/div, or inactive slides should be hidden semantically.

Recommended fix:

Keep one H1 and convert other slide titles to lower-level headings.

### QA-010 — Mobile hamburger is not a semantic button

Priority: P2

Observed:

The mobile menu trigger is a `div`, not a real `button`, and has no obvious ARIA label.

Impact:

Keyboard and screen-reader users may not be able to operate the menu reliably.

Expected:

Use a `<button>` with `aria-label`, `aria-expanded`, and keyboard support.

Recommended fix:

Refactor the hamburger trigger into an accessible button.

### QA-011 — RFQ file upload does not enforce file types in browser

Priority: P2

Observed:

The UI says PDF/DWG/DOCX/XLS up to 20MB, but the file input does not expose an `accept` restriction.

Impact:

Users can choose unsupported files. More validation burden moves to the backend/GHL.

Expected:

Browser should guide users toward accepted file types, with server-side validation too.

Recommended fix:

Add `accept=".pdf,.dwg,.doc,.docx,.xls,.xlsx"` and enforce validation server-side.

### QA-012 — Console shows repeated GSAP target warnings

Priority: P2

Observed:

Browser console shows repeated warnings like `GSAP target [object NodeList] not found`.

Impact:

Not fatal, but it suggests animation code is trying to target missing elements. This creates noise and may hide real errors later.

Expected:

Animation code should check element existence before initializing animations.

Recommended fix:

Guard GSAP selectors and remove unused animation targets.

## Screenshots

- `outputs/site-audit/01-home-desktop.png` — desktop home
- `outputs/site-audit/02-request-quote-desktop.png` — RFQ page top
- `outputs/site-audit/03-request-quote-form-middle.png` — RFQ form fields
- `outputs/site-audit/04-request-quote-bottom.png` — RFQ form bottom / upload
- `outputs/site-audit/05-home-mobile.png` — mobile home
- `outputs/site-audit/06-mobile-menu-open.png` — mobile menu open
- `outputs/site-audit/07-mobile-menu-transformers-click.png` — mobile Transformers submenu
- `outputs/site-audit/08-transformers-404.png` — broken `/transformers/` link
- `outputs/site-audit/09-power-transformers-page.png` — power transformer product page
- `outputs/site-audit/10-thank-you-page.png` — thank-you page
- `outputs/site-audit/11-empty-submit-validation.png` — empty required-field validation

## Recommended Fix Order For Vitaliy

1. Fix or hide all broken links in header/footer.
2. Fix form submission architecture: server-side proxy, no public webhook, success only after confirmed delivery.
3. Add full GHL field mapping for all forms, including free-text/project details.
4. Add UTM/click-id/page-url attribution fields to every form payload.
5. Replace placeholder contact/social details.
6. Add page-level SEO metadata and product/industry landing pages.
7. Fix mobile menu accessibility and file upload restrictions.
8. Retest desktop/mobile forms, navigation, thank-you conversions, GA4, Google Ads, and Meta Lead event.

