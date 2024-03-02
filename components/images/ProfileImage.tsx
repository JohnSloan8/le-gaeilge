import Image from "next/image";

interface ProfileImageProps {
  url: string;
}

export default async function ProfileImage({ url }: ProfileImageProps) {
  return (
    <div className="relative h-[75px] md:h-[100px] w-[75px] md:w-[100px]">
      <Image
        src={
          typeof url === "string"
            ? url
            : "https://soks.org.au/wp-content/plugins/give/assets/dist/images/anonymous-user.svg"
        }
        alt={`image of ${url}`}
        className="h-[75px] md:h-[100px] w-full object-cover object-center rounded-[50%]"
        width={100}
        height={100}
      />
    </div>
  );
}
