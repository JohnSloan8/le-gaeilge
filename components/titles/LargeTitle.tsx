import { EnglishText } from "@/components";

import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";

interface LargeTitleProps {
  text_ga: string;
  text_en: string;
  centered?: boolean;
}

export default function LargeTitle({
  text_ga,
  text_en,
  centered = false,
}: LargeTitleProps) {
  return (
    <div className={`${centered ? "text-center" : ""}`}>
      <div className="text-lg font-bold">
        {capitalizeNonGrammatical(text_ga)}
      </div>
      <EnglishText text_en={text_en} />
    </div>
  );
}
