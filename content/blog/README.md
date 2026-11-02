# How to publish a blog article

1. **Cover image:** put it in `public/blog/`, e.g. `public/blog/meta-ads-tips.jpg`
   (landscape, about 1600×900, under 500 KB).
2. **Article:** create a file in this folder. The file name becomes the web address:
   `content/blog/meta-ads-tips.md` → `taptag.am/blog/meta-ads-tips`
   Use lowercase words with dashes, no spaces.
3. Start the file with this block, then write the article below it:

```
---
title: 5 Meta Ads Mistakes Armenian Businesses Make
description: One or two sentences (about 150 characters). Shown in Google results and on the blog list.
date: 2026-11-15
cover: /blog/meta-ads-tips.jpg
coverAlt: Short description of the cover image
author: TapTag Team
draft: false
---
```

Optional: `updated: 2026-12-01` when you change an article later.

4. **Preview:** run `npm run dev` and open http://localhost:3000/blog.
   Set `draft: true` while writing: drafts show on your computer but not on the live site.
5. **Publish:** set `draft: false`, then commit, push and deploy.

## Writing tips (Markdown)

| You type | You get |
|---|---|
| `## Heading` | Section heading (use these to structure the article) |
| `### Smaller heading` | Sub-heading |
| `**bold**` | **bold** |
| `[link text](/services/seo)` | a link |
| `- item` | bullet list |
| `![description](/blog/image.jpg)` | image inside the article |

Do not use a single `#` heading: the article title is already the page's main heading.
