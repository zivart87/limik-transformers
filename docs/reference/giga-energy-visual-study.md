# Giga Energy — visual reference for LIMIK (proposal, not an approved rule)

Source: https://www.gigaenergy.com/ — homepage HTML and computed styles inspected on 2026-09-25 at 1440 px desktop width. This is a reference for proportions, not source code or a brand kit to copy.

## What the HTML and CSS actually do

- Layout uses `.container` + `.row` + `.col` / `.col-lg-4` utility classes. The hero is an approximately 8/4 split: heading area 944 px, lead/CTA area 472 px at a 1440 px viewport. Columns have 12 px inner padding, forming a 24 px gutter. The container spans 1392 px with 24 px outer margins.
- Most full-width content sections use approximately 118 px top/bottom padding. The hero is 100svh with a full-bleed background image/video and gradient separate from the content. A few sections deliberately remove bottom padding where the next visual continues the composition.
- Display headings use `Alliance No 2`, typically weight 400, line-height near 1 and negative letter spacing. At 1440 px, the hero H1 is 72/72 px; one prominent H2 is also 72/72 px, while standard section H2 is about 48/48 px. Body text uses `HNT` at 16/24 px and is often constrained to the 4-column side (448 px). Eyebrows/buttons use the separate `ABC` face at 12 px with generous tracking.
- The HTML hero keeps text in the source: H1 on the left, paragraph and CTA on the right. A `<picture>`-like responsive AVIF `srcset` poster is paired with a Vimeo background iframe. The page uses Webflow utility classes and several interactive/hidden elements. Its visual layout can be studied without importing that implementation into LIMIK's static HTML/CSS architecture.

## Comparison with the current LIMIK system

| Parameter | Giga observed | LIMIK current | Assessment |
|---|---|---|---|
| Desktop section padding | ~118 px | 120 px in `limik.css` and Modular | Already aligned; global spacing change adds little. |
| Desktop content width at 1440 px | 1392 px, 24 px edge | shared `.container`: 1360 px box, 40 px inner padding, about 1280 px content | Giga feels wider; test a selected layout before changing the sitewide container. |
| Hero composition | 8/4 heading vs lead/CTA | Modular uses a flex split, but headline weight and line wraps are denser | Proportions and text measure are worth testing on one block. |
| Display type | 72/72 px, weight 400, mostly sentence case | REM, heavier uppercase Modular H1; shared H2 weight 700 | Weight and casing produce much of the visual difference. Do not globally change established headings. |
| Body copy | 16/24 px, narrow side column | REM 16/25.6 px; Modular hero lead 17/28 px | Size is close; line length and placement matter more. |
| Palette | neutral/warm + orange details | LIMIK navy, blue, white, yellow CTA | Keep LIMIK palette and approved CTA styles. |

## Practical LIMIK adaptation to trial

1. Pilot a single content block on `modular-ai-data-centers/` (the `What is LIMIK Core?` introduction is a good candidate). Use the existing LIMIK palette and page content.
2. Inside that block, try an opt-in 8/4 editorial header: large heading on the left, eyebrow + 30–36-character text measure on the right. Keep the site container until the composition is evaluated; test a wider 24–32 px outer gutter only as a separate visual option.
3. Trial a lighter REM heading weight (500–600) and line-height around 1.0–1.05 in that block, rather than replacing the font or changing every H2. Compare at desktop, tablet, 390 px and 360 px before making a token or component rule.
4. Preserve current 120/80/60 px section padding scale. The measured Giga desktop value is nearly the same; its whitespace comes mostly from the sparse 8/4 content layout and short copy.
5. If the precise `Alliance No 2` typeface is desired later, obtain an appropriate webfont license. Do not copy its font files from Giga; the visual system can first be tested with the licensed REM already in this project.

The strongest lesson is compositional, not technical: fewer words per row, more deliberate empty space, lighter headline weight, and a consistent asymmetrical grid. Avoid copying Webflow classes, video embeds, color choices, or interaction code as a new LIMIK baseline.
