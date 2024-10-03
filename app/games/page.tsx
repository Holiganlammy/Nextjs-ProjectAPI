import { Suspense } from "react";
import { CollectionsResultsForm } from './CollectionsResultsForm'
import { CollectionsSearchForm } from './CollectionsSearchForm'

async function fetchInitialData(searchParams: URLSearchParams) {
  const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const urlSearchParams = new URLSearchParams(searchParams);
  const apiCollection = `${api}/api/games/?${urlSearchParams.toString()}`;

  const response = await fetch(apiCollection);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Page() {
  const searchParams = new URLSearchParams({
    q: "",
    artist: "",
    CollectionsType: "",
    sort: "",
    National: "",
    year: "",
    end_year: "",
    Alphabet: ""
  });

  const initialData = await fetchInitialData(searchParams);
  return (
    <section className="min-h-[calc(100dvh-300px)] px-3 sm:px-4 lg:px-6 lg:pb-20">
      <div className="relative flex justify-center items-center mt-10 mb-10 w-full h-[500px]">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url("/images/Games/BG-Game.jpg")` }}></div>
        <p className="relative text-center font-bold text-6xl opacity-100">Game Online Center</p>
      </div>

      <Suspense>
        <CollectionsSearchForm />
      </Suspense>

      <div className="bg-black py-8 -mx-3 sm:-mx-4 lg:-mx-6 flex justify-center">
        <p className="text-center font-normal text-base sm:text-lg max-w-7xl w-full text-white">
          <strong>World wire Game Center</strong>  , the best Game center for you to experience every game for free and play 
          <br /> it freely. You can search and play freely along with games that are only special. Only here, World wire Game center
        </p>
      </div>

      <Suspense>
        <CollectionsResultsForm initialData={initialData} />
      </Suspense>
    </section>
  );
}
