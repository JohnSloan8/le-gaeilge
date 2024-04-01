interface MainTitleContainerProps {
  children: React.ReactNode;
  color?: string;
}

export default function MainTitleContainer({
  children,
  color = "bg-teal-100",
}: MainTitleContainerProps) {
  return (
    <div className={`${color} w-full pt-2 md:pt-6 pb-1 md:pb-3`}>
      {children}
    </div>
  );
}
