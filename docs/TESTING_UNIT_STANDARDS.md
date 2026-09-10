# Unit Testing Standards

## Scope

New frontend unit tests use Vitest, jsdom, and React Testing Library.

## Practices

- Test observable behavior rather than component internals.
- Prefer role and label queries; use test IDs only when semantics cannot express
  the target.
- Cover meaningful happy paths, boundaries, empty states, and failures.
- Keep tests deterministic and independent.
- Extract data transformations into pure functions and test them directly.
- Do not add snapshots when focused assertions communicate intent better.
- Under `src/routes`, prefix colocated tests with `-` so TanStack ignores them.

## Coverage

The configured baseline is 90% for lines, statements, and functions, and 80%
for branches. Treat coverage as a backstop, not a substitute for behavioral
assertions.

Run:

```sh
pnpm --filter cookbookery-web-next test
pnpm --filter cookbookery-web-next test:coverage
```
