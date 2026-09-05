# Tianne Pane — Product Manager Portfolio

A clean, editorial portfolio modeled on the reference: quiet serif typography, monospace micro-labels, generous whitespace, and a scrollable two-column project grid. Built for desktop-first recruiter browsing, fully responsive on mobile.

## Look & feel (from your reference)
- Off-white paper background, dark ink text, one orange accent color
- Large serif display headline ("I'm Tianne, a product manager who ships.")
- Monospace uppercase nav labels and metadata (WORK / FUN / ABOUT / RESUME)
- Thin top nav bar: name + title on the left, page links center-right
- Footer: "Designed + coded with ♡ by Tianne" plus LinkedIn, Email, X, GitHub links
- Subtle scroll-in fade for project cards; restrained motion overall

## Pages (4 routes)
1. **Work (/)** — the home page:
   - Hero: big serif headline left, work history list right (year · company · role, ~5 rows of dummy entries)
   - Project grid: 2 columns on desktop, 1 on mobile, space for **7 projects** with dummy names (e.g. "Atlas", "Beacon", "Relay"…). Each card: cover image, serif title line, monospace metadata (CLIENT · STATUS · YEAR)
   - One orange "VIEW CASE STUDY" pill on hover/featured card (non-functional for now)
2. **Fun (/fun)** — personal/experimental projects in a lighter grid
3. **About (/about)** — portrait placeholder, short bio, experience list
4. **Resume (/resume)** — resume-style page with roles, skills, education, download button placeholder

No case study detail pages yet — project cards are visual only, ready to link later.

## Assets
- Generate 7 cover images for Work projects (abstract gradients / product UI mockup style like the reference) + a few for Fun, and a portrait placeholder for About
- Fonts via Google Fonts link: a serif display (e.g. Libre Caslon / Newsreader style) + a monospace for labels

## Technical
- TanStack Start routes: `index.tsx` (Work), `fun.tsx`, `about.tsx`, `resume.tsx`
- Shared nav + footer in `src/routes/__root.tsx`
- Design tokens in `src/styles.css` (paper bg, ink, orange accent; serif + mono font tokens)
- Per-route head() SEO (title, description, og tags) — "Tianne Pane — Product Manager"
- Project data in a single `src/lib/projects.ts` so swapping dummy names later is one file
- Mobile: single-column grid, collapsed nav (compact menu), headline scales down
