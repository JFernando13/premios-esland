import { CameraIcon } from "~/components/icons/CameraIcon"
import type { TCandidateVote } from "~/types/candidates"

interface Props {
  candidate: TCandidateVote,
  isChanging: boolean,
  index: number,
  handleVote: ({ candidateID }: { candidateID: string }) => void
  voteIndex: number
}

export function Candidate({ candidate, isChanging, index, handleVote, voteIndex }: Props) {

  const delay = (index * 80) + "ms"

  const isVoted = voteIndex > 0

  return (
    <article
      class={`${isVoted ? 'bg-yellow-500 text-white' : 'bg-[#1682c7] hover:bg-sky-400 text-white'} h-full flex flex-col p-1 gap-1 rounded-md md:hover:scale-105 transition-all shadow-md shadow-black/20 ${isChanging ? "animate-fade-up" : ""} group`}
      style={{ animationDelay: delay }}
      onClick={() => handleVote({ candidateID: candidate.id })}
    >
      <picture class="flex-1 h-full flex flex-col gap-1 relative">
        <div class="flex justify-between z-10 items-center px-2 py-1">
          {voteIndex > 0 && <span class="rounded-full grid place-content-center w-6 h-6 text-sm font-bold bg-yellow-500">{voteIndex}</span>}
          <a
            href={candidate.link ?? ""}
            target="_blank"
            class="p-1 bg-white text-black rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors"
          >
            <CameraIcon />
          </a>
        </div>
        <img
          src={`/images/candidates/${candidate.image}`}
          alt={candidate.name}
          class="w-full h-full rounded-md object-cover object-center bg-blue-600 absolute top-0 mix-blend-luminosity group-hover:mix-blend-normal transition-all"
        />
      </picture>
      <h2 class="self-center text-xs font-semibold">{candidate.name}</h2>
    </article>
  )
}