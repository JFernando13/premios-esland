import type { TUser } from "~/types/session";
import { Pagination } from "./Pagination";
import { Session } from "./Session";

interface Props {
  user: TUser,
  page: {
    current: number,
    total: number
  },
  handlePage: {
    next: () => void,
    previous: () => void
  }
}

export function Footer({ user, page, handlePage }: Props) {
  return (
    <footer
      class="flex justify-between gap-4 bg-black/50 backdrop-blur-xl px-8 py-4 items-center rounded"
    >
      <Session user={user} />
      <Pagination handleNext={handlePage.next} handlePrevious={handlePage.previous} currentPage={page.current} totalPages={page.total} />
    </footer>
  )
}