interface SmallPaddingContainerProps {
  children: React.ReactNode;
}

export default async function SmallPaddingContainer({
  children,
}: SmallPaddingContainerProps) {
  return <div className="border border-blue-400 p-1 md:p-3">{children}</div>;
}
