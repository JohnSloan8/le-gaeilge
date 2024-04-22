import { SearchIcon, TranslateIcon } from "@/icons";
import type { ChangeEvent } from "react";
import { getTranslation } from "@/app/actions";
import { XSmallText } from "@/components";

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
    <div className="flex h-14 w-full bg-activeArea-main justify-center p-2 border-b border-background-light">
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
        {/* {searchTerm !== "" && ( */}
        <button
          disabled={searchTerm === ""}
          className={`w-24 rounded-lg bg-activeArea-dark flex items-center ${searchTerm === "" && "opacity-40"}`}
        >
          <div className="w-[36px] h-[36px] p-1.5 flex items-center justify-center">
            <TranslateIcon />
          </div>
          <XSmallText text_ga="Aistrigh" text_en="Translate" dark={true} />
        </button>
        {/* )} */}
      </form>
    </div>
  );
}
