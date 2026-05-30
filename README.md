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

- **Colors:** Edit `tailwind.config.js` — primary accent is `#C94F00` (dark orange)
- **Copy:** All content lives directly in each component file
- **Contact email:** Search for `hello@co-fiber.com` and replace throughout
- **OG image:** Add `public/og-image.png` (1200×630px) for social sharing previews
