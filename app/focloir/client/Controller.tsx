"use client";

import type { PhraseModel } from "@/types/models";
import { Phrases, XSmallText } from "@/components";
import { useEffect, useState } from "react";
import Search from "./Search";
import type { ChangeEvent } from "react";
import filterPhrasesBySearchTerm from "@/utils/general/filterPhrasesBySearchTerm";
import { themeColors } from "@/theme";
import { HeartIcon, UpDownArrowsIcon, AddIcon } from "@/icons";

interface ControllerProps {
  phrases: PhraseModel[];
  groupId: string;
  // getTranslation?: (data: FormData) => Promise<false | undefined>;
}

export default function Controller({ phrases, groupId }: ControllerProps) {
  console.log("groupId:", groupId);
  const [displayPhrases, setDisplayPhrases] = useState<PhraseModel[]>(phrases);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const filterBySearch = () => {
    const filteredSearchResults = filterPhrasesBySearchTerm(
      phrases,
      searchTerm,
    );
    filteredSearchResults !== null && filteredSearchResults !== undefined
      ? setDisplayPhrases(filteredSearchResults)
      : setDisplayPhrases([]);
  };

  useEffect(() => {
    filterBySearch();
  }, [searchTerm, phrases]);

  return (
    <div className="w-full flex flex-grow flex-col">
      <div className="bg-primary-600">
        <Search
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          groupId={groupId}
        />
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
      </div>
      <div className="flex flex-col flex-grow p-2">
        <Phrases phrases={displayPhrases} limit={1000} />
      </div>
    </div>
  );
}
