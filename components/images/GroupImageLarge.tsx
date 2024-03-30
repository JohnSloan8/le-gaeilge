import Image from "next/image";

interface GroupImageLargeProps {
  url: string;
}

export default function GroupImageLarge({ url }: GroupImageLargeProps) {
  return (
    <div className="relative h-[200px] w-full min-w-[150px] max-w-[360px] min-h-[100px]">
      <Image
        src={
          typeof url === "string"
            ? url
            : "https://soks.org.au/wp-content/plugins/give/assets/dist/images/anonymous-user.svg"
        }
        alt={`image of ${url}`}
        className="h-[200px] w-full object-cover object-center"
        width={300}
        height={200}
      />
    </div>
  );
}
