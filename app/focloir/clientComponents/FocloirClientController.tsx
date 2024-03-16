"use client";

import type { PhraseModel } from "@/types/models";
import { MarginTopContainer, Phrases, SecondaryButton } from "@/components";
import { useState } from "react";
import type { ChangeEvent } from "react";

interface FocloirClientControllerProps {
  phrases: PhraseModel[];
  getTranslation?: (data: FormData) => Promise<void>;
  categories: string;
  userId?: string;
}

export default function FocloirClientController({
  phrases,
  getTranslation,
  categories,
  userId,
}: FocloirClientControllerProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<PhraseModel[]>(phrases);

  const categoriesList = JSON.parse(`[${categories}]`);
  console.log("categoriesList:", categoriesList);

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

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-[400px]">
          <form action={getTranslation}>
            <input type="hidden" name="categories" value={categories} />
            <input type="hidden" name="userId" value={userId} />
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {categoriesList.length === 1 &&
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
        <div className="w-full flex justify-center"></div>
      </MarginTopContainer>
      <MarginTopContainer>
        <Phrases phrases={searchResults} limit={1000} />
      </MarginTopContainer>
    </div>
  );
}
