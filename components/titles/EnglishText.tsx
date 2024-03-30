import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300"],
});

interface EnglishTextProps {
  text_en: string;
}

export default function EnglishText({ text_en }: EnglishTextProps) {
  return (
    <div
      className={`text-sm text-gray-300 mt-[-4px] ${robotoCondensed.className}`}
    >
      {text_en}
    </div>
  );
}
