"use client";

import type { PhraseModelForTest } from "@/types/models";
import { useEffect, useState } from "react";
import TestCard from "./TestCard";
import { MediumText } from "@/components";
import Link from "next/link";

interface ControllerProps {
  phrases: PhraseModelForTest[] | null;
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
    <div className="w-full h-full flex flex-col items-center p-2">
      <div className="p-2">
        <MediumText
          text_ga="Bearla - Gaeilge"
          text_en="English - Irish"
          centered={true}
        />
      </div>
      <div className="w-full max-w-2xl">
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
    </div>
  );
}
