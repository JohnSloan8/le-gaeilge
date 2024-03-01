interface WarningButtonProps {
  text_ga: string;
  text_en: string;
}

export default async function WarningButton({
  text_ga,
  text_en,
}: WarningButtonProps) {
  return (
    <button className="relative button bg-red-400 hover:bg-red-500 mb-5">
      <div className="text-white text-base md:text-lg">{text_ga}</div>{" "}
      <div className="absolute top-10 text-sm english-text">{text_en}</div>
    </button>
  );
}
