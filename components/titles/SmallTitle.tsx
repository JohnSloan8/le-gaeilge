import EnglishText from "./EnglishText";

interface SmallTitleProps {
  text_ga: string;
  text_en: string;
  centered?: boolean;
  inline?: boolean;
}

export default function SmallTitle({
  text_ga,
  text_en,
  centered = false,
  inline = false,
}: SmallTitleProps) {
  return (
    <div
      className={`${centered && "flex text-center"} ${inline && "flex flex-row"}`}
    >
      <div className="text-lg">{text_ga}</div>
      <EnglishText text_en={text_en} inline={inline} />
    </div>
  );
}
