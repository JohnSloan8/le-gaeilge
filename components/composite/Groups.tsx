import Link from "next/link";
import { GroupCardSmall, SmallMarginContainer } from "@/components";
import type { GroupModel } from "@/types/models";

interface GroupsProps {
  groups: GroupModel[] | null;
}

export default async function Groups({ groups }: GroupsProps) {
  return (
    <div className="flex flex-wrap w-full justify-center">
      {groups !== null
        ? groups.map((g: GroupModel, index: number) => (
            <SmallMarginContainer key={String(index)}>
              <Link href={`/grupai/${g.URL}`}>
                <GroupCardSmall
                  text_ga={`${g.name_ga}`}
                  text_en={`${g.name_en}`}
                  image={`${g.image}`}
                />
              </Link>
            </SmallMarginContainer>
          ))
        : null}
    </div>
  );
}
