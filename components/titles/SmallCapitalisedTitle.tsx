import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";

interface SmallCapitalisedTitleProps {
  text_ga: string;
  text_en: string;
}

export default async function SmallCapitalisedTitle({
  text_ga,
  text_en,
}: SmallCapitalisedTitleProps) {
  return (
    <div>
      <div className="inline">{text_ga.toUpperCase()}</div>
      <div className="inline english-text">{"  " + text_en}</div>
    </div>
  );
}
