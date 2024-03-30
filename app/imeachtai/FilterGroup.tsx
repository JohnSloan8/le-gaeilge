import { type Dispatch, type SetStateAction } from "react";
import type { GroupModel } from "@/types/models";

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
    <div>
      <h2>Group Filter</h2>
      <select
        value={groupFilter}
        onChange={(e) => {
          setGroupFilter(e.target.value);
        }}
      >
        <option value="all">All</option>
        {groups.map((group, i) => (
          <option key={i} value={group.name_ga}>
            {group.name_ga}
          </option>
        ))}
      </select>
    </div>
  );
}
