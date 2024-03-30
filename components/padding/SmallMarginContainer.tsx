interface SmallMarginContainerProps {
  children: React.ReactNode;
}

export default function SmallMarginContainer({
  children,
}: SmallMarginContainerProps) {
  return <div className="m-1 md:m-2">{children}</div>;
}
