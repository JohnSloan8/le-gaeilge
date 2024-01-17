import Image from "next/image";
import {
  LargeTitle,
  SmallCapitalisedTitle,
  DateAndTime,
  SmallGrayText,
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
  console.log("members:", members);
  return (
    <div className="w-full p-1 md:p-3 flex flex-row min-h-[130px]">
      {image && (
        <div className="">
          <Image
            className="rounded-lg max-w-[120px]"
            src={image} // Replace with the path to your image
            alt={`image of ${name_en}`}
            width={120}
            height={120}
          />
        </div>
      )}
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
