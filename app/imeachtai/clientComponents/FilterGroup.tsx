import { type Dispatch, type SetStateAction } from "react";
import type { GroupModel } from "@/types/models";
import { SmallTitle } from "@/components";

interface FilterGroupProps {
  groups: GroupModel[];
  groupFilter: string;
  setGroupFilter: Dispatch<SetStateAction<string>>;
}

export default function FilterGroup({
  groups,
  groupFilter,
  setGroupFilter,
}: FilterGroupProps) {
  return (
    <div className="flex w-fit">
      <div className="p-1 w-24">
        <SmallTitle text_en="group" text_ga="grúpa" inline={true} />
      </div>
      <select
        className="h-8 w-64"
        value={groupFilter}
        onChange={(e) => {
          setGroupFilter(e.target.value);
        }}
      >
        <option value="all">go leir (all)</option>
        {groups.map((group, i) => (
          <option key={i} value={group.URL}>
            {`${group.name_ga} (${group.name_en})`}
          </option>
        ))}
      </select>
    </div>
  );
}
