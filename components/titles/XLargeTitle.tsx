import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";

interface XLargeTitleProps {
  text_ga: string;
  text_en: string;
  centered?: boolean;
}

export default async function XLargeTitle({
  text_ga,
  text_en,
  centered = true,
}: XLargeTitleProps) {
  return (
    <div className={`flex flex-col ${centered && "items-center"}`}>
      <div className="text-2xl md:text-4xl">
        {capitalizeNonGrammatical(text_ga)}
      </div>
      <div className="english-text">{capitalizeNonGrammatical(text_en)}</div>
    </div>
  );
}
