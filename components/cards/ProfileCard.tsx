import Image from "next/image";
import { ProfileImage, SmallText } from "@/components";

interface ProfileCardProps {
  name: string;
  image: string;
}

export default async function ProfileCard({ name, image }: ProfileCardProps) {
  return (
    <div className="w-[150px] p-1 md:p-3 flex flex-col rounded-md items-center h-[170px]">
      <ProfileImage url={image} />
      <div className="flex items-center p-1">
        <SmallText text_ga={name} text_en={""} centered={true} />
      </div>
    </div>
  );
}
