import { useState } from "preact/hooks"

const totalPages = 12

interface Props {
  handleMissingVotes: () => boolean,
}

export function usePagination({ handleMissingVotes }: Props) {
  const [currentPage, setCurrentPage] = useState(1)

  const handleNext = () => {
    if (currentPage >= totalPages) {
      const missing = handleMissingVotes()

      if (!missing) {
        setCurrentPage(13)
      }

      return
    }

    setCurrentPage(currentPage + 1)
  }

  const handlePrevious = () => {
    if (currentPage <= 1) {
      return setCurrentPage(totalPages)
    }

    setCurrentPage(currentPage - 1)
  }

  const goToSpecificPage = (page: number) => {
    if (page > totalPages) return
    setCurrentPage(page)
  }


  return {
    handlePage: {
      next: handleNext,
      previous: handlePrevious,
      goToSpecificPage
    },
    page: {
      current: currentPage,
      total: totalPages
    }
  }
}