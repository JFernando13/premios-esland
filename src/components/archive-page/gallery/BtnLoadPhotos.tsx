import { useState } from "preact/hooks"
import "./BtnLoadPhotos.css"

interface Props {
  edition: number
  offset: number
}

export function BtnLoadPhotos({ edition, offset }: Props) {

  const [isOpen, setIsOpen] = useState(true)

  const loadPhotos = async () => {
    const res = await fetch(`/api/gallery.json?edition=${edition}&offset=${offset}`)
    const { remainingPhotos }: { remainingPhotos: { width: number, height: number }[] } = await res.json()

    const gallery = document.getElementById('gallery')

    const listImg = remainingPhotos.map((img, index) => {
      const containerImg = document.createElement('div')
      const firstImg = document.createElement('img')
      const secondImg = document.createElement('img')

      const srcImg = `/images/editions/${edition + 1}/gallery/thumbnails/img-${+ offset + index + 1}.webp`

      // firstImg
      firstImg.setAttribute("src", srcImg)
      firstImg.setAttribute("width", img.width.toString())
      firstImg.setAttribute("height", img.height.toString())
      firstImg.classList.add("first-img")

      // secondImg
      secondImg.setAttribute("src", srcImg)
      secondImg.setAttribute("width", img.width.toString())
      secondImg.setAttribute("height", img.height.toString())
      secondImg.classList.add("second-img")

      // containerImg
      containerImg.appendChild(firstImg)
      containerImg.appendChild(secondImg)

      containerImg.classList.add("img-container")

      return containerImg.outerHTML
    }).join("")

    gallery?.insertAdjacentHTML('beforeend', listImg)
    setIsOpen(false)
  }
  return <>
    {
      isOpen && <button class={'load-photos'} onClick={loadPhotos}>descubrelas todas</button>
    }
  </>
}
