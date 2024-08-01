// import { XSmallText } from "@/components";

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
    <div className="h-full flex flex-row">
      <button
        className="flex p-1 flex-row items-center justify-around border rounded-md h-10"
        onClick={() => {
          setShowFavourites(!showFavourites);
        }}
      >
        <HeartIcon
          color={themeColors.primary[100]}
          size={24}
          filled={showFavourites}
        />
        {/* <XSmallText text_ga="ceanáin" text_en="favourites" dark={true} /> */}
      </button>
      <button
        className="ml-2 p-1 border rounded-md  flex flex-row items-center justify-around"
        onClick={() => {
          setSortPopupOpen(true);
        }}
      >
        <UpDownArrowsIcon color={themeColors.primary[100]} size={24} />
        {/* <XSmallText text_ga="sórtáil" text_en="sort" dark={true} /> */}
      </button>
      <button
        onClick={() => {
          setAddPhrasePopupOpen(true);
        }}
        className="p-1 border mx-2 rounded-md  flex flex-row items-center  justify-around"
      >
        <AddIcon color={themeColors.primary[100]} size={24} />
        {/* <XSmallText text_ga="cuir" text_en="add" dark={true} /> */}
      </button>
    </div>
  );
}
