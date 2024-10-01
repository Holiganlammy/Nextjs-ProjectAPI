import {
  Carousel,
  CarouselContent,
  CarouselApi,
  CarouselItem
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CircleChevronRight, CircleChevronLeft } from 'lucide-react';

interface CollectionOtherProps {
  CollectionOther: CollectionAnother[]
}

export function Related_Carousel_ItemsSections({ CollectionOther }: CollectionOtherProps) {
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [api] = useState<CarouselApi>()
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
    <div>
      {CollectionOther && CollectionOther.length > 0 && (
        <div className="max-w-screen-lg border-b border-black my-12 mx-auto"></div>
      )}
      {CollectionOther && CollectionOther.length > 0 && (
        <div className="text-base mx-auto pb-5 mb:pb-10 flex justify-between">
          <div className="p-5">
            <h1 className="text-lg md:text-2xl font-bold"><b>Related artworks</b></h1>
            <p>({CollectionOther.length} artworks)</p>
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
      )}
      {CollectionOther && CollectionOther.length > 0 && (
        <div className="mx-auto flex flex-wrap">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {CollectionOther.map((Artist) => {
                const slug = !Artist.slug ? Artist.id : Artist.slug
                return (
                  <CarouselItem className="basis-1/2 lg:basis-1/6 xl:basis-[10%] p-5">
                    <Link className="w-[50%] sm:w-1/4" href={`/collections/${slug}`}>
                      <div className="h-0 pb-[100%] relative shadow-[10px_10px_5px_0px_rgba(210,215,211)] hover:shadow-[10px_10px_10px_1px_rgba(0,0,0,0.3)] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-xl hover:rounded-xl">
                        <Image
                          className="mx-auto object-cover object-center w-full h-full absolute top-0 bottom-0 left-0 right-0 rounded-xl"
                          src={Artist.image}
                          alt={Artist.title_en !== "-" && Artist.title_en ? Artist.title_en : Artist.title_th}
                          width={Artist.image_width}
                          height={Artist.image_height}
                        />
                      </div>
                      <p className="text-sm text-center pt-5">
                        <b>{Artist.title_en !== "-" && Artist.title_en ? Artist.title_en : Artist.title_th}</b>
                      </p>
                      <p className="text-sm text-center pt-2">
                        {/* <b>{Detail.artist?.name_en !== "-" && Detail.artist?.name_en ? Detail.artist?.name_en : Detail.artist?.name_th}</b> */}
                      </p>
                    </Link>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>
      )}
    </div>
  )
}
