import Image from "next/image";
import capitalizeNonGrammatical from "@/utils/NLP/capitalise-non-grammatical";
import capitalizeFirstLetter from "@/utils/NLP/capitalise-first-letter";

interface GroupCardProps {
  name_ga: string;
  name_en: string;
  location_ga: string;
  location_en: string;
  description_ga: string;
  description_en: string;
  image: string;
  members: number | undefined;
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
        <div className="mb-2">
          <div className="text-2xl font-bold">
            {capitalizeNonGrammatical(name_ga)}
            <span className="english-text">
              {"  " + capitalizeNonGrammatical(name_en)}
            </span>
          </div>
          <div className="">
            {location_ga.toUpperCase()}
            <span className="english-text">
              {"  " + location_en.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="text-md mb-2">
          {capitalizeFirstLetter(description_ga)}
          <span className="english-text">{"  " + description_en}</span>
        </div>
        <div className="text-md">
          {members + " "}baill
          <span className="english-text">{" members"}</span>
        </div>
      </div>
    </div>
  );
}
