interface SmallTextProps {
  text_ga: string;
  text_en: string;
  centered?: boolean;
}

export default async function SmallText({
  text_ga,
  text_en,
  centered = false,
}: SmallTextProps) {
  return (
    <div className={`${centered && "flex text-center"}`}>
      <div className="inline text-sm md:text-base">{text_ga}</div>
      <div className="inline english-text">{` ${text_en}`}</div>
    </div>
  );
}
