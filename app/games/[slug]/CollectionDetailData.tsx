"use client";
import { ExhibitionsItemCarousel } from "@/app/games/[slug]/ExhibitionsCarousel";
import { Related_Carousel_ItemsSections } from "@/app/games/[slug]/RelatedLinksCarousel";
import { CollectionDetail } from "@/app/games/[slug]/CollectionDetailZoom"
import { useState, useEffect } from "react";
import { ChevronLeft } from 'lucide-react';
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function CollectionDetailData(props: { params: { slug: string, id: number } }) {
  const [Detail, setDetail] = useState<CollectionDetail | null>(null);
  const [Artist, setArtist] = useState<CollectionAnother[]>([]);
  const slug = !props.params.slug ? props.params.id : props.params.slug
  useEffect(() => {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    if (apiEndpoint) {
      const apiCollectionDetail = `${apiEndpoint}/api/art-collections/${slug}`;
      fetch(apiCollectionDetail)
        .then(response => response.json())
        .then((responseJson) => {
          setDetail(responseJson);

          const artistID = responseJson.artist?.id;
          if (artistID) {
            const artistIDString = String(artistID);
            const apiCollectArtist = `${apiEndpoint}/api/artists/${artistIDString}`;
            fetch(apiCollectArtist)
              .then(response => response.json())
              .then((artistData) => {
                const artistCollections = artistData.art_collections;
                if (artistCollections) {
                  setArtist(artistCollections);
                }
              })
              .catch(error => console.error("Error fetching artist data:", error));
          }
        })
        .catch(error => console.error("Error fetching art collections data:", error));
    }
  }, [slug]);
  const filteredArtist = Artist.filter(item => item.id !== Detail?.id);
  if (!Detail) {
    return <div>Loading...</div>;
  }

  return (
    <section className="dark:bg-gray-900 lg:mb-20 p-5 2xl:p-0 relative">
      <div className="absolute top-0 left-0 right-0">
        <Link className="absolute top-10 left-5 lg:top-10 lg:left-10 flex justify-center items-center" href="#"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}>
          <ChevronLeft></ChevronLeft>
          <span className="text-2xl font-bold">Back</span>
        </Link>
        <Breadcrumb className="absolute top-24 md:top-12 left-6 md:mb-0 md:left-40 lg:left-52">
          <BreadcrumbList className="font-bold">
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/collections">Collection Rama IX Art</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{Detail.title_en}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="pt-20">
        <CollectionDetail CollectionDetails={Detail} />
        <Related_Carousel_ItemsSections CollectionOther={filteredArtist} />
        <ExhibitionsItemCarousel exhibitions={Detail?.exhibitions} />
      </div>
    </section>
  );
}

export default CollectionDetailData;
