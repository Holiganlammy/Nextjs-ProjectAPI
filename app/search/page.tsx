import SearchResults from "@/app/search/SearchResults"
import { Suspense } from "react"

export default function page() {
  return (
    <section className="min-h-[calc(100dvh-300px)] px-3 sm:px-4 lg:px-6 lg:pb-20">
      <div className="mt-10 md:mt-20">
        <Suspense>
          <SearchResults />
        </Suspense>
      </div>
    </section>
  )
}
