"use client";
import type { GroupModel } from "@/types/models";

interface ChangeGroupProps {
  groupId: number;
  handleChangeGroup: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  groups: GroupModel[] | null;
}

export default function ChangeGroup({
  groupId,
  handleChangeGroup,
  groups,
}: ChangeGroupProps) {
  // alert(groupId);
  return (
    <div className="w-full h-full">
      <select
        value={groupId}
        onChange={handleChangeGroup}
        className="block w-full h-full pl-1 py-2 bg-gray-200 text-sm rounded-sm outline-none"
      >
        <option
          value={-1}
          className="text-gray-700"
        >{`Go Leir Grúpa (All Groups)`}</option>
        {groups?.map((group, index) => (
          <option
            key={index}
            value={group.id}
            className="text-gray-700"
          >{`${group.name_ga} (${group.name_en})`}</option>
        ))}
      </select>
    </div>
  );
}
