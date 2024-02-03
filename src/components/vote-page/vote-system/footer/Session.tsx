import { type TUser } from "~/types/session"

interface Props {
  user: TUser
}
export function Session({ user }: Props) {
  return (
    <section class="flex gap-4 flex-1">
      <img
        src={user.image ?? ""}
        alt={`Imagen de foto de perfil de ${user.name}`}
        class="w-12 h-12 rounded-full object-cover object-center"
      />
      <article class="flex flex-col gap-2justify-start">
        <h2 class="text-primary font-bold text-xl">
          {user.name}
        </h2>
        <button class="hover:underline text-sm self-start capitalize" id="logout">
          cerrar sección
        </button>
      </article>
    </section>
  )
}