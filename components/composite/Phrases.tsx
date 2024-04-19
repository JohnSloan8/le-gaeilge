import { PlayAudioButton, SmallText } from "@/components";
import { PencilIcon } from "@/icons";
import type { PhraseModel } from "@/types/models";

interface PhrasesProps {
  phrases: PhraseModel[];
  limit?: number;
}

export default function Phrases({ phrases, limit = 4 }: PhrasesProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {phrases !== null
        ? phrases.map(
            (p: PhraseModel, index: number) =>
              index < limit && (
                <div
                  className="w-full justify-center flex max-w-lg rounded-xl bg-white p-1 md:p-2 mb-1 md:mb-2 shadow-md"
                  key={String(index)}
                >
                  <div className="grow">
                    <SmallText text_ga={p.entry_ga} text_en={p.entry_en} />
                  </div>
                  <div className="flex items-center flex-row px-2">
                    <button className="mx-2 p-2">
                      <PencilIcon />
                    </button>
                    <PlayAudioButton src={p.audio_data} />
                  </div>
                </div>
              ),
          )
        : null}
    </div>
  );
}
