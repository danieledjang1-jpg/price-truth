# Price Truth

Price Truth is a static, community-powered price board for comparing everyday
market prices across locations.

## Deploy

The deployable site is in `public/`. This repository includes a GitHub Pages
workflow that publishes that directory automatically whenever changes reach
`main`.

To run it locally, open `public/index.html` in a browser or serve the
repository with a static web server such as the VS Code Live Server extension.

## Tools and technologies

- Visual Studio Code
- HTML5
- CSS3
- JavaScript
- JSON and browser LocalStorage
- SVG item illustrations
- Git and GitHub
- GitHub Pages

This is a frontend-only project and does not require a backend runtime,
database service, or server credentials to run the current website.

## Reports and Price Truth AI

Reports submitted in the **Report a price** modal are saved in the current
browser under `priceTruthReports`. Each report includes the item, exact
quantity or measurement, price, currency, country, region, market, and date.
The chatbot filters these saved reports by the user's item and measurement, so
for example a cup of rice is not treated as a 50kg bag of rice. Browser
LocalStorage is device-local data, not a shared production database.

The chatbot uses a data-driven local response system that never invents a
community price and asks for a missing measurement. It only reports prices
found in saved matching reports.

## GitHub Pages setup

After the first push, open **Settings -> Pages** in the GitHub repository and
set **Source** to **GitHub Actions**. Future pushes to `main` will deploy
automatically.

This project is frontend-only and does not require Firebase or server
credentials. The order and vendor pages are reserved for future backend
features and are not part of the current static release.

## Contributing

Make changes in `public/`, test them in a browser, and keep documentation in
sync. After reviewing the site locally, commit the changes and push to `main`
so the GitHub Pages workflow can publish the update.

Pull requests should include a short summary of the user-facing change and
how it was tested.

For a quick local preview, use any static file server from the repository
root so relative assets and navigation behave like the deployed site.