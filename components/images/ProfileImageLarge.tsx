import Image from "next/image";

interface ProfileImageLargeProps {
  url: string;
}

export default async function ProfileImageLarge({
  url,
}: ProfileImageLargeProps) {
  return (
    <div className="relative h-[240px] w-[180px]">
      <Image
        src={
          url
            ? url
            : "https://soks.org.au/wp-content/plugins/give/assets/dist/images/anonymous-user.svg"
        }
        alt={`image of ${url}`}
        className="h-[240px] w-full object-cover object-center rounded-md"
        width={180}
        height={240}
      />
    </div>
  );
}
