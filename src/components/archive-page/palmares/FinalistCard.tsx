import type { Finalist } from "~/types/editions"

interface Props {
  position: number
  edition: number
  finalist: Finalist
}

export function FinalistCard({ position, edition, finalist }: Props) {
  return (
    <article class="flex flex-col gap-4 relative">
      <span
        class="absolute top-0 left-8 bg-white text-black rounded-b-lg px-4 py-2 text-xl font-medium flex justify-center items-center"
      >{position}º</span>
      <img
        src={`/images/editions/${edition}/palmares/desktop/${finalist.photo}.webp`}
        class="object-cover object-center rounded-lg"
        alt={finalist?.name}
      />
      <hgroup class="flex flex-col gap-2">
        <h3 class="text-xl font-bold tracking-tigh uppercase text-balance">
          {finalist.name}
        </h3>
        <p class="flex flex-col uppercase">
          <strong>comunidad: {finalist?.community}</strong>
          <strong>streamers: {finalist.streamers}</strong>
          <strong>total: {finalist.total}</strong>
        </p>
      </hgroup>
    </article>
  )
}