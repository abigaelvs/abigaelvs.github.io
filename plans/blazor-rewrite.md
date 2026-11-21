# Rencana: Rewrite Portfolio ke Blazor WASM + BlazorBlueprint

Branch: `dev` (dari `master`). Situs lama (HTML statis) tetap ada di `master`.

## Keputusan
- Hosting: **Blazor WebAssembly standalone** (static hosting, tanpa server).
- Lokasi: **menggantikan isi `src/`** (situs lama dihapus di branch `dev`, tetap ada di history `master`).
- UI: **BlazorBlueprint** (`BlazorBlueprint.Components` 4.2.0, `BlazorBlueprint.Icons.Lucide` 2.0.2 - versi dari nuget.org per 2026-11-21).
- Target framework: .NET 10 (SDK 10.0.401 terpasang).

## Konten situs lama yang harus dipindah
- Halaman: `index.html` (Home, About, Skills, Qualification, Portfolio, Contact, Footer), `portfolio-details.html`.
- Aset: `assets/img/*` (foto, ikon, 5 set screenshot proyek: classification, contact, djecommerce, formrobo, todo, weather, ytdownloader), `assets/pdf/CV-Abigael-Vaneakh.pdf`.
- Data skill/proyek/qualification diisi lewat `assets/js/index.js` -> dipindah ke data JSON.
- Dependensi lama yang dibuang: Swiper, Boxicons CDN, `style.css` kustom (diganti Tailwind-style theme BlazorBlueprint).

## Struktur target
```
src/
  Portfolio.csproj
  Program.cs
  App.razor
  _Imports.razor
  Layout/MainLayout.razor        # navbar + footer + theme toggle
  Pages/Home.razor               # semua section satu halaman
  Pages/ProjectDetail.razor      # route /projects/{slug}
  Components/                    # Hero, About, Skills, Timeline, ProjectCard, Contact
  Models/                        # record Project, Skill, TimelineItem
  wwwroot/
    index.html
    data/profile.json            # profil, skills, qualification
    data/projects.json           # 5 proyek + daftar screenshot
    img/  pdf/                   # aset dipindah dari assets/
  plans/blazor-rewrite.md
```
Data di JSON (di-fetch via `HttpClient`), bukan hardcode di Razor, jadi menambah proyek = edit satu file.

## Fase
1. **Scaffold** - `dotnet new blazorwasm --empty`, install BlazorBlueprint (cek dokumentasi resmi untuk setup `AddBlazorBlueprintComponents`, CSS, dan `index.html`), pastikan `dotnet run` jalan. Hapus file HTML/CSS/JS lama (aset dipindah dulu).
2. **Data & model** - ekstrak skill, qualification, proyek dari `index.html`/`index.js`/`portfolio-details.html` ke JSON + record C#.
3. **Layout** - navbar sticky dengan smooth scroll ke section, footer, toggle dark/light (simpan di `localStorage` via JS interop minimal).
4. **Section** - Hero, About (+ tombol Download CV), Skills, Qualification (timeline), Portfolio (grid card + filter by tech), Contact.
5. **Detail proyek** - route `/projects/{slug}` dengan galeri screenshot + lightbox, tombol kembali.
6. **Polish** - responsive (cek 375px / 768px / desktop), aksesibilitas (alt text, fokus keyboard, kontras), `<title>`/meta/Open Graph di `index.html`, favicon.
7. **Deploy** - GitHub Pages lewat GitHub Actions (`.github/workflows/deploy.yml`): unduh Tailwind CLI Linux, `dotnet publish -c Release`, salin `index.html` ke `404.html` untuk fallback SPA, deploy `release/wwwroot`. Repo `abigaelvs/abigaelvs.github.io` adalah user site, jadi `base href` tetap `/`. Selesai di kode; tinggal Settings > Pages > Source = GitHub Actions, lalu merge `dev` ke `master`.

## Peningkatan dibanding versi lama
- Dark/light mode, filter proyek, lightbox menggantikan Swiper, satu template detail proyek.
- Kontak: `mailto:` saja.

## Risiko / catatan
- Load awal WASM ~2-3 MB dan SEO terbatas; mitigasi: meta/OG statis di `index.html`, Brotli di hosting, pertimbangkan prerender nanti bila perlu.
- BlazorBlueprint cukup baru: verifikasi API komponen dari dokumentasi saat implementasi, bukan asumsi.
- Email dan nomor telepon tetap publik (sudah diputuskan).

## Keputusan akhir
- Nomor telepon tetap ditampilkan.
- Kontak: hanya `mailto:` (tanpa Formspree).
- Bahasa konten: Inggris.
- Hosting: GitHub Pages.
