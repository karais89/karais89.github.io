# Repository Guidelines

## Project Structure & Module Organization
- Root: site pages (e.g., `index.html`/`index.md`) and config.
- Jekyll config: `_config.yml` and optional `Gemfile` for GitHub Pages.
- Content: `_posts/` (blog posts named `YYYY-MM-DD-title.md`), standalone pages in root or `pages/`.
- Layouts/partials: `_layouts/` and `_includes/`.
- Assets: `assets/` for images, CSS, JS (e.g., `assets/img`, `assets/css`).
- Optional: `CNAME` (custom domain), `.github/workflows/` (CI), `README.md`.

## Build, Test, and Development Commands
- Setup (Ruby): `bundle install` — install Jekyll/GitHub Pages gems.
- Serve locally: `bundle exec jekyll serve --livereload` — run at `http://127.0.0.1:4000`.
- Build site: `bundle exec jekyll build` — outputs to `_site/`.
- Remote build: pushing to `main` triggers GitHub Pages build.
- Optional Node assets: `npm ci && npm run build` if a `package.json` exists.
- Link check (optional): `bundle exec htmlproofer ./_site --check-html`.

## Coding Style & Naming Conventions
- Markdown: one H1 per page, descriptive headings; wrap links with descriptive text.
- Posts: filename `YYYY-MM-DD-title.md`; front matter `title`, `date`, `layout`, `tags`.
- URLs and files: kebab-case (`my-new-post.md`); image paths under `/assets/img/` with meaningful alt text.
- Indentation: 2 spaces (YAML, HTML, SCSS). Prefer Prettier/EditorConfig if configured.

## Testing Guidelines
- Preview locally and scan for broken links/images before opening a PR.
- If `htmlproofer` is configured, run it on `_site/` after `build`.
- For visual changes, test on mobile and desktop widths (Chrome DevTools).

## Commit & Pull Request Guidelines
- Commits: imperative mood, concise subject (<= 72 chars), brief body for context.
- PR checklist: clear description, linked issues (e.g., `Closes #123`), screenshots/GIFs for UI changes, and steps to reproduce.
- Ensure local build passes (`serve` or `build`) and no broken links before requesting review.

## Security & Configuration Tips
- Do not commit secrets; keep them out of `_config.yml` and content.
- Respect canonical URLs and `CNAME` when testing.
- Keep dependencies updated (`bundle update` or Dependabot, if enabled).
