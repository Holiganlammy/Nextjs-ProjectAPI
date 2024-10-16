import GameDetailData from "./GameDetailData";

interface GameDetailPageProps {
  props: {
    params: {
      id: number
    }
  }
}

export default async function GameDetailPage(props: { params: { id: GameDetailPageProps } }) {
  const id = props.params.id
  // const urlSearchParams = new URLSearchParams();
  // if(typeof id){
  //   urlSearchParams.set("asd",id)
  // }
  console.log(id)
  const response = await fetch(`https://www.freetogame.com/api/game?id=${id}`);
  const games: GameListDetail = await response.json();
  console.log(games)
  return (
    <div>
      <GameDetailData GameDetail={games} />
    </div>
  );
}
