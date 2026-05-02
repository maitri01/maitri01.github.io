# Maitri Shah Portfolio (Astro)

A modular research portfolio built with Astro and Tailwind CSS.

## Stack

- Astro (static site generation)
- Tailwind CSS (styling)
- KaTeX (math rendering)
- Playwright (E2E checks and screenshot capture)

## Pages

- `/` Impact Dashboard (bento grid)
- `/research-experience/`
- `/evaluation-suite/`
- `/implementation-lab/`
- `/cv-skills/`

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## End-to-End Tests

```bash
npm run test:e2e
```

## Living Previews (Chrome screenshots)

```bash
npm run screenshots
```

Screenshots are written to `artifacts/previews/`.

## GitHub Pages Deployment

A GitHub Actions workflow is included at:

- `.github/workflows/deploy-astro.yml`

It installs dependencies, builds the Astro site, and deploys `dist/` to GitHub Pages.
