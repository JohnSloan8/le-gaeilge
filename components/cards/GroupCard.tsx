import {
  LargeTitle,
  SmallCapitalisedTitle,
  SmallGrayText,
  GroupImage,
} from "@/components";

interface GroupCardProps {
  name_ga: string;
  name_en: string;
  location_ga: string;
  location_en: string;
  description_ga: string;
  description_en: string;
  image: string;
  members: any[];
}

export default async function GroupCard({
  name_ga,
  name_en,
  location_ga,
  location_en,
  description_ga,
  description_en,
  image,
  members,
}: GroupCardProps) {
  return (
    <div className="min-h-[150px] w-full p-1 md:p-3 flex flex-row bg-white rounded-md border-2 bg-white border-purple-300 hover:border-purple-400 hover:bg-purple-50">
      {typeof image === "string" && <GroupImage url={image} />}
      <div className="flex-grow mx-2">
        <LargeTitle text_ga={name_ga} text_en={name_en} />
        <SmallCapitalisedTitle text_ga={location_ga} text_en={location_en} />
        <SmallGrayText text_ga={description_ga} text_en={description_en} />

        <div className="text-md">
          {members.length + " "}baill
          <span className="english-text">{" members"}</span>
        </div>
      </div>
    </div>
  );
}
