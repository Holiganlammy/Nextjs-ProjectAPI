import { Suspense } from "react";
import HomeSearchForm from "./HomeSearchForm";

export default function HomePage() {
  return (
    <section className="min-h-[calc(100dvh-200px)] px-3 sm:px-4 lg:px-6 lg:pb-20">
      <div className="mt-32">
        <div className="pb-20">
          <p className="text-3xl md:text-6xl font-bold text-center border-b border-yellow-400 text-[#000000] max-w-[700px] mx-auto">World Wide Game Center</p>
        </div>
        <Suspense fallback={<div></div>}>
          <HomeSearchForm />
        </Suspense>
      </div>
    </section>
  );
}