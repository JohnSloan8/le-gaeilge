import { ProfileImage, SmallText, SmallPaddingContainer } from "@/components";

interface ProfileCardProps {
  name: string;
  image: string;
}

export default async function ProfileCard({ name, image }: ProfileCardProps) {
  return (
    // <div className="w-[150px] h-[170px] bg-white hover:bg-blue-50 rounded-2xl border border-4 border-blue-200 hover:border-blue-300">
    // <SmallPaddingContainer>
    <div className="flex flex-col items-center">
      <div className="border-2 border-blue-300 rounded-[50%] hover:brightness-110 z-0 hover:z-50">
        <ProfileImage url={image} />
      </div>
      <div className="flex items-center p-1">
        <SmallText text_ga={name.split(" ")[0]} text_en={""} centered={true} />
      </div>
    </div>
    // </SmallPaddingContainer>
    // </div>
  );
}
