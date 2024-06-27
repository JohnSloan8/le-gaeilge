"use client";

import type { PhraseModelWithFavourites } from "@/types/models";
import { useEffect, useState } from "react";
import TestCard from "./TestCard";
import { Text } from "@/components";
import Link from "next/link";

interface ControllerProps {
  phrases: PhraseModelWithFavourites[] | null;
}

export default function Controller({ phrases }: ControllerProps) {
  if (phrases === null) {
    return null;
  }

  const [remainingPhrases, setRemainingPhrases] = useState(phrases);

  const adjustRemainingPhrases = (correct: boolean) => {
    if (correct) {
      setRemainingPhrases((rP) => {
        return rP.slice(1);
      });
    } else {
      setRemainingPhrases((rP) => {
        return [...rP.slice(1), rP[0]];
      });
    }
  };

  useEffect(() => {
    console.log("RemainingPhrases:", remainingPhrases);
  }, [remainingPhrases]);

  return (
    <div className="w-full h-full flex gap-4 flex-col p-2">
      <Text
        text_ga="Bearla - Gaeilge"
        text_en="English - Irish"
        centered={true}
      />
      {remainingPhrases.length === 0 ? (
        <div className="w-full flex justify-center">
          <Link href="/scrudu" className="underline text-secondary-500">
            back to test choice
          </Link>
        </div>
      ) : (
        <TestCard
          phrase={remainingPhrases[0]}
          adjustRemainingPhrases={adjustRemainingPhrases}
        />
      )}
    </div>
  );
}
