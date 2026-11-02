<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.svg">
  <img alt="secplus-tracker banner" src="assets/banner-light.svg" width="100%">
</picture>

<p align="center">
  <a href="https://cop1ouss.github.io/secplus-tracker/"><img alt="Open the tracker" src="https://img.shields.io/badge/%E2%96%B6%20open%20the%20tracker-live%20on%20GitHub%20Pages-f38ba8?style=for-the-badge&labelColor=1e1e2e"></a>
</p>
<p align="center">
  <img alt="exam: SY0-701" src="https://img.shields.io/badge/exam-SY0--701-f38ba8?style=flat-square&labelColor=1e1e2e">
  <img alt="format: 42-day sprint" src="https://img.shields.io/badge/format-42-day%20sprint-f38ba8?style=flat-square&labelColor=1e1e2e">
  <img alt="offline: installable PWA" src="https://img.shields.io/badge/offline-installable%20PWA-a6e3a1?style=flat-square&labelColor=1e1e2e">
  <img alt="build: none" src="https://img.shields.io/badge/build-none-a6e3a1?style=flat-square&labelColor=1e1e2e">
</p>

<p align="center">
  <a href="https://cop1ouss.github.io/secplus-tracker/"><img alt="secplus-tracker on desktop" src="assets/screenshot-desktop.png" width="72%"></a>
  <a href="https://cop1ouss.github.io/secplus-tracker/"><img alt="secplus-tracker on a phone" src="assets/screenshot-phone.png" width="22%"></a>
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

<p align="center"><sub>Built by <a href="https://github.com/Cop1ouss">Dajoni Gomez</a> · part of the <a href="https://cop1ouss.github.io/Cop1ouss/">Uncook</a> journey log</sub></p>
