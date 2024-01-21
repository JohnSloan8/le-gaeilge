import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";

interface MediumTitleProps {
  text_ga: string;
  text_en: string;
}

export default async function MediumTitle({
  text_ga,
  text_en,
}: MediumTitleProps) {
  return (
    <div>
      <div className="text-lg md:text-xl inline font-bold">
        {capitalizeNonGrammatical(text_ga)}
      </div>
      <div className="inline english-text">
        {"  " + capitalizeNonGrammatical(text_en)}
      </div>
    </div>
  );
}
