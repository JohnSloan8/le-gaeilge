interface SmallTextProps {
  text_ga: string;
  text_en?: string;
  centered?: boolean;
}

export default async function SmallText({
  text_ga,
  text_en = undefined,
  centered = false,
}: SmallTextProps) {
  return (
    <div className={`${centered && "text-center"}`}>
      <div className="inline text-sm md:text-base">{text_ga}</div>
      {text_en !== null && (
        <div className="inline english-text">{` ${text_en}`}</div>
      )}
    </div>
  );
}
