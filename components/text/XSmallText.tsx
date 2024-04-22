import { EnglishText } from "@/components";

interface XSmallTextProps {
  text_ga: string;
  text_en: string;
  dark?: boolean;
}

const XSmallText = ({ text_ga, text_en, dark = false }: XSmallTextProps) => {
  return (
    <div className="flex flex-col">
      <div className={`${dark ? "text-white" : "text-gray-800"} text-sm`}>
        {text_ga}
      </div>
      <EnglishText text_en={text_en} dark={dark} xsmall={true} />
    </div>
  );
};

export default XSmallText;
