"use client";

import type { PhraseModel } from "@/types/models";
import { Phrases } from "@/components";
import { useEffect, useState } from "react";
import Search from "./Search";
import type { ChangeEvent } from "react";
import filterPhrasesBySearchTerm from "@/utils/general/filterPhrasesBySearchTerm";

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
      <Search
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        groupId={groupId}
      />
      <div className="flex flex-col flex-grow p-1">
        <Phrases phrases={displayPhrases} limit={1000} />
      </div>
    </div>
  );
}
