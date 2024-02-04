import type { FinalistOld } from "~/types/editions"
import styles from "./winners.module.css"

interface Props {
  winners: FinalistOld[]
  handleCategorySelected: (category: string) => void
  categorySelected: string
}

export function Winners({ winners, handleCategorySelected, categorySelected }: Props) {
  return (
    <article class="flex flex-col gap-2 flex-1 min-w-80 xl:max-w-[350px] w-full">
      {
        winners.map((winner) => (
          <button class={`odd:bg-gradient-to-r odd:from-blue-600 odd:to-sky-400/45 bg-gradient-to-r from-gray-700 to-blue-900 flex justify-between px-4 py-0.5 rounded-sm items-center ${styles.winners} ${winner.categoria === categorySelected && styles.selected}`}
            onClick={() => handleCategorySelected(winner.categoria)}
          >
            <span class="text-sm">{winner.categoria}</span>
            <span class="text-xs font-bold">{winner.ganador}</span>
          </button>
        ))
      }
    </article>
  )
}