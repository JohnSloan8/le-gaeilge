import type { GroupModel } from "@/types/models";

interface ChangeGroupProps {
  groupId: number | null;
  handleChangeGroup: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  groups: GroupModel[] | null;
}

export default function ChangeGroup({
  groupId,
  handleChangeGroup,
  groups,
}: ChangeGroupProps) {
  return (
    <div className="p-1">
      <select
        value={groupId !== null ? String(groupId) : "-1"}
        onChange={handleChangeGroup}
        className="block w-full px-4 py-2 mt-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option
          value={"-1"}
          className="text-gray-700"
        >{`go leir (all)`}</option>
        {groups?.map((group, index) => (
          <option
            key={index}
            value={String(group.id)}
            className="text-gray-700"
          >{`${group.name_ga} (${group.name_en})`}</option>
        ))}
      </select>
    </div>
  );
}
