"use client";

import type { PhraseModelWithFavourites, GroupModel } from "@/types/models";
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
import ChangeGroup from "./ChangeGroup";

interface ControllerProps {
  phrases: PhraseModelWithFavourites[];
  groups: GroupModel[];
  group_id: number | null;
  favourite: boolean;
  sort: string | null;
  session: Session | null;
}

export default function Controller({
  phrases,
  groups,
  group_id,
  session,
  favourite,
  sort,
}: ControllerProps) {
  const [displayPhrases, setDisplayPhrases] = useState<
    PhraseModelWithFavourites[]
  >([]);
  const [groupId, setGroupId] = useState<number | null>(group_id);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editPhrase, setEditPhrase] = useState<number | null>(null);
  const [order, setOrder] = useState<"newest" | "oldest">(
    sort === "newest" ? "newest" : "oldest",
  );
  const [editPopupOpen, setEditPopupOpen] = useState<boolean>(false);
  const [sortPopupOpen, setSortPopupOpen] = useState<boolean>(false);
  const [groupPopupOpen, setGroupPopupOpen] = useState<boolean>(false);
  const [showFavourites, setShowFavourites] = useState<boolean>(favourite);

  useEffect(() => {
    console.log("displayPhrases:", displayPhrases);
  }, [displayPhrases]);

  const filterPhrasesByFavourite = (_phrases: PhraseModelWithFavourites[]) => {
    if (showFavourites && _phrases.length > 0) {
      return _phrases.filter((p) => p.p_is_favourited);
    }
    return _phrases;
  };

  const sortPhrases = (_phrases: PhraseModelWithFavourites[]) => {
    let sortedPhrases = [];
    if (order === "newest") {
      sortedPhrases = _phrases.sort(
        (a, b) =>
          new Date(b.p_created_at).getTime() -
          new Date(a.p_created_at).getTime(),
      );
    } else {
      sortedPhrases = _phrases.sort(
        (a, b) =>
          new Date(a.p_created_at).getTime() -
          new Date(b.p_created_at).getTime(),
      );
    }
    return sortedPhrases;
  };

  const filterBySearch = (
    _phrases: PhraseModelWithFavourites[],
    term: string,
  ) => {
    return filterPhrasesBySearchTerm(_phrases, term);
  };

  useEffect(() => {
    sortPopupOpen && setSortPopupOpen(false);
    const favouritedPhrases = filterPhrasesByFavourite(phrases);
    const sortedPhrases = sortPhrases(favouritedPhrases);
    const searchedPhrases = filterBySearch(sortedPhrases, searchTerm);
    setDisplayPhrases(searchedPhrases);
  }, [showFavourites, order, searchTerm, phrases]);

  useEffect(() => {
    editPhrase === null ? setEditPopupOpen(false) : setEditPopupOpen(true);
  }, [editPhrase]);

  useEffect(() => {
    alert("need to do this");
  }, [groupId]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  return (
    <div className="relative w-full flex flex-grow flex-col">
      <Popup isOpen={editPopupOpen} setOpen={setEditPopupOpen}>
        <EditPhrase
          phrase={phrases.find((p) => p.p_id === editPhrase)}
          setEditPhrase={(id) => {
            setEditPhrase(id);
          }}
        />
      </Popup>
      <Popup isOpen={groupPopupOpen} setOpen={setGroupPopupOpen}>
        <ChangeGroup
          groupId={groupId}
          setGroupId={setGroupId}
          groups={groups}
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
          setGroupPopupOpen={setGroupPopupOpen}
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
