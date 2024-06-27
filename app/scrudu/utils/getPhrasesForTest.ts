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
    (1 + phrase.p_correct_true_count)
  );
};

const sortPhrasesByDifficulty = (phrasesDone: PhraseModelForTest[]) => {
  const sortedPhrasesWithMistakes = phrasesDone.sort(
    (a: PhraseModelForTest, b: PhraseModelForTest) => {
      return calculateDifficultyMetric(b) - calculateDifficultyMetric(a);
    },
  );
  return sortedPhrasesWithMistakes;
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
    phrasesForTest = neverDone;
    console.log("phrasesForTest:", phrasesForTest.length);
    const noRemainingQuestions = calculateNoRemainingPhrases(
      phrasesForTest,
      noQuestions,
    );
    console.log("noRemainingQuestions:", noRemainingQuestions);

    const phrasesSortedByDifficulty = sortPhrasesByDifficulty(done);
    console.log("phrasesSortedByDifficulty:", phrasesSortedByDifficulty.length);

    phrasesForTest = [
      ...phrasesForTest,
      ...phrasesSortedByDifficulty.slice(0, noRemainingQuestions),
    ];

    console.log("phrasesForTest:", phrasesForTest.length);
  }

  return phrasesForTest;
};

export default getPhrasesForTest;
