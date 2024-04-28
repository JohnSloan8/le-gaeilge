"use client";

import { XSmallText } from "@/components";

import { themeColors } from "@/theme";
import { HeartIcon, UpDownArrowsIcon, AddIcon } from "@/icons";

export default function SortAndFilter() {
  return (
    <div className="h-12 pb-2 pt-2 border-t border-primary-100 flex flex-row justify-around">
      <button className="p-1 flex flex-row gap-1 items-center justify-center">
        <HeartIcon color={themeColors.primary[100]} size={28} />
        <XSmallText text_ga="ceanáin" text_en="favourites" dark={true} />
      </button>

      <button className="p-1 flex flex-row gap-1 items-center justify-center">
        <UpDownArrowsIcon color={themeColors.primary[100]} size={28} />
        <XSmallText text_ga="sórtáil" text_en="sort" dark={true} />
      </button>
      <button className="p-1 flex flex-row gap-1 items-center justify-center">
        <AddIcon color={themeColors.primary[100]} size={28} />
        <XSmallText text_ga="cuir" text_en="add" dark={true} />
      </button>
    </div>
  );
}
