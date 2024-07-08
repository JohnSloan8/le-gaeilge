import { EnglishText } from "@/components";

import { capitalizeNonGrammatical } from "@/utils";

interface LargeTitleProps {
  text_ga: string | null;
  text_en: string | null;
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
        {text_ga !== null ? capitalizeNonGrammatical(text_ga) : ""}
      </div>
      <EnglishText text_en={text_en !== null ? text_en : ""} />
    </div>
  );
}
