# Cookbookery

## Details

A web based recipe directory. Built with React / Express

## Dev Requires

1. [Node 6+](https://nodejs.org/en/download/)

## Setup

1. lerna boostrap
2. Copy .env.example files in api/web folders, and rename to .env. See each README.md for details
3. For local development against the api, postgres must be setup. See api README.md for details

## Startup

- lerna run start - Run against local api, requires postgres db
- lerna run start:mocks - Run against mock api

## Testing

- lerna run test:watch
