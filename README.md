# Cookbookery

A web-based recipe directory with an Express API and a frontend currently being
rebuilt with TanStack Start and Lago.

## Requirements

- Node 24
- pnpm 11 through Corepack
- Docker Desktop or Docker Engine with Compose

## Install

```sh
corepack pnpm install
```

## Local development

Prepare PostgreSQL and the API:

```sh
cp packages/api/.env.example packages/api/.env
pnpm --filter cookbookery-api docker:up
pnpm --filter cookbookery-api db:setup
```

Run the API and replacement frontend in separate terminals:

```sh
pnpm dev:api
pnpm dev:web
```

- API: `http://localhost:6001`
- Replacement frontend: `http://localhost:3003`

The replacement frontend is currently a foundation shell; recipe features will
move from the legacy frontend in vertical slices.

## Quality checks

```sh
pnpm ci
```

This runs Biome, TypeScript, Vitest coverage, and production builds.

## Legacy clients

The existing web and mobile clients remain migration references. To run the
legacy web client, copy `packages/web/.env.example` to `packages/web/.env`, then
run `pnpm --filter cookbookery-web start`.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [API and database setup](packages/api/README.md)
- [Replacement frontend](packages/web-next/README.md)
