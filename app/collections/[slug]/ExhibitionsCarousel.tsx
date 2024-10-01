import { useEffect, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { CircleChevronRight, CircleChevronLeft } from 'lucide-react';


interface ExhibitionSectionProps {
  exhibitions: CollectionExhibition[];
};
export function ExhibitionsItemCarousel({ exhibitions }: ExhibitionSectionProps) {
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    const handleResize = () => {
      if (api) {
        api.reInit();
        updateScrollButtons();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [api]);

  useEffect(() => {
    if (api) {
      api.on("select", updateScrollButtons);
      updateScrollButtons();

      return () => {
        api.off("select", updateScrollButtons);
      };
    }
  }, [api]);

  const updateScrollButtons = () => {
    if (api) {
      setCanScrollNext(api.canScrollNext());
      setCanScrollPrev(api.canScrollPrev());
    }
  };

  const handleScrollPrev = () => api?.scrollPrev();
  const handleScrollNext = () => api?.scrollNext();

  return (
    <>
      {exhibitions.length > 0 && (
        <div className="border-b max-w-[1750px] mx-auto border-black my-5"></div>
      )}
      {exhibitions.length > 0 && (
        <div className="max-w-[1750px] mx-auto p-5 mb-10">
          <div className="mb-8 flex justify-between">
            <div>
              <span className="text-lg md:text-2xl font-bold">Exhibitions of Arts</span>
              <p>({exhibitions.length} works)</p>
            </div>
            <div className="flex space-x-4">
              <button className="disabled:opacity-10 disabled:cursor-not-allowed" disabled={!canScrollPrev} onClick={handleScrollPrev}>
                <CircleChevronLeft className="w-7 h-7" />
              </button>
              <button className="disabled:opacity-10 disabled:cursor-not-allowed" disabled={!canScrollNext} onClick={handleScrollNext}>
                <CircleChevronRight className="w-7 h-7" />
              </button>
            </div>
          </div>
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {exhibitions.map((exhibition, index) => (
                <CarouselItem key={index} className="space-x-10 md:basis-1/2 lg:basis-1/3 cursor-grabbing">
                  <div>
                    <div className="h-0 pb-[55%] w-0 pr-[100%] relative">
                      <Image className="w-full h-full absolute object-cover object-center" src={`${exhibition.image}`} alt="" width={exhibition.image_width} height={exhibition.image_height} />
                    </div>
                    <div className="text-center my-10 font-bold">
                      <p>นิทรรศการ (TH) : {exhibition.title_th}</p>
                      <p>นิทรรศการ (EN) : {exhibition.title_en}</p>
                      <p>สถานที่จัดนิทรรศการ : {exhibition.place}</p>
                      <p>ปีจัดแสดงนิทรรศการ : {exhibition.year}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </>
  );
}
