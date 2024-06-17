import { EnglishText } from "@/components";

interface SmallTextProps {
  text_ga: string | null;
  text_en: string | null;
  dark?: boolean;
  inline?: boolean;
}

export default function SmallText({
  text_ga,
  text_en,
  dark = false,
  inline = false,
}: SmallTextProps) {
  return (
    <div className="flex flex-col">
      <div className={`${dark ? "text-white" : "text-gray-800"} text-sm mb-1`}>
        {text_ga !== null ? text_ga : ""}
      </div>
      <EnglishText text_en={text_en} dark={dark} inline={inline} />
    </div>
  );
}
