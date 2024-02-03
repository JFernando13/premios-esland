import { AlertIcon } from "~/components/icons/AlertIcon";
import { CategoryTitle } from "./CategoryTitle";
import type { TVotes } from "~/types/candidates";

interface Props {
  isChanging: boolean
  categoryName: string
  votes: TVotes
}

export function Header({ categoryName, isChanging, votes }: Props) {
  return (
    <>
      <CategoryTitle isChanging={isChanging}>
        {categoryName}
      </CategoryTitle>

      <div class="flex flex-col justify-center items-center gap-2">
        <p class="text-yellow-300 font-bold flex gap-2 items-center">
          <span class="text-xl capitalize">votos realizados</span>
          <span class="text-3xl">{votes.byCategory.length}/{votes.maxVotes}</span>
        </p>

      </div>

      {votes.hasMissingVotes && <div class={`text-red-800 capitalize font-semibold fixed bottom-8 right-14 bg-white px-6 py-4 z-10 rounded-lg flex items-center gap-3 ${votes.hasMissingVotes ? "animate-fade-down" : "animate-fade-up"}`}>
        <AlertIcon />
        faltan votos por realizar
      </div>}
    </>
  )
}