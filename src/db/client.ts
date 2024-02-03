import postgres from 'postgres';
export const sql = postgres(import.meta.env.DATABASE_URL, { ssl: 'require' });

interface Props {
  username: string
  votes: string[][]
}


export async function addVotesToDB({ username, votes }: Props) {

  const inserts = votes.map((vote, index) => {
    const category_id = (index + 1).toString()
    return vote.map((candidate_id, index) => {
      const ranking = (index + 1).toString()
      return [{ username, category_id, candidate_id, ranking }]
    })
  }).flat(2)

  try {
    const response = await sql.begin(async (transaction) => {
      for (const insert of inserts) {
        await transaction`INSERT INTO votes (username, category_id, candidate_id, ranking) VALUES ${sql(insert)}`;
      }
    });

    return response;
  } catch (error) {
    // Manejar el error aquí
    console.error('Error al agregar votos a la base de datos:', error);
    throw error; // Rechazar la promesa para que se propague el error
  }
}

export async function cleanVotes({ username }: { username: string }) {
  await sql`DELETE FROM votes WHERE username = ${username}`
}