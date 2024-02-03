import { ArrowLeftIcon } from "~/components/icons/ArrowLeftIcon.tsx";
import { ArrowRightIcon } from "~/components/icons/ArrowRightIcon.tsx";
import "./pagination.css"

interface Props {
  totalPages: number
  handleNext?: () => void
  handlePrevious?: () => void
  currentPage: number
}

export function Pagination({ totalPages, handleNext, handlePrevious, currentPage }: Props) {

  return (
    <section class="flex gap-4 items-center">
      <button
        onClick={handlePrevious}
        class={"pagination"}
      >
        <ArrowLeftIcon />
      </button>

      <p class="text-xl font-semibold items-center flex gap-2">
        <span>
          categoria
        </span>
        <span class="text-3xl font-black">
          {currentPage}/{totalPages}
        </span>
      </p>

      <button onClick={handleNext} class={"pagination"}>
        <ArrowRightIcon />
      </button>
    </section>

  )
}