"use client"
import { FormControl, FormItem } from "@/components/ui/form";
import { ControllerRenderProps } from "react-hook-form";
import { ArrowUpDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MouseEvent, useState } from "react";
import { CircleX } from "lucide-react";
type sortfield = ControllerRenderProps<CollectionSearch, "sort">
interface ComponentProps {
  field: sortfield;
}
function onSortClearClick(event: MouseEvent<SVGSVGElement | globalThis.MouseEvent>, field: sortfield) {
  event.stopPropagation();
  field.onChange(null);
}
export function CollectionsSearchFormItemSort({ field }: ComponentProps) {
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
              className={`relative w-full xl:w-[220px] rounded-full text-xs lg:text-base lg:font-medium h-10 focus:ring-0 ${open || field.value !== "default" && field.value !== "" ? "visibility-hidden border-[1px] bg-white border-[#2BAC7E]" : ""}`}
            >
              <ArrowUpDown className="w-4 h-4" />
              <SelectValue placeholder="Sort by Artist name" />
            </SelectTrigger>
            {isSelected && (
              <CircleX
                className="absolute right-2 h-4 w-4 cursor-pointer text-red-500"
                onClick={event => onSortClearClick(event, field)}
              />
            )}
          </div>
          <SelectContent>
            <SelectGroup className="font-bold">
              <SelectItem value="default">Sort Artist by Default</SelectItem>
              <SelectItem value="artist__name_en">Artist Name A-Z</SelectItem>
              <SelectItem value="-artist__name_en">Artist Name Z-A</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
    </FormItem>
  )
}
