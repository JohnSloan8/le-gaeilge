import type { ExtendedPhraseModel } from "@/types/models";

const filterPhrasesByGroup = (
  phrases: ExtendedPhraseModel[] | null,
  filter: string,
) => {
  if (phrases === null) return null;
  if (filter === "all") return phrases;

  return phrases?.filter(
    (phrase) => phrase.group !== null && phrase.group.URL === filter,
  );
};

export default filterPhrasesByGroup;
