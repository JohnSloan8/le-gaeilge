import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";

interface SmallTextProps {
  text_ga: string;
  text_en: string;
}

export default async function SmallText({ text_ga, text_en }: SmallTextProps) {
  return (
    <div>
      <div className="inline text-sm md:text-base text-dark">{text_ga}</div>
      <div className="inline english-text">{"  " + text_en}</div>
    </div>
  );
}
