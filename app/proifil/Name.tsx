"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";

interface NameProps {
  name: string | null;
}

export default function Name({ name }: NameProps) {
  const [updatedName, setUpdatedName] = useState(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedName(event.target.value);
  };

  return (
    <input
      onChange={handleChange}
      className="block w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name="name"
      type="text"
      value={updatedName === null ? "" : updatedName}
    />
  );
}
