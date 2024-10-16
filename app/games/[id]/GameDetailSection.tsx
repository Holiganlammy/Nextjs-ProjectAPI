import Image from "next/image";
import { LogOut, Gamepad2, ChartBar, CircleAlert, Minimize2 } from 'lucide-react';
import styles from "./GameDetail.module.css"
// import Link from "next/link";
// import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react";
interface GameDetailsProps {
  GameDetails: GameListDetail
}
export function GameDetailSection({ GameDetails }: GameDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [ClickZoomSmallRes, setClickZoomSmallRes] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(
    GameDetails.screenshots.length > 0 ? GameDetails.screenshots[0].image : null
  );
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
  const HandleZoom = (imageUrl: string | null) => {
    setIsZoomed(!isZoomed);
    setSelectedImage(imageUrl);
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
  const maxDescriptionLength = 500;
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  // const backgroundImage = GameDetails.screenshots.length > 0 ? GameDetails.screenshots[0].image : '';
  return (
    <div className={`max-w-[1140px] mx-auto sm:pt-10 md:pt-0 text-white z-[1]`}>
      <div className=" max-w-[1200px] mx-auto bg-cover bg-top bg-repeat h-[38rem] absolute left-0 right-0 top-[0rem] opacity-[.4]" style={{ backgroundImage: `url('https://www.freetogame.com/g/${GameDetails.id}/background.jpg')` }}>
        <div className={`${styles['background-linear']}`}></div>
      </div>
      <div className="md:p-5 mx-auto relative">
        <Breadcrumb>
          <BreadcrumbList className="mb-5">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mt-1" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/games">
                Game Online Lists
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mt-1" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">{GameDetails.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full">
          <div className="md:hidden">
            <Image
              className="mb-4"
              src={GameDetails.thumbnail}
              alt={GameDetails.title}
              width={2000}
              height={1000}
            />
            <div className="flex space-x-2">
              <Button className="w-[80%] h-[48.5px] space-x-2" asChild>
                <Link href={GameDetails.game_url}>
                  <span className="text-xl">PLAY NOW</span>
                  <LogOut />
                </Link>
              </Button>
              <Button className="w-[19%] h-[48.5px]">FREE</Button>
            </div>
            <div className="mb-10">
              <p className="text-2xl font-bold mb-5">{GameDetails.title}</p>
              <div className="flex space-x-2 font-bold text-base mb-3">
                <Gamepad2 />
                <p> Game Status : {GameDetails.status}</p>
              </div>
              <div className="flex space-x-3 font-bold text-base">
                <ChartBar />
                <p>Short Description : {GameDetails.short_description}</p>
              </div>
            </div>
          </div>
          <div className="md:flex md:gap-5">
            {mainImage ? (
              <div className="w-full md:w-[70%] flex flex-col">
                <div className="hover:z-10 h-0 pb-[60%] w-full relative rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    className="object-center w-full h-full absolute top-0 bottom-0 left-0 right-0"
                    src={mainImage}
                    alt={GameDetails.title}
                    width={2000}
                    height={1000}
                    onClick={ClickZoomSmallRes ? () => HandleZoom(mainImage) : undefined}
                  />
                </div>
                {isZoomed && selectedImage && (
                  <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center overflow-auto">
                    <div className="relative max-w-full max-h-full">
                      <Minimize2
                        onClick={() => HandleZoom(null)}
                        className="absolute top-5 right-5 text-white cursor-pointer text-4xl z-10"
                      />
                      <div className="flex flex-col items-center">
                        <div className="relative flex justify-center item-center overflow-auto">
                          <Image
                            src={mainImage}
                            alt={GameDetails.title}
                            width={1000}
                            height={1000}
                            className="cursor-zoom-out overflow-auto w-[100%]"
                            onClick={() => HandleZoom(null)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {GameDetails.screenshots.slice(0, 4).map((screenshot) => (
                    <div
                      key={screenshot.id}
                      className="hover:z-10 h-0 pb-[50%] w-full relative rounded-lg overflow-hidden cursor-pointer"
                    >
                      <Image
                        className="object-cover object-center w-full h-full absolute top-0 bottom-0 left-0 right-0"
                        src={screenshot.image}
                        alt={GameDetails.title}
                        width={1000}
                        height={500}
                        onClick={() => setMainImage(screenshot.image)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600">Image not available</p>
              </div>
            )}
            <div className="hidden md:w-[30%] md:block">
              <Image
                className="mb-4"
                src={GameDetails.thumbnail}
                alt={GameDetails.title}
                width={2000}
                height={1000}
              />
              <div className="flex space-x-2">
                <Button className="w-[80%] h-[48.5px] space-x-2" asChild>
                  <Link href={GameDetails.game_url}>
                    <span className="text-xl">PLAY NOW</span>
                    <LogOut />
                  </Link>
                </Button>
                <Button className="w-[19%] h-[48.5px]">FREE</Button>
              </div>
              <div className="mb-10">
                <p className="text-2xl font-bold mb-5">{GameDetails.title}</p>
                <div className="flex space-x-2 font-bold text-base mb-3">
                  <Gamepad2 />
                  <p> Game Status : {GameDetails.status}</p>
                </div>
                <div className="flex space-x-3 font-bold text-base">
                  <ChartBar />
                  <p>Short Description : {GameDetails.short_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <div>
            <p className="text-2xl font-bold">Additional Information</p>
            <div className="flex space-x-2 border-b border-[#5e54541a] pb-2">
              <CircleAlert className="w-5" />
              <span>
                Please note this free-to-play game may or may not offer optional in-game purchases.
              </span>
            </div>
            <div className="grid grid-cols-3 my-5 gap-3">
              <div>
                <p className="text-base font-bold">Title</p>
                <span>{GameDetails.title}</span>
              </div>
              <div>
                <p className="text-base font-bold">Developer</p>
                <span>{GameDetails.developer}</span>
              </div>
              <div>
                <p className="text-base font-bold">Publisher</p>
                <span>{GameDetails.publisher}</span>
              </div>
              <div>
                <p className="text-base font-bold">Release Date</p>
                <span>{GameDetails.release_date}</span>
              </div>
              <div>
                <p className="text-base font-bold">Genre</p>
                <span>{GameDetails.genre}</span>
              </div>
              <div>
                <p className="text-base font-bold">Platform</p>
                <span>{GameDetails.platform}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-[700px]">
              <div>
                <p className="text-xl font-bold border-b border-[#5e54541a] pb-2">What do you think about {GameDetails.title}</p>
                <Textarea
                  placeholder={`Write review for ${GameDetails.title} This will be made known to the developer And Community , The developer can make improvements.`}
                  className="mt-5"
                // {...field}
                />
              </div>
              <Button className="mt-2" type="submit">Submit</Button>
            </div>
            <div className="mt-10">
              <div>
                <p className="text-2xl font-bold  border-b border-[#5e54541a] pb-2">About {GameDetails.title}</p>
                <div
                  className={`mt-5 transition-[max-height] duration-1000 ease-in-out overflow-hidden ${isExpanded ? "max-h-[1000px]" : "max-h-40"}`}
                >
                  <p>
                    {isExpanded
                      ? GameDetails.description
                      : `${GameDetails.description?.slice(0, maxDescriptionLength)}...`}
                  </p>
                </div>
              </div>
              {GameDetails.description && GameDetails.description.length > maxDescriptionLength && (
                <button
                  onClick={toggleReadMore}
                  className="text-gray-500 font-semibold mt-2"
                >
                  {isExpanded ? "- Read Less" : "+ Read More"}
                </button>
              )}
              {/* {GameDetails.screenshots.length > 0 && (
                <div>
                  <p className="mt-10 text-2xl font-bold border-b border-[#5e54541a] pb-2">{GameDetails.title} Screenshots</p>
                  <div className="grid grid-cols-3 mt-5 gap-5">
                    {GameDetails.screenshots.map((screenshot) => (
                      <div key={screenshot.id} className={`transition-[transform_1s,shadow] duration-700 ease-in-out  hover:scale-110 hover:z-10 h-0 pb-[100%] relative cursor-zoom-in ${ClickZoomSmallRes ? "zoom-in" : "default"}`}>
                        <Image className="object-cover object-center w-full h-full absolute top-0 bottom-0 left-0 right-0" src={`${screenshot.image}`} alt={`${GameDetails.title}`} width={1000} height={1000} />
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
              {GameDetails.minimum_system_requirements && (
                <div>
                  <div className="border-b border-[#5e54541a] pb-2 space-x-2 mt-10">
                    <span className="mt-10 text-2xl font-bold">Minimum System Requirements</span>
                    <span className="text-lg font-semibold text-gray-500">({GameDetails.platform})</span>
                  </div>
                  <div className="grid grid-cols-2 my-5 gap-3">
                    <div>
                      <p className="text-base font-bold">OS</p>
                      <span className="text-sm font-semibold">{GameDetails.minimum_system_requirements.os}</span>
                    </div>
                    <div>
                      <p className="text-base font-bold">Processor</p>
                      <span className="text-sm font-semibold">{GameDetails.minimum_system_requirements.processor}</span>
                    </div>
                    <div>
                      <p className="text-base font-bold">Memory</p>
                      <span className="text-sm font-semibold">{GameDetails.minimum_system_requirements.memory}</span>
                    </div>
                    <div>
                      <p className="text-base font-bold">Graphics</p>
                      <span className="text-sm font-semibold">{GameDetails.minimum_system_requirements.graphics}</span>
                    </div>
                    <div>
                      <p className="text-base font-bold">Storage</p>
                      <span className="text-sm font-semibold">{GameDetails.minimum_system_requirements.storage}</span>
                    </div>
                    <div>
                      <p className="text-base font-bold">Additional Notes</p>
                      <span className="text-sm font-semibold">Specifications may change during development</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
