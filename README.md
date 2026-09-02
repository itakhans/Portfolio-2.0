# Jordan Reyes — Motion Designer Portfolio

A dependency-free HTML/CSS/JS portfolio site. No build step, no framework —
open `index.html` in a browser and it works. Deploy it anywhere that serves
static files (Netlify, Vercel, GitHub Pages, S3, your own host).

## What's here

```
index.html      Home — hero showreel + featured work
work.html       Full project archive, filterable by category
project.html    Case-study template — reads ?p=<slug> from the URL
about.html      Bio, headshot, software list, career timeline
contact.html    Validated contact form + social links
css/style.css   All styling (design tokens at the top of the file)
js/data.js      ← ALL PROJECT CONTENT LIVES HERE
js/main.js      Shared behavior: nav, cursor, reveals, video player, cinema mode
js/project.js   Renders project.html from data.js
```

## Adding your own work (the only file you need to edit for content)

Open `js/data.js`. Each project is one object in the `PROJECTS` array:

```js
{
  slug: "your-project-slug",       // used in the URL: project.html?p=your-project-slug
  title: "Project Name",
  client: "Client Name",
  year: 2026,
  categories: ["2d", "vfx"],       // must match ids in CATEGORIES above
  role: "Lead Animator",
  tools: ["After Effects", "Cinema 4D"],
  blurb: "One sentence for the grid card.",
  description: "2-4 sentences of process notes for the case study page.",
  credits: [{ role: "Direction", name: "Studio Name" }],
  video: { type: "mp4", src: "https://yourhost.com/reel.mp4", poster: "" },
  breakdown: null,                 // optional second video, same shape as `video`
  featured: true,                  // show on the homepage
}
```

Copy an existing entry, edit the values, save. It appears on the home page
(if `featured: true`), the work grid, and gets its own detail page
automatically — no HTML editing required.

**Using Vimeo or YouTube instead of self-hosted MP4:** the current player is
built around the native `<video>` tag for full custom-control support. If
you'd rather embed Vimeo/YouTube (recommended if you don't want to pay for
video bandwidth yourself), swap the `<video id="main-video">` block in
`project.html` for an `<iframe>` using their embed URL, keyed off
`project.video.src` in `js/project.js`. Both platforms' privacy-enhanced
embed URLs work well here.

## Placeholder content

Everything is placeholder and safe to replace:
- **Videos** currently point to Google's publicly hosted, Creative
  Commons–licensed Blender Foundation demo films (Sintel, Big Buck Bunny,
  etc.) — real files so autoplay, scrubbing, and lazy-loading all work out
  of the box, but replace `video.src` in `data.js` with your own reels
  before launch.
- **Headshot** on the About page is a stock placeholder — replace the
  `src` in `about.html` with your own photo (suggest saving it to
  `assets/headshot.jpg` and pointing there).
- **Résumé** link points to `assets/jordan-reyes-resume.pdf` — add your
  actual PDF at that path.
- **Social links, email address, name/branding** — find-and-replace
  "Jordan Reyes" and the social URLs across the five HTML files.
- **OG cover image** — add `assets/og-cover.jpg` (1200×630px) for link
  previews on social/Slack shares.

## Contact form

The form validates client-side and, out of the box, falls back to a
pre-filled `mailto:` link (zero backend required). To send silently
instead of opening the visitor's email client:

1. Sign up for a form backend (Formspree, Web3Forms, Resend, etc.)
2. In `contact.html`, set `FORM_ENDPOINT` to the URL they give you
3. That's it — the existing handler POSTs there instead of using mailto.

## Features implemented

- Auto-playing, muted, looped hero showreel with a sound toggle
- Filterable project grid (by category, persisted in the URL as `?cat=`)
- Reusable project-detail template driven entirely by `data.js`
- Custom video player (play/pause, mute, scrubber, timecode) plus a
  full-bleed "Cinema mode" lightbox
- Lazy-loaded video via `IntersectionObserver` — nothing downloads until
  it's about to scroll into view
- Scroll-triggered reveals, custom cursor, hover-scale thumbnails —
  all disabled automatically under `prefers-reduced-motion`
- Fully responsive, keyboard-navigable, visible focus states
- SEO meta tags + Open Graph tags per page (project pages generate their
  own OG title/description from `data.js`)
- Contact form with inline validation and a no-backend-required fallback

## Before you launch

- Replace placeholder videos, headshot, résumé, and copy
- Compress your video files (H.264 MP4, ~5–8 Mbps for 1080p is a good
  starting point) and generate poster/thumbnail stills — set `poster` in
  `data.js` for each project so the video area doesn't flash blank
  while loading
- Update the sitemap/robots if you add one, and the canonical domain in
  the Open Graph tags
- Test the contact form end-to-end once you've wired up `FORM_ENDPOINT`
