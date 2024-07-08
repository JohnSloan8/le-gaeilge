import type { PhraseModelWithFavourites } from "@/types/models";
import dayjs from "dayjs";

function sortOldest(
  a: PhraseModelWithFavourites,
  b: PhraseModelWithFavourites,
) {
  return dayjs(b.p_created_at).diff(dayjs(a.p_created_at));
}

function sortRecent(
  a: PhraseModelWithFavourites,
  b: PhraseModelWithFavourites,
) {
  return dayjs(a.p_created_at).diff(dayjs(b.p_created_at));
}

// function sortByEntryGaAZ(a: PhraseModelWithFavourites, b: PhraseModelWithFavourites) {
//   return b.entry_ga.toLowerCase().localeCompare(a.entry_ga.toLowerCase());
// }

// function sortByEntryGaZA(a: PhraseModelWithFavourites, b: PhraseModelWithFavourites) {
//   return a.entry_ga.toLowerCase().localeCompare(b.entry_ga.toLowerCase());
// }

const orderPhrases = (
  phrases: PhraseModelWithFavourites[] | null,
  filter: string,
) => {
  if (phrases === null) return null;

  switch (filter) {
    case "oldest":
      return phrases.sort(sortOldest);
    // case "alphabetical":
    //   return phrases.sort(sortByEntryGaAZ);
    // case "reverse alphabetical":
    //   return phrases.sort(sortByEntryGaZA);
    default:
      return phrases.sort(sortRecent);
  }
};

export default orderPhrases;
