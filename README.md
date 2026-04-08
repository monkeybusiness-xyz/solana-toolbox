# solana-toolbox.com

A community-curated directory of tools, libraries, and resources for building on and using Solana. Inspired by [ruby-toolbox.com](https://www.ruby-toolbox.com) and [clojure-toolbox.com](https://www.clojure-toolbox.com).

## Adding or updating a tool

All tools live in `data/tools/` as plain JSON files — one file per category. To add a tool, find the right category file and add an entry:

```json
{
  "name": "My Tool",
  "description": "One or two sentences describing what it does and who it's for.",
  "url": "https://mytool.com",
  "github": "https://github.com/org/repo",
  "tags": ["tag-one", "tag-two"],
  "audience": "developer"
}
```

- `github` can be `null` if the project is closed source
- `audience` is one of `"user"`, `"developer"`, or `"both"`

To add a new category, add an entry to `data/categories.json` and create a matching file at `data/tools/<slug>.json`.

## Running locally

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # builds to dist/
npm run preview   # preview the build locally
```

## Deploying

Hosted on [Cloudflare Pages](https://pages.cloudflare.com). Every push to `master` triggers a deploy.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- Cloudflare Pages — hosting
