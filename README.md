# CoFiber Website

Investor and partner-facing website for [co-fiber.com](https://co-fiber.com).

**Stack:** Vite + React + TypeScript + Tailwind CSS

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview with:

```bash
npm run preview
```

## Deploy to GitHub Pages

GitHub Pages must serve the **built site**, not the source files on `main`.

### Option A — Use the `gh-pages` branch (fastest)

1. GitHub repo → **Settings → Pages**
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `/ (root)` → **Save**
4. Wait 1–2 minutes, then hard-refresh [co-fiber.com](https://co-fiber.com)

To publish updates manually:

```bash
npm run deploy
```

### Option B — GitHub Actions (recommended)

1. GitHub repo → **Settings → Pages**
2. **Build and deployment → Source:** **GitHub Actions**
3. Push to `main` — the workflow builds and deploys automatically

The custom domain `co-fiber.com` is configured via `public/CNAME` (copied into `dist/` on build).

## File Structure

```
src/
  components/
    Nav.tsx          # Sticky navigation
    Hero.tsx         # Full-screen hero section
    Problem.tsx      # Problem framing (4 friction cards)
    Platform.tsx     # 4-pillar platform grid
    Ecosystem.tsx    # 6 ecosystem segment cards
    UseCases.tsx     # 4 use case cards
    WhyNow.tsx       # Market signals (dark section)
    About.tsx        # Company mission & principles
    Contact.tsx      # Contact / CTA section
    Footer.tsx       # Footer with links
  App.tsx
  main.tsx
  index.css          # Tailwind + custom component classes
  vite-env.d.ts
index.html           # SEO metadata, OG tags, structured data
public/
  favicon.svg
  CNAME              # For custom domain GitHub Pages
```

## Customization

### Interactive technology story

The homepage navigation, hero, and technology preview link to `/how-it-works/`.
The standalone page lives in `public/how-it-works/index.html`; Vite copies it
into `dist/how-it-works/index.html` during the normal build. It needs no SPA
route or hosting rewrite, so direct links work on GitHub Pages.

- Edit the story and scene in `public/how-it-works/index.html`.
- Edit the website integration styles in `public/how-it-works/site.css`.
- Edit the homepage teaser in `src/components/TechnologyPreview.tsx` and its
  illustration in `public/how-it-works/preview.svg`.
- Share chapter shortcuts with `#sensing`, `#cofiber`, or `#tenant`.
- The demo uses synthetic data and read-only sample access fields; it does not
  authenticate users or connect to a live sensing service.
- Three.js r128 and its matching OrbitControls are served locally from `vendor/`
  with their MIT license. Fonts use Google Fonts with system fallbacks.
- The page preserves the site's current `noindex, nofollow` policy.

`CoFiber_tech_intro.html` is the supplied reference. The deployed, maintained
version is `public/how-it-works/index.html`.

Before publishing changes, run `npm run build` and `npm run preview`; check
the homepage links, all three chapter shortcuts, provider comparison controls,
tenant demo entry/exit, and the mobile layout.

- **Colors:** Edit `tailwind.config.js` — primary accent is `#C94F00` (dark orange)
- **Copy:** All content lives directly in each component file
- **Contact email:** Search for `hello@co-fiber.com` and replace throughout
- **OG image:** Add `public/og-image.png` (1200×630px) for social sharing previews
