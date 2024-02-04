import type { JSX } from "astro/jsx-runtime"

interface Props {
  title: string
  size: "medium" | "full"
  children: JSX.Element
}
export function Section({ children, title, size }: Props) {
  return (
    <section
      class={`
        flex flex-col gap-10 lg:gap-20
        ${size === "medium" ? "max-w-6xl mx-auto" : ""}
        ${size === "full" ? "w-full items-center" : ""}
      `}
    >
      <h2 class="text-4xl md:text-6xl uppercase font-tomaso text-center">
        {title}
      </h2>

      {children}
    </section>

  )
}