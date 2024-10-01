import { Suspense } from "react";
import { CollectionsResultsForm } from './CollectionsResultsForm'
import { CollectionsSearchForm } from './CollectionsSearchForm'
export default function page() {
  return (
    <section className="min-h-[calc(100dvh-300px)] px-3 sm:px-4 lg:px-6 lg:pb-20">
      <div className="flex justify-center items-center">
        <svg
          id="Layer_2"
          className="mt-16 p-5 md:p-0 w-[600px]"
          xmlns="http://www.w3.org/2000/svg"
          height="112"
          viewBox="20 0 425.84 120"
        >
          <defs>
            <style>
              {`.cls-1{fill:#2BAC7E;font-family:Winchester, Winchester;font-size:100px;letter-spacing:.05em;stroke:#0fa36f;stroke-miterlimit:10;stroke-width:1.75px;}`}
            </style>
          </defs>
          <g id="Layer_1-2">
            <text className="cls-1" transform="translate(.88 85.87)">
              <tspan x="0" y="0">Collection</tspan>
            </text>
          </g>
        </svg>

      </div>
      <Suspense>
        <CollectionsSearchForm />
      </Suspense>
      <div className="bg-gray-100 py-8 -mx-3 sm:-mx-4 lg:-mx-6 flex justify-center">
        <p className="text-center font-normal text-base sm:text-lg max-w-7xl w-full">
          <strong>The Rama IX Art Museum Foundation</strong> collection consists of works of art donated to the Foundation
          <br />for its permanent collection by Thai artists and collectors. The collection now consists of 400 works of art by various Thai artists.
        </p>
      </div>
      <Suspense>
        <CollectionsResultsForm />
      </Suspense>
    </section>

  )
}
