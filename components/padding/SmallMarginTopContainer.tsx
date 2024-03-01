interface SmallMarginContainerProps {
  children: React.ReactNode;
}

export default async function SmallMarginContainer({
  children,
}: SmallMarginContainerProps) {
  return <div className="mt-1 md:mt-2">{children}</div>;
}
