# Portfolio Site

A static site (no build step) for showcasing product design, graphic design,
marketing, and misc projects, plus a résumé. Built to run directly on
GitHub Pages.

## Files

```
index.html        Home page: hero, filterable work grid, about, contact
resume.html        Résumé page, laid out like a spec sheet, with a print button
project.html        Case-study template — duplicate this per project
css/style.css        All styling
js/main.js          Mobile nav, work-grid filtering, auto-updating year
assets/            Put your images and resume.pdf here
```

## What to edit first

Search each HTML file for `<!-- EDIT` comments — every one marks something
placeholder that should become real content. In short:

1. **Your name & initials** — in `index.html`, `resume.html`, `project.html`
   (search `Your Name` and `YN`).
2. **Tagline & about text** — `index.html`, `#about` section.
3. **Contact links** — email, LinkedIn, GitHub — in the footer of `index.html`.
4. **Résumé content** — `resume.html`: education, experience, skills, awards.
5. **Résumé PDF** — drop a `resume.pdf` into `/assets` so the "Download PDF"
   button on `resume.html` works. (If you'd rather not add a PDF yet, you
   can delete that button — the page itself is readable and printable.)

## Adding a real project

1. Duplicate `project.html`, rename it (e.g. `project-ergo-chair.html`).
2. Fill in the title, title-block fields (category, role, tools, timeline,
   year), and the Overview / Process / Outcome sections.
3. Replace the `.media-placeholder` divs with real `<img>` tags pointing at
   files in `/assets`.
4. On `index.html`, find that project's card and change its `href` from
   `project.html` to your new file name.

## Adding images

Put image files in `/assets`, then swap a placeholder div like this:

```html
<div class="media-placeholder"><span>Project Image</span></div>
```

for:

```html
<img src="assets/your-image.jpg" alt="Describe the image">
```

## Categories

The work-grid filter buttons match the `data-category` attribute on each
project card in `index.html`: `product`, `graphic`, `marketing`, `misc`.
Keep new cards' `data-category` values consistent with those four.

## Local preview

Just open `index.html` in a browser — no server or build tools required.
