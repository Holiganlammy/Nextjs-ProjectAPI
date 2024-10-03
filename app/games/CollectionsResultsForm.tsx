"use client";
// import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GameListItem } from "@/components/games/GameListItem";

interface CollectionsResultsFormProps {
  initialData: Games[];
}

export function CollectionsResultsForm({ initialData }: CollectionsResultsFormProps) {
  const [games, setGames] = useState<Games[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const fetchGames = async () => {
    setLoading(true);
    setError(null);
    try {
      const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
      const urlSearchParams = new URLSearchParams();
      searchParams.forEach((value, key) => {
        urlSearchParams.set(key, value);
      });

      const apiCollection = `${api}/api/games/?${urlSearchParams.toString()}`;
      const response = await fetch(apiCollection);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseJson = await response.json();
      setGames(responseJson);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [searchParams]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-6 gap-x-2 mx-auto mb-10">
        {games.map((game) => (
          <GameListItem key={game.id} Collection={game} />
        ))}
      </div>
      <div>
        {/* {countCollection > collections.length && (
        <div className="flex justify-center items-center my-10 space-x-4">
          <Button type="button" onClick={() => (setLoadMore(loadMore + 56))} className="text-white font-bold text-base w-[100px] hover:bg-green-100 shadow-xl shadow-gray-200 px-1 py-1 bg-[#2BAC7E]">
            More
          </Button>
        </div>
       )} */}
      </div>
    </div>
  )
}
