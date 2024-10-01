"use client";

import { ControllerRenderProps } from "react-hook-form";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { FormItem, FormControl, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ComponentProps {
  field: ControllerRenderProps<BookSearchForm, "years"> | ControllerRenderProps<ArtistSearch, "nationalYears">;
  startYear?: number;
  endYear?: number;
  nationalYear?: number;
  nationalEndYear?: number;
}


const defaultStartYear = 1950;
const defaultEndYear = (new Date()).getFullYear();
const yearsPerPage = 25;

export default function YearPicker({ field, startYear, endYear } : ComponentProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentPage, setCurrentPage] = useState<number|null>(null);

  // Generate years pages
  const definedStartYear = startYear ?? defaultStartYear;
  const definedEndYear = endYear ?? defaultEndYear;
  const years = Array.from({ length: definedEndYear - definedStartYear + 1 }, (_, k) => k + definedStartYear);
  let yearsPages: number[][] = [];
  for (let k = years.length; k > 0; k -= yearsPerPage) {
    const yearsPage = years.slice(Math.max(k - yearsPerPage, 0), k);
    if (yearsPage.length < 25) {
      yearsPage.splice(0, 0, ...Array.from({ length: 25 - yearsPage.length }, (_, __) => 0))
    }
    yearsPages.splice(0, 0, yearsPage);
  }

  // Get start & end year
  let selectedStartYear: number|null = null;
  let selectedEndYear: number|null = null;
  if (field.value.length >= 1) {
    selectedStartYear = field.value[0];
  }
  if (field.value.length >= 2) {
    selectedEndYear = field.value[1];
  }

  function onChange(checked: CheckedState, year: number) {
    let sortedYears: number[] = [];
    if (selectedStartYear && selectedEndYear) {
      sortedYears = [year];
    }
    else if (selectedStartYear === year) {
      sortedYears = [];
    }
    else if (selectedStartYear) {
      sortedYears = [selectedStartYear, year];
    }
    else {
      sortedYears = [year];
    }
    sortedYears.sort();
    field.onChange(sortedYears);
  }

  useEffect(() => {
    if (!!api) {
      setCurrentPage(api.selectedScrollSnap());
      api.on("select", () => {
        setCurrentPage(api.selectedScrollSnap());
      })
    }
  }, [api]);

  const carouselStartIndex = useMemo(() => {
    const index = yearsPages.findIndex(yearsPage => yearsPage.includes((selectedStartYear ?? selectedEndYear ?? -1)));
    return index === -1 ? yearsPages.length - 1 : index;
  }, []);

  const currentYearsPage = yearsPages.find((_, index) => index === currentPage);
  let carouselTitle = "";
  if (!!currentYearsPage) {
    if (currentYearsPage.length >= 2) {
      carouselTitle = `${currentYearsPage[0]} - ${currentYearsPage[currentYearsPage.length - 1]}`;
    }
    else if (currentYearsPage.length === 1) {
      carouselTitle = `${currentYearsPage[0]}`;
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div>
          <Button className="w-6 h-6" variant="outline" size="icon" onClick={() => api?.scrollPrev()}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-neutral-500 text-sm">
          {carouselTitle}
        </div>
        <div>
          <Button className="w-6 h-6" variant="outline" size="icon" onClick={() => api?.scrollNext()}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Carousel
        opts={{
          startIndex: carouselStartIndex
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {yearsPages.map((yearsPage, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-5 gap-y-1">
                {yearsPage.map((_year, subindex) => {
                  let labelClass = "text-sm text-center block p-1 select-none cursor-pointer";
                  const isYearInRange = !!selectedStartYear && !!selectedEndYear && selectedStartYear < _year && _year < selectedEndYear;
                  const isYearEqualStart = !!selectedStartYear && !!selectedEndYear && selectedStartYear === _year;
                  const isYearEqualEnd = !!selectedStartYear && !!selectedEndYear && selectedEndYear === _year;
                  const isYearEqualSingle = !!selectedStartYear && !selectedEndYear && selectedStartYear === _year;
                  if (isYearInRange) {
                    labelClass += " bg-[#FCEEB1]";
                  }
                  else if (isYearEqualStart) {
                    labelClass += " bg-[#FCEEB1] rounded-l-md";
                  }
                  else if (isYearEqualEnd) {
                    labelClass += " bg-[#FCEEB1] rounded-r-md";
                  }
                  else if (isYearEqualSingle) {
                    labelClass += " bg-[#FCEEB1] rounded-md";
                  }
                  return (
                    <FormItem key={`${index}-${subindex}-${_year}`}>
                      <FormControl>
                        <Checkbox
                          className="hidden"
                          checked={field.value?.includes(_year)}
                          onCheckedChange={checked => onChange(checked, _year)}
                        />
                      </FormControl>
                      <FormLabel className={labelClass}>{_year}</FormLabel>
                    </FormItem>
                  );
                })}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
