import type { PhraseModelForDictionary } from "@/types/models";

const filterPhrasesBySearchTerm = (
  phrases: PhraseModelForDictionary[] | null,
  searchTerm: string,
) => {
  if (phrases === null) return [];
  if (searchTerm === "") return phrases;
  return phrases.filter((p) => {
    const gaHit = p.p_entry_ga.toLowerCase().includes(searchTerm.toLowerCase());
    const enHit = p.p_entry_en.toLowerCase().includes(searchTerm.toLowerCase());
    return gaHit || enHit;
  });
};

export default filterPhrasesBySearchTerm;
