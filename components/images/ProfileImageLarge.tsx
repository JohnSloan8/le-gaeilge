import Image from "next/image";

interface ProfileImageLargeProps {
  url: string;
}

export default async function ProfileImageLarge({
  url,
}: ProfileImageLargeProps) {
  return (
    <div className="relative h-[300px] w-[200px]">
      <Image
        src={
          url
            ? url
            : "https://soks.org.au/wp-content/plugins/give/assets/dist/images/anonymous-user.svg"
        }
        alt={`image of ${url}`}
        className="h-[300px] w-full object-cover object-center rounded-md"
        width={200}
        height={300}
      />
    </div>
  );
}
