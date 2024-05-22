import type { Dispatch, SetStateAction } from "react";

interface PopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ isOpen, children, setOpen }: PopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => {
          setOpen(false);
        }}
      ></div>
      <div className="relative bg-white p-2 w-full rounded shadow-lg mx-auto z-50">
        {children}
      </div>
    </div>
  );
};

export default Popup;
