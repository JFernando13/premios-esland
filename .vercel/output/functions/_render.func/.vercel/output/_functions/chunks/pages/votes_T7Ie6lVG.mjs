import { g as getSession } from './__0Z619rc3.mjs';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL, {
  ssl: "require"
});
async function addVotesToDB({
  username,
  votes
}) {
  const inserts = votes.map((vote, index) => {
    const category_id = (index + 1).toString();
    return vote.map((candidate_id, index2) => {
      const ranking = (index2 + 1).toString();
      return [{
        username,
        category_id,
        candidate_id,
        ranking
      }];
    });
  }).flat(2);
  try {
    const response = await sql.begin(async (transaction) => {
      for (const insert of inserts) {
        await transaction`INSERT INTO votes (username, category_id, candidate_id, ranking) VALUES ${sql(insert)}`;
      }
    });
    return response;
  } catch (error) {
    console.error("Error al agregar votos a la base de datos:", error);
    throw error;
  }
}
async function cleanVotes({
  username
}) {
  await sql`DELETE FROM votes WHERE username = ${username}`;
}

const GET = async () => {
  let votes = [];
  await sql`SELECT category_id, ARRAY_AGG(candidate_id) AS candidate_ids
            FROM votes
            GROUP BY category_id ORDER BY category_id::integer ASC;`.forEach((row) => votes.push(row.candidate_ids));
  return new Response(JSON.stringify({
    votes
  }));
};
const POST = async ({
  request
}) => {
  const session = await getSession(request);
  if (!session || !session.user?.name) {
    return new Response("Unauthorized", {
      status: 401
    });
  }
  let votesToSave = [];
  try {
    const {
      votes
    } = await request.json();
    votesToSave = votes;
  } catch (e) {
    return new Response("Bad request", {
      status: 400
    });
  }
  try {
    await cleanVotes({
      username: session.user?.name
    });
    await addVotesToDB({
      username: session.user?.name,
      votes: votesToSave
    });
  } catch (e) {
    return new Response("Internal server error", {
      status: 500
    });
  }
  return new Response("OK", {
    status: 200
  });
};

export { GET, POST };
