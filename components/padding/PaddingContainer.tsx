interface PaddingContainerProps {
  children: React.ReactNode;
}

export default function PaddingContainer({ children }: PaddingContainerProps) {
  return <div className="m-2 md:m-5">{children}</div>;
}
