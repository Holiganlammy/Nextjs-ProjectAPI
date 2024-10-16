import { Suspense } from "react";
import GamesSearchForm from "./GamesSearchForm";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function GamesPage({ searchParams }: PageProps) {
  // Build query params
  const { platform } = searchParams;
  const urlSearchParams = new URLSearchParams();
  if (typeof platform === "string") {
    urlSearchParams.set("platform", platform);
  }

  // Call API
  const response = await fetch(`https://www.freetogame.com/api/games?${urlSearchParams.toString()}`);
  const games: Games[] = await response.json();

  return (
    <div>
      <h2>Games list</h2>
      <Suspense>
        <GamesSearchForm />
      </Suspense>
      {games.map(game => <p key={game.id}>{game.title} | {game.platform}</p>)}
    </div>
  );
}
