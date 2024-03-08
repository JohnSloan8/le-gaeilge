"use client";

import type { PhraseModel } from "@/types/models";
import { Phrases } from "@/components";

interface FocloirClientControllerProps {
  phrases: PhraseModel[];
}

export default async function FocloirClientController({
  phrases,
}: FocloirClientControllerProps) {
  console.log("phrases:", phrases);
  return (
    <div className="w-full">
      {/* <NewPhrase /> */}
      {/* <Search /> */}
      <Phrases phrases={phrases} />
    </div>
  );
}
