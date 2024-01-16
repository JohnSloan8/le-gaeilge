import Image from "next/image";
import { LargeTitle, SmallCapitalisedTitle, DateAndTime } from "@/components";

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
  attendees: number | undefined;
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
  // console.log("members:", members);
  return (
    <div className="py-1 md:py-3 mb-1 md:mb-3">
      <div className="w-full flex flex-row max-h-[150px]">
        <div className="flex-grow">
          <div className="mb-2 mr-2">
            <DateAndTime start_date={start_date} start_time={start_time} />
            <LargeTitle text_ga={name_ga} text_en={name_en} />
            <SmallCapitalisedTitle
              text_ga={location_ga}
              text_en={location_en}
            />
            <div className="text-medium">
              {attendees + " "}attendees
              <span className="english-text">{" attendees"}</span>
            </div>
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
      {/* <div>
        <div className="text-md mb-2">
          {capitalizeFirstLetter(description_ga)}
          <span className="english-text">{"  " + description_en}</span>
        </div>
       
      </div> */}
    </div>
  );
}
