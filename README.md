# Maitri Shah's research portfolio

Hugo Profile portfolio with burgundy accents, persistent navigation, and dedicated research, project, experience, contact, and CV pages. Hosted on GitHub Pages.

## Development

Install Hugo extended **0.147.9**, then run `hugo server --disableFastRender`.
Run `hugo --minify --gc` for a production build in `public/`.
Then run `python scripts/check_site.py` to check navigation, internal links, and local assets.
Pushing `main` builds and deploys through `.github/workflows/deploy-hugo.yml`.

## Editing content

- `hugo.yaml`: introduction and main navigation
- `data/publications.json`: publication summaries and links
- `content/`: research overviews, projects, experience, contact, and CV
- `static/assets/pdf/Maitri_Shah_CV.pdf`: current CV download
- `static/css/portfolio.css`: burgundy palette, layout, and responsive styles
- `layouts/`: accessible navigation and custom page templates

The previous Astro and Jekyll versions remain available in Git history.
No JavaScript package manager is required.

## Theme attribution

Based on [Hugo Profile](https://github.com/gurusabarish/hugo-profile), MIT licensed.
The upstream theme is vendored under `themes/hugo-profile/`, including its licence.
Site overrides provide persistent navigation, a skip link, mobile menu controls, and dedicated content pages.
The research diagrams are illustrative concept diagrams, not experimental figures.
