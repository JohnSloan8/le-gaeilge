import { XSmallText } from "@/components";

import { themeColors } from "@/theme";
import { HeartIcon, UpDownArrowsIcon, AddIcon } from "@/icons";
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
    <div className="h-14 pb-2 pt-2 border-t border-primary-100 flex flex-row justify-around">
      <button
        className="flex px-2 flex-row  w-28 items-center justify-around border rounded-lg"
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
        className="px-2 border rounded-lg w-28 flex flex-row items-center justify-around"
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
        className="px-2 border rounded-lg w-28 flex flex-row items-center  justify-around"
      >
        <AddIcon color={themeColors.primary[100]} size={28} />
        <XSmallText text_ga="cuir" text_en="add" dark={true} />
      </button>
    </div>
  );
}
