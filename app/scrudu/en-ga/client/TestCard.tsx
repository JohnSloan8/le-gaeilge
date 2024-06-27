"use client";

import type { PhraseModelWithFavourites } from "@/types/models";
import { LoadingSpinner, PlayAudioButton, TestText } from "@/components";
import { ShowIcon, TickIcon, XIcon } from "@/icons";
import { themeColors } from "@/theme";
import { useState } from "react";
import { addAnswer } from "@/app/actions";

interface TestCardProps {
  phrase: PhraseModelWithFavourites | null;
  adjustRemainingPhrases: (correct: boolean) => void;
}

export default function TestCard({
  phrase,
  adjustRemainingPhrases,
}: TestCardProps) {
  const [showGa, setShowGa] = useState(false);

  if (phrase === null) {
    return null;
  }

  return (
    <div className="w-full p-2 bg-white rounded-md shadow-md">
      <TestText
        text_ga={phrase.p_entry_ga}
        text_en={phrase.p_entry_en}
        showGa={showGa}
      />
      <div className="flex items-center flex-row justify-around p-4 bg-primary-100 rounded-md">
        {phrase.p_audio_data === null ? (
          <button className="w-12 h-12 flex justify-center items-center">
            <LoadingSpinner color={"dark"} size={"small"} />
          </button>
        ) : (
          <PlayAudioButton src={phrase.p_audio_data} size={32} />
        )}

        <button
          className={` flex justify-center items-center ${showGa && "invisible"}`}
          onClick={() => {
            setShowGa(true);
          }}
        >
          <ShowIcon color={themeColors.primary[700]} size={32} />
        </button>

        <button
          className={`flex justify-center items-center ${!showGa && "invisible"}`}
          onClick={async () => {
            await addAnswer(true, phrase.p_id);
            setShowGa(false);
            adjustRemainingPhrases(true);
          }}
        >
          <TickIcon color={themeColors.primary[700]} size={32} />
        </button>
        <button
          className={`flex justify-center items-center ${!showGa && "invisible"}`}
          onClick={async () => {
            await addAnswer(false, phrase.p_id);
            setShowGa(false);
            adjustRemainingPhrases(false);
          }}
        >
          <XIcon color={themeColors.primary[700]} size={32} />
        </button>
      </div>
    </div>
  );
}
