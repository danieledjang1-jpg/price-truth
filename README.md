# Price Truth

Price Truth is a static, community-powered price board for comparing everyday
market prices across locations.

## Deploy

The deployable site is in `public/`. This repository includes a GitHub Pages
workflow that publishes that directory automatically whenever changes reach
`main`.

To run it locally, open `public/index.html` in a browser or serve the
repository with any static web server.

## GitHub Pages setup

After the first push, open **Settings -> Pages** in the GitHub repository and
set **Source** to **GitHub Actions**. Future pushes to `main` will deploy
automatically.

This project is frontend-only and does not require Firebase or server
credentials. The order and vendor pages are reserved for future backend
features and are not part of the current static release.