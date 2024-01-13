import Image from "next/image";

interface LinkButtonProps {
  name_ga: string;
  name_en: string;
  description_ga: string;
  description_en: string;
  image: string;
}

export default async function GroupCard({
  name_ga,
  name_en,
  description_ga,
  description_en,
  image,
}: LinkButtonProps) {
  return (
    <div className="w-full p-1 md:p-3 flex flex-row">
      {image && (
        <Image
          src={image} // Replace with the path to your image
          alt={`image of ${name_en}`}
          height={100}
          width={100}
          // layout="responsive"
        />
      )}
      {/* <div className="flex-grow">
        <div className="text-2xl font-bold">{name_ga}</div>
        <div className="text-sm font-light text-english">{name_en}</div>
        <div className="text-md">{description_ga}</div>
        <div className="text-sm font-light text-english">{description_en}</div>
      </div> */}
    </div>
  );
}
