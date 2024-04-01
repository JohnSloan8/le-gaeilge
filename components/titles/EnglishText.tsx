import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300"],
});

interface EnglishTextProps {
  text_en: string;
  inline?: boolean;
}

export default function EnglishText({
  text_en,
  inline = false,
}: EnglishTextProps) {
  return (
    <div
      className={`text-sm text-gray-300 ${!inline ? "mt-[-4px]" : "m-1"} ${robotoCondensed.className}`}
    >
      {text_en}
    </div>
  );
}
