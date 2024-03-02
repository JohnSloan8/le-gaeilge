import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";

interface SmallTitleProps {
  text_ga: string;
  text_en?: string;
  centered?: boolean;
}

export default async function SmallTitle({
  text_ga,
  text_en = undefined,
  centered = false,
}: SmallTitleProps) {
  return (
    <div className={`${centered && "flex text-center"}`}>
      <div className="text-base md:text-lg font-bold">
        {capitalizeNonGrammatical(text_ga)}
      </div>
      {text_en !== undefined && (
        <div className="english-text">
          {"  " + capitalizeNonGrammatical(text_en)}
        </div>
      )}
    </div>
  );
}
