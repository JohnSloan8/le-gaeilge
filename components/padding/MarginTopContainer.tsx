interface MarginTopContainerProps {
  children: React.ReactNode;
}

export default function MarginTopContainer({
  children,
}: MarginTopContainerProps) {
  return <div className="mt-2 md:mt-5">{children}</div>;
}
