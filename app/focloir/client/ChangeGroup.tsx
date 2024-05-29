import type { GroupModel } from "@/types/models";
import type { Dispatch, SetStateAction } from "react";

interface ChangeGroupProps {
  groupId: number | null;
  setGroupId: Dispatch<SetStateAction<number | null>>;
  groups: GroupModel[];
}

export default function ChangeGroup({
  groupId,
  setGroupId,
  groups,
}: ChangeGroupProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== undefined) {
      setGroupId(Number(e.target.value));
    } else {
      setGroupId(null);
    }
  };

  return (
    <div className="p-1">
      <select
        value={groupId !== null ? groupId : 0}
        onChange={handleChange}
        className="block w-full px-4 py-2 mt-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option
          key={-1}
          value={String(groupId)}
          className="text-gray-700"
        >{`go leir (all)`}</option>
        {groups.map((group, index) => (
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
