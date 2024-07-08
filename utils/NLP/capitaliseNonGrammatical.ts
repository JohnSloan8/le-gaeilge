const capitalizeNonGrammatical = (sentence: string) => {
  const grammaticalWords = [
    "and",
    "but",
    "or",
    "nor",
    "for",
    "so",
    "yet",
    "a",
    "an",
    "the",
    "at",
    "by",
    "in",
    "of",
    "on",
    "to",
    "with",
    "an",
    "na",
    "go",
    "le",
    "ag",
    "ar",
    "as",
    "ó",
    "do",
    "roimh",
    "de",
    "ós",
    "faoi",
    "i",
    "um",
    "trí",
    "agus",
  ];

  const words = sentence.split(" ");

  const capitalizedWords = words.map((word, index) => {
    if (index === 0 || !grammaticalWords.includes(word.toLowerCase())) {
      // Capitalize the first word or words not in the grammatical list
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      // Keep grammatical words in lowercase
      return word.toLowerCase();
    }
  });

  return capitalizedWords.join(" ");
};

export default capitalizeNonGrammatical;
