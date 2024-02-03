import type { TCandidate, TCandidatesByCategory, TVotes } from "~/types/candidates"
import { Candidate } from "./Candidate"

interface Props {
  isChanging: boolean
  candidates: TCandidate[],
  votes: TVotes
}

export function Candidates({ candidates, isChanging, votes }: Props) {
  return (
    <section class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 xl:auto-rows-[175px] auto-rows-[300px] gap-2">
      {
        candidates?.map((candidate, index) => {
          const voteIndex = votes.byCategory?.indexOf(candidate.id) ?? -1
          return ((
            <Candidate
              candidate={candidate}
              isChanging={isChanging}
              index={index}
              handleVote={votes.handleVote}
              voteIndex={voteIndex + 1}
            />
          ))
        })
      }
    </section>
  )
}