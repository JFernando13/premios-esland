import { useEffect, useState } from "preact/hooks"
import type { TCandidatesByCategory } from "~/types/candidates"

interface Props {
  currentPage: number
}

export function useCandidates({ currentPage }: Props) {
  const [candidatesByCategory, setCandidatesByCategory] = useState<TCandidatesByCategory>({} as TCandidatesByCategory)
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    setIsChanging(true)

    async function fetchCandidates() {
      const res = await fetch(`/api/candidates.json?category=${currentPage - 1}`)
      const data = await res.json()

      setCandidatesByCategory(data)
    }

    fetchCandidates()

    setTimeout(() => setIsChanging(false), 1500)
  }, [currentPage])

  return {
    candidatesByCategory,
    isChanging
  }
}