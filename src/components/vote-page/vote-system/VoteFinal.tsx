import type { TCandidate } from "~/types/candidates"
import allCategories from "~/data/candidates.json"
import { useState } from "preact/hooks"

interface Props {
  previousPage: () => void,
  allVotes: string[][],
  goToSpecificPage: (page: number) => void
}

export function VoteFinal({ previousPage, allVotes, goToSpecificPage }: Props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/votes", {
        method: "POST",
        body: JSON.stringify({ votes: allVotes }),
      })

      if (!res.ok) {
        return setError(true)
      }

      previousPage()
      setError(false)
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  if (error) {
    return (
      <p class={"first-letter:uppercase text-3xl lg:text-5xl font-semibold tracking-wide text-balance text-center"}>
        Hubo un error al conectarse con la base datos. Por favor vuelva a intentarlo.
      </p>
    )
  }

  return (
    <>
      <h1 class={"first-letter:uppercase text-3xl lg:text-5xl font-semibold tracking-wide text-balance text-center"}>
        tus votos finales
      </h1>

      <section class={"grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2"}>
        {
          allCategories.map((category, index) => {
            const voteCategory = allVotes[index]

            const votes = category.candidates.flatMap(candidate => {
              return voteCategory.includes(candidate.id) && candidate
            })

            const isCandidate = (candidate: TCandidate | boolean): candidate is TCandidate => {
              return candidate && typeof candidate === 'object';
            };

            const candidatesVoted = votes.filter(isCandidate);

            return (
              <article class={`bg-[#1682c7] hover:scale-105 hover:bg-[#54beff] transition-all flex flex-col items-center justify-center text-center h-44 ${loading && "opacity-55"}`} onClick={() => !loading && goToSpecificPage(index + 1)}>

                <picture class={"flex-1 grid grid-cols-2 h-full w-full"}>
                  {
                    candidatesVoted.map(candidate => {
                      return <img src={`/images/candidates/${candidate.image}`} alt={candidate.name} class={"h-full object-cover object-center"} />
                    })
                  }
                </picture>

                <h2 class={"h-[30%] flex justify-center items-center font-semibold"}>{category.categoryName}</h2>
              </article>
            )
          })
        }
      </section>

      <button
        class={"text-xl lg:text-2xl font-medium px-5 py-3 rounded-full uppercase text-blue-950 animate-fade-up bg-white hover:scale-125 hover:bg-yellow-300 hover:border-yellow-400 transition w-max self-center"}
        onClick={handleSubmit}
      >
        {loading ? "enviando votos..." : "enviar mis votos"}
      </button>

      <button onClick={() => !loading && previousPage} class={`hover:underline transition-all duration-1000 ${loading && "opacity-50"}`}>
        Editar mis votos
      </button>
    </>
  )
}