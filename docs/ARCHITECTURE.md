# System Architecture

## Repository shape

Cookbookery is a pnpm workspace running on Node 24.

- `packages/api` — Express and Sequelize API; owns PostgreSQL and Docker assets.
- `packages/web-next` — replacement TanStack Start and Lago frontend.
- `packages/web` — legacy React/Webpack frontend used as a migration reference.
- `packages/mobile` — legacy React Native client.
- `packages/shared` — legacy shared API client and models.

## Runtime flow

```text
Browser
  -> TanStack Start frontend (localhost:3003)
  -> Express API (localhost:6001)
  -> PostgreSQL (Docker Compose in packages/api)
```

The frontend does not connect directly to PostgreSQL. The API package owns
database configuration, initialization, migrations, and local containers.

## Frontend migration

Build new routes in `packages/web-next` and move behavior in vertical slices.
Use the legacy web package to understand behavior, not as a dependency of the
new frontend. Prefer Lago for reusable UI and preserve API contracts while
screens migrate.

TanStack generates `packages/web-next/src/routeTree.gen.ts`; edit route source
files instead.

## Tooling and gates

- pnpm 11 manages the workspace and lockfile.
- Biome checks the replacement frontend.
- TypeScript runs in strict mode.
- Vitest and Testing Library cover frontend behavior.
- Vite builds TanStack Start's client and server output.
- GitHub Actions runs quality, types, tests, and build jobs on Node 24.
