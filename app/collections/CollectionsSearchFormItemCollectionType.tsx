"use client"
import React from 'react'
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ControllerRenderProps } from "react-hook-form";
const CollectionTypes = [
  {
    title: "Rama IX Art Collection",
    value: ""
  },
  // {
  //   title: "Institutional Collections",
  //   value: "institutional"
  // },
  // {
  //   title: "Private Collections",
  //   value: "private"
  // },
];
interface ComponentProps {
  field: ControllerRenderProps<CollectionSearch, "artCollectionType">;
}
export function CollectionsSearchFormItemCollectionType({ field }: ComponentProps) {
  return (
    <FormItem className="">
      <FormControl>
        <RadioGroup
          className="flex justify-center gap-2 mx-auto mb-5 md:mb-10"
          defaultValue={field.value}
          onValueChange={field.onChange}
        >
          {CollectionTypes.map(CollectionType => {
            let labelClass = " bg-background shadow-sm inline-flex items-center justify-center w-52 px-2 py-1 md:whitespace-nowrap h-12 mx-auto bg-white shadow-none md:font-bold text-sm text-center lg:text-base rounded-3xl cursor-pointer hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
            if (CollectionType.value === field.value) {
              labelClass += " text-white hover:text-white bg-[#2BAC7E]"
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
