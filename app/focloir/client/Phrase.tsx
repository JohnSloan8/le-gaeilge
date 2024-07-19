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
      await getSynthesis(String(phrase.p_entry_ga), Number(phrase.p_id));
    };

    console.log("phrase.p_audio_data:", phrase.p_audio_data);
    if (phrase.p_audio_data === null) {
      void updateSynthesis();
    }
  }, []);

  return (
    <div className="rounded-xl bg-white p-2 mb-2 shadow-lg w-full">
      <div className="w-full justify-center flex ">
        <div className="grow">
          <SmallText text_ga={phrase.p_entry_ga} text_en={phrase.p_entry_en} />
        </div>
        <div className="flex items-center flex-row">
          <form action={session === null ? () => null : favourite}>
            <button
              type="submit"
              className="w-7 h-7 flex justify-center items-center"
            >
              <input type="hidden" name="phraseId" value={phrase.p_id} />
              <input
                type="hidden"
                name="userId"
                value={session !== null ? session.user.id : ""}
              />
              <input
                type="hidden"
                name="isFavourited"
                value={String(phrase.p_is_favourited)}
              />
              <HeartIcon
                color={themeColors.primary[700]}
                size={24}
                filled={phrase.p_is_favourited}
              />
            </button>
          </form>
          <button
            className="w-7 h-7 flex justify-center items-center"
            onClick={() => {
              setEditPhrase(Number(phrase.p_id));
            }}
          >
            <PencilIcon
              color={themeColors.primary[700]}
              size={24}
              filled={phrase.p_edited}
            />
          </button>
          {phrase.p_audio_data !== null ? (
            <button className="w-7 h-7 flex justify-center items-center">
              <LoadingSpinner color={"dark"} size={"small"} />
            </button>
          ) : (
            <PlayAudioButton
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}${process.env.NEXT_PUBLIC_AUDIO_STORAGE_PATH}${phrase.p_id}.mp3`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
