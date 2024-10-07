"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GameListItem } from "@/components/games/GameListItem";

interface CollectionsResultsFormProps {
  initialData: Games[];
}

export function CollectionsResultsForm({ initialData }: CollectionsResultsFormProps) {
  const [games, setGames] = useState<Games[]>(initialData);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const searchParams = useSearchParams();
  // const platformGame = searchParams.get("platform") ?? "";
  // const fetchGames = async () => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const api = process.env.NEXT_PUBLIC_API_ENDPOINT;
  //     const urlSearchParams = new URLSearchParams();
  //     if (platformGame) urlSearchParams.set("platform", platformGame);
  //     const apiCollection = `${api}/api/games?${urlSearchParams.toString()}`;
  //     console.log(apiCollection);
  //     const response = await fetch(apiCollection);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const responseJson = await response.json();
  //     setGames(responseJson);
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       setError(error.message);
  //     } else {
  //       setError("An unknown error occurred.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchGames();
  // }, [platformGame]);

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>} */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-x-2 mx-auto mb-10">
        {games.map((game) => (
          <GameListItem key={game.id} Collection={game} />
        ))}
      </div>
    </div>
  );
}
