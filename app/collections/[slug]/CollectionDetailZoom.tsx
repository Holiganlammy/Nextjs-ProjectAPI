import Image from "next/image";
import Link from "next/link";
import { Minimize2, Maximize2 } from 'lucide-react';
import { useState, useEffect } from "react";

interface CollectionDetailsProps {
  CollectionDetails: CollectionDetail
}
export function CollectionDetail({ CollectionDetails }: CollectionDetailsProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [ClickZoomSmallRes, setClickZoomSmallRes] = useState(true);
  useEffect(() => {
    const resizesmall = () => {
      if (window.innerWidth < 640) {
        setClickZoomSmallRes(false);
      } else {
        setClickZoomSmallRes(true);
      }
    };
    resizesmall();
    window.addEventListener("resize", resizesmall);
    return () => window.removeEventListener("resize", resizesmall);

  }, []);
  const HandleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isZoomed]);
  return (
    <div>
      {/* <Link className="absolute top-10 left-5 lg:top-0 lg:left-10 flex justify-center items-center" href={`/collections/`}>
        <ChevronLeft></ChevronLeft>
        <span className="text-2xl font-bold">Back</span>
      </Link>
      <Breadcrumb className="absolute top-10 left-50 lg:top-0 lg:left-52">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/components">Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}
      <div className={`w-[100%] flex justify-center mx-auto pt-16 sm:pt-10 md:pt-0`}>
        <div className="relative">
          {CollectionDetails?.image && CollectionDetails.image_width && CollectionDetails.image_height ? (
            <Image
              className={`cursor-zoom-in ${ClickZoomSmallRes ? "zoom-in" : "default"} ${CollectionDetails.image_width > CollectionDetails.image_height ? "horizontal-image" : "vertical-image"} rounded-xl`}
              src={`${CollectionDetails.image}`}
              alt={CollectionDetails.title_th !== "-" && CollectionDetails.title_th ? CollectionDetails.title_th : CollectionDetails.title_en}
              width={CollectionDetails.image_width}
              height={CollectionDetails.image_height}
              onClick={ClickZoomSmallRes ? HandleZoom : undefined}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Image not available</p>
            </div>
          )}
          {ClickZoomSmallRes && CollectionDetails?.image && (
            <Maximize2
              onClick={ClickZoomSmallRes ? HandleZoom : undefined}
              className="absolute top-5 right-5 text-white cursor-pointer text-4xl z-10"
            />
          )}
        </div>
      </div>

      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center overflow-auto">
          <div className="relative max-w-full max-h-full">
            <Minimize2
              onClick={HandleZoom}
              className="absolute top-5 right-5 text-white cursor-pointer text-4xl z-10"
            />
            <div className="flex flex-col items-center">
              <div className="relative flex justify-center item-center overflow-auto">
                <Image
                  src={`${CollectionDetails.image}`}
                  alt={CollectionDetails.title_th !== "-" && CollectionDetails.title_th ? CollectionDetails.title_th : CollectionDetails.title_en}
                  width={CollectionDetails.image_width}
                  height={CollectionDetails.image_height}
                  className="cursor-zoom-out overflow-auto w-[100vw]"
                  onClick={HandleZoom}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-screen-lg mx-auto my-10">
        <div className="md:flex items-center">
          <div className="w-[100%] md:w-[70%] lg:w-[80%] h-[180px]">
            <div className="flex space-x-10 items-center">
              <Link className="w-[25%] sm:w-[20%] md:w-[10%] min-w-[100px] max-w-[100px]" href={`/artists/${CollectionDetails.artist?.id}`}>
                <div className="h-0 pb-[100%] relative">
                  {CollectionDetails.artist?.image ? (
                    <Image
                      src={CollectionDetails.artist?.image ?? ""}
                      alt={CollectionDetails.title_th !== "-" && CollectionDetails.title_th ? CollectionDetails.title_th : CollectionDetails.title_en}
                      width={CollectionDetails.artist?.image_width ?? 500}
                      height={CollectionDetails.artist?.image_height ?? 500}
                      className="rounded-full object-cover object-center w-full h-full absolute top-0 left-0 right-0 bottom-0"
                    />
                  ) : (
                    <div className="flex items-center justify-center bg-gray-200 w-full h-full absolute top-0 bottom-0 left-0 right-0 rounded-[50%] text-7xl font-bold text-gray-700 duration-700 shadow-xl">
                      {CollectionDetails.artist?.name_en ? CollectionDetails.artist?.name_en.charAt(0) : "?"}
                    </div>
                  )}
                </div>
              </Link>

              <div className="w-[75%] sm:w-[80%] md:w-[90%]">
                <Link href={`/artists/${CollectionDetails.artist?.id}`}>
                  <h3 className="text-xl sm:text-3xl md:text-4xl"><b>{CollectionDetails.artist?.name_en}</b></h3>
                </Link>
              </div>
            </div>

            <div className="max-w-[570px] mx-auto pt-12 md:pt-12">
              <p className="text-base sm:text-lg font-bold">
                {CollectionDetails.title_en !== "-" && CollectionDetails.title_en ? CollectionDetails.title_en : CollectionDetails.title_th}, {!CollectionDetails.year ? CollectionDetails.year_2 : CollectionDetails.year}
              </p>
              <div className="space-x-4">
                <span>{CollectionDetails.technique_display !== "" && CollectionDetails.technique_display && CollectionDetails.technique_display !== "Other" ? CollectionDetails.technique_display : CollectionDetails.other_technique_en || CollectionDetails.other_technique_th},</span>
                <span>|</span>
                <span>{CollectionDetails.size} cm.</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] lg:w-[20%] flex justify-center mt-20">
            <div className="w-[100%] bg-black h-[200px] max-w-[200px] relative flex justify-center items-center">
              <p className="text-2xl font-bold text-white">Scale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
