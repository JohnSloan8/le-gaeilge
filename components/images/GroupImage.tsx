import Image from "next/image";

interface GroupImageProps {
  url: string;
}

export default async function GroupImage({ url }: GroupImageProps) {
  return (
    <div className="relative h-[100px] w-[150px] min-w-[150px] min-h-[100px]">
      <Image
        src={
          url
            ? url
            : "https://soks.org.au/wp-content/plugins/give/assets/dist/images/anonymous-user.svg"
        }
        alt={`image of ${url}`}
        className="h-[100px] w-full object-cover object-center rounded-md"
        width={100}
        height={100}
      />
    </div>
  );
}
