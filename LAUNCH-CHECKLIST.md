# Launch checklist

Work through this before switching wehealthinstitute.com from GoDaddy to the new site.

## 1. Clinic approvals

- [ ] Homepage headline (currently a draft: "Chinese medicine, practiced with a physician’s care.")
- [ ] Treatment page copy (`src/data/treatments.json`), checked for accuracy by the doctors
- [ ] Doctor bios and credentials (`src/data/doctors.json`)
- [ ] Blog posts (`src/content/blog/`), including claims like "60–75 minute visits" and "most notice a shift within one to three sessions"
- [ ] Tai Chi page photo (keep the garden photo, or replace with one of Dr. Zhao)
- [ ] Footer line: "Acupuncture is not a substitute for emergency care. In an emergency, call 911."
- [ ] Review count: the site has 33 Google reviews; the old site listed 34
- [ ] Photo licences: confirm the clinic has the rights to every stock photo (the origin of each is noted in the `.json` file beside it in `src/assets/photos/`)

## 2. Accounts (owned by the clinic, with you invited)

- [ ] GitHub organization created for the clinic; `we-health-v2` transferred into it (Settings → Transfer)
- [ ] Cloudflare account created under the clinic’s email
- [ ] Storyblok space created and connected (see README “Still to do”)

## 3. Go live

- [ ] **Remove the preview noindex rule:** delete `public/_headers` (it only holds the preview noindex rules), commit and push
- [ ] Create the project in the clinic’s Cloudflare account the same way as the preview (Workers & Pages → import the Git repo, build command `npm run build`)
- [ ] Add `wehealthinstitute.com` to Cloudflare and check the scanned DNS records, **especially email (MX, SPF, DKIM, DMARC)**, before changing anything
- [ ] Switch the nameservers at GoDaddy to the two Cloudflare provides
- [ ] Add `wehealthinstitute.com` and `www.wehealthinstitute.com` as custom domains on that project
- [ ] Confirm the site loads on both addresses with HTTPS
- [ ] Test the old-address redirects: `/about`, `/services`, `/conditions`, `/testimonials`, `/saat-allergy-treatment`
- [ ] Test Book online (Jane), tap-to-call on a phone, the map, and the gift card link
- [ ] Send a test email to the clinic’s domain address to confirm email still works
- [ ] Delete the preview project (`we-health-v2.blake-stwrt20.workers.dev`) in your own Cloudflare account

## 4. After launch

- [ ] Cancel the GoDaddy Website Builder plan (only after the new site is confirmed live)
- [ ] Optional: transfer the domain registration from GoDaddy to Cloudflare Registrar (unlock + auth code at GoDaddy)
- [ ] Verify the site in Google Search Console and submit `https://wehealthinstitute.com/sitemap-index.xml`
- [ ] Update the website link on the Google Business Profile, Facebook, Instagram, Yelp, Apple Maps, Bing Places and Healthgrades
- [ ] Update the old `info@wehealthinstitute.com` email anywhere it’s still listed, if the clinic now uses `wehiusa@gmail.com`
