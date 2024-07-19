import type { PhraseModelWithFavourites } from "@/types/models";

const sortPhrases = (phrases: PhraseModelWithFavourites[], order: string) => {
  let sortedPhrases = [];
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
