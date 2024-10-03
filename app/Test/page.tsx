// import Image from "next/image";
// import Pokemonitem from "./test"
interface Games {
  id: number | string;
  title?: string;
  thumbnail?: string;
  thumbnail_width?: 500;
  thumbnail_height?: 500;
  short_description?:string;
  game_url?: string;
  genre?: string;
  platform:string;
  publisher: string;
  developer: string;
  release_date?: string;
  freetogame_profile_url?:string
  // artist?:CollectionArtist;
}
function delay(ms: number = 1000): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms)
  });
}
const api = process.env.NEXT_PUBLIC_API_ENDPOINT
export default async function HomePage() {
  await delay()
  const response = await fetch(`${api}/api/games`)
  const responseJson = await response.json()
  const pokemons: Games[] = responseJson
  console.log(pokemons)
  return (
    <div>
      {pokemons.map((game)=>(
        <div key={game.id}>
          {game.title}
        </div>
      ))}
    </div>
  );
}

