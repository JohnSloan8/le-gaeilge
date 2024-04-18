import type { ExtendedPhraseModel } from "@/types/models";
import dayjs from "dayjs";

function sortOldest(a: ExtendedPhraseModel, b: ExtendedPhraseModel) {
  return dayjs(b.created_at).diff(dayjs(a.created_at));
}

function sortRecent(a: ExtendedPhraseModel, b: ExtendedPhraseModel) {
  return dayjs(a.created_at).diff(dayjs(b.created_at));
}

// function sortByEntryGaAZ(a: ExtendedPhraseModel, b: ExtendedPhraseModel) {
//   return b.entry_ga.toLowerCase().localeCompare(a.entry_ga.toLowerCase());
// }

// function sortByEntryGaZA(a: ExtendedPhraseModel, b: ExtendedPhraseModel) {
//   return a.entry_ga.toLowerCase().localeCompare(b.entry_ga.toLowerCase());
// }

const orderPhrases = (
  phrases: ExtendedPhraseModel[] | null,
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
