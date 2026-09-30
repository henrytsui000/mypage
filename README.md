# mypage (redirect shim)

Temporary stub that keeps the old project-page URLs alive after the site moved
from `henrytsui000.github.io/mypage/` to `henrytsui000.github.io/`.

The real site is the [`henrytsui000.github.io`](https://github.com/henrytsui000/henrytsui000.github.io)
repo (renamed from this one).

## How it works

GitHub Pages serves `404.html` for any path it cannot find. Since this repo has
no other content, every request under `/mypage/` lands there, and
`redirect.js` rewrites `/mypage/<path>` to `https://henrytsui000.github.io/<path>`,
preserving query strings and hashes. `index.html` does the same for `/mypage/`
itself. Both also carry a `<meta http-equiv="refresh">` fallback for
JS-disabled clients.

Deep links keep working in browsers, but crawlers see an HTTP 404 status on
them (GitHub Pages cannot return a real 301). `noindex, follow` plus a canonical
tag point search engines at the new home.

## Setup

Settings -> Pages -> Source: branch `main`, folder `/ (root)`.

## When to delete

Once inbound links and search results have caught up (6-12 months is plenty),
delete this repo. Nothing depends on it.
