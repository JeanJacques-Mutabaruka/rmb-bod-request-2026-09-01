# RMB Board plan, 1 September 2026

Static site presenting the requirements retained from the RMB Board of Directors meeting of
1 September 2026, the objectives, the action plan, the schedule, the governance arrangements
and the automation roadmap.

Published at **https://jeanjacques-mutabaruka.github.io/rmb-bod-request-2026-09-01/**

Sibling of `rmb-finintel-2026-x7k4`, sharing the same design system (`shared.css`, sidebar
navigation, RMB green and gold palette, Playfair Display / DM Sans / DM Mono).

---

## Contents

| File | Purpose |
|---|---|
| `index.html` | Overview: the five requirements, the objectives, the December 2026 deliverables, the workstreams, and the download links |
| `action-plan.html` | The 36 activities in nine columns, filterable and searchable, each row expandable for a fuller explanation |
| `schedule.html` | Workstream spans with start and end dates, plus the activity-level Gantt chart |
| `governance.html` | Reporting lines, RACI matrix, offices taking part, decision workflow, reporting calendar |
| `automation.html` | Automation and artificial-intelligence use cases and safeguards |
| `glossary.html` | Every abbreviation used across the site |
| `shared.css` | The RMB-FinIntel shared stylesheet, unchanged |
| `plan.css` | Page-specific styles for this site only |
| `nav.js` | Sidebar navigation, adapted from the RMB-FinIntel `nav.js` |
| `plan.js` | Action plan filtering, search and expandable detail rows |
| `gantt.js` | Workstream filtering on the schedule page |
| `governance.js` | RACI column highlight and the decision workflow stepper |
| `glossary-tip.js` | Hover and keyboard tooltips for every abbreviation, on every page |
| `docs/` | The Word and PDF versions of the plan, linked from the site |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

No build step, no dependencies, no CDN. Every file is served exactly as it sits in the
repository, so the site works offline and cannot break because an external service changed.

---

## Deploying to GitHub Pages

The existing site lives at `jeanjacques-mutabaruka.github.io/rmb-finintel-2026-x7k4/`, which
means it is a **separate repository** named `rmb-finintel-2026-x7k4` under your account. This
site is deployed the same way, in its own repository named `rmb-bod-request-2026-09-01`.

### Step 1. Create the repository

On GitHub, select **New repository**:

- **Owner**: `jeanjacques-mutabaruka`
- **Repository name**: `rmb-bod-request-2026-09-01` (exactly this, since it becomes the URL path)
- **Visibility**: Public (GitHub Pages on a free account requires public)
- Do **not** add a README, `.gitignore` or licence: the folder already contains what it needs

### Step 2. Upload the files

The simplest route, no command line required:

1. On the new empty repository page, select **uploading an existing file**
2. Drag in **the contents of this folder**, not the folder itself: `index.html`, the other
   `.html` files, `shared.css`, `plan.css`, the four `.js` files, `.nojekyll`, `README.md`,
   and the `docs` folder
3. Commit message: `Initial publication, v3 of 5 September 2026`
4. Select **Commit changes**

If `.nojekyll` does not appear in the upload dialog, your file manager is hiding dotfiles.
On Windows, enable **Hidden items** in the Explorer View ribbon; on macOS press
<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> in Finder.

If you prefer the command line:

```bash
cd rmb-bod-request-2026-09-01
git init
git add .
git commit -m "Initial publication, v3 of 5 September 2026"
git branch -M main
git remote add origin https://github.com/jeanjacques-mutabaruka/rmb-bod-request-2026-09-01.git
git push -u origin main
```

### Step 3. Turn Pages on

1. In the repository, go to **Settings**, then **Pages** in the left menu
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`
3. Set **Branch** to `main` and the folder to `/ (root)`
4. Select **Save**

GitHub takes one to two minutes on the first publication. The page then shows the live URL:

**https://jeanjacques-mutabaruka.github.io/rmb-bod-request-2026-09-01/**

### Step 4. Check it

Open the URL and confirm:

- the sidebar appears and the six pages navigate correctly
- the download links under **Documents** open the Word and PDF files
- on the action plan, the green **+** opens the explanation of an activity
- on a phone, the hamburger menu opens the sidebar drawer

If the styling is missing, `shared.css` or `plan.css` did not upload. If a download link
returns 404, the `docs` folder did not upload with its four files inside.

---

## Updating the site later

Replace the changed files in the repository (**Add file**, then **Upload files**, keeping the
same names) and commit. GitHub Pages republishes within a minute or two. If a change does not
appear, force-refresh the page with <kbd>Ctrl</kbd>+<kbd>F5</kbd> or
<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>: the browser caches CSS aggressively.

To change the content rather than the wording of one page, edit `data.js` in the generator
project and re-run `node buildsite.js`, `node build_full.js` and `node build_compact.js`. All
three outputs come from that one file, so a date changed there changes the site, the detailed
document and the condensed document together.

---

## Version history

**v4, 5 September 2026.** Added a sixth Board requirement, "Calculating more accurately the
losses undergone by the Rwandan economy," in third priority position. This inserted a new
workstream, WS3, and renumbered every workstream, activity and objective from the old WS3
onward (old WS3→WS4, WS4→WS5, WS5→WS6, WS6→WS7). The detailed document grew from 21 to 24
pages and the condensed document from 6 to 7. Total activities: 41 across 7 workstreams
(was 36 across 6). The glossary gained two terms, TC and Payability.

**v3, 5 September 2026.** Initial publication: five Board requirements, six workstreams,
36 activities, first version of this site.

---

## Demonstration tool links

The reporting platform (due 31 October 2026) and the risk-pricing model (due 30 November 2026)
do not exist yet. Their links currently point to the existing 3T mineral pricing tool at
`https://rmb-mineral-pricing-tool.streamlit.app/`. When the real tools are published, change
the three URLs in the `LINKS` block of `data.js` and regenerate, or edit them directly in the
sidebar of each `.html` file and in the card on `index.html`.

---

*Jean Jacques Mutabaruka, mineral market intelligence expert, RMB. Draft v3, 5 September 2026.*
