import type { PhraseModelForDictionary } from "@/types/models";
import type { Session } from "@supabase/supabase-js";
import Phrase from "./Phrase";
import type { Dispatch, SetStateAction } from "react";

interface PhrasesProps {
  phrases: PhraseModelForDictionary[];
  session: Session | null;
  setEditPhrase: Dispatch<SetStateAction<number | null>>;
}

export default function Phrases({
  phrases,
  session,
  setEditPhrase,
}: PhrasesProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {phrases !== null
        ? phrases.map((p: PhraseModelForDictionary, index: number) => (
            <Phrase
              phrase={p}
              session={session}
              key={index}
              setEditPhrase={setEditPhrase}
            />
          ))
        : null}
    </div>
  );
}
