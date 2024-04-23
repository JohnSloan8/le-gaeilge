interface RoundMobileButtonProps {
  children: React.ReactNode;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function RoundMobileButton({
  children,
  handleClick,
}: RoundMobileButtonProps) {
  return (
    <button
      className="bg-white flex rounded-[100%] p-1 w-10 h-10 shadow-xl"
      onClick={handleClick}
    >
      <div className="flex w-full h-full items-center justify-center">
        {children}
      </div>
    </button>
  );
}
