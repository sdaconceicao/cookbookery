# Cookbookery API

Express and Sequelize API for Cookbookery. This package owns PostgreSQL,
Docker Compose, database initialization, and API runtime configuration.

## Requirements

- Node 24
- pnpm 11 through Corepack
- Docker Desktop or Docker Engine with Compose

## Setup

Run from the repository root:

```sh
corepack pnpm install
cp packages/api/.env.example packages/api/.env
pnpm --filter cookbookery-api docker:up
pnpm --filter cookbookery-api db:setup
```

The package Compose file runs PostgreSQL 16 and enables the required `citext`
extension when its data volume is first created.

## Database commands

```sh
pnpm --filter cookbookery-api docker:up
pnpm --filter cookbookery-api docker:ps
pnpm --filter cookbookery-api docker:logs
pnpm --filter cookbookery-api docker:exec
pnpm --filter cookbookery-api docker:down
```

To remove the local database volume, run
`pnpm --filter cookbookery-api docker:down -- -v`.

## Startup

From the repository root:

```sh
pnpm dev:api
```

The API listens on `http://localhost:6001`.
