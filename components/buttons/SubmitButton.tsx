"use client";

import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "@/components";

interface SubmitButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

export default function SubmitButton({
  disabled = false,
  children,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (pending as boolean) ? (
    <div className="w-20 h-10">
      <LoadingSpinner size="large" color="light" />
    </div>
  ) : (
    <button
      type="submit"
      disabled={pending || disabled}
      className={`h-10 ${disabled ? "opacity-50" : ""}`}
    >
      {children}
    </button>
  );
}
