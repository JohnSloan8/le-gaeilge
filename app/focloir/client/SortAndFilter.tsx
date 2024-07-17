import { XSmallText } from "@/components";

import { themeColors } from "@/theme";
import { HeartIcon, UpDownArrowsIcon, AddIcon, GroupIcon } from "@/icons";
import type { Dispatch, SetStateAction } from "react";

interface SortAndFilterProps {
  setSortPopupOpen: Dispatch<SetStateAction<boolean>>;

  setAddPhrasePopupOpen: Dispatch<SetStateAction<boolean>>;
  showFavourites: boolean;
  setShowFavourites: Dispatch<SetStateAction<boolean>>;
}

export default function SortAndFilter({
  setSortPopupOpen,

  setAddPhrasePopupOpen,
  showFavourites,
  setShowFavourites,
}: SortAndFilterProps) {
  return (
    <div className="h-12 pb-2 pt-2 border-t border-primary-100 flex flex-row justify-around">
      <button
        className="p-1 flex flex-row gap-1 items-center justify-center"
        onClick={() => {
          setShowFavourites(!showFavourites);
        }}
      >
        <HeartIcon
          color={themeColors.primary[100]}
          size={28}
          filled={showFavourites}
        />
        <XSmallText text_ga="ceanáin" text_en="favourites" dark={true} />
      </button>
      <button
        className="p-1 flex flex-row gap-1 items-center justify-center"
        onClick={() => {
          setSortPopupOpen(true);
        }}
      >
        <UpDownArrowsIcon color={themeColors.primary[100]} size={28} />
        <XSmallText text_ga="sórtáil" text_en="sort" dark={true} />
      </button>
      <button
        onClick={() => {
          setAddPhrasePopupOpen(true);
        }}
        className="p-1 flex flex-row gap-1 items-center justify-center"
      >
        <AddIcon color={themeColors.primary[100]} size={28} />
        <XSmallText text_ga="cuir" text_en="add" dark={true} />
      </button>
    </div>
  );
}
