"use client";

import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "@/components";
import { useEffect } from "react";

interface SubmitButtonProps {
  disabled?: boolean;
  onSubmitted?: () => void;
  children: React.ReactNode;
}

export default function SubmitButton({
  disabled = false,
  onSubmitted = () => null,
  children,
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  useEffect(() => {
    pending && onSubmitted();
  }, [pending]);

  return (pending as boolean) ? (
    <div className="w-20 h-10">
      <LoadingSpinner size="large" color="light" />
    </div>
  ) : (
    <button
      type="submit"
      disabled={pending || disabled}
      className={`h-10  min-w-24 rounded-lg px-2 ${disabled ? "opacity-50" : ""}`}
    >
      {children}
    </button>
  );
}
