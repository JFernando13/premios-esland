import type { APIRoute } from "astro";
import candidatesByCategory from "~/data/candidates.json";

export const GET: APIRoute = ({ url }) => {
  const category = Number(url.searchParams.get("category") ?? "0");

  const candidates = candidatesByCategory[category];

  return new Response(JSON.stringify(candidates));
}