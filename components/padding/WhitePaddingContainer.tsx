interface WhitePaddingContainerProps {
  children: React.ReactNode;
}

export default function WhitePaddingContainer({
  children,
}: WhitePaddingContainerProps) {
  return <div className="p-1 md:p-3 bg-white rounded-md">{children}</div>;
}
