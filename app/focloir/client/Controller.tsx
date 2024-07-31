"use client";

import type {
  PhraseModelForDictionary,
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
import { Popup } from "@/components";
import Sort from "./Sort";
import ChangeGroup from "./ChangeGroup";
import { useRouter } from "next/navigation";
import AddPhrase from "./AddPhrase";
import ChangeCategory from "./ChangeCategory";
import { AddIcon } from "@/icons";
import { themeColors } from "@/theme";
import AddCategory from "./AddCategory";

interface ControllerProps {
  phrases: PhraseModelForDictionary[] | null;
  groups: GroupModel[] | null;
  group_id: number;
  category_id: number;
  favourite?: boolean;
  sort?: string;
  session: Session | null;
  categories: CategoryModel[] | null;
  search: string;
}

export default function Controller({
  phrases,
  groups,
  group_id,
  category_id,
  session,
  favourite,
  sort,
  categories,
  search,
}: ControllerProps) {
  const [displayPhrases, setDisplayPhrases] = useState<
    PhraseModelForDictionary[]
  >([]);
  const [groupId, setGroupId] = useState<number>(group_id);
  const [categoryId, setCategoryId] = useState<number>(category_id);
  const [searchTerm, setSearchTerm] = useState<string>(search);
  const [editPhrase, setEditPhrase] = useState<number | null>(null);
  const [order, setOrder] = useState<string>(
    sort === "oldest" ? "oldest" : "newest",
  );
  const [editPopupOpen, setEditPopupOpen] = useState<boolean>(false);
  const [sortPopupOpen, setSortPopupOpen] = useState<boolean>(false);
  const [addPhrasePopupOpen, setAddPhrasePopupOpen] = useState<boolean>(false);
  const [addCategoryPopupOpen, setAddCategoryPopupOpen] =
    useState<boolean>(false);
  const [showFavourites, setShowFavourites] = useState<boolean>(
    favourite !== undefined ? favourite : false,
  );
  const router = useRouter();

  const filterBySearch = (
    _phrases: PhraseModelForDictionary[],
    term: string,
  ) => {
    return filterPhrasesBySearchTerm(_phrases, term);
  };

  const handleChangeGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "-1") {
      setGroupId(Number(e.target.value));
    } else {
      setGroupId(-1);
    }
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "-1") {
      setCategoryId(Number(e.target.value));
    } else {
      setCategoryId(-1);
    }
  };

  useEffect(() => {
    const queryStringArray = [];
    if (![undefined, -1].includes(groupId))
      queryStringArray.push(`groupId=${groupId}`);
    if (favourite !== undefined)
      queryStringArray.push(`favourite=${favourite}`);
    if (sort !== undefined) queryStringArray.push(`sort=${sort}`);
    if (![undefined, -1].includes(categoryId))
      queryStringArray.push(`categoryId=${categoryId}`);
    if (searchTerm !== "") queryStringArray.push(`search=${searchTerm}`);

    let queryString = "";
    if (queryStringArray.length > 1) {
      queryString = queryStringArray.join("&");
    } else if (queryStringArray.length === 1) {
      queryString = queryStringArray[0];
    }

    if (queryStringArray.length > 0) {
      queryString = `?${queryString}`;
    }
    router.push(`/focloir${queryString}`);
  }, [categoryId, groupId]);

  useEffect(() => {
    sortPopupOpen && setSortPopupOpen(false);
    const favouritedPhrases = filterPhrasesByFavourite(
      phrases !== null ? phrases : [],
      showFavourites,
    );
    const sortedPhrases = sortPhrases(favouritedPhrases, order);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
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
      <div className="relative max-w-2xl">
        <Popup isOpen={addCategoryPopupOpen} setOpen={setAddPhrasePopupOpen}>
          <AddCategory
            groupId={groupId}
            setAddCategoryPopupOpen={(open) => {
              setAddCategoryPopupOpen(open);
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
                  <div className="flex items-center justify-center">
                    {categories !== null && categories.length !== 0 && (
                      <>
                        <ChangeCategory
                          categoryId={categoryId}
                          handleChangeCategory={handleChangeCategory}
                          categories={categories}
                        />
                        <button
                          onClick={() => {
                            setAddCategoryPopupOpen(true);
                          }}
                          className="ml-2 p-1 border rounded-md  flex flex-row items-center  justify-around"
                        >
                          <AddIcon color={themeColors.primary[100]} size={24} />
                          {/* <XSmallText text_ga="cuir" text_en="add" dark={true} /> */}
                        </button>
                      </>
                    )}
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
