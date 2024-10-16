// import { Suspense } from "react";
// import HomeSearchForm from "./HomeSearchForm";

export default function HomePage() {
  return (
    <section className="min-h-[calc(100dvh-165px)] px-3 sm:px-4 lg:px-6 bg-center" style={{ backgroundImage: `url("/images/Games/valorant-home.jpg")` }}>
      <div>
        <div className="relative text-white flex items-center justify-end pt-10">
          <div className="text-right">
            <div className="text-9xl font-bold leading-tight text-[#F3E333]">
            World Wire ,<br />  Play & Improve <br/> & Win
              </div>
                <p className="mt-4 text-lg text-[#FFDE00]">
                World wire Game, Thailand's best game center  It is a leading online game <br /> source that collects game information for players to try new games.
                </p>
                {/* <div className="mt-8">
                  <div className="flex justify-end space-x-8 text-lg">
                    <span>Online: <span className="font-bold">19,302,927</span></span>
                    <span>Playing Now: <span className="font-bold">4,831,224</span></span>
                  </div>
                </div> */}
                <button className="mt-14 px-6 py-3 border border-[#1c1e22] text-white text-lg hover:bg-white hover:text-black transition-all">
                  Learn More ↓
                </button>
              </div>
          </div>

          {/* <Suspense fallback={<div></div>}>
            <HomeSearchForm />
          </Suspense> */}
        </div>
    </section>
  );
}