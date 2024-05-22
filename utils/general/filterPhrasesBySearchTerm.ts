import type { PhraseModelWithFavourites } from "@/types/models";

const filterPhrasesBySearchTerm = (
  phrases: PhraseModelWithFavourites[] | null,
  searchTerm: string,
) => {
  if (phrases === null) return null;
  if (searchTerm === "") return phrases;
  return phrases.filter((p) => {
    const gaHit = p.p_entry_ga.toLowerCase().includes(searchTerm.toLowerCase());
    const enHit = p.p_entry_en.toLowerCase().includes(searchTerm.toLowerCase());
    return gaHit || enHit;
  });
};

export default filterPhrasesBySearchTerm;
