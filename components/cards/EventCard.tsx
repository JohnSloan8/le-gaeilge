import Image from "next/image";
import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";
import capitalizeFirstLetter from "@/utils/NLP/capitalise-first-letter";
import dayjs from "dayjs";

interface EventCardProps {
  name_ga: string;
  name_en: string;
  location_ga: string;
  location_en: string;
  start: string;
  end: string;
  description_ga: string;
  description_en: string;
  image: string;
  attendees: number | undefined;
}

export default async function EventCard({
  name_ga,
  name_en,
  location_ga,
  location_en,
  start,
  end,
  description_ga,
  description_en,
  image,
  attendees,
}: EventCardProps) {
  // console.log("members:", members);
  return (
    <div className="py-1 md:py-3 ">
      <div className="w-full flex flex-row max-h-[150px]">
        <div className="flex-grow">
          <div className="mb-2 mr-2">
            <div className="mb-1">
              <div className="inline">{`${dayjs(start)
                .format("ddd, MMM DD, YYYY, hh:mm A")
                .toUpperCase()}`}</div>
            </div>
            <div className="mb-1">
              <div className="text-2xl inline font-bold">
                {capitalizeNonGrammatical(name_ga)}
              </div>
              <div className="text-sm inline font-light text-english">
                {"  " + capitalizeNonGrammatical(name_en)}
              </div>
            </div>
            <div className="mb-1">
              <div className="inline">{location_ga.toUpperCase()}</div>
              <div className="text-sm inline font-light text-english">
                {"  " + location_en.toUpperCase()}
              </div>
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
      <div>
        <div className="text-md mb-2">
          {capitalizeFirstLetter(description_ga)}
          <span className="text-sm font-light text-english">
            {"  " + description_en}
          </span>
        </div>
        <div className="text-md">
          {attendees + " "}attendees
          <span className="text-sm font-light text-english">
            {" attendees"}
          </span>
        </div>
      </div>
    </div>
  );
}
