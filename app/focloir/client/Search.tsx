import { SearchIcon, TranslateIcon } from "@/icons";
import type { ChangeEvent } from "react";
import { getTranslation } from "@/app/actions";
import { XSmallText } from "@/components";
import { themeColors } from "@/theme";

interface SearchProps {
  searchTerm: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  groupId: string;
}

export default function Search({
  searchTerm,
  handleSearch,
  groupId,
}: SearchProps) {
  return (
    <div className="flex h-14 w-full justify-center p-2">
      <form action={getTranslation} className="flex gap-2 w-full h-10">
        <input type="hidden" name="groupId" value={groupId} />
        <div className="flex flex-grow border border-gray-300 bg-white rounded-2xl py-2 px-3">
          <div className="pr-2">
            <SearchIcon />
          </div>
          <input
            className="appearance-none text-gray-700 leading-tight w-full focus:outline-none focus:shadow-outline"
            type="text"
            name="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <button className="p-0 flex flex-row gap-1 items-center justify-center">
          <div className=" mr-1 flex items-center justify-center">
            <TranslateIcon color={themeColors.primary[100]} size={26} />
          </div>
          <XSmallText text_ga="aistrigh" text_en="translate" dark={true} />
        </button>
      </form>
    </div>
  );
}
