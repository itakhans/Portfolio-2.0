/**
 * PROJECT DATA
 * ------------
 * This is the only file you need to touch to add, remove, or edit work.
 * Every project on the site (grid, filters, detail pages) is generated
 * from this array. Copy an existing entry, change the values, done.
 *
 * FIELDS
 * slug        — url-safe id, used as project.html?p=slug
 * title       — project title
 * client      — client / studio name
 * year        — production year
 * categories  — array, must match values in CATEGORIES below
 * role        — your role/credit line, short
 * tools       — array of software used
 * blurb       — one-line summary shown on the grid card
 * description — 2–4 sentence process/case-study paragraph
 * credits     — array of { role, name } for full credit list
 * video       — { type: "mp4"|"vimeo"|"youtube", src, poster }
 *               mp4: src is a direct file URL, poster is a still image URL
 *               vimeo/youtube: src is the numeric id
 * breakdown   — optional second video (before/after, VFX breakdown), same shape as video
 * featured    — true to show on the homepage grid
 */

const CATEGORIES = [
  { id: "2d", label: "2D Animation" },
  { id: "3d", label: "3D / CGI" },
  //{ id: "brand", label: "Brand Identity" },
  //{ id: "ui", label: "UI Motion" },
  { id: "vfx", label: "VFX" },
  { id: "titles", label: "Title Sequences" },
];

const PROJECTS = [
  {
    slug: "aperture-rebrand",
    title: "Rubik's Cube",
    client: "PTRK, Kazinform, Jibek Joly",
    year: 2024,
    categories: ["3d"],
    role: "Motion Designer",
    tools: ["Blender", "After Effects"],
    blurb: "A dynamic screen filler designed for PTRK’s Instagram Stories, adding visual continuity and motion between published content.",
    description:
      "The Television and Radio Complex of the President of the Republic of Kazakhstan commissioned a waiting screen for its social media platforms and online events. I created a seamless looping animation featuring a Rubik’s Cube, combining the visual identities of three of the organization’s media channels: PTRK, Kazinform, and Jibek Joly. The concept uses the cube as a visual metaphor for bringing distinct brands and media formats together into a single cohesive composition. of their media channels: PTRK, Kazinform and Jibek Joly",
    credits: [
      { role: "Motion Design", name: "You" },
      { role: "Sound Design", name: "Royalty Free Audio" },
      { role: "Creative Direction", name: "SMM managers of PTRK" },
    ],
    video: {
      type: "mp4",
      src: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.mp4",
      poster: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.jpg",
    },
    breakdown: null,
    featured: true,
  },
  {
    slug: "wayfinder-titles",
    title: "Wayfinder",
    client: "Northline Pictures",
    year: 2025,
    categories: ["titles", "2d"],
    role: "Title Sequence Designer",
    tools: ["After Effects", "Illustrator"],
    blurb: "Opening titles for a limited series about long-distance sailing.",
    description:
      "The brief asked for something that felt hand-charted rather than digital. I hand-drew a coastline library in Illustrator, then rigged it in After Effects so the camera could pan across an ever-unspooling map as the credits surface from the linework itself.",
    credits: [
      { role: "Design & Animation", name: "You" },
      { role: "Executive Producer", name: "Northline Pictures" },
    ],
    video: {
      type: "mp4",
      src: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.mp4",
      poster: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.jpg",
    },
    breakdown: null,
    featured: true,
  },
  {
    slug: "cascade-app",
    title: "Cascade",
    client: "Cascade Finance",
    year: 2024,
    categories: ["ui", "brand"],
    role: "Motion & Interaction Designer",
    tools: ["Figma", "After Effects", "Lottie"],
    blurb: "Micro-interaction system for a banking app's onboarding flow.",
    description:
      "Working directly from the product team's Figma file, I designed the transition grammar for onboarding, balance reveals, and transfer confirmations, then exported the whole set as Lottie files so engineering could drop them straight into the build with no re-animation.",
    credits: [
      { role: "Motion Design", name: "You" },
      { role: "Product Design", name: "Cascade Design Team" },
    ],
    video: {
      type: "mp4",
      src: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.mp4",
      poster: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.jpg",
    },
    breakdown: null,
    featured: true,
  },
  {
    slug: "hollow-vfx",
    title: "Hollow",
    client: "Firebrand Studios",
    year: 2024,
    categories: ["vfx", "3d"],
    role: "VFX Artist",
    tools: ["Cinema 4D", "Houdini", "Nuke"],
    blurb: "Practical-to-digital creature transformation for a horror short.",
    description:
      "A single unbroken shot where a practical prosthetic hand down to a fully CG creature form. I handled the FX simulation for the surface tearing and the compositing pass that blends the practical plate into the CG takeover.",
    credits: [
      { role: "VFX & Compositing", name: "You" },
      { role: "Director", name: "Firebrand Studios" },
      { role: "Practical FX", name: "Mercer SFX" },
    ],
    video: {
      type: "mp4",
      src: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.mp4",
      poster: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.jpg",
    },
    breakdown: {
      type: "mp4",
      src: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.mp4",
      poster: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.jpg",
    },
    featured: true,
  },
  {
    slug: "understory-explainer",
    title: "Understory",
    client: "Understory Climate",
    year: 2024,
    categories: ["2d"],
    role: "Animator & Illustrator",
    tools: ["After Effects", "Illustrator", "Procreate"],
    blurb: "Explainer film translating soil-carbon science into plain motion.",
    description:
      "Understory's research is dense; the film needed to carry a lay audience through it in under two minutes without dumbing it down. I built a paper-cutout illustration style with real depth-of-field in camera moves, so the science stays legible while the visuals stay warm.",
    credits: [
      { role: "Illustration & Animation", name: "You" },
      { role: "Script", name: "Understory Comms Team" },
    ],
    video: {
      type: "mp4",
      src: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.mp4",
      poster: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.jpg",
    },
    breakdown: null,
    featured: false,
  },
  {
    slug: "monoline-brand",
    title: "Monoline",
    client: "Monoline Coffee",
    year: 2023,
    categories: ["brand", "2d"],
    role: "Motion Designer",
    tools: ["After Effects", "Illustrator"],
    blurb: "Social-first animated identity for a specialty coffee roaster.",
    description:
      "A lightweight motion kit built for a small roaster's Instagram and packaging — a single looping mark, three transition patterns, and a type animation rule so their small team could keep posting consistently without a designer on retainer.",
    credits: [{ role: "Motion Design", name: "You" }],
    video: {
      type: "mp4",
      src: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.mp4",
      poster: "https://0690de8b.rubikscube-2mx.pages.dev/Rubik_s_Cube_Loop.jpg",
    },
    breakdown: null,
    featured: false,
  },
];
