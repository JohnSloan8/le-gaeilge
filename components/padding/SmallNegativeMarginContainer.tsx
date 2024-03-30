interface SmallNegativeMarginContainerProps {
  children: React.ReactNode;
}

export default function SmallNegativeMarginContainer({
  children,
}: SmallNegativeMarginContainerProps) {
  return <div className="m-[-10px]">{children}</div>;
}
