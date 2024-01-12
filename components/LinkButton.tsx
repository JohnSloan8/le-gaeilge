import Link from "next/link";
import removeAccentsAndReplaceSpaces from "@/utils/NLP/convert-to-url";
interface LinkButtonProps {
  path: string;
}

export default async function LinkButton({ path }: LinkButtonProps) {
  return (
    <Link
      href={"/" + removeAccentsAndReplaceSpaces(path)}
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      {path}
    </Link>
  );
}
