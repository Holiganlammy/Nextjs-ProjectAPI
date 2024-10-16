"use client"
import { FormControl, FormItem } from "@/components/ui/form";
import { ControllerRenderProps } from "react-hook-form";
import { ArrowUpDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MouseEvent, useState } from "react";
import { CircleX } from "lucide-react";

type sortfield = ControllerRenderProps<GameListSearch, "sort">
interface ComponentProps {
  field: sortfield;
}
function onSortClearClick(event: MouseEvent<SVGSVGElement | globalThis.MouseEvent>, field: sortfield) {
  event.stopPropagation();
  field.onChange(null);
}
export function GameListsSearchFormItemSort({ field }: ComponentProps) {
  const [open, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState<boolean>(field.value !== 'default' && !!field.value);

  const handleValueChange = (value: string | null) => {
    field.onChange(value === 'default' ? null : value);
    setIsSelected(value !== 'default' && !!value);
  };
  return (
    <FormItem>
      <FormControl>
        <Select defaultValue={field.value} onValueChange={handleValueChange} value={field.value} onOpenChange={setOpen} open={open}>
          <div className="relative flex items-center w-full xl:w-[220px]">
            <SelectTrigger
              className={`relative w-full xl:w-[220px] rounded-full text-xs lg:text-sm lg:font-medium h-10 focus:ring-0 ${open || field.value !== "default" && field.value !== "" ? "visibility-hidden border-[1px] bg-[#1c1e22] border-white" : ""}`}
            >
              <ArrowUpDown className="w-4 h-4" />
              <SelectValue placeholder="Sort By Default" />
            </SelectTrigger>
            {isSelected && (
              <CircleX
                className="absolute right-2 h-4 w-4 cursor-pointer text-red-500"
                onClick={event => onSortClearClick(event, field)}
              />
            )}
          </div>
          <SelectContent className="bg-[#1c1e22] text-[#AAAAAA]">
            <SelectGroup>
              <SelectLabel className="font-bold text-base">Sort By :</SelectLabel>
              <SelectItem value="default">Sort By Default</SelectItem>
              <SelectItem value="release-date">Release Date</SelectItem>
              <SelectItem value="popularity">Popular Games</SelectItem>
              <SelectItem value="alphabetical">Alphabetical</SelectItem>
              <SelectItem value="relevance">Relevance</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
    </FormItem>
  )
}
