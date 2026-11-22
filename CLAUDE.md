# Portfolio

Personal portfolio of Abigael Vaneakh. Plain static site: HTML, CSS, and vanilla JS. No framework, no build step, no package manager. Content language: English.

## Git rules

- **Never commit and never push unless the user explicitly asks in that message.** Approval for one commit does not carry over to later changes.
- Staging is fine. Committing, amending, pushing, merging, rebasing, and opening PRs are not, unless asked.
- Work happens on branch `dev`. `master` is what gets published; do not merge into it unless asked.
- The `blazor` branch is an abandoned Blazor WebAssembly rewrite (too slow to load). Do not port work to it.

## Structure

- `index.html`: the whole home page. Content is written directly in the HTML (not rendered from JS), so it loads fast and is indexable.
- `assets/css/style.css`: design tokens on `:root` (hue 225 blue), dark theme overrides on `html.dark-theme`, then sections in page order.
- `assets/js/index.js`: interactions only (theme toggle, mobile menu, header shadow, active nav link, skills filter, Show more, scroll-up, footer year).
- `portfolio-details.html` + `assets/css/legacy.css` + `assets/js/legacy.js`: the old project detail page, no longer linked from `index.html` (the Projects section lives on the home page). Do not edit the legacy files when changing the home page.
- `assets/img/`, `assets/pdf/CV-Abigael-Vaneakh.pdf`: images and CV.

## Conventions

- Reuse the CSS tokens (`--primary`, `--title`, `--text`, `--card`, `--border`, …) instead of hard-coded colors, so both themes keep working.
- Section ids (`home`, `about`, `skills`, `experience`, `projects`, `education`, `contact`) are used by the nav and the active-link observer. A new section in the nav needs a matching `id`.
- Keep the page dependency-light: Boxicons (unpkg) and Poppins (Google Fonts) only. Do not add libraries for what a few lines of CSS/JS can do.
- Keep images small. Resize photos before adding them (hero photo is 720px wide).
- Placeholder content, if any, is marked with `<!-- DUMMY -->` in `index.html`. It must be replaced with real data before merging to `master`.

## Run and verify

```powershell
python -m http.server 8123
```

Then open http://localhost:8123. After UI changes, check light and dark themes, a 375px viewport, the mobile menu, the skills filter, Show more, and the browser console.
