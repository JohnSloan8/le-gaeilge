interface PrimaryButtonProps {
  text_ga: string;
  text_en: string;
}

export default async function PrimaryButton({
  text_ga,
  text_en,
}: PrimaryButtonProps) {
  return (
    <button className="relative button bg-green-500 hover:bg-green-600 mb-5">
      <div className="text-white text-base md:text-lg">{text_ga}</div>{" "}
      <div className="absolute top-10 text-sm english-text">{text_en}</div>
    </button>
  );
}
