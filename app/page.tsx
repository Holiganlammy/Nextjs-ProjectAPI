// import { Suspense } from "react";
import Link from "next/link";
// import HomeSearchForm from "./HomeSearchForm";

export default function HomePage() {
  return (
    <section className="min-h-[calc(100dvh-165px)] px-3 sm:px-4 lg:px-6 bg-center" style={{ backgroundImage: `url("/images/Games/valorant-home.jpg")` }}>
      <div>
        <div className="relative text-white flex items-center justify-center md:justify-end pt-20 lg:pt-10">
          <div className="text-center md:text-right">
            <div className="text-3xl md:text-5xl lg:text-9xl font-bold leading-tight text-[#F3E333]">
              World Wire ,<br />  Play & Improve <br /> & Win
            </div>
            <p className="mt-4 text-sm md:text-lg text-[#FFDE00]">
              World wire Game, Thailand's best game center  It is a leading online game <br /> source that collects game information for players to try new games.
            </p>
            {/* <div className="mt-8">
                  <div className="flex justify-end space-x-8 text-lg">
                    <span>Online: <span className="font-bold">19,302,927</span></span>
                    <span>Playing Now: <span className="font-bold">4,831,224</span></span>
                  </div>
                </div> */}
            <Link href={`/games`}>
              <button className="mt-14 px-4 py-2 md:px-6 md:py-3 border border-[#1c1e22] text-white text-lg hover:bg-white hover:text-black transition-all">
                See Games Online More ↓
              </button>
            </Link>
          </div>
        </div>

        {/* <Suspense fallback={<div></div>}>
            <HomeSearchForm />
          </Suspense> */}
      </div>
    </section>
  );
}