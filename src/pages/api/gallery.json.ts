import type { APIRoute } from "astro";
import gallery from "~/data/gallery.json";

export const GET: APIRoute = async ({ url }) => {
  const searchParams = url.searchParams;

  const edition = Number(searchParams.get("edition") ?? "1");
  const offset = Number(searchParams.get("offset") ?? "0");

  const remainingPhotos = gallery[edition].slice(offset);

  return new Response(JSON.stringify({ remainingPhotos, offset, edition }));
};