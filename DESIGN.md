---
name: W&E Health Institute
description: A calm, credentialed clinic site where deep pine carries whole sections and documentary photography carries the Chinese roots.
colors:
  paper: "#fbfaf7"
  stone: "#f1eee6"
  ink: "#16231d"
  ink-2: "#46544d"
  rule: "#dfdbd2"
  pine: "#0f3b2c"
  pine-2: "#144a37"
  on-pine: "#eef3ee"
  on-pine-2: "#b4d6bf"
  jade: "#1b7444"
  jade-hover: "#145c35"
  root: "#9a5420"
typography:
  display:
    fontFamily: "'Source Serif 4 Variable', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2.6rem, 1.5rem + 3.4vw, 4.4rem)"
    fontWeight: 350
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Source Serif 4 Variable', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2rem, 1.4rem + 2.2vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Source Serif 4 Variable', 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.4rem, 1.1rem + 0.9vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "'Hanken Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Hanken Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Hanken Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0em"
  small:
    fontFamily: "'Hanken Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "12px"
  md: "20px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  section: "clamp(72px, 9vw, 136px)"
  max: "1400px"
components:
  button-primary:
    backgroundColor: "{colors.jade}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.jade-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-outline-on-pine:
    backgroundColor: "transparent"
    textColor: "{colors.on-pine}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-outline-on-pine-hover:
    backgroundColor: "{colors.on-pine}"
    textColor: "{colors.pine}"
  text-link:
    textColor: "{colors.jade}"
    typography: "{typography.label}"
  nav-link:
    textColor: "{colors.ink-2}"
  photo-frame:
    backgroundColor: "{colors.stone}"
    rounded: "{rounded.md}"
  portrait-frame:
    backgroundColor: "{colors.stone}"
    rounded: "{rounded.sm}"
---

# Design System: W&E Health Institute

## Overview

**Creative North Star: "The Careful Clinic"**

This is the healthcare category standard, built to the craft level of Maven Clinic and Mayo Clinic: a light, warm-white ground, generous air, one deep green and large documentary photography. It reads as real medicine done carefully. The Chinese roots of the practice appear only in photographs of real material (herb roots, needles, glass cups, moxa, the classical herbal text); the interface itself carries no Asian ornament, no lotus, no sage-and-stone spa palette.

Structure comes from three things only: ground changes (paper, stone, and full-bleed pine bands), thin 1px rules, and big inset photographs with soft corners. There are no shadows, no gradients, no cards used as layout, no icon tiles and no eyebrow labels above headings. A light-weight serif speaks the headlines; a quiet grotesk does everything else.

Every section is a Storyblok block whose layout is locked in code while staff edit the words and pictures. Each block must hold up when its text is half or double the length it shipped with: headings balance and wrap, lists grow by rows, grids collapse to one column, and no element depends on a fixed line count.

**Key Characteristics:**
- Warm paper ground with stone bands; deep pine carries whole sections and the footer.
- Jade is the action color: filled buttons, text links, focus rings.
- Light serif display (weight 350) over a grotesk body at 17px.
- Thin rules and rows instead of cards and boxes.
- Large photography inset inside the gutter with a 20px radius.
- Flat: no shadows, no gradients.

## Colors

A restrained palette: warm neutrals, one deep pine for whole bands, one brighter jade for actions, and a single earthy accent used almost nowhere.

### Primary
- **Pine Band** (pine): the ground for whole sections (the Veterans band) and the footer. Never used as a small accent or a button fill; it is a surface, not a highlight.
- **Pine Rule** (pine-2): the 1px divider and hairline on pine grounds.
- **Action Jade** (jade): filled primary buttons, text links, row arrows, focus outline, and the small contact icons beside phone, hours and address.
- **Pressed Jade** (jade-hover): the hover state of the filled button only.

### Tertiary
- **Root Amber** (root): review stars only. It nods to herb and earth without becoming a second brand color.

### Neutral
- **Paper** (paper): the page ground, header, drawer and mobile action bar.
- **Stone** (stone): alternate section ground (Conditions, Feature, Coverage) and the placeholder behind every photo.
- **Ink** (ink): headings and primary text; also the fill of the outline button on hover.
- **Soft Ink** (ink-2): ledes, body support text, nav links, captions.
- **Hairline** (rule): every 1px divider on light grounds.
- **On-Pine** (on-pine) and **On-Pine Soft** (on-pine-2): headings and supporting text on pine.

### Named Rules
**The Pine Is a Place Rule.** Pine appears only as a full-width section ground (or the footer). If pine is smaller than a band, it is the wrong color.

**The Jade Means Act Rule.** Jade marks what a visitor can do: book, call, follow a link, see focus. Body copy, headings and grounds are never jade.

**The Three Grounds Rule.** Sections sit on paper, stone or pine and nothing else; no tints, no gradients, no photo-backed text bands.

## Typography

**Display Font:** Source Serif 4 Variable, optical size axis (with Iowan Old Style, Georgia)
**Body Font:** Hanken Grotesk Variable (with Helvetica Neue, Arial)

**Character:** A high-contrast book serif set light and tight gives headlines the voice of a careful physician; the grotesk stays out of the way for everything a patient has to read or tap.

### Hierarchy
- **Display** (350, fluid 2.6 to 4.4rem, 1.08, -0.025em): the single hero headline, max 15ch, balanced wrap.
- **Headline** (400, fluid 2 to 3.25rem, 1.08, -0.015em): section headings (h2), also the footer clinic name.
- **Title** (400, fluid 1.4 to 1.75rem, 1.2): doctor names, condition row titles, coverage terms.
- **Lede** (400, 1.25rem, 1.55, Soft Ink): one paragraph under a section heading, max 44 to 50ch. Pull quotes in reviews use the serif at this size.
- **Body** (400, 1.0625rem, 1.6): running text, list items.
- **Label** (600, 1rem): buttons, text links, small sub-headings inside a block (Visit facts, footer column titles). Set in the grotesk, sentence case, no tracking.
- **Small** (400, 0.875rem): hours/address meta, footer base line.

