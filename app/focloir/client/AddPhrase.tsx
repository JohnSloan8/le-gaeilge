import { addPhrase } from "@/app/actions";
import { SmallText, SubmitButton } from "@/components";
// import type { PhraseModelWithFavourites } from "@/types/models";
// import { useEffect, useState } from "react";
// import type { ChangeEvent } from "react";

// interface AddPhraseProps {
// phrase?: PhraseModelWithFavourites;
//   setAddPhrase: (id: number | null) => void;
// }

// export default function AddPhrase({ setAddPhrase }: AddPhraseProps) {
export default function AddPhrase() {
  // if (phrase === undefined) {
  //   return null;
  // }

  // const [entryGa, setEntryGa] = useState(phrase.p_entry_ga);
  // const [entryEn, setEntryEn] = useState(phrase.p_entry_en);
  // const [changed, setChanged] = useState(false);

  // const handleAddGa = (e: ChangeEvent<HTMLInputElement>) => {
  //   const term = e.target.value;
  //   setEntryGa(term);
  // };

  // const handleAddEn = (e: ChangeEvent<HTMLInputElement>) => {
  //   const term = e.target.value;
  //   setEntryEn(term);
  // };

  return (
    <div>
      <form action={addPhrase} className="p-1 flex flex-col">
        <div className="flex gap-1 py-2">
          <label htmlFor="entryGa" className="w-16">
            <SmallText text_ga="Gaeilge" text_en="Irish" dark={false} />
          </label>

          <input
            className="px-1 border border-gray-600 bg-white w-full text-black w-full focus:outline-none focus:bg-yellow-100"
            id="entryGa"
            type="text"
            name="entryGa"
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
          />
        </div>

        <div className="w-full flex justify-center pt-4">
          <SubmitButton
            onSubmitted={() => {
              return null;
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
