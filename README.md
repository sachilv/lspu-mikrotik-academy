# LSPU SPCC MikroTik Academy — Website

A static, single-purpose landing site for the MikroTik Academy at Laguna State
Polytechnic University – San Pablo City Campus, built to link out to the main
LSPU website.

## Structure
```
lspu-mikrotik-academy/
├── index.html      → all page content/sections
├── css/style.css    → color tokens, layout, animation
├── js/script.js      → mobile nav, footer year, demo form handler
└── assets/            → put your logo/photos here
```

## Run it locally in VSCode
1. Open this folder in VSCode.
2. Install the **Live Server** extension (Ritwick Dey) if you don't have it.
3. Right-click `index.html` → **Open with Live Server**.

No build step, no dependencies — it's plain HTML/CSS/JS.

## Things to customize before publishing

- **Logo**: the header/footer currently use an inline SVG placeholder mark.
  Swap it for the official LSPU and/or MikroTik Academy logo image in `assets/`.
- **Link to main site**: search `lspu.edu.ph` in `index.html` and update it to
  your campus's exact main-site URL if different.
- **Course tracks** (`#courses` section): confirm which MikroTik certification
  tracks (MTCNA, MTCRE, MTCWE, MTCSE, etc.) your Academy currently offers.
- **Trainers** (`#trainers` section): now loaded from `data/trainers.json` —
  no HTML editing needed. To add, remove, or update a trainer, edit that file
  directly (including straight in GitHub's web editor). Each entry looks like:
  ```json
  {
    "initials": "MT",
    "photo": "",
    "name": "Trainer Name",
    "role": "MikroTik Certified Trainer",
    "bio": "Short bio here."
  }
  ```
  Leave `"photo"` empty to show the circular initials badge, or set it to an
  image path (e.g. `"assets/trainers/juan.jpg"`) to show a photo instead.
  Add or remove whole `{ ... }` entries to change the number of trainers shown
  — just keep commas between entries and valid JSON (a JSON validator/linter
  helps catch typos). This fetch requires the page to be served over
  http(s) — it works with Live Server and on GitHub Pages, but not when
  opening `index.html` directly as a `file://` path.
- **News cards** (`#news` section): replace with real announcements or wire
  this section up to a CMS later.
- **Contact form** (`#contact` section): the form currently only shows a
  confirmation message locally. Connect it to a real endpoint — e.g. a form
  service like Formspree, your own backend, or a `mailto:` action — in
  `js/script.js`.
- **Colors**: all colors are defined once at the top of `css/style.css` under
  `:root { ... }` — change `--navy` and `--accent` there to match your
  campus's exact brand blue if you have official hex values.

## Notes
- Palette: deep institutional blue (`--navy`), a brighter signal blue
  (`--accent`) used sparingly for the network/routing motif, and white/ice
  backgrounds.
- The hero includes a small animated network-topology graphic (nodes +
  traveling "packets") as a nod to MikroTik/RouterOS — this is decorative
  SVG/CSS, no external libraries required.
- Fully responsive down to mobile, with a collapsible nav menu.