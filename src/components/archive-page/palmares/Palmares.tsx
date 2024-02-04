import { useEffect, useState } from "preact/hooks";
import { FinalistCard } from "./FinalistCard.tsx";
import { Winners } from "./Winners.tsx";
import type { FinalistOld } from "~/types/editions";
import { transformData } from "~/utils/editions";
import editions from "~/data/editions.json";
import styles from "./palmares.module.css"
import { Section } from "../shared/Section.tsx";

interface Props {
  edition: number
}

export function Palamares({ edition }: Props) {
  const [categorySelected, setCategorySelected] = useState("Streamer del año")
  const [isChange, setIsChange] = useState(false)

  const editionInfo = editions[edition].info

  const twoFinalists = transformData(
    editions[edition].info.find(
      (info) => info.categoria === categorySelected,
    ) as FinalistOld,
  );

  const handleCategorySelected = (category: string) => {
    setCategorySelected(category)
    setIsChange(true)
  }

  useEffect(() => {
    categorySelected && setTimeout(() => {
      setIsChange(false)
    }, 1800)
  }, [categorySelected])

  return (
    <Section
      title="palmarés"
      size="medium"
    >
      <section class={"flex gap-12"}>
        <Winners
          winners={editionInfo as FinalistOld[]}
          handleCategorySelected={handleCategorySelected}
          categorySelected={categorySelected}
        />

        <article class={`flex gap-4 items-end ${isChange ? styles.animationFail : ""}`}>
          <FinalistCard
            position={1}
            edition={edition + 1}
            finalist={twoFinalists.first}
          />
          <FinalistCard
            position={2}
            edition={edition + 1}
            finalist={twoFinalists.second}
          />
        </article>
      </section>
    </Section >
  )
}