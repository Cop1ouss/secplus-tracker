# PRD: Security+ Tracker

| | |
| --- | --- |
| **Owner** | Dajoni Gomez |
| **Status** | Ship (v2: self-paced) |
| **Phase color** | Ruby |
| **Live** | https://cop1ouss.github.io/secplus-tracker/ |

## Problem

The first version was a fixed 42-day sprint. A countdown that runs out turns a bad week into a failed plan. Security+ needs coverage of **every objective**, at whatever pace life allows.

## Goal

Pass **CompTIA Security+ SY0-701** by covering all 28 objectives with proof, not by hitting a date.

## Users

- **Me.**
- Anyone studying SY0-701 who wants a free, offline-capable tracker.

## Scope

**In:**
- All 5 domains and 28 objectives. Each one has learn, notes and practice steps, plus a 0–3 confidence rating.
- A domain-weighted readiness score using the exam weights 12/22/18/28/20.
- A "Next up" pick.
- A practice-exam log with a chart at the 750 pass line.
- An optional exam date.
- XP, ranks and a streak.
- Backup and restore.
- The Boss Battle hub: arena, SOC simulator, glossary and traps.

**Out:**
- Accounts.
- Hosting copyrighted course content.

## Requirements

1. No time limit by default. The exam date is optional and only adds a countdown.
2. Readiness is calculated from objective progress × domain weight, and shown per domain.
3. Data stays in `localStorage` (`secplus_selfpaced_v1`). Export and import use JSON.
4. Works offline as an installable PWA.
5. The original 42-day sprint stays archived at `sprint-2026.html`.

## Finish line

- Readiness **≥ 85%**.
- Every objective at confidence ≥ 2.
- Three practice exams logged at **≥ 800**.
- Then book the exam.

## Risks

- **SY0-701 retirement.** Expected in 2027. Mitigation: check CompTIA's page at the monthly check-in.
- **Losing browser data.** Mitigation: a backup reminder and a JSON export.

---

<sub>© 2026 Dajoni Gomez · Uncook™ · part of the [journey log](https://cop1ouss.github.io/Cop1ouss/)</sub>
