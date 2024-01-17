import Image from "next/image";
import {
  LargeTitle,
  SmallCapitalisedTitle,
  DateAndTime,
  SmallGrayText,
} from "@/components";

interface EventCardProps {
  name_ga: string;
  name_en: string;
  group_name_ga: string;
  group_name_en: string;
  location_ga: string;
  location_en: string;
  start_date: string;
  start_time: string;
  end: string;
  image: string;
  attendees: any[];
}

export default async function EventCard({
  name_ga,
  name_en,
  group_name_ga,
  group_name_en,
  location_ga,
  location_en,
  start_date,
  start_time,
  image,
  attendees,
}: EventCardProps) {
  return (
    <div className="w-full flex flex-row max-h-[150px]">
      <div className="flex-grow">
        <div className="mb-2 mr-2">
          <DateAndTime start_date={start_date} start_time={start_time} />
          <LargeTitle text_ga={name_ga} text_en={name_en} />
          <SmallCapitalisedTitle text_ga={location_ga} text_en={location_en} />
          <SmallGrayText text_ga={group_name_ga} text_en={group_name_en} />
          <SmallGrayText
            text_ga={attendees.length + " attendees"}
            text_en="attendees"
          />
        </div>
      </div>
      {image && (
        <div className="">
          <Image
            className="rounded-lg max-w-[150px]"
            src={image} // Replace with the path to your image
            alt={`image of ${name_en}`}
            width={150}
            height={150}
          />
        </div>
      )}
    </div>
  );
}
