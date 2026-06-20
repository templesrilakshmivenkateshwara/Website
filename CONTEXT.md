# Project Context

Next.js 14 temple website for Sri Lakshmi Venkateshwara Swamy Temple.

## Structure

- `app/`: App Router pages for English, Kannada, and Hindi routes
- `components/`: shared UI sections, navigation, hero, footer, and reusable image preview
- `lib/`: locale helpers, scraped content assembly, and public path helpers
- `data/`: scraped content JSON and Hindi translation cache
- `public/`: temple images, logo assets, and hero visuals

## Deployment

- Deployed to GitHub Pages as a project site under `/Website/`
- `next.config.mjs` uses `output: 'export'` and a `basePath` from `NEXT_PUBLIC_SITE_BASE_PATH`
- GitHub Actions workflow writes `out/.nojekyll` so Pages serves `_next/` assets correctly

## Important Notes

- Use `sitePath()` for raw public asset paths and plain `<a>` links that must include the Pages base path
- Use plain `next/link` paths like `/about` or `/events` for internal routing; Next handles the base path
- Shared image rendering now uses `components/image-preview.tsx` with a skeleton overlay and tap-to-enlarge behavior
- Key visuals were converted to `next/image` for better sizing and loading behavior

## Recent Fixes

- Fixed broken Pages deployment and missing CSS by correcting the base path and adding `.nojekyll`
- Removed duplicate Next config/workflow files
- Reworked gallery/event/about image cards for smoother rounded clipping and consistent previews
- Stabilized locale pages so Kannada/Hindi routes match English page behavior

