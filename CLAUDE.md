# Portfolio

Personal portfolio of Abigael Vaneakh. Blazor WebAssembly (standalone, .NET 10) + BlazorBlueprint + Tailwind v4. Deployed as static files to GitHub Pages. Content language: English. Plan: `plans/blazor-rewrite.md`.

## Git rules

- **Never commit and never push unless the user explicitly asks.** Staging is fine; committing, amending, pushing, and opening PRs are not.
- Work happens on branch `dev`. `master` holds the old static HTML site.

## Run and build

```powershell
dotnet run --urls http://localhost:5080
```

- `dotnet build` runs the `Tailwind` target first, using the standalone Tailwind CLI in `.tools/` (no Node, no npm). `.tools/` is gitignored, so on a fresh clone the build fails until the binary is downloaded:

```powershell
gh release download v4.3.5 -R tailwindlabs/tailwindcss -p "tailwindcss-windows-x64.exe" -D .tools
Rename-Item .tools\tailwindcss-windows-x64.exe tailwindcss.exe
```

  On Linux (CI) use `tailwindcss-linux-x64`, saved as `.tools/tailwindcss` and `chmod +x`.
- `wwwroot/css/app.css` is generated from `Styles/app.css`. Never edit it by hand and never commit it.
- To watch CSS while developing: `.tools\tailwindcss.exe -i Styles/app.css -o wwwroot/css/app.css --watch`.
- Editing `wwwroot/index.html` or CSS needs a server restart; the dev server serves the last built copy.

## Deploy

GitHub Pages, repo `abigaelvs/abigaelvs.github.io` (a user site, served at the root, so `<base href="/" />` stays as is).

- `.github/workflows/deploy.yml` runs on push to `master` (and manually). It downloads the Linux Tailwind CLI (checksum-verified), runs `dotnet publish -c Release`, copies `index.html` to `404.html` (SPA fallback so `/projects/{slug}` works as a deep link), and deploys `release/wwwroot`.
- One-time repo setting: Settings, Pages, Source must be **GitHub Actions**. It was "Deploy from a branch" (master root) while the old site lived there.
- Pages only deploys from `master`, so changes on `dev` are not deployed until merged.
- `InvariantGlobalization` is on (drops ~2 MB of ICU data). Do **not** enable `TrimMode=full`: BlazorBlueprint sends anonymous objects through JS interop and the app breaks at runtime. JSON loading uses source generation (`Models/PortfolioJson.cs`); add new model types to it.
- Always test a Release publish by serving `wwwroot` of the output (e.g. `python -m http.server`) and checking the browser console. If a publish behaves oddly after changing trim or publish settings, delete `obj/Release` and `bin/Release` first: stale cached webcil files from an earlier publish are reused and hide the effect of new settings.

## Structure

- `Components/`: home page sections (Hero, About, Skills, Qualification, PortfolioSection, Contact) plus shared pieces (SectionTitle, SiteButton, SlideCarousel, SocialIcon). `Pages/Home.razor` composes them; `Pages/ProjectDetail.razor` is `/projects/{slug}`. Do not name a component `Portfolio`, it collides with the root namespace.
- `Layout/MainLayout.razor`: header, bottom-sheet menu on mobile, blue footer. It loads data before rendering `@Body`. Section ids (`home`, `about`, `skills`, `portfolio`, `contact`) are used by the nav, the footer, and the scrollspy script in `index.html`.
- `wwwroot/data/profile.json` and `projects.json` hold all content. `Models/Models.cs` and `Services/PortfolioData.cs` load them. To add a project, edit the JSON only.
- `Styles/app.css`: Tailwind entry, old-site color palette, base styles.

## UI conventions

- Use BlazorBlueprint `Bb*` components wherever one fits; use Tailwind utility classes for layout. Look components up with the `blazorblueprint` MCP (`get_component`) instead of guessing; a wrong component name does not fail the build, it renders a raw element.
- Style with plain utility classes in `.razor` files. Never build class names dynamically (`"mt-" + n`), Tailwind only sees literal strings.
- BlazorBlueprint's own CSS is prefixed `bb:` and has no Tailwind utilities, so layout classes come from this project's Tailwind build.
- Component parameters with mixed text and C# need `@($"...")`, e.g. `Alt="@($"{x.Title} screenshot")"`.
- Colors come from the old site (hue 225). They override BlazorBlueprint's theme through `html[data-base-color]` and `html.dark[data-base-color]` in `Styles/app.css`; keep those selectors, plain `:root` would lose to `themes.css`.
- CSS order in `index.html` matters: `blazorblueprint.css`, then `themes.css`, then `app.css`.
- Dark mode is `BbDarkModeToggle`; theme state lives in BlazorBlueprint's `ThemeService` (localStorage `bb-theme`). Do not set theme attributes on `<html>` by hand.
- Links to `#section` from the detail page go to `/#section`; `Home.razor` scrolls to the fragment after first render. Keep that.

## Match the old site

The design is a deliberate copy of the old site (https://abigaelvs.github.io/, source in git history on `master`): same palette, Poppins font, 768px container (`wrap` utility), hero blob, header fixed at the bottom on mobile and the top from 768px, blue footer, carousel for portfolio. Compare against the live old site before changing layout or spacing.

- Only Poppins 400/600/700 are loaded (like the old site), so `font-medium` renders as 400. Do not add 500.
- Headings use `leading-[normal]` to match the old line-height; Tailwind's `text-*` sizes would otherwise tighten them.
- Social/brand icons use `SocialIcon` (FontAwesome brands, filled like the old Boxicons); other icons use Lucide. `FontAwesomeIcon` is also used for a few filled icons (chevrons, graduation cap, location pin).
- `SlideCarousel` wraps `BbCarousel` with the old Swiper look. Lambdas inside `@for` must copy the loop variable first, or they see the final value.
- Header shadow and the active nav link come from the small script in `index.html` (`data-header`, `data-nav`, `data-scrolled`, `data-active`). Blazor does not touch those attributes.

## Verify

After UI changes, run the app and check light, dark, and a 375px viewport. Test the carousel arrows and dots, the mobile menu, and the detail page when touching those.
