"use client";
// import { ExhibitionsItemCarousel } from "@/app/games/[slug]/ExhibitionsCarousel";
// import { Related_Carousel_ItemsSections } from "@/app/games/[slug]/RelatedLinksCarousel";
import { GameDetailSection } from "@/app/games/[id]/GameDetailSection"

interface GameListsDetailFormProps {
  GameDetail: GameListDetail;
}

function GameDetailData({ GameDetail }: GameListsDetailFormProps) {
  if (!GameDetail) {
    return <div>Loading...</div>;
  }

  return (
    <section className="min-h-[calc(100dvh-200px)] p-5 2xl:p-0 relative bg-[#272b30]">
      <div className="md:pt-5">
        <GameDetailSection key={GameDetail.id} GameDetails={GameDetail} />
        {/* <Related_Carousel_ItemsSections CollectionOther={filteredArtist} />
        <ExhibitionsItemCarousel exhibitions={Detail?.exhibitions} /> */}
      </div>
    </section>
  );
}

export default GameDetailData;
