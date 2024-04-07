"use client";

import type { ExtendedPhraseModel, GroupModel } from "@/types/models";
import {
  MarginTopContainer,
  Phrases,
  PrimaryButton,
  SecondaryButton,
  SmallTitle,
} from "@/components";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import filterPhrasesByGroup from "@/utils/general/filterPhrasesByGroup";
import filterPhrasesBySearchTerm from "@/utils/general/filterPhrasesBySearchTerm";
import FilterGroup from "@/app/imeachtai/clientComponents/FilterGroup";

interface FocloirClientControllerProps {
  phrases: ExtendedPhraseModel[];
  getTranslation?: (data: FormData) => Promise<void>;
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
  const [groupFilter, setGroupFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const filterPhrases = () => {
    const groupFilteredPhrases = filterPhrasesByGroup(phrases, groupFilter);
    const filteredSearchResults = filterPhrasesBySearchTerm(
      groupFilteredPhrases,
      searchTerm,
    );
    console.log("filteredSearchResults:", filteredSearchResults);
    filteredSearchResults !== null && filteredSearchResults !== undefined
      ? setFilteredPhrases(filteredSearchResults)
      : setFilteredPhrases([]);
  };

  useEffect(() => {
    filterPhrases();
  }, [groupFilter, searchTerm]);

  return (
    <div className="w-full">
      <div className="w-[100vw] bg-cyan-500 flex justify-center">
        <div className="max-w-6xl w-full p-2 pt-3 flex md:flex-row flex-col items-center">
          <div className="md:pl-8 w-fit">
            <FilterGroup
              groups={uniqueGroups}
              groupFilter={groupFilter}
              setGroupFilter={setGroupFilter}
            />
          </div>
          <div className="flex w-fit border">
            <div className="p-1 w-32">
              <SmallTitle text_en="search" text_ga="cuardaigh" inline={true} />
            </div>
            <form action={getTranslation} className="flex">
              <input
                type="hidden"
                name="groupId"
                value={thisGroup === null ? 0 : thisGroup.id}
              />
              <input
                className="appearance-none h-10 rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
              {filteredPhrases.length === 0 && (
                <div className="inline">
                  <PrimaryButton text_ga="Aistrigh" text_en="Translate" />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <MarginTopContainer>
        <Phrases phrases={filteredPhrases} limit={1000} />
      </MarginTopContainer>
    </div>
  );
}
