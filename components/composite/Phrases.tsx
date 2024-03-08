import { SmallText } from "@/components";
import type { PhraseModel } from "@/types/models";

interface PhrasesProps {
  phrases: PhraseModel[];
  limit?: number;
}

export default async function Phrases({ phrases, limit = 4 }: PhrasesProps) {
  return (
    <div className="w-full">
      {phrases !== null
        ? phrases.map(
            (d: PhraseModel, index: number) =>
              index < limit && (
                <div
                  className="w-full border flex flex-row p-1 md:p-2"
                  key={String(index)}
                >
                  <div className="w-full">
                    <SmallText text_ga={d.entry_ga} />
                  </div>
                  <div className="w-full">
                    <SmallText text_en={d.entry_en} dictionary={true} />
                  </div>
                </div>
              ),
          )
        : null}
    </div>
  );
}
