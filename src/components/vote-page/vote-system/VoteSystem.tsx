import type { TUser } from "~/types/session"
import { VoteFinal } from "./VoteFinal"
import { Header } from "./header/Header"
import { Candidates } from "./candidates/Candidates"
import { Footer } from "./footer/Footer"
import { useVoteSystem } from "src/hooks/useVoteSystem"

interface Props {
  user: TUser | null
}

export function VoteSystem({ user }: Props) {
  const {
    votes,
    candidates: { candidatesByCategory, isChanging },
    pagination: { page, handlePage }
  } = useVoteSystem()

  return (
    <main class="max-w-7xl w-full mx-auto mt-28 mb-28 flex flex-col gap-8 px-4">
      {
        page.current > page.total
          ? <VoteFinal
            previousPage={handlePage.previous}
            allVotes={votes.all}
            goToSpecificPage={handlePage.goToSpecificPage}
          />
          : (
            <>
              <Header
                votes={votes}
                categoryName={candidatesByCategory?.categoryName ?? ""}
                isChanging={isChanging}
              />

              <Candidates
                candidates={candidatesByCategory?.candidates ?? []}
                isChanging={isChanging}
                votes={votes}
              />

              <Footer
                user={user ?? {} as TUser}
                page={page}
                handlePage={handlePage} />
            </>
          )
      }
    </main>
  )
}