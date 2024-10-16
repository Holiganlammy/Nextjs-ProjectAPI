"use client"
import { FormControl, FormItem } from "@/components/ui/form";
import { ControllerRenderProps } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { ListCheck } from 'lucide-react';

interface ComponentProps {
  field: ControllerRenderProps<GameListSearch, "National">;
}

export function GameListsSearchFormItemNationalArtistCheckbox({ field }: ComponentProps) {
  return (
    <FormItem>
      <FormControl>
        <div className={`flex p-2 lg:p-1.5 items-center justify-center shadow-sm border rounded-full w-full mx-auto ${field.value ? "border-[#2BAC7E]" : ""}`} onClick={field.onChange}>
          <Checkbox checked={field.value}
            onCheckedChange={field.onChange}
            className={`w-4 h-4 lg:w-[10%] lg:h-5 items-center data-[state=checked]:bg-white data-[state=checked]:text-primary"
            id="terms1 ${field.value ? "border-[#2BAC7E]" : ""}`}
          />
          <div className="w-[89%] leading-none text-center">
            <label
              className="text-xs lg:text-base mb:font-medium leading-5"
            >
              National Artist
            </label>
          </div>
          <ListCheck />
        </div>
      </FormControl>
    </FormItem>
  )
}
