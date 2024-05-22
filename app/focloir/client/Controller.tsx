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
import { Popup } from "@/components";
import Sort from "./Sort";

interface ControllerProps {
  phrases: PhraseModelWithFavourites[];
  groupId: number | null;
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
  const [order, setOrder] = useState<string>("newest");
  const [editPopupOpen, setEditPopupOpen] = useState<boolean>(false);
  const [sortPopupOpen, setSortPopupOpen] = useState<boolean>(false);
  const [showFavourites, setShowFavourites] = useState<boolean>(false);

  // const sortPhrases = () => {};

  useEffect(() => {
    sortPopupOpen && setSortPopupOpen(false);
    let unsortedPhrases = phrases;
    if (showFavourites) {
      unsortedPhrases = displayPhrases.filter((dP) => dP.p_is_favourited);
    }
    if (order === "newest") {
      setDisplayPhrases(
        unsortedPhrases.sort(
          (a, b) =>
            new Date(b.p_created_at).getTime() -
            new Date(a.p_created_at).getTime(),
        ),
      );
    } else {
      setDisplayPhrases(
        unsortedPhrases.sort(
          (a, b) =>
            new Date(a.p_created_at).getTime() -
            new Date(b.p_created_at).getTime(),
        ),
      );
    }
  }, [order, showFavourites]);

  useEffect(() => {
    editPhrase === null ? setEditPopupOpen(false) : setEditPopupOpen(true);
  }, [editPhrase]);

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
      <Popup isOpen={editPopupOpen} setOpen={setEditPopupOpen}>
        <EditPhrase
          phrase={phrases.find((p) => p.p_id === editPhrase)}
          setEditPhrase={setEditPhrase}
        />
      </Popup>
      <Popup isOpen={sortPopupOpen} setOpen={setSortPopupOpen}>
        <Sort order={order} setOrder={setOrder} />
      </Popup>
      <div className="bg-primary-600">
        <Search
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
          groupId={groupId}
          userId={session?.user.id}
        />
        <SortAndFilter
          setSortPopupOpen={setSortPopupOpen}
          showFavourites={showFavourites}
          setShowFavourites={setShowFavourites}
        />
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
