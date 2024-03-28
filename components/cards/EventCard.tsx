import Image from "next/image";

import {
  LargeTitle,
  SmallCapitalisedTitle,
  EventDateAbbr,
  SmallText,
} from "@/components";
import { CalendarIcon, LocationIcon, GroupIcon } from "@/icons";

interface EventCardProps {
  name_ga: string;
  name_en: string;
  group_name_ga: string;
  group_name_en: string;
  location_ga: string;
  location_en: string;
  start_date: string;
  start_time: string;
  image: string;
  // attendees: any[];
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
  // attendees,
}: EventCardProps) {
  return (
    <div className="relative w-[266px] p-2 bg-white rounded-xl shadow-lg hover:shadow-xl">
      <div className="absolute top-0 rounded-tl-xl rounded-br-xl left-0 p-0.5 px-2 bg-blue-800 text-white">
        <EventDateAbbr start_date={start_date} />
      </div>
      <div className="h-[160px] w-full">
        <Image
          src={
            typeof image === "string"
              ? image
              : "https://soks.org.au/wp-content/plugins/give/assets/dist/images/anonymous-user.svg"
          }
          alt={`image of ${image}`}
          className="h-[160px] w-full object-cover object-center rounded-t-md"
          width={180}
          height={120}
        />
      </div>
      <div className="pt-1.5 flex justify-center">
        <LargeTitle text_ga={name_ga} text_en={name_en} centered={true} />
      </div>

      <div className="flex w-full justify-center pt-1.5">
        <div className="relative flex flex-col text-center">
          <div className="px-1 absolute left-[-26px]">
            <GroupIcon />
          </div>
          <div className="text-sm">{group_name_ga}</div>
          <div className="english-text">{group_name_ga}</div>
        </div>
      </div>

      <div className="flex w-full justify-center pt-1.5">
        <div className="relative flex flex-col text-center">
          <div className="px-1 absolute left-[-26px]">
            <LocationIcon />
          </div>
          <div className="text-sm">{location_ga.toUpperCase()}</div>
          <div className="english-text">{"  " + location_en.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
}
