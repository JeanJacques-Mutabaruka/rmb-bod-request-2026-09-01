# CHANGES — RMB Board plan site — V1-1

**Date:** 5 September 2026
**Files changed:** 1

---

## File and destination

| File | Destination in the repository |
|---|---|
| `plan.css` | root of `rmb-bod-request-2026-09-01` (replaces the existing `plan.css`) |

No other file changes. HTML, JavaScript and `shared.css` are untouched.

---

## What changed

**1. The activity detail panel now fills the window width.**
`.detail-inner p` had `max-width: 95ch`, which stopped the paragraph roughly two thirds of
the way across on a wide screen. Removed.

**2. The panel is now blue instead of green.**
- Background `var(--blue-lt)` (`#E8F2FB`, the info tint from the design rules, section R5.4)
- Left bar `rgb(0,0,255)`, pure blue, matching R5.3
- Label `WHAT THIS ACTIVITY CONSISTS IN` in `rgb(0,0,255)`
- Body text `#10275C`, a dark blue that stays readable on the pale blue tint

The panel is now clearly distinct from the green table row above it.

**3. Fixed the broken date layout inside the panel.**
`STARTS` and `ENDS` were rendering across three lines, as `22 SEP 2026 (`, then `D+21`,
then `)`. Cause: the glossary tooltip script wraps `D+21` in a `<span>`, and the rule
`.detail-kv span { display: block; text-transform: uppercase; }` was matching that wrapper
as well as the intended label, turning it into a block element. The selector is now
`.detail-kv > div > span`, which matches only the labels.

Also: `.gl { white-space: nowrap }` so a day count never breaks across two lines, and the
key/value grid columns widened from 190 px to 230 px.

---

## Deployment

1. In the repository, open `plan.css`
2. Select the pencil icon (**Edit this file**)
3. Select all and paste the contents of the new `plan.css`
4. Commit with the message `V1-1: detail panel full width, blue, date layout fixed`

Or use **Add file → Upload files** and drop in the new `plan.css`; GitHub replaces the file
of the same name.

GitHub Pages republishes within a minute or two. Force-refresh with `Ctrl`+`F5`, since the
browser caches CSS aggressively.

---

## Known issues

None.
