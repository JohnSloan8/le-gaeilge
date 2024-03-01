interface SmallNegativeMarginContainerProps {
  children: React.ReactNode;
}

export default async function SmallNegativeMarginContainer({
  children,
}: SmallNegativeMarginContainerProps) {
  return <div className="m-[-10px]">{children}</div>;
}
