# Cookbookery

## Details

A web based recipe directory. Built with React / Express

## Dev Requires

1. [Node 24](https://nodejs.org/en/download/)

## Setup

1. `npm install`
2. `npm run bootstrap`
3. `cp packages/web/.env.example packages/web/.env`
4. Complete the [API setup](packages/api/README.md).

## Startup

- `npx lerna run start` — Run against the local API
- `npx lerna run start:mocks` — Run against the mock API

## Testing

- `npx lerna run test:watch`
