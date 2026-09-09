# Cookbookery API

## Details

Rest API for Cookbookery app. Built with Express.

## Dev Requires

1. [Node 24](https://nodejs.org/en/download/)
2. [Docker Desktop](https://docs.docker.com/desktop/) or Docker Engine with Compose

## Setup

Run these commands from the repository root:

1. `npm install`
2. `npm run bootstrap`
3. `cd packages/api`
4. `cp .env.example .env`
5. `docker compose up -d postgres`
6. `npm run db:setup`

The Compose file in this package runs PostgreSQL 16 and enables the required `citext`
extension when its data volume is first created.

## Database

- `docker compose up -d postgres` — Start PostgreSQL
- `docker compose ps` — Check database status
- `docker compose down` — Stop PostgreSQL and preserve its data
- `docker compose down -v` — Delete the local database and start fresh

## Startup

`npm start`
