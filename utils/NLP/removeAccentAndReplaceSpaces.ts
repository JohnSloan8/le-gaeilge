const removeAccentsAndReplaceSpaces = (inputString: string): string => {
  // Remove accents from vowels
  const stringWithoutAccents = inputString
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Replace spaces with hyphens
  const stringWithHyphens = stringWithoutAccents.replace(/\s+/g, "-");

  return stringWithHyphens;
};

export default removeAccentsAndReplaceSpaces;
