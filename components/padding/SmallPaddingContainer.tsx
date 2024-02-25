interface SmallPaddingContainerProps {
  children: React.ReactNode;
}

export default async function SmallPaddingContainer({
  children,
}: SmallPaddingContainerProps) {
  return <div className="p-1 md:p-3">{children}</div>;
}
