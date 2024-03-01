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
    <div className={`${centered ? "text-center" : ""} mb-1 md:mb-2`}>
      <div className="text-xl md:text-2xl">
        {capitalizeNonGrammatical(text_ga)}
      </div>
      <div className="english-text">
        {"  " + capitalizeNonGrammatical(text_en)}
      </div>
    </div>
  );
}
