import { editPhrase } from "@/app/actions";
import { SmallText, SubmitButton } from "@/components";
import type { PhraseModelWithFavourites } from "@/types/models";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

interface EditPhraseProps {
  phrase?: PhraseModelWithFavourites;
  setEditPhrase: (id: number | null) => void;
}

export default function EditPhrase({ phrase, setEditPhrase }: EditPhraseProps) {
  if (phrase === undefined) {
    return null;
  }

  const [entryGa, setEntryGa] = useState(phrase.p_entry_ga);
  const [entryEn, setEntryEn] = useState(phrase.p_entry_en);
  const [changed, setChanged] = useState(false);

  const handleEditGa = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setEntryGa(term);
  };

  const handleEditEn = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setEntryEn(term);
  };

  const checkIfChange = () => {
    setChanged(
      !(entryGa === phrase.p_entry_ga && entryEn === phrase.p_entry_en),
    );
  };

  useEffect(() => {
    checkIfChange();
  }, [entryEn, entryGa]);

  return (
    <div>
      <form action={editPhrase} className="p-1 flex flex-col">
        <input type="hidden" name="phraseId" value={phrase.p_id} />
        <div className="flex gap-1 py-2">
          <label htmlFor="entryGa" className="w-16">
            <SmallText text_ga="Gaeilge" text_en="Irish" dark={false} />
          </label>

          <input
            className="px-1 border border-gray-600 bg-white w-full text-black w-full focus:outline-none focus:bg-yellow-100"
            id="entryGa"
            type="text"
            name="entryGa"
            onChange={handleEditGa}
            value={entryGa}
          />
        </div>
        <div className="flex gap-1 py-2">
          <label htmlFor="entryEn" className="w-16">
            <SmallText text_ga="Bearla" text_en="English" dark={false} />
          </label>
          <input
            className="px-1 border border-gray-600 bg-white w-full text-black w-full focus:outline-none focus:bg-yellow-100"
            id="entryEn"
            type="text"
            name="entryEn"
            onChange={handleEditEn}
            value={entryEn}
          />
        </div>

        <div className="w-full flex justify-center pt-4">
          <SubmitButton
            disabled={!changed}
            onSubmitted={() => {
              setEditPhrase(null);
            }}
          >
            <div className="w-64 border rounded-md bg-primary-600">
              <SmallText text_ga="nuashonrú" text_en="update" dark={true} />
            </div>
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
