"use client"
import React from 'react'
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ControllerRenderProps } from "react-hook-form";
const CollectionTypes = [
  {
    title: "All Platform",
    value: "all"
  },
  {
    title: "Windows (PC)",
    value: "pc"
  },
  {
    title: "Browser (Web)",
    value: "browser"
  },
];
interface ComponentProps {
  field: ControllerRenderProps<GameListSearch, "platformGame">;
}
export function GameListsSearchFormItemGamePlatform({ field }: ComponentProps) {
  return (
    <FormItem className="">
      <FormControl>
        <RadioGroup
          className="flex justify-center gap-2 mx-auto mb-5 md:mb-10 relative w-"
          defaultValue={field.value}
          onValueChange={field.onChange}
        >
          {CollectionTypes.map(CollectionType => {
            let labelClass = " bg-background shadow-sm inline-flex items-center justify-center whitespace-nowrap w-28 md:w-52 px-2 py-1 h-12 mx-auto bg-white shadow-none md:font-bold text-xs text-center lg:text-base rounded-3xl cursor-pointer hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#AAAAAA]";
            if (CollectionType.value === field.value) {
              labelClass += " text-[#AAAAAA] hover:text-white bg-[#1c1e22]"
            }
            return (
              <FormItem key={CollectionType.value} className="flex items-center space-x-1 space-y-0">
                <FormControl>
                  <RadioGroupItem className="hidden" value={CollectionType.value} />
                </FormControl>
                <FormLabel className={labelClass}>
                  {CollectionType.title}
                </FormLabel>
              </FormItem>
            )
          })}
        </RadioGroup>
      </FormControl>
    </FormItem>
  )
}
