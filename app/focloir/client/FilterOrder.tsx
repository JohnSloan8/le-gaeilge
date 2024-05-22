import { SmallTitle } from "@/components";
import type { Dispatch, SetStateAction } from "react";

interface FilterOrderProps {
  orderFilter: string;
  setOrderFilter: Dispatch<SetStateAction<string>>;
}

export default function FilterOrder({
  orderFilter,
  setOrderFilter,
}: FilterOrderProps) {
  return (
    <div className="flex w-fit">
      <div className="p-1 w-16">
        <SmallTitle text_en="order" text_ga="ord" dark={true} />
      </div>
      <select
        className="select-container"
        value={orderFilter}
        onChange={(e) => {
          setOrderFilter(e.target.value);
        }}
      >
        <option value="recent">is déanaí (most recent)</option>
        <option value="oldest">is sine (oldest)</option>
      </select>
    </div>
  );
}
