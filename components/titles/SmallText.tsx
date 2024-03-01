interface SmallTextProps {
  text_ga?: string;
  text_en?: string;
  centered?: boolean;
}

export default async function SmallText({
  text_ga,
  text_en,
  centered = false,
}: SmallTextProps) {
  return (
    <div className={`${centered ? "text-center" : ""}`}>
      <div className="text-sm md:text-base">{text_ga}</div>
      {text_en !== null && (
        <div className="english-text mt-[-5px]">{text_en}</div>
      )}
    </div>
  );
}
