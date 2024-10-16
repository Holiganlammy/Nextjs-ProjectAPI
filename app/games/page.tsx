import { Suspense } from "react";
import { GameListsResultsForm } from './GameListsResultsForm';
import { GameListsSearchForm } from './GameListsSearchForm';
import styles from './GameLists.module.css'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}


export default async function GamePage({ searchParams }: PageProps) {
  const { platform, category } = searchParams;
  const sortBy = searchParams["sort-by"];
  const urlSearchParams = new URLSearchParams();
  if (typeof platform === "string") {
    urlSearchParams.set("platform", platform);
  }
  if (typeof category === "string") {
    urlSearchParams.set("category", category);
  }
  if (typeof sortBy === "string") {
    urlSearchParams.set("sort-by", sortBy);
  }
  const response = await fetch(`https://www.freetogame.com/api/games?${urlSearchParams.toString()}`);
  const games: Games[] = await response.json();
  console.log(response)

  return (
    <section className="min-h-[calc(100dvh-300px)] px-3 sm:px-4 lg:px-6 lg:pb-20 bg-[#272b30]">
      <div className="relative flex justify-center items-center mt-10 mb-10 w-full h-[100px]">
        <div className={`bg-cover bg-center bg-repeat h-[40rem] absolute left-0 right-0 top-[0rem] w-full opacity-[0.5] `} style={{ backgroundImage: `url("/images/Games/valorantbg.jpg")` }}>
          <div className={`${styles['background-linear']}`}></div>
        </div>
        <p className="relative text-center font-bold text-6xl text-white">World wire Online Center</p>
      </div>

      <Suspense>
        <GameListsSearchForm />
      </Suspense>

      <div className="bg-[#272b30] py-8 mx-3 sm:-mx-4 lg:-mx-6 flex justify-center ">
        <p className="text-center font-normal text-base sm:text-lg max-w-7xl w-full text-white border-[4px] border-black p-5 bg-[#1c1e22]">
          <strong>World wire Game Center</strong>, the best Game center for you to experience every game for free and play
          <br /> it freely. You can search and play freely along with games that are only special. Only here, World wire Game center
        </p>
      </div>
      <div className="flex text-lg font-bold my-10 space-x-3">
        <span className="text-[#AAAAAA]">Count of Game :</span>
        <span className="text-white">{games.length} Games</span>
      </div>
      <Suspense fallback={<p>Loading games...</p>}>
        <GameListsResultsForm GameData={games} />
      </Suspense>
    </section>
  );
}
