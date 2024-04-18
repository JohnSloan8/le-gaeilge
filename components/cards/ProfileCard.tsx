import { ProfileImage, SmallText } from "@/components";

interface ProfileCardProps {
  name: string;
  image: string;
}

export default function ProfileCard({ name, image }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="border-2 border-blue-300 rounded-[50%] hover:brightness-110 z-0 hover:z-50">
        <ProfileImage url={image} />
      </div>
      <div className="flex items-center p-1">
        <SmallText text_ga={name.split(" ")[0]} text_en={""} />
      </div>
    </div>
  );
}
