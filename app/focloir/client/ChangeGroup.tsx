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
    <div className="w-full">
      <select
        value={groupId !== null ? String(groupId) : "-1"}
        onChange={handleChangeGroup}
        className="block w-full px-4 py-2 bg-white text-base border-2 border-primary-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-400 focus:border-primary-400"
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
