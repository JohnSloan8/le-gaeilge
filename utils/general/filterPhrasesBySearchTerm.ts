import type { ExtendedPhraseModel } from "@/types/models";

const filterPhrasesBySearchTerm = (
  phrases: ExtendedPhraseModel[] | null,
  searchTerm: string,
) => {
  if (phrases === null) return null;
  if (searchTerm === "") return phrases;
  return phrases.filter((p) => {
    const gaHit = p.entry_ga.toLowerCase().includes(searchTerm.toLowerCase());
    const enHit = p.entry_en.toLowerCase().includes(searchTerm.toLowerCase());
    return gaHit || enHit;
  });
};

export default filterPhrasesBySearchTerm;
