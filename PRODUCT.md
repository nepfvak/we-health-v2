# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated, constraint "cheapest possible" and hosted on Cloudflare Pages (free), replacing GoDaddy Website Builder.

Chosen: **Astro (static output) + Storyblok (free Starter plan) as the visual block editor, deployed to Cloudflare Pages.**

- Why: the clinic must be able to edit the site themselves after hand-off, the way they do on GoDaddy. Plain HTML/CSS/JS or React alone gives them no editor. Storyblok's Starter plan is free (1 seat included, a 2nd seat is paid) and gives live-preview, drag-and-drop editing of predefined blocks, so staff can add, reorder and edit sections without being able to break the design.
- Static build: content is pulled from Storyblok at build time, and a Storyblok publish webhook triggers a Cloudflare Pages deploy hook. Site traffic never hits the Storyblok API, so plan limits are not a concern at clinic scale.
- Fallback if Storyblok's free plan stops fitting: Decap CMS (free, git-based, already proven in v1 with a Cloudflare Pages Functions OAuth endpoint). Its editor is form-based, not visual.
- Third-party services that stay: Jane (online booking), Square (gift cards), Google Maps/reviews, Instagram/Facebook.

## Users

A ground-up, modern rebuild of the W&E Health Institute website, an acupuncture and Traditional Chinese Medicine clinic in Cordova (Memphis), TN. Two audiences:

- **Patients and prospective patients**, all weighted equally (confirmed):
  - Local people in Memphis, Cordova, Germantown, Bartlett and nearby, with pain, allergies, fertility, women's health, stress/sleep or cardiac concerns, deciding whether to try acupuncture and whether to trust these practitioners.
  - Veterans eligible for VA Community Care acupuncture, who need the referral and authorization steps to be clear.
  - SAAT allergy patients, including Alpha-gal sufferers, looking for this specific treatment.
- **Clinic staff after hand-off**, who are non-technical and edit content through the block editor. Their success means updating hours, treatments, bios, reviews and announcements without help.

## Product Purpose

Turn a visitor into a booked patient. Explain what each treatment is and what it helps with, establish the practitioners' credentials, and make contacting or booking obvious. Success means more first visits and VA referrals, plus a site the clinic can maintain alone and host for free.

## Positioning

- Two doctoral-level practitioners. One is a Western-trained physician (MD/PhD, internal medicine and cardiology background, former university faculty, NIH-funded research). The other is a DACM with lineage training under named TCM masters, including recognition as the only overseas successor of Prof. Ying Wang (Modern Abdominal Acupuncture).
- A certified SAAT provider (trained directly by Dr. Nader Soliman). This is uncommon regionally.
- An authorized VA Community Care Provider.
- "Eastern tradition, western precision" is the v1 framing of this combination.

## Operating Context

- Location: 985 Cordova Station Ave, Ste 101, Cordova, TN 38018.
- Hours: Mon–Sat 8:00 am–6:00 pm. Closed Sunday.
- Phone: (901) 340-6433. Email: wehiusa@gmail.com.
- Booking: online at Jane or by phone. Both are always offered.
- Veteran flow: VA primary care referral → VA authorization sent to the clinic → clinic contacts the patient to schedule.
- Gift cards are sold through Square.
- Payment, per the live site: UnitedHealthcare, FSA and HSA accepted, with superbills for out-of-network patients.

## Capabilities and Constraints

- Practitioners:
  - **Dr. Yingjuan (Selina) Liang**: DACM, L.Ac., licensed in TN and MS, NCCAOM Diplomate, SAAT-certified.
  - **Dr. Tieqiang Zhao**: MD/PhD (CN), L.Ac., NCCAOM Diplomate, certified SAAT provider (per live site), 20+ years of clinical experience.
