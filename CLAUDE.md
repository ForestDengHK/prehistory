# Prehistory Website

Astro 5 SSR site about prehistoric creatures, deployed to Vercel.

## Commands

```bash
npm run dev      # Dev server at localhost:4321
npm run build    # Production build to ./dist/
npm run preview  # Preview production build
```

## Architecture

- **Framework**: Astro 5 with SSR (`output: 'server'`)
- **Deployment**: Vercel serverless adapter
- **Storage**: Vercel Blob for likes/comments, SQLite for local data
- **Data**: Static TypeScript arrays in `src/data/` (creatures, categories, facts)

## Key Files

- `src/data/creatures.ts` - Main creature database (large file, ~50k tokens)
- `src/db/index.ts` - Vercel Blob operations for likes
- `src/middleware.ts` - Request middleware
- `astro.config.mjs` - Astro + Vercel config

## Code Patterns

- Pages use `.astro` files with frontmatter for data fetching
- API routes in `src/pages/api/` return JSON
- Admin routes protected by middleware in `src/middleware/adminAuth.ts`
- Creatures have optional `modelId` for Sketchfab 3D embeds

## Environment Variables

Required prefixes in `astro.config.mjs`: `PUBLIC_`, `BLOB_`, `ADMIN_`

Check `.env` for required variables (Vercel Blob token, admin credentials).

## Gotchas

- `src/data/creatures.ts` is very large - use offset/limit when reading
- SSR mode requires Vercel deployment; static export won't work
- Likes/comments persist to Vercel Blob, not local SQLite
