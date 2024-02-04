import { useState } from "preact/hooks"
import { TabEditions } from "./tab-editions/TabEditions.tsx"
import { Palamares } from "./palmares/Palmares.tsx"
import { Gallery } from "./gallery/Gallery.tsx"
import { Section } from "./shared/Section.tsx"

import editions from "~/data/editions.json"

import "./main.css"

export function Main() {
  const [edition, setEdition] = useState(0)

  const handleEdition = (edition: number) => {
    setEdition(edition)
  }

  const metrics = editions[edition].metrics

  return (
    <>
      <TabEditions handleEdition={handleEdition} edition={edition} />

      <Palamares edition={edition} />

      <Gallery edition={edition} />

      <Section title="los esland en numeros" size="medium">
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-y-10" id="metrics">
          <hgroup class="flex flex-col justify-center items-center">
            <p class={`counter numberMetric`}>{metrics.views}</p>
            <h3 class={"titleMetric"}>de visualizaciones</h3>
          </hgroup>
          <hgroup class="flex flex-col justify-center items-center">
            <p class={`counter numberMetric`}>{metrics.news}</p>
            <h3 class={"titleMetric"}>noticias en prensa</h3>
          </hgroup>
          <hgroup class="flex flex-col justify-center items-center">
            <p class={`counter numberMetric`}>{metrics.media}</p>
            <h3 class={"titleMetric"}>en medios ganados</h3>
          </hgroup>

        </section>
      </Section>
    </>
  )
}