"use client";

import type { PhraseModel } from "@/types/models";
import { MarginTopContainer, Phrases, SecondaryButton } from "@/components";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

interface FocloirClientControllerProps {
  phrases: PhraseModel[];
  getTranslation?: (data: FormData) => Promise<void>;
  groupId?: number;
  userId?: string;
}

export default function FocloirClientController({
  phrases,
  getTranslation,
  groupId,
  userId,
}: FocloirClientControllerProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<PhraseModel[]>(phrases);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter data based on the search term
    const filteredResults = phrases.filter((p) => {
      const gaHit = p.entry_ga.toLowerCase().includes(term.toLowerCase());
      const enHit = p.entry_en.toLowerCase().includes(term.toLowerCase());
      return gaHit || enHit;
    });

    setSearchResults(filteredResults);
  };

  useEffect(() => {
    console.log("updating");
    const filteredResults = phrases.filter((p) => {
      const gaHit = p.entry_ga.toLowerCase().includes(searchTerm.toLowerCase());
      const enHit = p.entry_en.toLowerCase().includes(searchTerm.toLowerCase());
      return gaHit || enHit;
    });

    setSearchResults(filteredResults);
  }, [phrases]);

  return (
    <div className="w-full">
      <div className="w-[100vw] bg-cyan-500 flex justify-center">
        <div className="max-w-6xl w-full p-2 pt-3 flex md:flex-row flex-col items-center">
          <div className="md:pl-2 w-fit">
            <FilterDate dateFilter={dateFilter} setDateFilter={setDateFilter} />
          </div>
          <div className="md:pl-8 w-fit">
            <FilterGroup
              groups={uniqueGroups}
              groupFilter={groupFilter}
              setGroupFilter={setGroupFilter}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[400px]">
          <form action={getTranslation}>
            <input type="hidden" name="groupId" value={groupId} />
            <input type="hidden" name="userId" value={userId} />
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {groupId !== undefined &&
              searchResults.length === 0 &&
              userId !== undefined && (
                <MarginTopContainer>
                  <div className="w-full flex justify-center">
                    <SecondaryButton text_ga="Aistrigh" text_en="Translate" />
                  </div>
                </MarginTopContainer>
              )}
          </form>
        </div>
      </div>
      <MarginTopContainer>
        <Phrases phrases={searchResults} limit={1000} />
      </MarginTopContainer>
    </div>
  );
}
