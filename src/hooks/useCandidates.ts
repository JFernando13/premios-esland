import { useEffect, useState } from "preact/hooks"
import type { TCandidatesByCategory } from "~/types/candidates"

const totalPages = 12
const maxVotes = 4

export function useCandidates() {
  const [currentPage, setCurrentPage] = useState(1)
  const [candidatesByCategory, setCandidatesByCategory] = useState<TCandidatesByCategory>()
  const [isChanging, setIsChanging] = useState(false)
  const [votes, setVotes] = useState<string[][]>(Array.from({ length: totalPages }, () => []))


  useEffect(() => {
    setIsChanging(true)
    async function fetchCandidates() {
      const res = await fetch(`/api/candidates.json?category=${currentPage - 1}`)
      const data = await res.json()

      setCandidatesByCategory(data)
    }

    fetchCandidates()

    setTimeout(() => setIsChanging(false), 1125)
  }, [currentPage])

  const handleNext = () => {
    if (currentPage >= totalPages) {
      return setCurrentPage(1)
    }

    setCurrentPage(currentPage + 1)
  }

  const handlePrevious = () => {
    if (currentPage <= 1) {
      return setCurrentPage(totalPages)
    }
    setCurrentPage(currentPage - 1)
  }

  const handleVote = ({ candidateID }: { candidateID: string }) => {

    const voteCategory = votes[currentPage - 1]

    if (voteCategory.includes(candidateID)) {
      const deletedVote = voteCategory.filter((vote) => vote !== candidateID)
      return setVotes(prev => prev.with(currentPage - 1, deletedVote))
    }

    if (voteCategory.length < 4) {
      return setVotes(prev => prev.with(currentPage - 1, [...voteCategory, candidateID]))
    }
  }

  return {
    handlePage: {
      next: handleNext,
      previous: handlePrevious,
    },
    page: {
      current: currentPage,
      total: totalPages
    },
    candidatesByCategory,
    isChanging,
    handleVote,
    voteCategory: votes[currentPage - 1],
    maxVotes

  }
}