interface WarningButtonProps {
  text_ga: string;
  text_en: string;
}

export default async function WarningButton({
  text_ga,
  text_en,
}: WarningButtonProps) {
  return (
    <button className="button bg-red-400 hover:bg-red-500 w-[300px]">
      <div className="inline text-white">{text_ga}</div>{" "}
      <div className="inline text-white">{text_en}</div>
    </button>
  );
}
