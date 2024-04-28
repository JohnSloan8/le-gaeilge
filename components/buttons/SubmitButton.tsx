"use client";

import { useFormStatus } from "react-dom";
import { LoadingSpinner } from "@/components";

interface SubmitButtonProps {
  children: React.ReactNode;
}

export default function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (pending as boolean) ? (
    <div className="w-20 h-full">
      <LoadingSpinner size="large" color="light" />
    </div>
  ) : (
    <button type="submit" disabled={pending}>
      {children}
    </button>
  );
}
