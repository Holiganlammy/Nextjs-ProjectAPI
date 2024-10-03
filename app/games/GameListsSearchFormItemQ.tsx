"use client"
import { FormControl, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControllerRenderProps } from "react-hook-form";
import { Search } from "lucide-react";

interface ComponentProps {
  field: ControllerRenderProps<CollectionSearch, "q">;
}

export function GameListsSearchFormItemQ({ field }: ComponentProps) {
  return (
    <FormItem>
      <FormControl>
        <div>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <Input
            type="search"
            className="rounded-full p-2 bg-white pl-12 h-12 text-base lg:w-full border border-black"
            {...field}
            placeholder="SEARCH"
          />
        </div>
      </FormControl>
    </FormItem>
  )
}
