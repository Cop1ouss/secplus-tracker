<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/readme/banner-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset=".github/readme/banner-light.svg">
  <img alt="secplus-tracker" src=".github/readme/banner-dark.svg" width="100%">
</picture>

<p align="center">
  <a href="https://cop1ouss.github.io/secplus-tracker/"><img alt="Open the tracker →" src="https://img.shields.io/badge/Open%20the%20tracker%20%E2%86%92-f38ba8?style=for-the-badge&labelColor=1e1e2e"></a>
</p>
<p align="center">
  <img alt="CompTIA SY0-701" src="https://img.shields.io/badge/CompTIA%20SY0--701-1e1e2e?style=flat-square&logo=comptia&logoColor=f38ba8">
  <img alt="PWA" src="https://img.shields.io/badge/PWA-1e1e2e?style=flat-square&logo=pwa&logoColor=cba6f7">
  <img alt="HTML" src="https://img.shields.io/badge/HTML-1e1e2e?style=flat-square&logo=html5&logoColor=fab387">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-1e1e2e?style=flat-square&logo=javascript&logoColor=f9e2af">
</p>

<p align="center">
  <img alt="Desktop view" src=".github/readme/screenshot-desktop.png" width="74%">
  &nbsp;
  <img alt="Phone view" src=".github/readme/screenshot-phone.png" width="21%">
</p>

A gamified, self-contained study tracker for the **CompTIA Security+
(SY0-701)** exam, built as a 42-day sprint plan. No build step, no
backend, no dependencies — every page is a standalone HTML file that
runs straight in a browser or as an installable PWA.

## What's in here

| Path | What it is |
|---|---|
| `index.html` | The 42-day sprint tracker — the main entry point. |
| `boss-tracker/` | An installable PWA (`manifest.json` + `sw.js` for offline use) with several linked views: |
| `boss-tracker/game.html` | The gamified progress/boss-battle view. |
| `boss-tracker/glossary.html` | Security+ terminology reference. |
| `boss-tracker/schedule.html` | The day-by-day sprint schedule. |
| `boss-tracker/socvisualizer.html` | A Security Operations Center (SOC) workflow visualizer. |
| `boss-tracker/stats.html` | Progress/readiness stats view. |
| `boss-tracker/traps.html` | Common exam-question traps/gotchas log. |
| `boss-tracker/data/` | Tracker's stored content/progress data. |

## Using it

Open `index.html` directly in a browser, or host the repo on GitHub
Pages and use the tracker from there. `boss-tracker/` can be installed
as a PWA (via the browser's "Install app" prompt) for offline access.

Same gamified pattern this project's own author reused for
[`ccna-tracker`](https://github.com/Cop1ouss/ccna-tracker)'s boss
battles — see that repo if you're studying CCNA alongside Security+.

## Data & privacy

Like this project's sibling trackers, progress is expected to be stored
client-side (browser storage) — nothing here is sent to a server.

## Related

- [`ccna-tracker`](https://github.com/Cop1ouss/ccna-tracker) — CCNA 200-301 study/test-prep repo, same gamified approach.
- [`cisco-track`](https://github.com/Cop1ouss/cisco-track) — broader networking/AD curriculum tracker (CCNA + AZ-800 + Cisco JCA).

---

<p align="center"><sub>Part of <a href="https://github.com/Cop1ouss">Uncook</a> · built off systems · © 2026 Dajoni Gomez</sub></p>
