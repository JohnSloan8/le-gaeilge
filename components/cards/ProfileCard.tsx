import { ProfileImage, SmallText, SmallPaddingContainer } from "@/components";

interface ProfileCardProps {
  name: string;
  image: string;
}

export default async function ProfileCard({ name, image }: ProfileCardProps) {
  return (
    <div className="w-[150px] h-[170px] bg-white rounded-md shadow-md hover:shadow-lg">
      <SmallPaddingContainer>
        <div className=" flex flex-col items-center">
          <ProfileImage url={image} />
          <div className="flex items-center p-1">
            <SmallText text_ga={name} text_en={""} centered={true} />
          </div>
        </div>
      </SmallPaddingContainer>
    </div>
  );
}
