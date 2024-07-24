import { addPhrase } from "@/app/actions";
import { SmallText, SubmitButton } from "@/components";

interface AddPhraseProps {
  setAddPhrasePopupOpen: (open: boolean) => void;
  groupId?: number;
}

export default function AddPhrase({
  setAddPhrasePopupOpen,
  groupId,
}: AddPhraseProps) {
  return (
    <div>
      <form action={addPhrase} className="p-1 flex flex-col">
        <input type="hidden" name="groupId" value={groupId} />

        <div className="flex gap-1 py-2">
          <label htmlFor="entryGa" className="w-16">
            <SmallText text_ga="Gaeilge" text_en="Irish" dark={false} />
          </label>

          <input
            className="px-1 border border-gray-600 bg-white w-full text-black focus:outline-none focus:bg-yellow-100"
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
            className="px-1 border border-gray-600 bg-white w-full text-black focus:outline-none focus:bg-yellow-100"
            id="entryEn"
            type="text"
            name="entryEn"
          />
        </div>

        <div className="w-full flex justify-center pt-4">
          <SubmitButton
            onSubmitted={() => {
              setAddPhrasePopupOpen(false);
            }}
          >
            <div className="w-64 border rounded-md bg-primary-600">
              <SmallText text_ga="cuir" text_en="add" dark={true} />
            </div>
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
