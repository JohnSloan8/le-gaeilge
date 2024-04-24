import { PlayAudioButton, SmallText } from "@/components";
import { HeartIcon, PencilIcon } from "@/icons";
import type { PhraseModel } from "@/types/models";
import { themeColors } from "@/theme";

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
                  className="w-full justify-center flex rounded-xl bg-white p-2 mb-2 shadow-lg"
                  key={String(index)}
                >
                  <div className="grow">
                    <SmallText text_ga={p.entry_ga} text_en={p.entry_en} />
                  </div>
                  <div className="flex items-center flex-row">
                    <button className="">
                      <HeartIcon color={themeColors.primary[700]} size={24} />
                    </button>
                    <button className="mx-3">
                      <PencilIcon color={themeColors.primary[700]} size={20} />
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
