interface PaddingContainerProps {
  children: React.ReactNode;
}

export default async function PaddingContainer({
  children,
}: PaddingContainerProps) {
  return <div className="border border-gray-200 m-2 md:m-5">{children}</div>;
}
