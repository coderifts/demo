# Canary keepalive (item 1877) — do not treat as a live scheduler until a run exists

Measured 2026-09-20 against a fresh clone of `coderifts/demo` and `gh api`.

There is **no scheduled workflow on `main`**. The Actions history is five
`pull_request` runs of `.github/workflows/contract-gate.yml`, last
2026-09-03T13:08:16Z, all `conclusion: failure`. GitHub still lists that
workflow `state: active` (id 347710583) even though the file is **404 on
main**. The last copy in git is on PR branch `feat/breaking-changes-v1.5`
(sha `4b2062b`) with `on: pull_request` only — no `schedule:`.

`gh workflow enable contract-gate` will not restore a cron that was never
on default branch. The named file `.github/workflows/contract-gate.yml`
adds `schedule` + `workflow_dispatch`. After it lands on `main`, GitHub
needs at least one successful dispatch or a later cron tick before the
canary page may say "scheduled".

The 60-day inactivity disable
(https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow)
does not explain 09-03: `pushed_at` is 2026-09-06T20:42:09Z.

Keepalive once cron exists: a commit or `workflow_dispatch` inside any 60-day
window. Until then the website sentence is in the Grok report, not this file.
