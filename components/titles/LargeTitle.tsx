import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";

interface LargeTitleProps {
  text_ga: string;
  text_en: string;
}

export default async function LargeTitle({
  text_ga,
  text_en,
}: LargeTitleProps) {
  return (
    <div className="mb-1">
      <div className="text-2xl inline font-bold">
        {capitalizeNonGrammatical(text_ga)}
      </div>
      <div className="inline english-text">
        {"  " + capitalizeNonGrammatical(text_en)}
      </div>
    </div>
  );
}
