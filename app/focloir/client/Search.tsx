import { SearchIcon, TranslateIcon, RefreshIcon } from "@/icons";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { getIrishTranslation } from "@/app/actions";
import { XSmallText, SubmitButton } from "@/components";
import { themeColors } from "@/theme";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  groupId?: number;
  userId?: string;
}

export default function Search({
  searchTerm,
  setSearchTerm,
  handleSearch,
  groupId,
  userId,
}: SearchProps) {
  return (
    <div className="flex h-full w-full justify-center px-2">
      <form action={getIrishTranslation} className="flex gap-2 w-full ">
        <input type="hidden" name="groupId" value={groupId} />
        <input type="hidden" name="userId" value={userId} />
        <div className="flex flex-grow border border-gray-300 bg-white rounded-lg py-2 px-2">
          <div className="pr-1 flex-none">
            <SearchIcon size={20} color={themeColors.primary[300]} />
          </div>
          <div className="flex flex-grow">
            <input
              className="appearance-none text-gray-700 leading-tight w-full focus:outline-none focus:shadow-outline"
              type="text"
              name="text"
              placeholder="Cuardaigh (Search)..."
              value={String(searchTerm)}
              onChange={handleSearch}
            />
          </div>
          {searchTerm !== "" && (
            <div className="pl-1 flex-none">
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                }}
              >
                <RefreshIcon size={20} color={themeColors.primary[300]} />
              </button>
            </div>
          )}
        </div>

        <SubmitButton disabled={searchTerm === ""}>
          <div className="p-0 w-full h-full flex flex-row gap-1 items-center justify-center">
            <div className=" mr-1 flex items-center justify-center">
              <TranslateIcon color={themeColors.primary[100]} size={26} />
            </div>
            <XSmallText text_ga="aistrigh" text_en="translate" dark={true} />
          </div>
        </SubmitButton>
      </form>
    </div>
  );
}
