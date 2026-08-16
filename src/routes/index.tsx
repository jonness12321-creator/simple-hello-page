import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hello" },
      { name: "description", content: "A simple page that says Hello." },
      { property: "og:title", content: "Hello" },
      { property: "og:description", content: "A simple page that says Hello." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="text-4xl font-semibold text-foreground">Hello</h1>
    </div>
  );
}
