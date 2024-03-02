interface ContentSectionProps {
  children: React.ReactNode;
}

export default async function ContentSection({
  children,
}: ContentSectionProps) {
  return (
    <div className="border-t border-background-300 p-2 md:p-4">{children}</div>
  );
}
