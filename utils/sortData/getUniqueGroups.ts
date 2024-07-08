import type { GroupModel } from "@/types/models";

const getUniqueGroups = (groups: Array<GroupModel | null>) => {
  const uniqueGroups: GroupModel[] = [];
  const uniqueGroupIds: number[] = [];

  groups?.forEach((group) => {
    if (group !== null && !uniqueGroupIds.includes(group.id)) {
      uniqueGroups.push(group);
      uniqueGroupIds.push(group.id);
    }
  });
  return uniqueGroups;
};

export default getUniqueGroups;
