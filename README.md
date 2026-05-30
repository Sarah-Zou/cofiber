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

1. Push the repo to GitHub
2. Run:
   ```bash
   npm run deploy
   ```
   This builds and pushes the `dist/` folder to the `gh-pages` branch.

3. In your GitHub repo → **Settings → Pages**, set source to the `gh-pages` branch.

4. Add a **CNAME** record for `co-fiber.com` pointing to `<your-github-username>.github.io`.
   The `public/CNAME` file is already configured with `co-fiber.com`.

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
