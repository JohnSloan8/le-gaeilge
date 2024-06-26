import type { PhraseModelForTest } from "@/types/models";

const getNeverDone = (phrases: PhraseModelForTest[]) => {
  return [
    phrases.filter(
      (phrase) =>
        phrase.p_correct_true_count === 0 && phrase.p_correct_false_count === 0,
    ),
    phrases.filter(
      (phrase) =>
        phrase.p_correct_true_count !== 0 || phrase.p_correct_false_count !== 0,
    ),
  ];
};

const calculateDifficultyMetric = (phrase: PhraseModelForTest) => {
  return (
    (phrase.p_correct_false_count - phrase.p_correct_true_count) /
    (phrase.p_correct_false_count + phrase.p_correct_true_count)
  );
};

const sortPhrasesByDifficulty = (phrasesDone: PhraseModelForTest[]) => {
  // filter all with at least one wrong
  const phrasesWithOnlyMistakes: PhraseModelForTest[] = phrasesDone.filter(
    (phrase) =>
      phrase.p_correct_false_count > 0 && phrase.p_correct_true_count === 0,
  );
  const sortedPhrasesWithOnlyMistakes = phrasesWithOnlyMistakes.sort(
    (a: PhraseModelForTest, b: PhraseModelForTest) => {
      return calculateDifficultyMetric(a) - calculateDifficultyMetric(b);
    },
  );

  console.log("sortedPhrasesWithOnlyMistakes:", sortedPhrasesWithOnlyMistakes);
  return sortedPhrasesWithOnlyMistakes;
};

const calculateNoRemainingPhrases = (
  phrasesAlreadySelected: PhraseModelForTest[],
  noQuestions: number,
) => {
  return noQuestions - phrasesAlreadySelected.length;
};

const getPhrasesForTest = (
  phrases: PhraseModelForTest[],
  noQuestions: number,
) => {
  const [neverDone, done] = getNeverDone(phrases);

  console.log("phrases:", phrases.length);
  console.log("neverDone:", neverDone.length);
  console.log("done:", done.length);

  let phrasesForTest = [];

  if (neverDone.length >= noQuestions) {
    phrasesForTest = neverDone.slice(0, noQuestions);
  } else {
    phrasesForTest.push(neverDone);
    const noRemainingQuestions = calculateNoRemainingPhrases(
      phrasesForTest,
      noQuestions,
    );
    const phrasesSortedByDifficulty = sortPhrasesByDifficulty(done);
    console.log("phrasesSortedByDifficulty:", phrasesSortedByDifficulty);

    // const remainingQuestions = getRe;
  }
  console.log("phrasesForTest:", phrasesForTest.length);

  return neverDone;
};

export default getPhrasesForTest;
