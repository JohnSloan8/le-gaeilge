import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";

interface LargeTitleProps {
  text_ga: string;
  text_en: string;
  centered?: boolean;
}

export default async function LargeTitle({
  text_ga,
  text_en,
  centered = false,
}: LargeTitleProps) {
  return (
    <div className={`${centered ? "text-center" : ""}`}>
      <div className="text-lg font-bold">
        {capitalizeNonGrammatical(text_ga)}
      </div>
      <div className="english-text">
        {"  " + capitalizeNonGrammatical(text_en)}
      </div>
    </div>
  );
}
