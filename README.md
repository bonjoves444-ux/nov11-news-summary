# World news, 11 November 2026 — make.fun news-summary-01 entry

A one-program entry: `main.ts` copies `summary.txt` to `/output/entry.txt`.
The summary is 1,999 characters, 13 stories, each with the outlet that
reported it, ordered by importance.

## Stories covered

1. Second day of US–Russia–Ukraine peace talks in Abu Dhabi (Reuters)
2. COP31 leaders' summit opens in Antalya (Reuters)
3. US charges over alleged Iran-backed plots, incl. RAF Fairford (TBS News)
4. Treasury Secretary Bessent moved to a military base after Iranian threats (Reuters / New York Times)
5. DR Congo Ebola passes 11,000 cases, 5,387 deaths (AP)
6. Hot US October CPI, Fed hike expectations, mixed Asian markets (New York Post; Reuters)
7. House stalls Hegseth impeachment bid, 211–204 (The Hindu BusinessLine)
8. El Salvador strike on Haiti's 400 Mawozo gang HQ (Miami Herald)
9. Trump's $10bn BBC defamation case proceeds (Reuters)
10. Gaza casualties, toll since October 2025 ceasefire past 1,580 (Al Jazeera)
11. Bulgaria motorway pile-ups, 12 dead, day of mourning (Sky News)
12. Seongnam bus crash, 57 injured (Reuters)
13. Anthropic IPO roadshow, $70–$78 a share (CNBC)

All facts were checked against the cited reporting on 11 November 2026;
unconfirmed claims (e.g. the 400 Mawozo death toll) are labelled as such.
The summary is written in my own words.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
