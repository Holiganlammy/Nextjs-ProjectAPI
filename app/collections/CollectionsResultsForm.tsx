"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArtCollectionItem } from "@/components/collections/ArtCollectionItem"
import { CollectionPrivateResults } from "@/app/collections/CollectionsPrivateFormResults"

export function CollectionsResultsForm() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [countCollection, setCountCollection] = useState<number>(0)
  const [loadMore, setLoadMore] = useState<number>(0)
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const year = searchParams.get("year") ?? "";
  const end_year = searchParams.get("end_year") ?? "";
  const sort = searchParams.get("sort") ?? "";
  const National = searchParams.get("is_national_artist") ?? "";
  const Alphabet = searchParams.get("artist_first_alphabet_en") ?? "";
  const CollectionsType = searchParams.get("art_collection_type") ?? "";
  const artist = searchParams.get("artist") ?? "";
  useEffect(() => {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    if (apiEndpoint) {
      const urlSearchParams = new URLSearchParams();
      if (q) urlSearchParams.set("q", q);
      if (artist) urlSearchParams.set("artist", artist);
      if (CollectionsType) urlSearchParams.set("art_collection_type", CollectionsType);
      if (sort) urlSearchParams.set("sort", sort);
      if (National) urlSearchParams.set("is_national_artist", National);
      if (year) urlSearchParams.set("year", year);
      if (Alphabet) urlSearchParams.set("artist_first_alphabet_en", Alphabet);
      if (end_year) urlSearchParams.set("end_year", end_year);

      const apiCollection = `${apiEndpoint}/api/art-collections/?${urlSearchParams.toString()}`;
      fetch(apiCollection)
        .then((response) => response.json())
        .then((responseJson: { items: Collection[], count: number }) => {
          setCollections(responseJson.items)
          setCountCollection(responseJson.count);
          console.log(responseJson)
        });
    }
  }, [q, artist, year, end_year, CollectionsType, sort, Alphabet, National]);

  useEffect(() => {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    if (apiEndpoint && loadMore !== 0) {
      const urlSearchParams = new URLSearchParams();
      if (loadMore) urlSearchParams.set("offset", loadMore.toString());
      const apiCollection = `${apiEndpoint}/api/art-collections/?${urlSearchParams.toString()}`;
      fetch(apiCollection)
        .then((response) => response.json())
        .then((responseJson: { items: Collection[]}) => {
          setCollections((prevCollections) => [
            ...prevCollections,
            ...responseJson.items
          ]);
        });
    }
  }, [loadMore])

  console.log()
  if (CollectionsType === "private") {
    return <CollectionPrivateResults collections={collections} />;
  }

  // if (CollectionsType === "institutional") {
  //   return <CollectionInstitutionalResults collections={collections} />;
  // }


  return (
    <div>
      <div className="mt-5 p-2">
        <span className="text-lg font-bold text-[#2BAC7E]">
          Rama XI art Collection |
        </span>
        <span className='p-3 text-base'>
          {countCollection} Collections
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 gap-x-2 mx-auto mb-10">
        {collections.map((filter) => (
          <ArtCollectionItem key={filter.id} Collection={filter} />
        ))}
      </div>
      <div>
        {countCollection > collections.length && (
        <div className="flex justify-center items-center my-10 space-x-4">
          <Button type="button" onClick={() => (setLoadMore(loadMore + 56))} className="text-white font-bold text-base w-[100px] hover:bg-green-100 shadow-xl shadow-gray-200 px-1 py-1 bg-[#2BAC7E]">
            More
          </Button>
        </div>
       )}
      </div>
    </div>
  )
}
