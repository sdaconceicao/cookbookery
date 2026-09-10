# Cookbookery Frontend

Replacement frontend built with TanStack Start, React 19, Lago, TypeScript,
Vite, Vitest, and Biome.

## Development

From the repository root:

```sh
corepack pnpm install
pnpm dev:web
```

The frontend listens on `http://localhost:3003`. The local API listens on
`http://localhost:6001`.

This package currently provides the tested application foundation. Recipe
features have not yet been migrated from `packages/web`.

## Commands

```sh
pnpm --filter cookbookery-web-next check
pnpm --filter cookbookery-web-next typecheck
pnpm --filter cookbookery-web-next test
pnpm --filter cookbookery-web-next test:coverage
pnpm --filter cookbookery-web-next build
```

## UI development

Prefer components and tokens from
[Lago Storybook](https://main--6a4eb38660443c1eee94713d.chromatic.com/).
Verify component APIs before use and keep local components focused on
Cookbookery-specific composition.
