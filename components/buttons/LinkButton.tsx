import Link from "next/link";
import removeAccentsAndReplaceSpaces from "@/utils/NLP/convert-to-url";
interface LinkButtonProps {
  path: string;
}

export default function LinkButton({ path }: LinkButtonProps) {
  return (
    <Link
      href={"/" + removeAccentsAndReplaceSpaces(path)}
      className="py-2 px-3 flex rounded-md no-underline"
    >
      {path}
    </Link>
  );
}
