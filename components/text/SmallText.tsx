import { EnglishText } from "@/components";

interface SmallTextProps {
  text_ga: string;
  text_en: string;
  dark?: boolean;
}

export default function SmallText({
  text_ga,
  text_en,
  dark = false,
}: SmallTextProps) {
  return (
    <div className="flex flex-col">
      <div className={`${dark ? "text-white" : "text-gray-800"} text-sm mb-1`}>
        {text_ga}
      </div>
      <EnglishText text_en={text_en} dark={dark} />
    </div>
  );
}
