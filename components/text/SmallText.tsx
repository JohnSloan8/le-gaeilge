import { EnglishText } from "@/components";

interface SmallTextProps {
  text_ga: string | null;
  text_en: string | null;
  dark?: boolean;
  inline?: boolean;
  centered?: boolean;
}

export default function SmallText({
  text_ga,
  text_en,
  dark = false,
  inline = false,
  centered = false,
}: SmallTextProps) {
  return (
    <div
      className={`flex ${!inline ? "flex-col" : "flex-row"}  ${centered && "justify-center"} relative`}
    >
      <div
        className={`${dark ? "text-white" : "text-gray-800"} text-sm ${inline && "mb-1 mr-1"}`}
      >
        {text_ga !== null ? text_ga : ""}
      </div>
      <EnglishText text_en={text_en} dark={dark} inline={inline} />
    </div>
  );
}
