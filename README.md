# W&E Health Institute website (v2)

Astro static site for wehealthinstitute.com, deployed to Cloudflare Pages. Content will be edited in Storyblok.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## How it's organised

- `src/pages/index.astro` renders the homepage from a list of blocks.
- `src/blocks/` holds one Astro component per editor block (`hero`, `doctors`, `conditions`, `feature`, `veterans`, `reviews`, `coverage`, `visit`). `src/blocks/index.ts` maps block names to components.
- `src/data/home.json` is the homepage content, shaped like a Storyblok story (`content.body` is the block list). `src/data/site.json` is shared clinic info: phone, hours, booking link and navigation.
- `src/data/treatments.json` (15 treatment pages), `doctors.json` (2 bios) and `reviews.json` (33 Google reviews) feed the page templates in `src/pages/treatments/`, `src/pages/doctors/` and `src/pages/reviews.astro`.
- `src/content/blog/*.md` holds the blog posts (Astro content collection, schema in `src/content.config.ts`).
- `src/lib/content.ts` is the single place content is loaded. Switching to Storyblok means changing this file only.
- `src/styles/global.css` holds the design tokens (colours, type, spacing).
- `src/assets/photos/` holds photos. Astro resizes and compresses them at build time.

## Deploy (Cloudflare Pages)

Use the build command `npm run build` with output directory `dist`. Point the wehealthinstitute.com DNS at Cloudflare when ready to switch off GoDaddy.

## Still to do

- Storyblok: create the space and block schemas matching `src/blocks/`, then load stories in `src/lib/content.ts`. Add a publish webhook that triggers a Cloudflare Pages deploy hook.
- Clinic review of the treatment, bio and blog copy.
- Owner approvals: the homepage headline, photo licences (see the origin note embedded in each photo), and the footer emergency disclaimer.
