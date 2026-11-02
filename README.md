<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.svg">
  <img alt="secplus-tracker banner" src="assets/banner-light.svg" width="100%">
</picture>

<p align="center">
  <a href="https://cop1ouss.github.io/secplus-tracker/"><img alt="Open the tracker" src="https://img.shields.io/badge/%E2%96%B6%20open%20the%20tracker-live%20on%20GitHub%20Pages-f38ba8?style=for-the-badge&labelColor=1e1e2e"></a>
</p>
<p align="center">
  <a href="https://github.com/Cop1ouss/secplus-tracker/actions/workflows/ci.yml"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/Cop1ouss/secplus-tracker/ci.yml?style=flat-square&label=CI&labelColor=1e1e2e&color=a6e3a1"></a>
  <a href="https://github.com/Cop1ouss/secplus-tracker/actions/workflows/codeql.yml"><img alt="CodeQL" src="https://img.shields.io/github/actions/workflow/status/Cop1ouss/secplus-tracker/codeql.yml?style=flat-square&label=CodeQL&labelColor=1e1e2e&color=89b4fa"></a>
  <a href="SECURITY.md"><img alt="Security policy" src="https://img.shields.io/badge/security-policy-f38ba8?style=flat-square&labelColor=1e1e2e"></a>
  <img alt="exam: SY0-701" src="https://img.shields.io/badge/exam-SY0--701-f38ba8?style=flat-square&labelColor=1e1e2e">
  <img alt="format: self-paced" src="https://img.shields.io/badge/format-self--paced%20%C2%B7%20no%20deadline-f38ba8?style=flat-square&labelColor=1e1e2e">
  <img alt="offline: installable PWA" src="https://img.shields.io/badge/offline-installable%20PWA-a6e3a1?style=flat-square&labelColor=1e1e2e">
  <img alt="build: none" src="https://img.shields.io/badge/build-none-a6e3a1?style=flat-square&labelColor=1e1e2e">
</p>

<p align="center">
  <a href="https://cop1ouss.github.io/secplus-tracker/"><img alt="secplus-tracker on desktop" src="assets/screenshot-desktop.png" width="72%"></a>
  <a href="https://cop1ouss.github.io/secplus-tracker/"><img alt="secplus-tracker on a phone" src="assets/screenshot-phone.png" width="22%"></a>
</p>

A gamified, self-paced study tracker for the **CompTIA Security+
(SY0-701)** exam. It covers **all 28 exam objectives across the 5
domains**, with no calendar and no time limit: study at your own pace,
and set an exam date only once you've booked one. No build step, no
backend, no dependencies — every page is a standalone HTML file that
runs straight in a browser or as an installable PWA.

**How it works**

- **Every objective, step by step:** for each of the 28 objectives, mark
  *learned it*, *wrote my own notes* and *did practice questions*, then rate
  your confidence from *Not yet* to *Exam-ready*. Key topics for each
  objective are listed inline, with room for your own notes.
- **Exam readiness score:** weighted by how much each domain counts on the
  real exam (Security Operations is 28%, General Concepts 12%), so your
  score reflects where the points actually are.
- **Next up:** always points you at your weakest objective in the heaviest
  domain.
- **Practice exam log:** log every full-length score (100–900) and watch the
  trend against the 750 pass line.
- **XP, ranks and streaks** for momentum, plus backup and restore of your
  progress.

*Screenshots show example progress.*

## What's in here

| Path | What it is |
|---|---|
| `index.html` | The self-paced objective tracker — the main entry point. |
| `data/objectives.json` | All 28 SY0-701 objectives with key topics and domain weights. |
| `sprint-2026.html` | The original 42-day sprint (Jun–Jul 2026), kept as an archive. |
| `boss-tracker/` | An installable PWA (`manifest.json` + `sw.js` for offline use) with several linked views: |
| `boss-tracker/game.html` | The gamified progress/boss-battle view. |
| `boss-tracker/glossary.html` | Security+ terminology reference. |
| `boss-tracker/schedule.html` | Course video checklist, grouped by domain. |
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


## Project docs

| | |
| --- | --- |
| 📋 [PRD](docs/PRD.md) | The problem, the goal, scope and the finish line |
| 🛡️ [Security policy](SECURITY.md) | How to report a vulnerability privately |
| ⚖️ [License](LICENSE) | MIT |
| 🧪 [CI](.github/workflows/ci.yml) | What runs on every pull request |

---

<p align="center"><sub>Built by <a href="https://github.com/Cop1ouss">Dajoni Gomez</a> · part of the <a href="https://cop1ouss.github.io/Cop1ouss/">Uncook</a> journey log</sub></p>
