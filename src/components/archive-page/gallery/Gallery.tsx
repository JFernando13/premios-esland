import { Section } from "../shared/Section.tsx";
import gallery from "~/data/gallery.json"
import { BtnLoadPhotos } from "./BtnLoadPhotos.tsx";
import "./gallery.css"

interface Props {
  edition: number
}

export function Gallery({ edition }: Props) {
  const photos = gallery[edition].slice(0, 10);

  return (
    <Section title="galería" size="full">
      <section class="columns-1 gap-x-6 md:columns-2 xl:columns-3">
        <section
          class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6"
          id="gallery"
        >
          {
            photos.map((photo, index) => (
              <div class={`group img-container`}>
                <img
                  src={`/images/editions/${edition + 1}/gallery/thumbnails/img-${index + 1
                    }.webp`}
                  alt="photo"
                  class={`first-img`}
                  width={photo.width}
                  height={photo.height}
                />
                <img
                  src={`/images/editions/${edition + 1}/gallery/thumbnails/img-${index + 1
                    }.webp`}
                  alt="photo"
                  class={`second-img scale-100`}
                />
              </div>
            ))
          }
        </section>
      </section>

      <BtnLoadPhotos edition={edition} offset={photos.length} />
    </Section>
  )
}