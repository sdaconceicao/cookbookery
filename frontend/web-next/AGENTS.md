# Frontend Instructions

This package is the replacement Cookbookery frontend: TanStack Start, React 19,
TypeScript, Vite, Vitest, Biome, and Lago.

## UI

- Prefer `@code-x/lago` components and tokens over local primitives.
- Verify Lago component APIs in its Storybook or configured MCP before using them.
- Use React Aria semantics and accessible names for interactive controls.
- Keep global styles in `src/styles`; colocate component-specific CSS Modules.
- Do not recreate behavior already supplied by Lago.

## Routes and data

- Use TanStack file-based routes under `src/routes`.
- Prefix colocated non-route files with `-`.
- Treat `src/routeTree.gen.ts` as generated output.
- Keep API access behind typed functions rather than embedding requests in views.
- The local API listens on port 6001.

## Quality

- Colocate Vitest tests with their source.
- Prefer Testing Library queries by role or label.
- Run `pnpm --filter cookbookery-web-next check`, `typecheck`,
  `test:coverage`, and `build` before handing off.