### Named Rules
**The Heading Stands Alone Rule.** A section opens with its heading. No eyebrow, kicker, overline or uppercase label above it.

**The Serif Speaks, the Grotesk Works Rule.** Serif for headings, titles, pull quotes and step numerals; grotesk for everything functional, including small headings inside a block.

## Layout

Content sits in a centered column (max 1400px) with a fluid gutter (20 to 56px). Sections pad vertically with the fluid section step (72 to 136px). Most blocks are two-column asymmetric grids (ratios such as 0.8fr / 1fr, 0.85fr / 1fr, 1.1fr / 1fr) with large fluid gaps (40 to 120px), collapsing to a single column between 860 and 1100px. The hero is the exception: copy on the left, an inset photo taking roughly 55% of the width at near full viewport height; on phones the photo moves first at 5:4 or 4:3.

Lists are stacked rows separated by hairlines (conditions, doctor credentials, veteran steps, coverage terms), so they grow by rows when content grows. Reviews run three across under a 1px ink top rule, then one column below 960px.

Below 560px the inline call-to-action buttons hide and a sticky bottom bar (Book online wide, Call narrow) on paper with a top hairline takes their place. The header is sticky at 76px (64px on phones) and gains its bottom hairline only once scrolled.

**The Half or Double Rule.** Every block must survive its text at half or double the shipped length: headings use balanced wrap and a ch-based max width, rows grow vertically, no fixed heights on text containers.

## Elevation & Depth

Fully flat. There are no box-shadows anywhere. Depth comes from ground changes (paper to stone to pine), photography, and 1px rules. The only overlap in the system is the hero's doctor faces, stacked with a 3px paper ring.

**The Flat Clinic Rule.** No shadows, no gradients, no blur. If a surface needs separating, change its ground or draw a hairline.

## Shapes

Photographs carry the softness: 20px radius on large inset photos and the map, 12px on doctor portraits and on the hero photo on phones. Interactive controls are full pills (999px). Avatars and the veteran step numerals are circles; step numerals are 44px outlined in On-Pine Soft with a serif figure. Everything else, including sections, rows and rules, is square-edged. Photos always sit inside the gutter; nothing bleeds to the viewport edge except section grounds.

## Components

### Buttons
Calm and generous, never loud.
- **Shape:** full pill (999px), 52px minimum height (46px in the header), 26px side padding, 1.5px border.
- **Primary:** Action Jade fill, white label, optional 18px leading icon. Hover deepens to Pressed Jade.
- **Outline:** transparent with a currentColor border in Ink; hover fills Ink with Paper text. On pine the outline uses On-Pine and fills On-Pine with Pine text on hover.
- **Pairing:** Book online (primary) and Call (outline) always travel together.
- **Focus:** 2px jade outline, 3px offset, for every focusable element.

### Text Link
Label weight in Action Jade with a trailing arrow that slides 4px right on hover (0.3s, ease-out). On pine it turns On-Pine.

### Row List (signature)
The structural replacement for cards. A list starts with a top hairline; each row has a bottom hairline, a serif title, an optional Soft Ink description and, when linked, a jade arrow at the right. Linked rows indent 14px and take the Paper ground on hover while the arrow slides 4px. On pine, rows use the Pine Rule.

### Photo Frame
A figure with 20px radius, overflow clipped and Stone behind the image; the image covers the frame. Aspect ratios are set per block (4:5, 5:4, 16:10 on tablet) and never by the image.

### Doctor Entry
A 3:4 portrait with 12px radius beside a title-size name, the degree line in label weight, a Soft Ink focus sentence, and a row list of credentials.

### Review
A figure under a 1px Ink top rule: Root Amber stars, serif quote at lede size, and a caption pinned to the bottom with the name in Ink.

### Navigation
Sticky Paper header: serif wordmark with the logo, grotesk nav links in Soft Ink (500 weight) that turn Ink and underline on hover, a phone link with a jade icon, and the Book online pill. Below 980px a round 46px menu button opens a full-height Paper drawer with serif links at 1.5rem separated by hairlines.

### Footer
A Pine band with the clinic name at headline size, the Book/Call pair, three columns of On-Pine Soft links under grotesk column titles, and a base line above a Pine Rule.

### Motion
One reveal only: elements fade up 18px over 0.9s on cubic-bezier(0.16, 1, 0.3, 1) once JS marks the page ready; content is visible without JS and the reveal is off under reduced motion.

## Do's and Don'ts

### Do:
- **Do** open every section with its heading alone, followed by at most one lede.
- **Do** use pine only as a full-width band; use jade only for actions, links and focus.
- **Do** separate items with 1px hairlines (rule on light, pine-2 on pine) and stacked rows.
- **Do** set large photos inset within the gutter at 20px radius on a Stone placeholder.
- **Do** show Chinese medicine through documentary photographs of real material.
- **Do** pair Book online (filled jade) with Call (outline) wherever booking appears.
- **Do** keep every block editable as a Storyblok block and test it at half and double its text length.

### Don't:
- **Don't** put an eyebrow, kicker or uppercase label above a heading.
- **Don't** use cards, boxed panels or icon tiles to structure content.
- **Don't** use shadows, gradients or blur.
- **Don't** use jade as a ground or pine as a small accent.
- **Don't** add Asian decorative motifs, lotus, stones, sage-and-spa palettes or brush-stroke type; the roots live in the photography.
- **Don't** use Root Amber anywhere except review stars.
