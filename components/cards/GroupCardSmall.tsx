import { GroupImage, SmallTitle } from "@/components";

interface GroupCardSmallProps {
  text_ga: string;
  text_en: string;
  image: string;
}

export default async function GroupCardSmall({
  text_ga,
  text_en,
  image,
}: GroupCardSmallProps) {
  return (
    <div className="w-[160px] p-1 md:p-3 flex flex-col bg-white rounded-md items-center h-[200px] shadow-md hover:shadow-lg">
      <GroupImage url={image} />
      <SmallTitle text_ga={text_ga} centered={true} />
      <SmallTitle text_ga={""} text_en={text_en} centered={true} />
    </div>
  );
}
