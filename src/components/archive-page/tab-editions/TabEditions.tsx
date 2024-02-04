interface Props {
  handleEdition: (edition: number) => void,
  edition: number,
}

export function TabEditions({ handleEdition, edition: currentEdition }: Props) {
  const activeColor = "bg-sky-400"
  const inactiveColor = "bg-blue-900"

  const btnActive = (edition: number) => {
    return edition === currentEdition ? `${activeColor} flex-1 text-2xl` : `${inactiveColor} flex-0 text-sm`
  }

  return (
    <article
      class="flex gap-2 max-w-[1024px] mx-auto w-full"
    >
      <button
        class={`${btnActive(0)} capitalize py-4 rounded-lg font-semibold transition-all duration-500 px-4 text-nowrap`}
        onClick={() => handleEdition(0)}>
        1ra edición
      </button>
      <button
        class={`${btnActive(1)} capitalize py-4 rounded-lg font-semibold hover:opacity-60 transition-all duration-500 px-4 text-nowrap`}
        onClick={() => handleEdition(1)}>
        2da edición
      </button>
    </article>
  )
}