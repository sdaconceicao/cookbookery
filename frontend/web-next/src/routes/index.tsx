import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

export function HomePage() {
  return (
    <main className="appShell">
      <section className="foundationCard">
        <span className="eyebrow">Frontend foundation</span>
        <h1>Cookbookery</h1>
        <p>Recipes are moving into a modern TanStack Start and Lago experience.</p>
      </section>
    </main>
  );
}
