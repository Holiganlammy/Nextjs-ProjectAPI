import { Suspense } from "react";
import HomeSearchForm from "./HomeSearchForm";

export default function HomePage() {
  return (
    <section className="min-h-[calc(100dvh-200px)] md:min-h-[calc(100dvh-300px)] px-3 sm:px-4 lg:px-6 lg:pb-20">
      <div className="mt-32">
        <div className="pb-20">
          <p className="text-3xl md:text-6xl font-bold text-center text-[#1C3366]">RAMA IX ART MUSEUM</p>
          <p className="text-base md:text-xl text-center mt-5 md:mt-10 text-[#284986]">Thailand{`'`}s Contemporary Art On Web</p>
        </div>
        <Suspense>
          <HomeSearchForm />
        </Suspense>
      </div>
    </section>
  );
}
