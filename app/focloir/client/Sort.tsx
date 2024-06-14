import type { Dispatch, SetStateAction, ChangeEvent } from "react";

interface SortProps {
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
}

export default function Sort({ order, setOrder }: SortProps) {
  const handleOrderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOrder(value);
  };

  return (
    <div className="flex p-2 flex-col gap-4">
      <label>
        <input
          type="radio"
          value="newest"
          checked={order === "newest"}
          onChange={handleOrderChange}
          className="mr-2"
        />
        Newest First
      </label>
      <label>
        <input
          type="radio"
          value="oldest"
          checked={order === "oldest"}
          onChange={handleOrderChange}
          className="mr-2"
        />
        Oldest First
      </label>
    </div>
  );
}
