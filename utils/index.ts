import capitalizeFirstLetter from "./NLP/capitaliseFirstLetter";
import capitalizeNonGrammatical from "./NLP/capitaliseNonGrammatical";
import daysOfWeek from "./NLP/daysOfWeek";
import monthsOfYear from "./NLP/monthsOfYear";
import removeAccentsAndReplaceSpaces from "./NLP/removeAccentAndReplaceSpaces";

import filterEventsByDate from "./sortData/filterEventsByDate";
import filterEventsByGroup from "./sortData/filterEventsByGroup";
import filterPhrasesByGroup from "./sortData/filterPhrasesByGroup";
import filterPhrasesBySearchTerm from "./sortData/filterPhrasesBySearchTerm";
import filterPhrasesByFavourite from "./sortData/filterPhrasesByFavourite";
import getUniqueGroups from "./sortData/getUniqueGroups";
import orderPhrases from "./sortData/orderPhrases";
import sortPhrases from "./sortData/sortPhrases";

import getLinkObject from "./paths/getLinkObject";

export {
  capitalizeFirstLetter,
  capitalizeNonGrammatical,
  daysOfWeek,
  monthsOfYear,
  removeAccentsAndReplaceSpaces,
  filterEventsByDate,
  filterEventsByGroup,
  filterPhrasesByGroup,
  filterPhrasesBySearchTerm,
  filterPhrasesByFavourite,
  getUniqueGroups,
  orderPhrases,
  getLinkObject,
  sortPhrases,
};
