import { LoadingSpinner, PlayAudioButton, SmallText } from "@/components";
import { HeartIcon, PencilIcon } from "@/icons";
import type { PhraseModelWithFavourites } from "@/types/models";
import { themeColors } from "@/theme";
import { favourite } from "@/app/actions";
import type { Session } from "@supabase/supabase-js";
import getSynthesis from "@/app/actions/phrases/getSynthesis";
import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

// import { useEffect, useState } from "react";
// import getSynthesis from "@/app/actions/phrases/getSynthesis";
interface PhraseProps {
  phrase: PhraseModelWithFavourites;
  session: Session | null;
  setEditPhrase: Dispatch<SetStateAction<number | null>>;
}

export default function Phrase({
  phrase,
  session,
  setEditPhrase,
}: PhraseProps) {
  useEffect(() => {
    const updateSynthesis = async () => {
      await getSynthesis(phrase.phrase_entry_ga, phrase.phrase_id);
    };

    if (phrase.phrase_audio_data === null) {
      void updateSynthesis();
    }
  }, []);

  return (
    <div className="rounded-xl bg-white p-2 mb-2 shadow-lg w-full">
      <div className="w-full justify-center flex ">
        <div className="grow">
          <SmallText
            text_ga={phrase.phrase_entry_ga}
            text_en={phrase.phrase_entry_en}
          />
        </div>
        <div className="flex items-center flex-row">
          <form action={session === null ? () => null : favourite}>
            <button
              type="submit"
              className="w-7 h-7 border flex justify-center items-center"
            >
              <input
                type="hidden"
                name="groupId"
                value={phrase.phrase_group_id}
              />
              <input type="hidden" name="phraseId" value={phrase.phrase_id} />
              <input
                type="hidden"
                name="userId"
                value={session !== null ? session.user.id : ""}
              />
              <input
                type="hidden"
                name="isFavourited"
                value={String(phrase.phrase_is_favourited)}
              />
              <HeartIcon
                color={themeColors.primary[700]}
                size={24}
                filled={phrase.phrase_is_favourited}
              />
            </button>
          </form>
          <button
            className="w-7 h-7 border flex justify-center items-center"
            onClick={() => {
              setEditPhrase(phrase.phrase_id);
            }}
          >
            <PencilIcon
              color={themeColors.primary[700]}
              size={24}
              filled={phrase.phrase_edited}
            />
          </button>
          {phrase.phrase_audio_data === null ? (
            <button className="w-7 h-7 border flex justify-center items-center">
              <LoadingSpinner color={"dark"} size={"small"} />
            </button>
          ) : (
            <PlayAudioButton src={phrase.phrase_audio_data} />
          )}
        </div>
      </div>
    </div>
  );
}
