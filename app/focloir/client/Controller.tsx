"use client";

import type { PhraseModelWithFavourites } from "@/types/models";
import { useEffect, useState } from "react";
import Search from "./Search";
import type { ChangeEvent } from "react";
import filterPhrasesBySearchTerm from "@/utils/general/filterPhrasesBySearchTerm";

import type { Session } from "@supabase/supabase-js";
import SortAndFilter from "./SortAndFilter";
import EditPhrase from "./EditPhrase";
import Phrases from "./Phrases";

interface ControllerProps {
  phrases: PhraseModelWithFavourites[];
  groupId: string;
  session: Session | null;
}

export default function Controller({
  phrases,
  groupId,
  session,
}: ControllerProps) {
  const [displayPhrases, setDisplayPhrases] =
    useState<PhraseModelWithFavourites[]>(phrases);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editPhrase, setEditPhrase] = useState<number | null>(null);

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
    <div className="relative w-full flex flex-grow flex-col">
      {editPhrase !== null && (
        <EditPhrase
          phrase={phrases.find((p) => p.phrase_id === editPhrase)}
          setEditPhrase={setEditPhrase}
        />
      )}
      <div className="bg-primary-600">
        <Search
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          groupId={groupId}
        />
        <SortAndFilter />
      </div>
      <div className="flex flex-col flex-grow p-2">
        <Phrases
          phrases={displayPhrases}
          session={session}
          setEditPhrase={setEditPhrase}
        />
      </div>
    </div>
  );
}
