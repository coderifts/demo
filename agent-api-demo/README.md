# Agent API Demo — Breaking Change Detection for AI Agents

This folder demonstrates how [CodeRifts](https://coderifts.com) detects breaking API changes that affect AI agents, MCP tools, and automated workflows.

## Scenario

A payments API is consumed by AI agents via MCP tool bindings. The API maintainer introduces 5 breaking changes in a pull request:

| # | Breaking Change | Agent Risk | Impact |
|---|---|---|---|
| 1 | OAuth scope `refunds:process` removed | 🔴 CRITICAL | Agent loses refund capability — tool calls fail silently |
| 2 | `GET /webhooks` endpoint removed | 🔴 CRITICAL | Agents hardcoding `/webhooks` call a dead endpoint |
| 3 | Response field `receipt_url` removed | 🟠 HIGH | Agents reading `receipt_url` receive `undefined` |
| 4 | Required field `idempotency_key` added | 🟠 HIGH | Agents not sending this field get 422 errors |
| 5 | Enum value `refunded` removed from status | 🟡 MEDIUM | Strict agents with switch-case validation break |

## Files

| File | Description |
|---|---|
| `base-spec.yaml` | OpenAPI 3.1 spec — the current production version (v1.4.0) |
| `head-spec.yaml` | OpenAPI 3.1 spec — the PR version with breaking changes (v2.0.0) |
| `mcp-tool-manifest.json` | MCP tool manifest showing how agents bind to this API |
| `expected-output.json` | Expected CodeRifts analysis output with Agent Impact section |
| `README.md` | This file |

## Try it yourself

### Option 1: CodeRifts REST API

```bash
curl -X POST https://api.coderifts.com/api/v1/diff \
  -H "Content-Type: application/json" \
  -d '{
    "old_spec": "'"$(cat base-spec.yaml)"'",
    "new_spec": "'"$(cat head-spec.yaml)"'"
  }'
```

### Option 2: CodeRifts CLI

```bash
npx coderifts diff base-spec.yaml head-spec.yaml
```

### Option 3: GitHub Pull Request

Fork this repo, create a branch that replaces `base-spec.yaml` with `head-spec.yaml`, and open a PR. The CodeRifts GitHub App will automatically post a comment with the Agent Impact section.

## What CodeRifts detects

CodeRifts analyzes the diff between the two specs and generates:

1. **Breaking changes table** — every incompatible change with severity
2. **Agent Impact section** — maps each breaking change to agent-specific consequences
3. **Risk score** — 0–100 composite score across 4 dimensions
4. **MCP tool impact** — which tools in the manifest are affected and why

## Learn more

- [Agent Compatibility](https://coderifts.com/agents/) — how CodeRifts protects AI agent workflows
- [OpenAPI Breaking Changes](https://coderifts.com/openapi-breaking-changes/) — full reference
- [REST API](https://coderifts.com/integrations/api/) — API documentation
- [CLI](https://coderifts.com/integrations/cli/) — command-line usage
