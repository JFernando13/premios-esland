import { useState, useEffect } from "preact/hooks"
import { useCandidates } from "./useCandidates"
import { usePagination } from "./usePagination"

const totalPages = 12
const maxVotes = 4

let initialVotes = Array.from({ length: totalPages }, () => [])

export function useVoteSystem() {
  const [votesAllCategories, setVotesAllCategories] = useState<string[][]>(initialVotes)
  const [hasMissingVotes, setHasMissingVotes] = useState<boolean | null>(null)

  useEffect(() => {
    const getVotes = async () => {
      const res = await fetch(`/api/votes`)
      const data = await res.json()

      setVotesAllCategories(data.votes)
    }

    getVotes()
  }, [])

  const handleMissingVotes = () => {
    const hasMissing = votesAllCategories.some(voteCategory => voteCategory.length !== maxVotes)
    setHasMissingVotes(hasMissing)
    setTimeout(() => setHasMissingVotes(null), 5000)

    return hasMissing
  }

  const { page, handlePage } = usePagination({ handleMissingVotes })
  const candidates = useCandidates({ currentPage: page.current })

  const handleVote = ({ candidateID }: { candidateID: string }) => {
    const voteCategory = votesAllCategories[page.current - 1]

    if (voteCategory.includes(candidateID)) {
      const deletedVote = voteCategory.filter((vote) => vote !== candidateID)
      return setVotesAllCategories(prev => prev.with(page.current - 1, deletedVote))
    }

    if (voteCategory.length < 4) {
      return setVotesAllCategories(prev => {
        const newVotes = prev.with(page.current - 1, [...voteCategory, candidateID])
        newVotes.every(voteCategory => voteCategory.length === maxVotes) && setHasMissingVotes(false)

        return newVotes
      })
    }
  }

  return {
    votes: {
      all: votesAllCategories,
      hasMissingVotes,
      byCategory: votesAllCategories[page.current - 1],
      maxVotes,
      handleVote,
      handleMissingVotes
    },
    pagination: {
      page,
      handlePage
    },
    candidates
  }
}