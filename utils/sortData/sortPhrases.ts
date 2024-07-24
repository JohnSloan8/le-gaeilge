import type { PhraseModelForDictionary } from "@/types/models";

const sortPhrases = (
  phrases: PhraseModelForDictionary[],
  order: string,
): PhraseModelForDictionary[] => {
  let sortedPhrases: PhraseModelForDictionary[] = [];
  if (order === "newest") {
    sortedPhrases = phrases.sort(
      (a, b) =>
        new Date(b.p_created_at).getTime() - new Date(a.p_created_at).getTime(),
    );
  } else {
    sortedPhrases = phrases.sort(
      (a, b) =>
        new Date(a.p_created_at).getTime() - new Date(b.p_created_at).getTime(),
    );
  }
  return sortedPhrases;
};

export default sortPhrases;
