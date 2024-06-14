import { EnglishText } from "@/components";

interface TextProps {
  text_ga: string | null;
  text_en: string | null;
  centered?: boolean;
  dark?: boolean;
}

export default function Text({
  text_ga,
  text_en,
  centered = false,
  dark = false,
}: TextProps) {
  return (
    <div className={`flex flex-col  ${centered && "items-center"}`}>
      <div
        className={`${dark ? "text-white" : "text-gray-800"} text-base mb-1`}
      >
        {text_ga !== null ? text_ga : ""}
      </div>
      <EnglishText text_en={text_en} dark={dark} />
    </div>
  );
}
