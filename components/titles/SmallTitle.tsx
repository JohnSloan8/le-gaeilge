import EnglishText from "../text/EnglishText";

interface SmallTitleProps {
  text_ga: string;
  text_en: string;
  centered?: boolean;
  inline?: boolean;
  dark?: boolean;
}

export default function SmallTitle({
  text_ga,
  text_en,
  centered = false,
  inline = false,
  dark = false,
}: SmallTitleProps) {
  return (
    <div
      className={`${centered && "flex text-center"} ${inline && "flex flex-row"}`}
    >
      <div className={`${dark ? "text-white" : "text-black"} text-lg`}>
        {text_ga}
      </div>
      <EnglishText text_en={text_en} inline={inline} dark={dark} />
    </div>
  );
}
