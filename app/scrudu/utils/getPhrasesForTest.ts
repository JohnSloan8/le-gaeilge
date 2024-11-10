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

  let phrasesForTest = [];

  if (neverDone.length >= noQuestions) {
    phrasesForTest = neverDone.slice(0, noQuestions);
  } else {
    phrasesForTest = neverDone;
    const noRemainingQuestions = calculateNoRemainingPhrases(
      phrasesForTest,
      noQuestions,
    );

    const phrasesSortedByDifficulty = sortPhrasesByDifficulty(done);

    phrasesForTest = [
      ...phrasesForTest,
      ...phrasesSortedByDifficulty.slice(0, noRemainingQuestions),
    ];
  }

  return phrasesForTest;
};

export default getPhrasesForTest;
