import editPhrase from "@/app/actions/phrases/edit";
import { SmallText, SubmitButton } from "@/components";
import { XIcon } from "@/icons";
import { themeColors } from "@/theme";
import type { PhraseModelWithFavourites } from "@/types/models";
import { useEffect, useState } from "react";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface EditPhraseProps {
  phrase?: PhraseModelWithFavourites;
  setEditPhrase: Dispatch<SetStateAction<number | null>>;
}

export default function EditPhrase({ phrase, setEditPhrase }: EditPhraseProps) {
  if (phrase === undefined) {
    return null;
  }

  const [entryGa, setEntryGa] = useState(phrase.phrase_entry_ga);
  const [entryEn, setEntryEn] = useState(phrase.phrase_entry_en);
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
      !(
        entryGa === phrase.phrase_entry_ga && entryEn === phrase.phrase_entry_en
      ),
    );
  };

  useEffect(() => {
    checkIfChange();
  }, [entryEn, entryGa]);

  const close = () => {
    setEditPhrase(null);
  };

  return (
    <div className="w-full h-full bg-white absolute border border-blue-700">
      <div className="w-full flex justify-end">
        <button onClick={close} className="p-2">
          <XIcon color={themeColors.primary[700]} size={22} />
        </button>
      </div>

      <form action={editPhrase} className="p-1 flex flex-col">
        <input type="hidden" name="phraseId" value={phrase.phrase_id} />

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
        {changed && (
          <div className="w-full flex justify-center pt-4">
            <SubmitButton>
              <div className="w-64 border rounded-md bg-primary-600">
                <SmallText text_ga="nuashonrú" text_en="update" dark={true} />
              </div>
            </SubmitButton>
          </div>
        )}
      </form>
    </div>
  );
}
