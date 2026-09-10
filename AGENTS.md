# Repository Instructions

## Repository

Cookbookery is a Node 24, pnpm 11 workspace.

- `packages/api` owns the Express API, PostgreSQL schema, Docker Compose, and DB setup.
- `packages/web-next` is the replacement TanStack Start frontend.
- `packages/web`, `packages/mobile`, and `packages/shared` are legacy migration sources.

See `docs/ARCHITECTURE.md` for boundaries and data flow.

## Before changing code

1. Read this file and the nearest package-level `AGENTS.md`.
2. Inspect an existing implementation before adding a new pattern.
3. Keep database concerns in `packages/api`.
4. Prefer the replacement frontend for new UI work.

## Commands

- `pnpm install` — install the workspace.
- `pnpm dev:api` — run the API on port 6001.
- `pnpm dev:web` — run the replacement frontend on port 3003.
- `pnpm ci` — run every required local CI gate.

## Guardrails

- Use workspace dependencies instead of relative package installs.
- Do not edit generated files such as `packages/web-next/src/routeTree.gen.ts`.
- Keep changes scoped; do not modernize legacy packages incidentally.
- Preserve API response contracts while routes move to the new frontend.

## Standards

- `docs/TESTING_UNIT_STANDARDS.md`
- `docs/GITHUB_ACTIONS.md`