- Modalities: acupuncture (traditional, Five Element, scalp, auricular, abdominal, Tung's), SAAT, herbal medicine (granules and pills), cupping (Sancai fire cupping included at no charge, per v1), moxibustion, gua sha, tui na, Tai Chi and Medical Qi Gong, cosmetic acupuncture. Specialty pages in v1: cardiac health, fertility/infertility, pain management, veterans.
- Practitioner training for professionals is offered (cupping, moxibustion, gua sha), per the live site.
- Every content section must be a reusable editor block. Layout and styling are locked in code. Staff edit content, not design.
- Spelling of the practitioner's name has drifted across the live site ("Selina", "Selena", "Laing"). Use **Dr. Yingjuan (Selina) Liang** everywhere.

**Confirmed by owner (2026-10-27):**
- Booking: **both** online through Jane (`https://wehealthinstitute.janeapp.com`) and by phone, offered side by side.
- Public email: **wehiusa@gmail.com**.
- Insurance list (UHC, FSA, HSA, superbill for out-of-network) is current.
- Blog: **keep it**. Posts move into Storyblok as a blog content type, and v1's posts in `content/blog/` get migrated.
- Chinese-language content: **not for now**. English only, but don't block adding a second locale later.
- Audiences: **all three patient groups weigh equally**. Design for a general visitor, with clear paths into veterans and SAAT.

**Still undecided:**
- Tai Chi / Qi Gong class status is unknown. Never state that classes are running. Build it as a block with an editable status ("coming soon" or a schedule) that staff can flip themselves.

## Brand Commitments

- Name: **W&E Health Institute** (Western & Eastern). Domain: wehealthinstitute.com.
- Existing logo: `~/Documents/we-health/we-health/assets/logo-with-text.png` and `logo-no-text.png`.
- No visual direction is carried over by default. v1's look and the GoDaddy site are reference material, not commitments.
- **Visual standard (owner choice, 2026-10-27):** the healthcare category standard, executed at full craft. Bar to match: **Maven Clinic** (mavenclinic.com) and **Mayo Clinic** (mayoclinic.org). That means calm, trustworthy and modern, with no stylised "Asian" theming.
- **Chinese roots come through photography only:** real images of herbs, needles, cupping, moxa and the doctors at work. No decorative calligraphy, seals, dragons, lattice or gold ornament.

## Evidence on Hand

- Practitioner portraits, treatment photos and the logo in `~/Documents/we-health/we-health/assets/`.
- Screenshots of the live GoDaddy site (7 pages, desktop and mobile, 2026-10-27) in `.impeccable/reference/live-site/`. Many live-site images are marketing graphics with text baked in (hero, condition tiles, gift card), which can't be reused as photography.
- Full practitioner bios and credentials in v1's `practitioner-selina.html` and `practitioner-zhao.html`.
- Treatment copy for 13 modalities in v1's `treatment-*.html`, `services.html`, `conditions.html`, `saat.html` and `veterans.html`.
- Google reviews: 34 are reproduced on the live testimonials page. v1 states "5.0 · 236 Google Reviews", which must be verified on the live Google listing before publishing.
- Absent: prices, outcome data, clinic interior/exterior photos (unconfirmed), and press coverage. Do not invent any of these.
- Unsourced claims on the live site, such as "SAAT 80–95% success rate", "most people need only one treatment" and "relief for any kind of pain", must not be repeated as fact without a citation the clinic can provide.

## Product Principles

1. **Credibility before persuasion.** This is healthcare. Credentials, licensure, VA authorization and real patient reviews carry the argument. No overclaiming outcomes.
2. **The next step is always one tap away.** Every page ends with booking or a call, with the phone number and hours easy to find.
3. **Editable without breaking.** Anything staff will change lives in a block they can edit safely. Anything that defines the design stays in code.
4. **Explain, don't mystify.** Make each treatment understandable to someone new to TCM: what it is, what it feels like and what it's used for.
5. **Free to run.** Do not introduce paid services or dependencies without the owner's approval.
