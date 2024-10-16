"use client";

import { YearPicker } from "@/components/forms";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CircleX, ChevronsUpDown } from "lucide-react";
import { MouseEvent, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
type YearsField = ControllerRenderProps<GameListSearch, "years">;

interface ComponentProps {
  field: YearsField;
  year?: number | string | null;
  endYear?: number | string | null;
}

export function GameListsSearchFormItemYears({ field, year, endYear }: ComponentProps) {
  const [isOpen , setIsOpen] = useState(false)
  let yearsLabel = "Filter year of work"
  if (!!year && !!endYear && !isNaN(+year) && !isNaN(+endYear)) {
    yearsLabel = `Years of work : ${year} - ${endYear}`;
  }
  else if (!!year && !isNaN(+year)) {
    yearsLabel = `Year of work : ${year}`;
  }

  function onYearsClearClick(event: MouseEvent<SVGSVGElement | globalThis.MouseEvent>, field: YearsField) {
    event.stopPropagation();
    field.onChange([]);
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className={`w-full rounded-full text-xs lg:font-medium lg:text-base mx-auto ${year || isOpen ? "border-[#2BAC7E]":""}`} asChild>
        <Button variant="outline" className="justify-between relative px-3">
          <div className="flex items-center justify-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>{yearsLabel}</span>
          </div>
          <ChevronsUpDown className={`pl-1 h-4 w-4 opacity-50 ${year || endYear === "" ? "hidden" : ""}`} />
          <CircleX
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 cursor-pointer text-gray-500 hover:text-red-500 ${year || endYear === "" ? "" : "hidden"}`}
            onClick={event => onYearsClearClick(event, field)}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <YearPicker field={field} />
      </PopoverContent>
    </Popover>
  );
}
