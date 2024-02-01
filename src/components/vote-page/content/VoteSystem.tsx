
import type { TUser } from "~/types/session"
import { Pagination } from "../footer/Pagination"
import { Candidate } from "../candidates/Candidate"
import { Session } from "../footer/Session"
import { useCandidates } from "src/hooks/useCandidates"
import { CategoryTitle } from "../candidates/CategoryTitle"

interface Props {
  user: TUser
}

export function VoteSystem({ user }: Props) {
  const { candidatesByCategory, handlePage, page, isChanging, handleVote, voteCategory, maxVotes } = useCandidates()

  return (
    <main class="max-w-7xl w-full mx-auto mt-28 mb-28 flex flex-col gap-8 px-4">
      <CategoryTitle isChanging={isChanging}>
        {candidatesByCategory?.categoryName}
      </CategoryTitle>

      <div class="flex justify-center">
        <p class="text-yellow-300 font-bold flex gap-2 items-center">
          <span class="text-xl capitalize">votos realizados</span>
          <span class="text-3xl">{voteCategory.length}/{maxVotes}</span>
        </p>
      </div>

      <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 xl:auto-rows-[175px] auto-rows-[300px] gap-2">
        {
          candidatesByCategory?.candidates.map((candidate, index) => {
            const voteIndex = voteCategory?.indexOf(candidate.id) ?? -1
            return ((
              <Candidate candidate={candidate} isChanging={isChanging} index={index} handleVote={handleVote} voteIndex={voteIndex + 1} />
            ))
          })
        }
      </section>

      <footer
        class="flex justify-between gap-4 bg-black/50 backdrop-blur-xl px-8 py-4 items-center rounded"
      >
        <Session user={user} />
        <Pagination handleNext={handlePage.next} handlePrevious={handlePage.previous} currentPage={page.current} totalPages={page.total} />
      </footer>
    </main>

  )
}