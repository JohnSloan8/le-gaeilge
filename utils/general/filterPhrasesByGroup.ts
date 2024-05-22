import type { PhraseModelWithFavourites } from "@/types/models";

const filterPhrasesByGroup = (
  phrases: PhraseModelWithFavourites[] | null,
  filter: string,
) => {
  if (phrases === null) return null;
  if (filter === "all") return phrases;

  return phrases?.filter(
    // (phrase) => phrase.p_group_id !== null && phrase.p_group.URL === filter,
    (phrase) => phrase.p_group_id !== null,
  );
};

export default filterPhrasesByGroup;
