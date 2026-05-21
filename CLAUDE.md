# Personal Portfolio Site — Project Context

## About me
I'm Bhavanishankar (Shankar) Kalavakolanu. Mechanical engineering graduate from
Ohio State (2025), now Lead Robotics & Autonomy Engineer at Space-Intel. Background
in aerospace, GNC, autonomous systems, drones/UAS, and embedded/robotics. FAA Part
107 certified.

## Site goals
1. Recruiter-facing portfolio: aerospace, robotics, GNC, autonomous systems roles.
   Skim-friendly, fast, real accomplishments visible in <10 seconds.
2. Technical credibility hub: for founders, collaborators, grad school admissions.
   Deeper project pages showing end-to-end engineering judgment.

Both audiences matter equally.

## Stack
- Astro (static-first, outputs plain HTML for GitHub Pages)
- Tailwind CSS for styling
- Deployed via GitHub Actions to GitHub Pages at shankarkalavakolanu.com
- Custom domain CNAME must remain functional
- Repo: shankarkalavakolanu/shankarkalavakolanu.github.io

## Visual design system
- Dark default, light toggle (persisted via localStorage, respects
  prefers-color-scheme on first load)
- Warm-dark palette:
  - Background: #0D0C0A
  - Surface: #17140F
  - Surface-2: #211C14
  - Border: #2E2820
  - Text primary: #F3ECDD
  - Text muted: #A49A86
  - Accent (gold): #D4A24C
  - Accent hover: #E5B968
- Typography:
  - Instrument Serif — display/h1/hero only
  - Inter — body/UI
  - JetBrains Mono — code, tags, technical labels
  - Load via Fontsource or Google Fonts with font-display: swap
- Layout: max-w ~1100px centered, generous whitespace
- Radius: 8px on cards, 6px on buttons
- Borders: 0.5px using the border token

## Company accent system
Gold stays the primary accent across the whole site. Each project page gets a
company accent in RESTRAINED places only:
  1. 3px top stripe under the nav in the company color
  2. A company chip/tag near the page title
  3. A subtle glow/ring on the hero image via box-shadow at low opacity
  4. Small company-color dot on its project card on the home page
Nothing else uses the company color — buttons, links, body text, nav, and
footer all stay gold/neutral on every page.

Company colors:
- Buckeye Vertical: #BB0000 (OSU scarlet)
- Quantum Leap: #6B4F9E (confirm against actual logo)
- DREAMING Falcon / ARC: #BB0000 (ARC is OSU)

## Micro-interactions (Phase 1 only)
- Hover lifts on cards (2-4px, 150ms ease-out)
- Focus rings in gold
- Smooth scroll
- Smooth theme toggle transition
- NO entrance animations, NO scroll reveals, NO page transitions in Phase 1

## Current phase: Phase 1 — stack migration + visual redesign
Migrate existing site to Astro + Tailwind with the new visual system.
Content stays identical (all existing text preserved verbatim). Look changes
to the new palette, typography, layout conventions, and per-page company
accents. No new sections, no content updates, no 3D, no contact form yet.

## Space-Intel disclosure (UPDATED)
Space-Intel is now publicly disclosed on the site at the following level of
detail:
- Company: Space-Intel
- Title (PUBLIC SITE ONLY): Founding Robotics and Autonomy Engineer
  (note: internal title is Lead Robotics & Autonomy Engineer; the site
  intentionally uses "Founding" for public positioning)
- Dates: Nov 2025 – Present
- Location: Dallas, TX
- Description of work: "Developing autonomous systems for final mile
  delivery, geospatial mapping, and stratospheric imaging applications"

Do NOT add specifics beyond what's listed above without my approval — no
customer names, no investor amounts, no hardware vendors, no technical
architecture details, no team size. Resume bullets that list Jetson Orin
AGX, Starlink Mini, $50M investment, etc. should NOT appear on the site.

## Buckeye Vertical — factual ground truth (for future phases)
Competition timeline:
- 2021-22 (freshman year): VFS DBVF — 1st place
- 2022-23, 2023-24, 2024-25: SUAS — autonomous package delivery drone
  (multi-year finishes: 2nd / 7th / 15th)
Role: President & Competition Team Lead, Aug 2021 – Jul 2025.
Team scaled from 15 to 75 members over four years.
Do NOT frame the arc as "ending in a 1st place win" — the win was year one,
SUAS is the longer technical story.

## What NOT to do
- Do NOT invent dates, awards, metrics, or accomplishments. If something is
  unclear, ask before writing it.
- Do NOT add Stealth Startup, updated GE bullets, VFS/SUAS corrections,
  Stanford cert, or Part 107 in Phase 1. Content updates are a later phase.
  (Space-Intel disclosure is now allowed — see the Space-Intel disclosure
  section above for the exact bounds.)
- Do NOT break GitHub Pages deployment. The custom domain
  (shankarkalavakolanu.com) must keep working.
- Do NOT commit node_modules, build output, or any binary files I haven't
  approved.
- Do NOT add heavy animation libraries, 3D hero scenes, or cursor effects.
- Do NOT use localStorage/sessionStorage features beyond the dark-mode toggle
  persistence.

## Working style
- Work in phases. Complete one phase, I review, then we move on.
- Before large changes: propose a plan, wait for my approval, then execute.
- Small commits, clear messages. One logical change per commit.
- When uncertain between two approaches, show me both rather than pick silently.
- Run `npm run build` before declaring a task done.
- If you notice existing content that looks outdated or wrong, FLAG it in
  your report but do NOT fix it in Phase 1. Content changes come later.

## URL preservation
The current live site uses .html URLs (e.g., /buckeye-vertical.html). Preserve
these URLs exactly — either keep the .html extension in Astro output via
build.format: 'file', or add redirects. Don't silently change URLs.