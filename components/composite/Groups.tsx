import Link from "next/link";
import { ProfileCard, SmallMarginContainer } from "@/components";

export default async function Groups({ groups }: GroupsModel[]) {
  return (
    <div className="flex flex-wrap w-full justify-center">
      {groups?.map((profile: any, index: number) => (
        <SmallMarginContainer key={String(index)}>
          <Link href={`/proifili/${profile.id}`}>
            <ProfileCard name={profile.name} image={profile.image} />
          </Link>
        </SmallMarginContainer>
      ))}
    </div>
  );
}
