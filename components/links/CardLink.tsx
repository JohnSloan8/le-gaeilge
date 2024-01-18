import Link from "next/link";

interface CardLinkProps {
  children: React.ReactNode;
  href: string;
  key?: string;
}

export default async function CardLink({
  href,
  children,
  key = "1",
}: CardLinkProps) {
  return (
    <Link className="hover:bg-gray-100 m-1 shadow-lg" key={key} href={href}>
      {" "}
      {children}
    </Link>
  );
}
