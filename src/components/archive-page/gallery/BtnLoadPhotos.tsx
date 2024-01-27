import "./BtnLoadPhotos.css"

interface Props {
  edition: number
  offset: number
}

export function BtnLoadPhotos({ edition, offset }: Props) {

  const loadPhotos = async () => {
    const res = await fetch(`/api/gallery.json?edition=${edition}&offset=${offset}`)
    const data = await res.json()

    console.log(data)
  }
  return (
    <button class={'load-photos'} onClick={loadPhotos}>descubrelas todas</button>
  )
}
