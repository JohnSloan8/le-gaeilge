import type { PhraseModelForDictionary } from "@/types/models";

const filterPhrasesByFavourite = (
  _phrases: PhraseModelForDictionary[],
  showFavourites: boolean,
) => {
  if (showFavourites && _phrases.length > 0) {
    return _phrases.filter((p) => p.p_is_favourited);
  }
  return _phrases;
};

export default filterPhrasesByFavourite;
