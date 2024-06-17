"use client";

import type { PhraseModel, PhraseModelWithFavourites } from "@/types/models";
import { useEffect, useState } from "react";
import TestCard from "./TestCard";
import { Text } from "@/components";

interface ControllerProps {
  phrases: PhraseModelWithFavourites[] | null;
}

export default function Controller({ phrases }: ControllerProps) {
  if (phrases === null) {
    return null;
  }

  const [remainingPhrases, setRemainingPhrases] = useState(phrases);
  const [currentPhrase, setCurrentPhrase] =
    useState<PhraseModelWithFavourites | null>(null);

  const popRandomPhrase = () => {
    if (remainingPhrases.length === 0) {
      setCurrentPhrase(null);
    } else {
      const randomIndex = Math.floor(Math.random() * remainingPhrases.length);
      const item = remainingPhrases.splice(randomIndex, 1)[0]; // Remove the item and get it
      setCurrentPhrase(item);
      setRemainingPhrases(remainingPhrases);
    }
  };

  useEffect(() => {
    popRandomPhrase();
  }, []);

  useEffect(() => {
    console.log("currentPhrase:", currentPhrase);
  }, [currentPhrase]);

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
      <TestCard phrase={currentPhrase} popRandomPhrase={popRandomPhrase} />
    </div>
  );
}
