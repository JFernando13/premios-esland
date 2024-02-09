import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";
import { addVotesToDB, cleanVotes } from "~/db/client";
import { sql } from "~/db/client";

export const GET: APIRoute = async () => {
  let votes: string[][] = []
  await sql`SELECT category_id, ARRAY_AGG(candidate_id) AS candidate_ids
            FROM votes
            GROUP BY category_id ORDER BY category_id::integer ASC;`
    .forEach((row) => votes.push(row.candidate_ids))

  return new Response(JSON.stringify({ votes }))
}

export const POST: APIRoute = async ({ request }) => {
  const session = await getSession(request);

  if (!session || !session.user?.name) {
    return new Response('Unauthorized', { status: 401 })
  }

  let votesToSave = []
  try {
    const { votes } = await request.json();
    votesToSave = votes
  } catch (e) {
    return new Response('Bad request', { status: 400 })
  }

  // ADD TO DATABASE
  try {
    await cleanVotes({ username: session.user?.name })
    await addVotesToDB({ username: session.user?.name, votes: votesToSave })
  } catch (e) {
    return new Response("Internal server error", { status: 500 });
  }

  return new Response("OK", { status: 200 });
}