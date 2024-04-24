import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";
import { EnglishText } from "@/components";

interface XLargeTextProps {
  text_ga: string;
  text_en: string;
  centered?: boolean;
}

export default function XLargeText({
  text_ga,
  text_en,
  centered = true,
}: XLargeTextProps) {
  return (
    <div
      className={`bg-primary-100 flex flex-col p-1 ${centered && "items-center"}`}
    >
      <div className="text-2xl">{capitalizeNonGrammatical(text_ga)}</div>
      <EnglishText text_en={capitalizeNonGrammatical(text_en)} />
    </div>
  );
}
