"use client";

import type {
  PhraseModelWithFavourites,
  GroupModel,
  CategoryModel,
} from "@/types/models";
import { useEffect, useState } from "react";
import Search from "./Search";
import type { ChangeEvent } from "react";
import {
  filterPhrasesByFavourite,
  filterPhrasesBySearchTerm,
  sortPhrases,
} from "@/utils";
import type { Session } from "@supabase/supabase-js";
import SortAndFilter from "./SortAndFilter";
import EditPhrase from "./EditPhrase";
import Phrases from "./Phrases";
import { Popup, SmallText } from "@/components";
import Sort from "./Sort";
import ChangeGroup from "./ChangeGroup";
import { useRouter } from "next/navigation";
import AddPhrase from "./AddPhrase";
import ChangeCategory from "./ChangeCategory";

interface ControllerProps {
  phrases: PhraseModelWithFavourites[] | null;
  groups: GroupModel[] | null;
  group_id: number | null;
  favourite: boolean;
  sort: string | null;
  session: Session | null;
  categories: CategoryModel[] | null;
  search: string;
}

export default function Controller({
  phrases,
  groups,
  group_id,
  session,
  favourite,
  sort,
  categories,
  search,
}: ControllerProps) {
  const [displayPhrases, setDisplayPhrases] = useState<
    PhraseModelWithFavourites[]
  >([]);
  const [groupId, setGroupId] = useState<number | null>(group_id);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(search);
  const [editPhrase, setEditPhrase] = useState<number | null>(null);
  const [order, setOrder] = useState<string>(
    sort === "newest" ? "newest" : "oldest",
  );
  const [editPopupOpen, setEditPopupOpen] = useState<boolean>(false);
  const [sortPopupOpen, setSortPopupOpen] = useState<boolean>(false);
  const [addPhrasePopupOpen, setAddPhrasePopupOpen] = useState<boolean>(false);
  const [showFavourites, setShowFavourites] = useState<boolean>(favourite);
  const router = useRouter();

  const filterBySearch = (
    _phrases: PhraseModelWithFavourites[],
    term: string,
  ) => {
    return filterPhrasesBySearchTerm(_phrases, term);
  };

  const handleChangeGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("e.target.value:", e.target.value);
    if (e.target.value !== undefined) {
      setGroupId(Number(e.target.value));
      console.log("pushing to router");
    }
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("e.target.value:", e.target.value);
    if (e.target.value !== undefined) {
      setCategoryId(Number(e.target.value));
    }
  };

  useEffect(() => {
    router.push(
      `/focloir?groupId=${groupId === -1 ? null : groupId}&favourite=${showFavourites}&sort=${order}&categoryId=${categoryId === -1 ? null : categoryId}`,
    );
  }, [order, categoryId, showFavourites]);

  useEffect(() => {
    router.push(
      `/focloir?groupId=${groupId === -1 ? null : groupId}&favourite=${showFavourites}&sort=${order}&categoryId=null`,
    );
  }, [groupId]);

  useEffect(() => {
    sortPopupOpen && setSortPopupOpen(false);
    const favouritedPhrases = filterPhrasesByFavourite(
      phrases !== null ? phrases : [],
      showFavourites,
    );
    const sortedPhrases = sortPhrases(favouritedPhrases, order);
    const searchedPhrases = filterBySearch(sortedPhrases, searchTerm);
    setDisplayPhrases(searchedPhrases);
  }, [showFavourites, order, searchTerm, phrases]);

  useEffect(() => {
    editPhrase === null ? setEditPopupOpen(false) : setEditPopupOpen(true);
  }, [editPhrase]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  return (
    <div className="relative w-full flex flex-grow flex-col">
      <div className="relative max-w-2xl">
        <Popup isOpen={editPopupOpen} setOpen={setEditPopupOpen}>
          <EditPhrase
            phrase={displayPhrases.find((p) => p.p_id === editPhrase)}
            setEditPhrase={(id) => {
              setEditPhrase(id);
            }}
          />
        </Popup>
      </div>
      <div className="relative max-w-2xl">
        <Popup isOpen={sortPopupOpen} setOpen={setSortPopupOpen}>
          <Sort order={order} setOrder={setOrder} />
        </Popup>
      </div>
      <div className="relative max-w-2xl">
        <Popup isOpen={addPhrasePopupOpen} setOpen={setAddPhrasePopupOpen}>
          <AddPhrase
            groupId={groupId}
            setAddPhrasePopupOpen={(open) => {
              setAddPhrasePopupOpen(open);
            }}
          />
        </Popup>
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-center bg-primary-600 py-2">
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <div className="w-full flex max-w-2xl flex-row gap-2 px-2 items-center">
                <div className="w-1/2 flex flex-col">
                  <div className="items-center justify-center">
                    <ChangeGroup
                      groupId={groupId}
                      handleChangeGroup={handleChangeGroup}
                      groups={groups}
                    />
                  </div>
                </div>
                <div className="w-1/2  flex flex-col">
                  <div className="items-center justify-center">
                    <ChangeCategory
                      categoryId={categoryId}
                      handleChangeCategory={handleChangeCategory}
                      categories={categories}
                    />
                  </div>
                </div>
              </div>
              <Search
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                setSearchTerm={setSearchTerm}
                groupId={groupId}
                userId={session?.user.id}
              />
              <SortAndFilter
                setSortPopupOpen={setSortPopupOpen}
                setAddPhrasePopupOpen={setAddPhrasePopupOpen}
                showFavourites={showFavourites}
                setShowFavourites={setShowFavourites}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="w-full max-w-2xl flex flex-col flex-grow p-2">
            <Phrases
              phrases={displayPhrases}
              session={session}
              setEditPhrase={setEditPhrase}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
