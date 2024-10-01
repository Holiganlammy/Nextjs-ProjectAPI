"use client"
import { ArtCollectionItem } from "@/components/collections/ArtCollectionItem";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
// import useBookListAPI from "@/fetcher-api/book-list";
import { useEffect, useState } from "react";
// import { GlobalSWRConfig } from "@/components/site";
// import { Filter, Loader2 } from "lucide-react";
// import LibraryResultsFallback from "../library/LibraryResultsFallback";
import Link from "next/link";

export default function UniversalSearch() {
  const [countCollection, setCountCollection] = useState<number>(0)
  // const [countArtist, setCountArtist] = useState<number>(0)
  // const [countBooks, setCountBooks] = useState<number>(0)
  const [collections, setCollections] = useState<Collection[]>([]);
  // const [artist, setArtist] = useState<Artist[]>([]);
  // const [books, setBooks] = useState<Book[]>([])
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? ""
  const limit = searchParams.get("limit") ?? ""
  useEffect(() => {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    if (apiEndpoint) {
      const urlSearchParams = new URLSearchParams();
      if (q) urlSearchParams.set("q", q);
      if (limit) urlSearchParams.set("limit", limit)

      const apiCollection = `${apiEndpoint}/api/art-collections/?${urlSearchParams.toString()}`;
      fetch(apiCollection)
        .then((response) => response.json())
        .then((responseJson: { items: Collection[], count: number }) => {
          setCollections(responseJson.items);
          setCountCollection(responseJson.count)
          // console.log(apiCollection)
        });
      // const apiArtists = `${apiEndpoint}/api/artists/?${urlSearchParams.toString()}`;
      // fetch(apiArtists).then(response => (
      //   response.json()
      // )).then((responseJson: { items: Artist[], count: number }) => {
      //   setArtist(responseJson.items);
      //   setCountArtist(responseJson.count)
      //   // console.log(apiArtists)
      // });
      // const apiBooks = `${apiEndpoint}/api/books/?${urlSearchParams.toString()}`;
      // fetch(apiBooks).then(response => (
      //   response.json()
      // )).then((responseJson: { items: Book[], count: number }) => {
      //   setBooks(responseJson.items);
      //   setCountBooks(responseJson.count)
      //   // console.log(apiBooks)
      // });
    }
  }, [q]);

  // if (isLoading) {
  //   return <LibraryResultsFallback />;
  // }
  // console.log(count)
  if (!collections.length) {
    return <p className="">Not Found</p>
  }
  return (
    <div>
      <div className="space-x-3 text-center">
        <span className="text-2xl md:text-[40px]">Search Results of</span>
        <span className="text-2xl md:text-[40px] font-bold">"{q}"</span>
      </div>
      {collections.length ?
        <div>
          <div className="mt-5 p-2 space-x-2">
            <span className="text-lg font-bold text-[#2BAC7E]">
              Rama XI art Collection |
            </span>
            <span className='text-base'>
              {collections.length} of
            </span>
            <span className="font-bold">
              {countCollection} Collections
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-x-2 mx-auto mb-5">
            {collections.map((filter) => (
              <ArtCollectionItem key={filter.id} Collection={filter} />
            ))}
          </div>
          {countCollection >= 16 && (
            <div className="">
              <Link className="flex justify-center items-center my-10 space-x-4" href={`/collections/?q=${q}`}>
                <Button className="text-white font-bold text-base w-[100px] hover:bg-green-200 shadow-xl shadow-gray-200 px-1 py-1 bg-[#2BAC7E]">
                  More
                </Button>
              </Link>
            </div>
          )}
        </div>
        : ""}
      {/* {artist.length ?
        <div>
          <div className="flex p-3 space-x-2">
            <p className="font-bold text-[#13336A]">All Artist</p>
            <p>|</p>
            <span className="text-gray-500">{artist.length} of</span>
            <span className="font-bold">{countArtist} Artists</span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 m-5 gap-4 mb-5">
            {artist.map(artist => (
              artist ? <ArtistItem key={artist.id} artist={artist} /> : null
            ))}
          </div>
          {countArtist >= 16 && (
            <div className="flex justify-center my-5">
              <Link className="flex justify-center items-center my-10 space-x-4" href={`/artists/?q=${q}`}>
                <Button className="text-black font-bold text-base w-[100px] hover:bg-blue-500 shadow-xl shadow-gray-200 px-1 py-1 bg-[#13336A]">
                  More
                </Button>
              </Link>
            </div>
          )}
        </div>
        : ""} */}
      {/* {books.length ?
        <div className="p-2">
          <div className="flex p-1 space-x-2 pb-5">
            <p className="font-bold text-purple-800">All Books</p>
            <p>|</p>
            <span className="text-gray-500">{books?.length} of</span>
            <span className="font-bold">{countBooks} Books</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-3 gap-y-5 sm:gap-x-4">
            {books?.map(book => <BookItem key={book.id} book={book} />)}
          </div>
          {countBooks >= 16 && (
            <Link className="flex justify-center items-center my-10 space-x-4" href={`/library/?q=${q}`}>
              <Button className="text-black font-bold text-base w-[100px] hover:bg-purple-300 shadow-xl shadow-gray-200 px-1 py-1 bg-purple-700">
                More
              </Button>
            </Link>
          )}
        </div>
        : ""} */}
    </div>
  )
}
