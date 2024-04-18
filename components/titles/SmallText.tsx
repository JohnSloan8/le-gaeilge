import { EnglishText } from "@/components";

interface SmallTextProps {
  text_ga: string;
  text_en: string;
}

export default function SmallText({ text_ga, text_en }: SmallTextProps) {
  return (
    <div>
      <div className="text-sm mb-1">{text_ga}</div>
      <EnglishText text_en={text_en} />
    </div>
  );
}
