"use client"
// import {
//   SlidersHorizontal,
//   X,
// } from "lucide-react";
import { FilterIcon } from "lucide-react";
import { GameListsSearchFormItemYears } from "./GameListsSearchFormItemYears";
import { useEffect } from "react";
import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GameListsSearchFormItemSort } from "./GameListsSearchFormItemSort"
import { GameListsSearchFormItemQ } from "./GameListsSearchFormItemQ";
import { GameListsSearchFormItemCollectionType } from "./GameListsSearchFormItemCollectionType"
import { GameListsSearchFormItemAlphabet } from "./GameListsSearchFormItemAlphabet"
import { Label } from "@/components/ui/label";
import { GameListsSearchFormItemNationalArtistCheckbox } from "./GameListsSearchFormItemNationalArtistCheckbox"
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CollectionsSearchForm() {

  const searchParams = useSearchParams();
  const year = searchParams.get("year");
  const artCollectionType = searchParams.get("art_collection_type") ?? "";
  const endYear = searchParams.get("end_year");
  const q = searchParams.get("q") ?? "";
  const artist_first_Alphabet = searchParams.get("artist_first_alphabet_en") ?? "";
  // const National = searchParams.get("is_national_artist") === "true";
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);
  const router = useRouter();
  // function onFormSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const params = new URLSearchParams();
  //   if (q) {
  //     params.set("q", q);
  //   }
  //   if (artistFilter) {
  //     params.set("artist", artistFilter);
  //   }
  //   router.push(`/collections?${params.toString()}`);
  // }

  // Extract year values
  let years: number[] = [];
  if (!!year && !!endYear && !isNaN(+year) && !isNaN(+endYear)) {
    years = [+year, +endYear];
  }
  else if (!!year && !isNaN(+year)) {
    years = [+year];
  }

  const form = useForm<CollectionSearch>({
    defaultValues: { q, artCollectionType, years, artist_first_Alphabet, National: false, sort: "default" }
  });

  const [watchYears, watchSort, watchArtCollectionType, watchArtist_first_Alphabet, watchNational] = form.watch(["years", "sort", "artCollectionType", "artist_first_Alphabet", "National"]);
  // Form functions
  function onSubmitValid(values: CollectionSearch) {
    // Get all inputs
    // console.log(values)
    const { q: _q, years: _years, artCollectionType: _artCollectionType, sort: _sort, artist_first_Alphabet: _artist_first_Alphabet, National: _National } = values;
    const _year = _years.length >= 1 ? _years[0] : null;
    const _endYear = _years.length >= 2 ? _years[1] : null;

    // Build URL query params
    const urlSearchParams = new URLSearchParams();
    if (_q && _q !== "") urlSearchParams.set("q", _q);
    if (_artCollectionType && _artCollectionType !== "") urlSearchParams.set("art_collection_type", _artCollectionType);
    if (_artist_first_Alphabet && _artist_first_Alphabet !== "") urlSearchParams.set("artist_first_alphabet_en", _artist_first_Alphabet)
    if (_National) urlSearchParams.set("is_national_artist", _National.toString())
    if (_year) urlSearchParams.set("year", `${_year}`);
    if (_sort && _sort !== "default") urlSearchParams.set("sort", _sort)
    if (_endYear) urlSearchParams.set("end_year", `${_endYear}`);
    // Change URL
    const urlSearchParamsString = urlSearchParams.toString();
    router.push(`/games${urlSearchParamsString ? `?${urlSearchParamsString}` : ""}`);
  }
  useEffect(() => {
    onSubmitValid(form.getValues())
  }, [watchYears, watchSort, watchArtCollectionType, watchArtist_first_Alphabet, watchNational])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitValid, console.error)}>
        <div className="sm:container py-5 mx-auto">
          <div className="mx-auto">
            <FormField
              control={form.control}
              name="artCollectionType"
              render={({ field }) => <GameListsSearchFormItemCollectionType field={field} />}
            />
            <div className="relative max-w-[1000px] mx-auto flex items-center gap-2">
              <div className="flex-grow flex-1">
                <FormField
                  control={form.control}
                  name="q"
                  render={({ field }) => <GameListsSearchFormItemQ field={field} />}
                />
              </div>
              <div className="md:hidden">
                <Button variant="outline" className="px-2" onClick={() => setIsMobileFilterVisible(true)}>
                  <FilterIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-white shadow-lg w-80 p-4 fixed top-0 -right-80 bottom-0 z-50 transform transition-transform duration-300 ease-in-out ${isMobileFilterVisible ? "-translate-x-full" : "translate-x-[0%]"} md:rounded-md md:shadow-none md:w-auto md:mb-6 md:p-3 md:relative md:right-0 md:z-0 md:transform-none md:transition-none md:duration-0`}>
          <div className="space-y-7 md:flex md:justify-center md:gap-3 md:space-y-0 md:max-w-[1000px] md:mx-auto">
            <div className="md:hidden">
              <Button size="sm" onClick={() => setIsMobileFilterVisible(false)}>Back to results</Button>
            </div>
            <div className="md:w-1/4 md:max-w-80">
              <Label className="block mb-4 md:hidden">Filter National Artist</Label>
              <FormField
                control={form.control}
                name="National"
                render={({ field }) => <GameListsSearchFormItemNationalArtistCheckbox field={field} />}
              />
            </div>
            <div className="md:w-1/4 md:max-w-80">
              <Label className="block mb-4 md:hidden">Year / Year ranges</Label>
              <FormField
                control={form.control}
                name="years"
                render={({ field }) => <GameListsSearchFormItemYears field={field} year={year} endYear={endYear} />}
              />
            </div>
            <div className="md:w-1/4 md:max-w-80">
              <Label className="block mb-4 md:hidden">Select First Alphabet Artist Name</Label>
              <FormField
                control={form.control}
                name="artist_first_Alphabet"
                render={({ field }) => <GameListsSearchFormItemAlphabet field={field} />}
              />
            </div>
            <div className="md:w-1/4 md:max-w-80">
              <Label className="block mb-4 md:hidden">Sort By Artist Name</Label>
              <FormField
                control={form.control}
                name="sort"
                render={({ field }) => <GameListsSearchFormItemSort field={field} />}
              />
            </div>
          </div>
        </div>
        {isMobileFilterVisible && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
            onClick={() => setIsMobileFilterVisible(false)}
          />
        )}
      </form>
    </Form>

  )
}
