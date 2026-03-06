# CodeRifts Demo

This repository demonstrates [CodeRifts](https://coderifts.com) — an API contract enforcement engine that catches breaking changes on every pull request. Works with GitHub, GitLab, Bitbucket, and any CI/CD pipeline.

## See It in Action

**[View the Demo PR →](https://github.com/coderifts/demo/pull/1)**

The PR contains an OpenAPI schema change that triggers a full governance report: risk score, breaking change detection, security analysis, auto-changelog, and migration cost estimate.

## Try It Yourself

1. **[Install CodeRifts](https://github.com/apps/coderifts)** on your own repos — free, zero config
2. Open a PR that modifies an OpenAPI schema
3. See the governance report posted as a PR comment

## Works Everywhere You Code

| Platform | How |
|---|---|
| GitHub App | Zero-config, one-click install |
| GitHub Actions | `uses: coderifts/action@v1` |
| GitLab CI | CI/CD Catalog component |
| Bitbucket Pipelines | Docker pipe |
| REST API | Bearer token, any CI/CD system |
| CLI | `npx coderifts diff` |

Full integration docs: [coderifts.com/integrations/](https://coderifts.com/integrations/)

## Links

- [Website](https://coderifts.com)
- [Integrations](https://coderifts.com/integrations/)
- [Documentation](https://coderifts.com/docs/)
- [Pricing](https://coderifts.com/pricing/)
