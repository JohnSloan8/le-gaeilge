import Image from "next/image";

import { LargeTitle, EventDateAbbr, SmallText } from "@/components";
import { LocationIcon, GroupIcon } from "@/icons";

interface EventCardProps {
  name_ga: string | null;
  name_en: string | null;
  group_name_ga: string | null;
  group_name_en: string | null;
  location_ga: string | null;
  location_en: string | null;
  start_date: string | null;
  start_time: string | null;
  image: string | null;
  // attendees: any[];
}

export default function EventCard({
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
      <div className="relative h-[160px] w-full">
        <div className="absolute top-0 left-0 rounded-tl-md rounded-br-md left-0 p-0.5 px-2 bg-blue-500 text-white">
          <EventDateAbbr start_date={start_date} />
        </div>
        <Image
          src={
            image !== null
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
            <GroupIcon size={32} color="#000" />
          </div>
          <SmallText text_ga={group_name_ga} text_en={group_name_en} />
        </div>
      </div>

      <div className="flex w-full justify-center pt-1.5">
        <div className="relative flex flex-col text-center">
          <div className="px-1 absolute left-[-26px]">
            <LocationIcon />
          </div>
          <SmallText text_ga={location_ga} text_en={location_en} />
        </div>
      </div>
    </div>
  );
}
