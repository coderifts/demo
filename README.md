# CodeRifts Demo

This repository is a **live enforcement boundary**, not a screenshot. Everything below is a link to
a run you can open.

## What this repo demonstrates

Three behaviours, each with the run that proves it.

**1 · Without a grant, the required check is red.**
[PR #4](https://github.com/coderifts/demo/pull/4) changes `api/openapi.yaml` in a way the policy
refuses. The check `CodeRifts / contract-gate` **fails**, and because it is a *required* status
check on `main`, the PR cannot merge.

> **BLOCK — 6 breaking changes · required check red until a grant exists**

**2 · A change the policy allows goes green.**
[PR #22](https://github.com/coderifts/demo/pull/22) edits `.coderifts.yml` only. Same repository,
same required check, **all checks pass** — merged 2026-09-23. A gate that refuses everything proves
nothing; this is the other half.

**3 · The owner's own push is rejected.**
`main` is governed by the `coderifts-enforcement` ruleset (`enforcement: active`, **zero bypass
actors**), and the required check is bound to app id `2860592` — not merely to a context *name*
that any repository writer could post. A direct `git push` to `main` by the repository owner is
refused by GitHub before CodeRifts is consulted at all.

### The negative control

Commit `9b8701c` — `chore: probe [skip coderifts]` — exists on purpose. It is the test that the
skip marker does **not** open a hole: skipping the analysis does not make the required check pass,
because a *skipped* required check and a *successful* one are different states to the ruleset.

## What this repo does not demonstrate

- **It is one repository, with one policy.** The verdicts here follow `.coderifts.yml` in this
  repo; another repository with another policy gets another answer to the same diff.
- **No dollar figure is produced.** This repo deliberately carries **no `cost:` section**
  (removed 2026-09-23, [PR #22](https://github.com/coderifts/demo/pull/22)), and CodeRifts does not
  supply one on your behalf — a cost estimate nobody configured is a guess wearing your team's name.
  Older PR comments still showing an exposure figure were written before that change.
- **Merge enforcement is not deploy or runtime enforcement.** What is demonstrated here is the
  merge boundary. See the
  [platform truth table](https://coderifts.com/docs/platform-truth-table/) for what each path
  actually does.

## Try it on your own repository

1. [Install CodeRifts](https://github.com/apps/coderifts) — free, zero config
2. Open a PR that changes an OpenAPI, GraphQL, protobuf, AsyncAPI or MCP contract file
3. Read the decision in the PR comment, and verify its receipt offline

Every verdict is signed (Ed25519) and verifiable without trusting us:
[receipt-verifier](https://github.com/coderifts/receipt-verifier).

## Where it runs

| Platform | How |
|---|---|
| GitHub App | Zero-config, one-click install |
| GitHub Actions | `uses: coderifts/contract-gate@<sha>` — pin by commit SHA, not by tag |
| GitLab CI | CI/CD Catalog component (beta — REST fallback available) |
| Bitbucket Pipelines | Docker pipe (beta — REST fallback available) |
| REST API | Bearer token, any CI/CD system |
| CLI | `npx coderifts diff` |

Full integration docs: [coderifts.com/integrations/](https://coderifts.com/integrations/)

## Links

- [Website](https://coderifts.com)
- [Integrations](https://coderifts.com/integrations/)
- [Documentation](https://coderifts.com/docs/)
- [Pricing](https://coderifts.com/pricing/)
