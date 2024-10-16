"use client"
import { FormControl, FormItem } from "@/components/ui/form";
import { ControllerRenderProps } from "react-hook-form";
import { SlidersHorizontal } from 'lucide-react';
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

type sortfield = ControllerRenderProps<GameListSearch, "genre">
interface ComponentProps {
  field: sortfield;
}
function onSortClearClick(event: MouseEvent<SVGSVGElement | globalThis.MouseEvent>, field: sortfield) {
  event.stopPropagation();
  field.onChange(null);
}
export function GameListsSearchFormItemGenreTag({ field }: ComponentProps) {
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
              <SlidersHorizontal className="w-4 h-4" />
              <SelectValue placeholder="Genre / Tag by Default" />
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
              <SelectLabel className="font-bold text-base">Popular Genre/Tag</SelectLabel>
              <SelectItem value="default">Genre / Tag by Default</SelectItem>
              <SelectItem value="mmorpg">MMORPG</SelectItem>
              <SelectItem value="shooter">Shooter</SelectItem>
              <SelectItem value="strategy">Strategy</SelectItem>
              <SelectItem value="moba">Moba</SelectItem>
              <SelectItem value="racing">Racing</SelectItem>
              <SelectItem value="open-world">Open World</SelectItem>
              <SelectItem value="horror">Horror</SelectItem>
              <SelectItem value="mmofps">MMOFPS</SelectItem>
              <SelectItem value="survival">Survival</SelectItem>
              <SelectItem value="battle-royale">Battle Royale</SelectItem>
              <SelectItem value="mmo">MMO</SelectItem>
              <SelectItem value="fighting">Fighting</SelectItem>
            </SelectGroup>
            <SelectGroup >
              <SelectLabel className="font-bold text-base">Browse by Genre</SelectLabel>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="social">Social</SelectItem>
              <SelectItem value="sandbox">Sandbox</SelectItem>
              <SelectItem value="pvp">PVP</SelectItem>
              <SelectItem value="pve">PVE</SelectItem>
              <SelectItem value="pixel">Pixel</SelectItem>
              <SelectItem value="voxel">Voxel</SelectItem>
              <SelectItem value="zombie">Zombie</SelectItem>
              <SelectItem value="turn-based">Turn Based</SelectItem>
              <SelectItem value="first-person">First Person</SelectItem>
              <SelectItem value="third-Person">Third Person</SelectItem>
              <SelectItem value="top-down">Top Down</SelectItem>
              <SelectItem value="tank">Tank</SelectItem>
              <SelectItem value="space">Space</SelectItem>
              <SelectItem value="sailing">Sailing</SelectItem>
              <SelectItem value="side-scroller">Side Scroller</SelectItem>
              <SelectItem value="superhero">Superhero</SelectItem>
              <SelectItem value="permadeath">Permadeath</SelectItem>
              <SelectItem value="card">Card</SelectItem>
              <SelectItem value="mmotps">MMOTPS</SelectItem>
              <SelectItem value="3d">3D Graphics</SelectItem>
              <SelectItem value="2d">2D Graphics</SelectItem>
              <SelectItem value="fantasy">Fantasy</SelectItem>
              <SelectItem value="sci-fi">Sci-fi</SelectItem>
              <SelectItem value="action-rpg">Action RPG</SelectItem>
              <SelectItem value="action">Action</SelectItem>
              <SelectItem value="military">Military</SelectItem>
              <SelectItem value="martial-arts">Martial Arts</SelectItem>
              <SelectItem value="flight">Flight</SelectItem>
              <SelectItem value="low-spec">Low Spec</SelectItem>
              <SelectItem value="tower-defense">Tower Defense</SelectItem>
              <SelectItem value="mmorts">MMORTS</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
    </FormItem>
  )
}
