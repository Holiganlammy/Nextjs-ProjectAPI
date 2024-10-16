"use client"
import { GameListItem } from "@/components/games/GameListItem";

interface GameListsResultsFormProps {
  GameData: Games[];
}

export function GameListsResultsForm({ GameData }: GameListsResultsFormProps) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-x-2 mx-auto mb-10">
        {GameData.map((game) => (
          <GameListItem key={game.id} Gamelist={game} />
        ))}
      </div>
    </div>
  );
}
