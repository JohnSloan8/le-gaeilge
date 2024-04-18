"use client";

import type { ExtendedPhraseModel, GroupModel } from "@/types/models";
import { Phrases, SecondaryButton } from "@/components";
import { useEffect, useState } from "react";
import { SearchIcon } from "@/icons";
import type { ChangeEvent } from "react";
import filterPhrasesByGroup from "@/utils/general/filterPhrasesByGroup";
import filterPhrasesBySearchTerm from "@/utils/general/filterPhrasesBySearchTerm";
import FilterGroup from "@/app/imeachtai/clientComponents/FilterGroup";
import FilterOrder from "@/app/focloir/clientComponents/FilterOrder";
import orderPhrases from "@/utils/general/orderPhrases";

interface FocloirClientControllerProps {
  phrases: ExtendedPhraseModel[];
  getTranslation?: (data: FormData) => Promise<false | undefined>;
  thisGroup: GroupModel | null;
  uniqueGroups: GroupModel[];
}

export default function FocloirClientController({
  phrases,
  getTranslation,
  thisGroup,
  uniqueGroups,
}: FocloirClientControllerProps) {
  const [filteredPhrases, setFilteredPhrases] =
    useState<ExtendedPhraseModel[]>(phrases);
  const [displayPhrases, setDisplayPhrases] =
    useState<ExtendedPhraseModel[]>(phrases);
  const [groupFilter, setGroupFilter] = useState("all");
  const [orderFilter, setOrderFilter] = useState("recent");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const filterPhrases = () => {
    const groupFilteredPhrases = filterPhrasesByGroup(phrases, groupFilter);
    const filteredResults = orderPhrases(groupFilteredPhrases, orderFilter);

    filteredResults !== null && filteredResults !== undefined
      ? setFilteredPhrases(filteredResults)
      : setFilteredPhrases([]);
  };

  const filterBySearch = () => {
    const filteredSearchResults = filterPhrasesBySearchTerm(
      filteredPhrases,
      searchTerm,
    );
    filteredSearchResults !== null && filteredSearchResults !== undefined
      ? setDisplayPhrases(filteredSearchResults)
      : setDisplayPhrases([]);
  };

  useEffect(() => {
    filterPhrases();
  }, [groupFilter, orderFilter, phrases]);

  useEffect(() => {
    filterBySearch();
  }, [searchTerm, filteredPhrases]);

  return (
    <div className="w-full">
      <div className="w-[100vw] bg-cyan-500 flex justify-center">
        <div className="max-w-6xl w-full px-2 pt-5 flex md:flex-row flex-col items-center">
          <div className="md:pl-8 w-fit">
            <FilterGroup
              groups={uniqueGroups}
              groupFilter={groupFilter}
              setGroupFilter={setGroupFilter}
            />
          </div>
          <div className="md:pl-8 w-fit">
            <FilterOrder
              orderFilter={orderFilter}
              setOrderFilter={setOrderFilter}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center p-6">
        <form action={getTranslation} className="flex flex-col w-80">
          <input
            type="hidden"
            name="groupId"
            value={thisGroup === null ? "null" : thisGroup.id}
          />
          <div className="flex h-10 border border-gray-300 bg-white rounded-2xl py-2 px-3">
            <div className="pr-2">
              <SearchIcon />
            </div>
            <input
              className="appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          {displayPhrases.length === 0 && (
            <div className="flex justify-center m-4">
              <SecondaryButton text_ga="Aistrigh" text_en="Translate" />
            </div>
          )}
        </form>
      </div>
      <div className="flex justify-center w-full">
        <div className="max-w-6xl w-full">
          <Phrases phrases={displayPhrases} limit={1000} />
        </div>
      </div>
    </div>
  );
}
