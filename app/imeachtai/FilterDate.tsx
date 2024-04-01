import { SmallTitle } from "@/components";
import { type Dispatch, type SetStateAction } from "react";

interface FilterDateProps {
  dateFilter: string;
  setDateFilter: Dispatch<SetStateAction<string>>;
}

export default function FilterDate({
  dateFilter,
  setDateFilter,
}: FilterDateProps) {
  return (
    <div className="flex w-fit">
      <div className="p-1 w-24">
        <SmallTitle text_en="date" text_ga="dáta" inline={true} />
      </div>
      <select
        className="h-8 w-64"
        value={dateFilter}
        onChange={(e) => {
          setDateFilter(e.target.value);
        }}
      >
        <option value="past">roimhe seo (past)</option>
        <option value="today">inniu (today)</option>
        <option value="this week">an tseachtain seo (this week)</option>
        <option value="next 30 days">
          30 lá ina dhiaidh sin (next 30 days)
        </option>
        <option value="all upcoming">go léir le teacht (all upcoming)</option>
        <option value="all">go léir (all)</option>
      </select>
    </div>
  );
}
