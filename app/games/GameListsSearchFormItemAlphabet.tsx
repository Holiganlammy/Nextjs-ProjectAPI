"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CaseUpper } from 'lucide-react';
import { ChevronsUpDown, CircleX } from "lucide-react";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const AZAsciis = Array.from({ length: 26 }, (_, index) => index + 65);

type AlphabetField = ControllerRenderProps<GameListSearch, "artist_first_Alphabet">
interface ComponentProps {
  field: AlphabetField;
}

export function GameListsSearchFormItemAlphabet({ field }: ComponentProps) {
  const [open, setOpen] = useState(false);
  const Select = (letter: string) => {
    field.onChange(letter);
    setOpen(false);
  };
  function onAlphabetClearClick(event: MouseEvent<SVGSVGElement | globalThis.MouseEvent>, field: AlphabetField) {
    event.stopPropagation();
    field.onChange("");
  }
  return (
    <FormItem>
      <Popover open={open} onOpenChange={setOpen} >
        <PopoverTrigger className={`w-full rounded-full mx-auto flex justify-between items-center ${open || field.value ? "border-[#2BAC7E]" : ""}`} asChild>
          <Button className="relative text-xs lg:text-base lg:font-medium px-3 " variant="outline">
            <div>
              <CaseUpper className="w-6 h-6 pt-1" />
            </div>
            <div className="flex items-center justify-center">
              {field.value
                ? `Artist Name Alphabet: ${field.value}`
                : "Artists alphabet A-Z"}
            </div>
            <ChevronsUpDown className={`pl-1 h-4 w-4 opacity-50 ${field.value === "" ? "" : "hidden"}`} />
            <CircleX
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 cursor-pointer text-gray-500 hover:text-red-500
              ${field.value === "" ? "hidden" : ""}`}
              onClick={event => onAlphabetClearClick(event, field)}
            />
          </Button>
        </PopoverTrigger>
        <FormControl>
          <PopoverContent className="w-64" align="start">
            <RadioGroup
              className="grid grid-cols-5"
              defaultValue={field.value}
              onValueChange={Select}
            >
              {AZAsciis.map(ascii => {
                const letter = String.fromCharCode(ascii);
                let labelClass = "rounded-md text-sm text-center block px-3 py-1 select-none cursor-pointer";
                if (letter === field.value) {
                  labelClass += " bg-[#FCEEB1]";
                }
                return (
                  <FormItem key={letter} className="space-y-0">
                    <FormControl>
                      <RadioGroupItem className="hidden" value={letter} />
                    </FormControl>
                    <FormLabel className={labelClass}>
                      {letter}
                    </FormLabel>
                  </FormItem>
                );
              })}
            </RadioGroup>
          </PopoverContent>
        </FormControl>
      </Popover>
    </FormItem>
  )
}
