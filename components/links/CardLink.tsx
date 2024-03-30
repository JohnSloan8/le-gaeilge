import Link from "next/link";

interface CardLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function CardLink({ href, children }: CardLinkProps) {
  return (
    <Link href={href}>
      <div className="hover:bg-gray-100 m-1 shadow-lg rounded-md">
        {children}
      </div>
    </Link>
  );
}
