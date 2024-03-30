interface SmallTopPaddingContainerProps {
  children: React.ReactNode;
}

export default function SmallTopPaddingContainer({
  children,
}: SmallTopPaddingContainerProps) {
  return <div className="pt-1 md:pt-3">{children}</div>;
}
