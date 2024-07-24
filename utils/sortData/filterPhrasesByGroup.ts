import type { PhraseModelForDictionary } from "@/types/models";

const filterPhrasesByGroup = (
  phrases: PhraseModelForDictionary[] | null,
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
